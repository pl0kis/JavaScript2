const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "ChangeRoleForAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ChangeRoleForProdavec",
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
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idMagazina",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "idZapisi",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "addCommInKniga",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idMagazina",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "text",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "raiting",
				"type": "uint256"
			}
		],
		"name": "addKnigaZalob",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "NameMagazina",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "newMagazin",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "addMagazin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idMagazina",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "worker",
				"type": "address"
			}
		],
		"name": "addWorkers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkDownPokypatel",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "idMagazina",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "newPokypatel",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "statusResN",
						"type": "bool"
					}
				],
				"internalType": "struct magazins.downPokypatel[]",
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
				"internalType": "uint256",
				"name": "idMagazin",
				"type": "uint256"
			}
		],
		"name": "checkKnigaZalob",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "text",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "raiting",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "whoComm",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "text",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "whoLikeOrDis",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "likeOrDis",
										"type": "bool"
									}
								],
								"internalType": "struct magazins.likeAndDis[]",
								"name": "likeDis",
								"type": "tuple[]"
							}
						],
						"internalType": "struct magazins.CommBook[]",
						"name": "comment",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "whoLikeOrDis",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "likeOrDis",
								"type": "bool"
							}
						],
						"internalType": "struct magazins.likeAndDis[]",
						"name": "likeDis",
						"type": "tuple[]"
					}
				],
				"internalType": "struct magazins.bookZalobAndPredlojeniy[]",
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
				"internalType": "uint256",
				"name": "idMagazin",
				"type": "uint256"
			}
		],
		"name": "checkStatusMagazin",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "NameMagazina",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "addressMagazin",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "workers",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "text",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "raiting",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "whoComm",
										"type": "address"
									},
									{
										"internalType": "string",
										"name": "text",
										"type": "string"
									},
									{
										"components": [
											{
												"internalType": "address",
												"name": "whoLikeOrDis",
												"type": "address"
											},
											{
												"internalType": "bool",
												"name": "likeOrDis",
												"type": "bool"
											}
										],
										"internalType": "struct magazins.likeAndDis[]",
										"name": "likeDis",
										"type": "tuple[]"
									}
								],
								"internalType": "struct magazins.CommBook[]",
								"name": "comment",
								"type": "tuple[]"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "whoLikeOrDis",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "likeOrDis",
										"type": "bool"
									}
								],
								"internalType": "struct magazins.likeAndDis[]",
								"name": "likeDis",
								"type": "tuple[]"
							}
						],
						"internalType": "struct magazins.bookZalobAndPredlojeniy[]",
						"name": "knigaZalob",
						"type": "tuple[]"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "StatusWork",
						"type": "bool"
					}
				],
				"internalType": "struct magazins.magazine",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkStatusMagazins",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "NameMagazina",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "addressMagazin",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "workers",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "text",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "raiting",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "whoComm",
										"type": "address"
									},
									{
										"internalType": "string",
										"name": "text",
										"type": "string"
									},
									{
										"components": [
											{
												"internalType": "address",
												"name": "whoLikeOrDis",
												"type": "address"
											},
											{
												"internalType": "bool",
												"name": "likeOrDis",
												"type": "bool"
											}
										],
										"internalType": "struct magazins.likeAndDis[]",
										"name": "likeDis",
										"type": "tuple[]"
									}
								],
								"internalType": "struct magazins.CommBook[]",
								"name": "comment",
								"type": "tuple[]"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "whoLikeOrDis",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "likeOrDis",
										"type": "bool"
									}
								],
								"internalType": "struct magazins.likeAndDis[]",
								"name": "likeDis",
								"type": "tuple[]"
							}
						],
						"internalType": "struct magazins.bookZalobAndPredlojeniy[]",
						"name": "knigaZalob",
						"type": "tuple[]"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "StatusWork",
						"type": "bool"
					}
				],
				"internalType": "struct magazins.magazine[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkUpProdavec",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "idMagazina",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "newProdavec",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "statusResD",
						"type": "bool"
					}
				],
				"internalType": "struct magazins.upProdavec[]",
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
				"name": "checkUser",
				"type": "address"
			}
		],
		"name": "checkUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "activeRole",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "password",
						"type": "string"
					}
				],
				"internalType": "struct magazins.user",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idMagazin",
				"type": "uint256"
			}
		],
		"name": "closeMagazin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idZayavki",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "Otvet",
				"type": "bool"
			}
		],
		"name": "downProdavec",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "YourAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "passwordForEnter",
				"type": "string"
			}
		],
		"name": "enterInAccount",
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
				"name": "idMagazina",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "idZapisi",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "likeOrDis",
				"type": "bool"
			}
		],
		"name": "giveLikeOrDis",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idMagazina",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "idZapisi",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "idComm",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "likeOrDis",
				"type": "bool"
			}
		],
		"name": "giveLikeOrDisOcenka",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idZaprosa",
				"type": "uint256"
			}
		],
		"name": "otmenaZaprosForDown",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idZaprosa",
				"type": "uint256"
			}
		],
		"name": "otmenaZaprosForUp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "YourAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "password",
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
				"internalType": "uint256",
				"name": "idZayavki",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "Otvet",
				"type": "bool"
			}
		],
		"name": "upBuyer",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "userMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "activeRole",
				"type": "uint256"
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
				"name": "idMagazina",
				"type": "uint256"
			}
		],
		"name": "zaprosDownPokypatel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idMagazina",
				"type": "uint256"
			}
		],
		"name": "zaprosUpProdavec",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export default abi