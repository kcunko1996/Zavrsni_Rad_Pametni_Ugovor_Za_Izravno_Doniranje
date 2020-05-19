pragma solidity ^0.5.1;

contract RitehDonacija {
    //wei jedinica koja ce nam olaksati kalkulaciju prikupljenog iznosa
    uint public weiJedinica = 10 ** 18;

    //Varijabla koja inicijalizira prikupljeni novac
    uint public PrikupljeniNovac = 0;

    //Adresa kreatora pametnog ugovora, payablae znaci da vlasnik moze vrsiti transakije u pametnom ugovoru
    address payable public Vlasnik;

    //Naziv donacije
    string public Naziv;

    //Opisi insancirane donacije
    string public Opis;

    //Iznos koji je potreban porikupiti
    uint public IznosPrikupljanja;

    //Inicijaliziramo pocetno stanje ugovora
    Stanje public stanje = Stanje.UProcesu;

    //Varijabla za inicijalizaciju brojaDonacija
    uint public BrojDonacija;

    enum Stanje {
        Uspijesno,
        Zavrseno,
        UProcesu
    }

    //Provjera trenutacnog projekta doniranja
    modifier TrenutnoStanje(Stanje _stanje){
        require(stanje == _stanje);
        _;
    }

    modifier ProvjeraDonatora(address donator){
        require( Donatori[donator] > 0 );
        _;
    }

    //mapiramo donatore sa kolicinom donacije koju su donirali
    mapping(address => uint) public Donatori;

    //event koji ce se emitirai svaki put kada se okine donacija i iznos koji je doniran
    event Donacija(
        address Donatora,
        uint Iznos
    );

    //event koji ce se okinuti kada se isplata izvrsi
    event IsplataDonacija(
        address Vlasnik,
        uint Iznos
    );

    //event koji se okida kada se uspjesno izvede funckcija povrata novaca
    event UspjesniPovratNovaca(
        address ZatraziteljPovrataNovaca,
        uint Iznos
    );

    //Modifier koji provjerava da li odredene osobe imaju ovlasti nad izvodenjem funkcija odnos dali je ta osoba vlasnik ugovora
    modifier ProvjeraVlasnik() {
        require(msg.sender == Vlasnik);
        _;
    }

    //modifier koji nam pomaze pri prvojeri dali je donator vlasnik
    modifier DonatorNijeVlasnik() {
        require(Vlasnik != msg.sender);
        _;
    }

    //inicijaliziramo pocetne podatke u pametnom ugovoru za donaciju
    constructor(
        address payable _Vlasnik,
        string memory _Naziv,
        string memory _Opis,
        uint _IznosPrikupljenja
    ) public {
        Vlasnik = _Vlasnik;
        Naziv = _Naziv;
        Opis = _Opis;
        IznosPrikupljanja = _IznosPrikupljenja;
    }
    function RacunanjeBrojDonacija() public returns(uint){
        BrojDonacija++;
    }
    //funkcija koja izvrsava prikupljanje novaca
    function PrikupljanjeSredstva() external payable TrenutnoStanje(Stanje.UProcesu) {
        PrikupljeniNovac += msg.value;
        Donatori[msg.sender] += msg.value;
        emit Donacija(msg.sender, msg.value);
        RacunanjeBrojDonacija();
        ProvjeraUspjesnogPrikupljenogIznosa();
    }

    function ProvjeraUspjesnogPrikupljenogIznosa() public  returns(bool) {

        if(PrikupljeniNovac >= (IznosPrikupljanja * weiJedinica)){
            stanje = Stanje.Zavrseno;
            IsplataDonacijaVlasniku();
            return true;
        } else {
            stanje = Stanje.UProcesu;
            return false;
        }
    }
    //IsplataDonacija vlasniku ugovor
    function IsplataDonacijaVlasniku() internal TrenutnoStanje(Stanje.Zavrseno){
        uint prikupljeniIznos = PrikupljeniNovac;
        PrikupljeniNovac = 0;

        if(Vlasnik.send(prikupljeniIznos)){
            emit IsplataDonacija(Vlasnik, prikupljeniIznos);
        } else {
            PrikupljeniNovac = prikupljeniIznos;
        }
    }

    function PovratNovaca() public ProvjeraDonatora(msg.sender){
        uint IznosPovrata = Donatori[msg.sender];
        Donatori[msg.sender] = 0;

        if(msg.sender.send(IznosPovrata)){
            PrikupljeniNovac-=IznosPovrata;
            emit UspjesniPovratNovaca(msg.sender, IznosPovrata);
        }
        else{
            Donatori[msg.sender] = IznosPovrata;
        }

    }




}