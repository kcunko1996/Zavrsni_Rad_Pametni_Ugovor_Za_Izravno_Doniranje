import web3 from './web3';

const address = '0x0008cE488ecb05481f7AA654ceb1D7Ce6811232c';

const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "AdresaUgovora",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "AdresaVlasnika",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "Naziv",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "Opis",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "IznosPrikupljenja",
                "type": "uint256"
            }
        ],
        "name": "EventProjektPokrenut",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "Naziv",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "Opis",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "IznosPrikupljenja",
                "type": "uint256"
            }
        ],
        "name": "PokreniProjekt",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "VratiSveProjekte",
        "outputs": [
            {
                "internalType": "contract RitehDonacija[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

const instance = new web3.eth.Contract(abi, address);

export default instance;