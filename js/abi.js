var ABI=[{constant:!0,inputs:[{name:"",type:"address"}],name:"performance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ticketPrice",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"round",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_price",type:"uint256"}],name:"setTicketPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"drawLottery",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_total",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"memberShip",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"buyAgent",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"destroy",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"beginTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"vipAgent",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"drawlock",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_n1",type:"uint8"},{name:"_n2",type:"uint8"},{name:"_n3",type:"uint8"},{name:"_type",type:"uint8"},{name:"_mul",type:"uint8"},{name:"_agent",type:"address"}],name:"bet",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"MAX_BET_MULTIPLE",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"drawing",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"opening",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"beginBlockNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_addr",type:"address"}],name:"setCroupier",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_max",type:"uint256"}],name:"setMaxMutiple",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_shareholder",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"info",type:"bytes32"}],name:"Log",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_round",type:"uint256"},{indexed:!1,name:"_n1",type:"uint8"},{indexed:!1,name:"_n2",type:"uint8"},{indexed:!1,name:"_n3",type:"uint8"},{indexed:!1,name:"_seed",type:"uint256"}],name:"PublishNumber",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_round",type:"uint256"},{indexed:!1,name:"_amount",type:"uint256"},{indexed:!1,name:"_luckyusers",type:"uint256"},{indexed:!1,name:"_n1",type:"uint8"},{indexed:!1,name:"_n2",type:"uint8"},{indexed:!1,name:"_n3",type:"uint8"}],name:"PublishResult",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_addr",type:"address"},{indexed:!0,name:"_ref",type:"address"},{indexed:!0,name:"round",type:"uint256"},{indexed:!1,name:"_amount",type:"uint256"},{indexed:!1,name:"_n1",type:"uint8"},{indexed:!1,name:"_n2",type:"uint8"},{indexed:!1,name:"_n3",type:"uint8"},{indexed:!1,name:"_type",type:"uint8"},{indexed:!1,name:"_mul",type:"uint8"}],name:"NewBet",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_round",type:"uint256"}],name:"NewRound",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_addr",type:"address"}],name:"JoinVipAgent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_addr",type:"address"},{indexed:!1,name:"_n1",type:"uint8"},{indexed:!1,name:"_n2",type:"uint8"},{indexed:!1,name:"_n3",type:"uint8"},{indexed:!1,name:"_type",type:"uint8"},{indexed:!1,name:"_mul",type:"uint8"},{indexed:!0,name:"_round",type:"uint256"},{indexed:!1,name:"_amount",type:"uint256"}],name:"LuckyGuy",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_addr",type:"address"},{indexed:!1,name:"_amount",type:"uint256"}],name:"SendBonus",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"round",type:"uint256"}],name:"StartDrawing",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}];