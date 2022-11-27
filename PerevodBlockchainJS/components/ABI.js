const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idTranfers",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "yesOrNo",
				"type": "bool"
			}
		],
		"name": "acceptAdmin_perevod",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idTranfers",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "codWord",
				"type": "uint256"
			}
		],
		"name": "accept_perevod",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkTranfers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "pop",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "idTranfers",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "sum",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "idSamp",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "codeWord",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "statusPerevod",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "status",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "BezopasnyuPerevod",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "acceptAdmin",
						"type": "bool"
					}
				],
				"internalType": "struct perevod.tranfers[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nameCategory",
				"type": "string"
			}
		],
		"name": "createCategory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nameSablon",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "idCategory",
				"type": "uint256"
			}
		],
		"name": "createSablon",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "createVubor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addressYour",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "passForEnter",
				"type": "string"
			}
		],
		"name": "enterAcc",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idVoices",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "golosYesOrNo",
				"type": "bool"
			}
		],
		"name": "golosovanie",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idTranfers",
				"type": "uint256"
			}
		],
		"name": "otmena",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idCategory",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "idSample",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "codeWord",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "BezopasnyuPerevod",
				"type": "bool"
			}
		],
		"name": "perevod_deneg",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addressYour",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "passForRegistration",
				"type": "string"
			}
		],
		"name": "registration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "returnAddres",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bool",
						"name": "admin",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "password",
						"type": "string"
					}
				],
				"internalType": "struct perevod.Users",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnCategory",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "idCategory",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nameCategory",
						"type": "string"
					}
				],
				"internalType": "struct perevod.Category[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnSample",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "idSample",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nameSample",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "CountMoney",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "category",
						"type": "uint256"
					}
				],
				"internalType": "struct perevod.Sample[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnVoice",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "candidate",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "votes",
						"type": "address[]"
					},
					{
						"internalType": "bool",
						"name": "status",
						"type": "bool"
					}
				],
				"internalType": "struct perevod.voice[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "usersMap",
		"outputs": [
			{
				"internalType": "bool",
				"name": "admin",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voices",
		"outputs": [
			{
				"internalType": "address",
				"name": "candidate",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default abi;