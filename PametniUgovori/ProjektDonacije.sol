pragma solidity ^0.5.1;
import "./RitehDonacija.sol";

contract ProjektDonacije {
    //Polje adresa kreiranih ugovora
    address[] public AdreseProjekta;
    uint private BrojUgovora;

    function PokreniProjekt(
        string calldata Naziv,
        string calldata Opis,
        uint IznosPrikupljenja
    ) external {
        RitehDonacija Projekt = new RitehDonacija(msg.sender, Naziv, Opis, IznosPrikupljenja);
        AdreseProjekta.push(address(Projekt));
        BrojUgovora++;
        emit EventProjektPokrenut(
            address(Projekt),
            msg.sender,
            Naziv,
            Opis,
            IznosPrikupljenja
        );
    }
    //Event koji ce nam reci sve potrebene stvari oko Projekta
    event EventProjektPokrenut(
        address AdresaUgovora,
        address AdresaVlasnika,
        string Naziv,
        string Opis,
        uint IznosPrikupljenja
    );

    //Vraca nam broj kreiranih ugovora
    function VratiBrojUgovora() public view returns(uint){
        return BrojUgovora;
    }
}