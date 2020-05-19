/* eslint-disable */
import web3 from './web3';

const abi = [
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_Vlasnik",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_Naziv",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_Opis",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_IznosPrikupljenja",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "Donatora",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "Iznos",
                "type": "uint256"
            }
        ],
        "name": "Donacija",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "Vlasnik",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "Iznos",
                "type": "uint256"
            }
        ],
        "name": "IsplataDonacija",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "PovratNovaca",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "PrikupljanjeSredstva",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "ProvjeraUspjesnogPrikupljenogIznosa",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "RacunanjeBrojDonacija",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "ZatraziteljPovrataNovaca",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "Iznos",
                "type": "uint256"
            }
        ],
        "name": "UspjesniPovratNovaca",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "BrojDonacija",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "Donatori",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "IznosPrikupljanja",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "Naziv",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "Opis",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "OpisProjekta",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "vlasnik",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "naziv",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "opis",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "prikupljeniNovac",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "iznosPrikupljanja",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PrikupljeniNovac",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "stanje",
        "outputs": [
            {
                "internalType": "enum RitehDonacija.Stanje",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "Vlasnik",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "weiJedinica",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
export default (address) => {
    const instance = new web3.eth.Contract(abi, address);
    return instance;
};