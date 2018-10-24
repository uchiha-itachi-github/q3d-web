var userAccount,contract,interfaces,ABI=[{constant:!0,inputs:[{name:"",type:"address"}],name:"performance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ticketPrice",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"round",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_price",type:"uint256"}],name:"setTicketPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"drawLottery",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_total",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"memberShip",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"buyAgent",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"destroy",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"beginTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"vipAgent",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"drawlock",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_n1",type:"uint8"},{name:"_n2",type:"uint8"},{name:"_n3",type:"uint8"},{name:"_type",type:"uint8"},{name:"_mul",type:"uint8"},{name:"_agent",type:"address"}],name:"bet",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"MAX_BET_MULTIPLE",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"drawing",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"opening",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"beginBlockNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_addr",type:"address"}],name:"setCroupier",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_max",type:"uint256"}],name:"setMaxMutiple",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_shareholder",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"info",type:"bytes32"}],name:"Log",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_round",type:"uint256"},{indexed:!1,name:"_n1",type:"uint8"},{indexed:!1,name:"_n2",type:"uint8"},{indexed:!1,name:"_n3",type:"uint8"},{indexed:!1,name:"_seed",type:"uint256"}],name:"PublishNumber",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_round",type:"uint256"},{indexed:!1,name:"_amount",type:"uint256"},{indexed:!1,name:"_luckyusers",type:"uint256"},{indexed:!1,name:"_n1",type:"uint8"},{indexed:!1,name:"_n2",type:"uint8"},{indexed:!1,name:"_n3",type:"uint8"}],name:"PublishResult",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_addr",type:"address"},{indexed:!0,name:"_ref",type:"address"},{indexed:!0,name:"round",type:"uint256"},{indexed:!1,name:"_amount",type:"uint256"},{indexed:!1,name:"_n1",type:"uint8"},{indexed:!1,name:"_n2",type:"uint8"},{indexed:!1,name:"_n3",type:"uint8"},{indexed:!1,name:"_type",type:"uint8"},{indexed:!1,name:"_mul",type:"uint8"}],name:"NewBet",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_round",type:"uint256"}],name:"NewRound",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_addr",type:"address"}],name:"JoinVipAgent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_addr",type:"address"},{indexed:!1,name:"_n1",type:"uint8"},{indexed:!1,name:"_n2",type:"uint8"},{indexed:!1,name:"_n3",type:"uint8"},{indexed:!1,name:"_type",type:"uint8"},{indexed:!1,name:"_mul",type:"uint8"},{indexed:!0,name:"_round",type:"uint256"},{indexed:!1,name:"_amount",type:"uint256"}],name:"LuckyGuy",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_addr",type:"address"},{indexed:!1,name:"_amount",type:"uint256"}],name:"SendBonus",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"round",type:"uint256"}],name:"StartDrawing",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}],SLTABI=[{constant:!0,inputs:[],name:"totalShare",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_flag",type:"bool"}],name:"setIcoStatus",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ico_amount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"version",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ico_price",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ico",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"initShares",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_price",type:"uint256"}],name:"setIcoPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"sendBouns",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"buy",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"ico_percent",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_addr",type:"address"}],name:"addAccount",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"initialSupply",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"_from",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"ReciveEth",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_amount",type:"uint256"}],name:"SendBouns",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_addr",type:"address"},{indexed:!1,name:"_amount",type:"uint256"}],name:"MyProfitRecord",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_from",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"ReciveFound",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_to",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"TransferFound",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_to",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"TransferShareFail",type:"event"},{anonymous:!1,inputs:[],name:"Pause",type:"event"},{anonymous:!1,inputs:[],name:"Unpause",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],vueApp=new Vue({el:"#app",data:{isDialogShow:!1,dialogTitle:"Alert",dialogMsg:"",betResult:[],betArr:[],LuckyGuyArr:[],LuckyGuyAniamtion:!1,PublishResult:[],PublishNumber:null,betMul:1,maxBetMul:1,selectBetNum:0,selectBonus:null,isVip:!1,LottoTypeName:{en:{0:"Summary",1:"SINGLE 3 IDENTICAL",2:"3 CONSECUTIVE",3:"ALL 3 IDENTICAL",4:"ALL 2 IDENTICAL",5:"SINGLE 2 SINGLE",6:"DIFF"},cn:{0:"和值",1:"三同号单选",2:"三连号通选",3:"三同号通选",4:"二同号复选",5:"二同号单选",6:"不同号"},zh_can:{0:"和值",1:"三同號單選",2:"三連號通選",3:"三同號通選",4:"二同號複選",5:"二同號單選",6:"不同號"}},myTickets:[],isMyTicketsShow:!1,myRefAgentLink:"",sltNum:10,sltPerPrice:.1,language:"en"},computed:{selectOnceNum:function(){return 0<this.selectBetNum?.02*this.betMul:0},selectGain:function(){return this.selectBonusResult?this.selectBonusResult-this.selectOnceNum:null},selectBonusResult:function(){return this.selectBonus?this.selectBonus*this.betMul:null},betResultReverse:function(){var t=this.betResult.length,e=[];return t&&(e=this.betResult.reverse()),90<t?e.slice(0,89):e},sltPrice:function(){return this.sltPerPrice*this.sltNum}},watch:{betArr:function(t){6===t.length&&bcAniamtion('[data-info="betArr"]')},LuckyGuyArr:function(t){6<=t.length&&!this.LuckyGuyAniamtion&&(this.LuckyGuyAniamtion=!0,bcAniamtion('[data-info="LuckyGuyArr"]'))},PublishResult:function(t){2===t.length&&bcAniamtion('[data-info="PublishResult"]')}},filters:{toFix:function(t,e){if(t)return t.toFixed(e)},toParseInt:function(t,e){if(void 0===e&&(e=10),t)return parseInt(t,e)},toParseFloat:function(t){if(t)return parseFloat(t)},toAmount:function(t){if(t)return parseFloat(t/1e18)}},mounted:function(){this.language=language},methods:{dialogDisplay:function(t){this.isDialogShow=!!t},myTicketsClick:function(){var e=this;Account.get_my_tickets(function(t){t.length&&(e.myTickets=t.reverse()),console.log(t)}),this.isMyTicketsShow=!0,$(".mask").removeClass("hide")},dialogClose:function(t){this[t]=!1,$(".mask").addClass("hide")},numberInform:function(t,e,n){return t==e&&e==n?(tips={en:"ALL 3 IDENTICAL",cn:"三同号",zh_can:"三同號"})[language]:t==e||e==n?(tips={en:"ALL 2 IDENTICAL",cn:"二同号",zh_can:"二同號"})[language]:t+1==e&&e+1==n?(tips={en:"3 CONSECUTIVE",cn:"三连号",zh_can:"三連號"})[language]:t!=e&&e!=n?(tips={en:"3 DIFF",cn:"三不同",zh_can:"三不同"})[language]:""},numberType:function(t,e,n){return t==e&&e==n?4:t==e||e==n?2:t+1==e&&e+1==n?3:t!=e&&e!=n?1:0},addMul:function(){this.betMul>=this.maxBetMul||this.betMul++},subtractMul:function(){this.betMul<=1||this.betMul--},checkMul:function(){isNaN(this.betMul)?this.betMul=1:(this.betMul>this.maxBetMul&&(this.betMul=this.maxBetMul),this.betMul<1&&(this.betMul=1))},checkNum:function(t){isNaN(this[t])?this[t]=1:this[t]<1&&(this[t]=1)}}});function popDialogReset(){vueApp.isDialogShow=!1,vueApp.dialogMsg=""}function popDialog(t,e){popDialogReset(),vueApp.dialogMsg=t,void 0!==e?vueApp.dialogTitle=e:vueApp.isDialogShow=!0}function bcAniamtion(t,n){var a=$(t);setInterval(function(){var t=a.find("li:first"),e=t.height();t.animate({marginTop:-e+"px"},600,function(){!0===n&&1<a.children().length?t.remove():t.css("marginTop",0).appendTo(a)})},2e3)}var tips,addr="0xa623288d2e1fe936d3b8130a29f8fe67d5d6a4c1",agentPrice=50,refAgent=window.location.search.substring(3),o1="0x2878D33523A8025b66bdf606c8670Fdf3F4C8CDD",genesisBlockNumber=0,currentRound=0,LottoTypeName={en:{0:"Summary",1:"SINGLE 3 IDENTICAL",2:"3 CONSECUTIVE",3:"ALL 3 IDENTICAL",4:"ALL 2 IDENTICAL",5:"SINGLE 2 SINGLE",6:"DIFF"},cn:{0:"和值",1:"三同号单选",2:"三连号通选",3:"三同号通选",4:"二同号复选",5:"二同号单选",6:"不同号"},zh_can:{0:"和值",1:"三同號單選",2:"三連號通選",3:"三同號通選",4:"二同號複選",5:"二同號單選",6:"不同號"}};!refAgent||/^\s*$/.test(refAgent)?refAgent=o1:refAgent.startsWith("0x")?42!=refAgent.length&&(popDialog((tips={en:"Illegal Referer Agent Address!!",cn:"非法推荐人代理地址！！",zh_can:"非法推薦人代理地址！ ！ "})[language],"Warning"),refAgent=o1):refAgent=40!=refAgent.length?(popDialog((tips={en:"Illegal Referer Agent Address!!",cn:"非法推荐人代理地址！！",zh_can:"非法推薦人代理地址！ ！ "})[language],"Warning"),o1):"0x"+refAgent,window.addEventListener("load",function(){"undefined"!=typeof web3?(window.web3=new Web3(web3.currentProvider),App.startApp(),SLT&&"function"==typeof SLT.init&&SLT.init()):(popDialog("No web3? You should consider trying MetaMask!","Warning"),$("#eth_network_name").html("MetaMask is required. "),$("#eth_account_addr").html("Click To Install MetaMask"),$("#eth_account_addr").attr("href","https://metamask.io/"))});var App={startApp:function(){(userAccount=web3.eth.accounts[0])?(contract=web3.eth.contract(ABI),web3.version.getNetwork(function(t,e){switch(e){case"1":console.log("This is mainnet"),$("#eth_network_name").html("MainNET");break;case"2":console.log("This is the deprecated Morden test network."),$("#eth_network_name").html("Morden");break;case"3":console.log("This is the ropsten test network."),$("#eth_network_name").html("Ropsten");break;case"4":console.log("This is the Rinkeby test network."),$("#eth_network_name").html("Rinkeby");break;case"42":console.log("This is the Kovan test network."),$("#eth_network_name").html("Kovan");break;default:$("#eth_network_name").html("Unknown"),console.log("This is an unknown network.")}interfaces=contract.at(addr),EventWatchers._watch_vip_agent(),EventWatchers._watch_new_bet(),EventWatchers._watch_new_round(),EventWatchers._watch_publish_number(),EventWatchers._watch_publish_result(),EventWatchers._watch_lucky_guy(),start_timeloop(),roundManage(),totalBalanceManage(),$("#eth_account_addr").html(userAccount),vueApp.myRefAgentLink=window.location.origin+"/?r="+userAccount;var n=setInterval(function(){if(!userAccount)return popDialog("please login your ethereum account first!","Warning"),void clearInterval(n);web3.eth.accounts[0]!==userAccount&&(userAccount=web3.eth.accounts[0],$("#eth_account_addr").html(userAccount),$("#my_ref_agent_link").val(window.location.origin+"/?r="+userAccount))},1e3);Account.is_vip_agent(function(t){vueApp.isVip=50==t}),LottoTable.get_max_bet_multiple(function(t){vueApp.maxBetMul=t.c[0]}),LottoTable.get_lucky_tickets(function(t){t.length&&(vueApp.LuckyGuyArr=t.reverse())})}),new ClipboardJS('[data-click="copy"]').on("success",function(t){tips={en:"Copied",cn:"已复制",zh_can:"已復制"},alert(tips[language]),t.clearSelection()}),$.jtip(".jtip")):popDialog("please login your ethereum account first!","Warning")}};function totalBalanceManage(){web3.eth.getBalance(addr,function(t,e){console.log(e),$("#pool_total_balance").html(e/1e18+"")})}function roundManage(){LottoTable.get_current_round(function(t){currentRound=t,$("#current_round").html(t+""),1<t?($("#last_round").html(t-1+""),LottoTable.get_lucky_numbers(t-1,function(t){$("#last_lucky_num").html(t.args._n1+" "+t.args._n2+" "+t.args._n3);var e=parseInt(t.args._n1)+parseInt(t.args._n2)+parseInt(t.args._n3);$(".kjInfoBox .c_ba2636").html(e);var n='<em class="kuai3Ball num'+t.args._n1+'">'+t.args._n1+'</em><em class="kuai3Ball num'+t.args._n2+'">'+t.args._n2+'</em><em class="kuai3Ball num'+t.args._n3+'">'+t.args._n3+"</em>";$(".fixBallPos").html(n),e<=10?(tips={en:"S",cn:"小",zh_can:"小"},$(".kjInfoBox  .numType:nth-child(1)").html(tips[language]),$(".kjInfoBox  .numType:nth-child(1)").removeClass("nt_big"),$(".kjInfoBox  .numType:nth-child(1)").addClass("nt_small")):(tips={en:"L",cn:"大",zh_can:"大"},$(".kjInfoBox  .numType:nth-child(1)").html(tips[language]),$(".kjInfoBox  .numType:nth-child(1)").removeClass("nt_small"),$(".kjInfoBox  .numType:nth-child(1)").addClass("nt_big")),tips=e%2==0?{en:"E",cn:"双",zh_can:"雙"}:{en:"O",cn:"单",zh_can:"單"},$(".kjInfoBox  .numType:nth-child(2)").html(tips[language])}),LottoTable.get_bet_result(t-1,function(t){vueApp.PublishResult.push(t[0]),console.log(t)}),LottoTable.get_bet_result(null,function(t){vueApp.betResult=t})):($("#last_round").html("-"),popDialog((tips={en:"THIS SITE IS NOT READY YET",cn:"本网站尚未准备就绪",zh_can:"本網站尚未準備就緒"})[language],"Warning"))})}function number_inform(t,e,n){return t==e&&e==n?(tips={en:"ALL 3 IDENTICAL",cn:"三同号",zh_can:"三同號"})[language]:t==e||e==n?(tips={en:"ALL 2 IDENTICAL",cn:"二同号",zh_can:"二同號"})[language]:t+1==e&&e+1==n?(tips={en:"3 CONSECUTIVE",cn:"三连号",zh_can:"三連號"})[language]:t!=e&&e!=n?(tips={en:"3 DIFF",cn:"三不同",zh_can:"三不同"})[language]:""}function start_timeloop(){setInterval(function(){LottoTable.is_opening(function(t){t?LottoTable.is_drawing(function(t){t?(tips={en:"Drawing",cn:"开奖中",zh_can:"開獎中"},$(".countDownBox span").html(tips[language])):LottoTable.get_begin_time(function(t){var e=t,n=(new Date).getTime()/1e3,a=Math.floor(1200-(n-e));if(0<a){var s=Math.floor(a/60),o=Math.floor(a-60*s),i=s<0?"00":s<10?"0"+s:s,u=o<0?"00":o<10?"0"+o:o;$(".countDownBox span").html(i+":"+u)}else tips={en:"Locking",cn:"锁定期",zh_can:"鎖定期"},$(".countDownBox span").html(tips[language])})}):(tips={en:"Not Open Yet",cn:"未开放",zh_can:"未開放"},$(".countDownBox span").html(tips[language]))})},1e3)}var EventWatchers={_watch_vip_agent:function(){interfaces.JoinVipAgent().watch(function(t,e){t?(console.log(t),popDialog(JSON.stringify(t))):(popDialog((tips={en:"Congratulation: Join agent program successed. ",cn:"祝贺：加入投资人计划成功",zh_can:"祝賀：加入投資人計劃成功"})[language]),console.log(e))})},_watch_new_bet:function(){interfaces.NewBet().watch(function(t,e){if(t)console.log(t),popDialog(JSON.stringify(t));else{var n=e.args;n._addr===userAccount&&popDialog((tips={en:'The <span class="c_ba2636">'+n.round+'</span> period was successfully purchased.\n\t\t\t\t\t\tYou chose <span class="c_ba2636">'+LottoTypeName[language][n._type]+'</span> :\n\t\t\t\t\t\t<span class="c_ba2636">'+(0<n._n1?n._n1:"")+" "+(0<n._n2?n._n2:"")+" "+(0<n._n3?n._n3:"")+'</span>,\n\t\t\t\t\t\t<span class="c_ba2636">'+n._mul+"mul</span>\n\t\t\t\t\t\t",cn:'第 <span class="c_ba2636">'+n.round+'</span> 期购买成功，\n\t\t\t\t\t\t你选择的为 <span class="c_ba2636">'+LottoTypeName[language][n._type]+'</span> :\n\t\t\t\t\t\t<span class="c_ba2636">'+(0<n._n1?n._n1:"")+" "+(0<n._n2?n._n2:"")+" "+(0<n._n3?n._n3:"")+'</span>,\n\t\t\t\t\t\t<span class="c_ba2636">'+n._mul+"倍</span>\n\t\t\t\t\t\t",zh_can:'第 <span class="c_ba2636">'+n.round+'</span> 期購買成功，\n\t\t\t\t\t\t你選擇的為 <span class="c_ba2636">'+LottoTypeName[language][n._type]+'</span> :\n\t\t\t\t\t\t<span class="c_ba2636">'+(0<n._n1?n._n1:"")+" "+(0<n._n2?n._n2:"")+" "+(0<n._n3?n._n3:"")+'</span>,\n\t\t\t\t\t\t<span class="c_ba2636">'+n._mul+"倍</span>"})[language]),totalBalanceManage(),vueApp.betArr.push(e),console.log(e)}})},_watch_new_round:function(){interfaces.NewRound().watch(function(t,e){if(t)console.log(t),popDialog(JSON.stringify(t));else{console.log(e);var n=e.args;popDialog((tips={en:'Hello，Round <span class="c_ba2636"> '+(n._round-1)+'</span> Has been closed ，the Current round is <span class="c_ba2636"> '+n._round+" </span> ，Please confirm the Round you selected when purchasing.",cn:'您好，第<span class="c_ba2636"> '+(n._round-1)+'</span> 期已截止，当前期是第<span class="c_ba2636"> '+n._round+" </span>期，购买时请确认您选择的期号。",zh_can:'您好，第<span class="c_ba2636"> '+(n._round-1)+'</span> 期已截止，當前期是第<span class="c_ba2636"> '+n._round+" </span >期，購買時請確認您選擇的期號。 "})[language]),roundManage()}})},_watch_publish_number:function(){interfaces.PublishNumber().watch(function(t,e){t?(console.log(t),popDialog(JSON.stringify(t))):console.log(e)})},_watch_publish_result:function(){interfaces.PublishResult().watch(function(t,e){t?(console.log(t),popDialog(JSON.stringify(t))):console.log(e)})},_watch_lucky_guy:function(){interfaces.LuckyGuy().watch(function(t,e){if(t)console.log(t),popDialog(JSON.stringify(t));else{console.log(e);var n=e.args;n._addr===userAccount&&popDialog((tips={en:'Congratulations, the <span class="c_ba2636">'+n._round+'</span> period bet <span class="c_ba2636">'+LottoTypeName[language][n._type]+'</span> :\n\t\t\t\t\t\t<span class="c_ba2636">'+(0<n._n1?n._n1:"")+" "+(0<n._n2?n._n2:"")+" "+(0<n._n3?n._n3:"")+'</span>,\n\t\t\t\t\t\t<span class="c_ba2636">'+n._mul+" times, get "+(n._amount/1e18).toFixed(2)+" ETH",cn:'恭喜您，第 <span class="c_ba2636">'+n._round+'</span> 期下注<span class="c_ba2636">'+LottoTypeName[language][n._type]+'</span> :\n\t\t\t\t\t\t<span class="c_ba2636">'+(0<n._n1?n._n1:"")+" "+(0<n._n2?n._n2:"")+" "+(0<n._n3?n._n3:"")+'</span>,\n\t\t\t\t\t\t<span class="c_ba2636">'+n._mul+"倍，获得"+(n._amount/1e18).toFixed(2)+" ETH",zh_can:'恭喜您，第<span class="c_ba2636">'+n._round+'</span> 期下注<span class="c_ba2636">'+LottoTypeName[language][n._type]+'</ span> :\n\t\t\t\t\t<span class="c_ba2636">'+(0<n._n1?n._n1:"")+" "+(0<n._n2?n._n2:"")+" "+(0<n._n3?n._n3:"")+'</span>,\n\t\t\t\t\t<span class="c_ba2636">'+n._mul+"倍，獲得"+(n._amount/1e18).toFixed(2)+" ETH"})[language],"Congratulations"),vueApp.LuckyGuyArr.push(e)}})}},Account={is_vip_agent:function(n){interfaces.vipAgent.call(userAccount,function(t,e){"function"==typeof n&&n(e)})},buy_agent:function(n){this.is_vip_agent(function(t){if(50==t)return vueApp.isVip=!0,void popDialog((tips={en:"You already have VIP agent qualification !",cn:"您已经拥有高级代理资格！",zh_can:"您已經擁有高級代理資格！ "})[language]);var e={to:addr,value:new BigNumber(web3.toWei(agentPrice))};interfaces.buyAgent.sendTransaction(e,function(t,e){console.log(t+":"+e),"function"==typeof n&&n(t,e)})})},get_my_performance:function(n){interfaces.performance.call(userAccount,function(t,e){"function"==typeof n&&n(e)})},get_my_members_bets:function(n){interfaces.NewBet({_ref:userAccount},{fromBlock:0,toBlock:"latest"}).get(function(t,e){t?console.log(t):n(e)})},get_my_tickets:function(n){interfaces.NewBet({_addr:userAccount},{fromBlock:0,toBlock:"latest"}).get(function(t,e){t?console.log(t):n(e)})},get_all_tickets:function(t,n){interfaces.NewBet({_round:t},{fromBlock:0,toBlock:"latest"}).get(function(t,e){t?popDialog(JSON.stringify(t)):n(e)})}},LottoTable={get_lucky_tickets:function(n){interfaces.LuckyGuy({},{fromBlock:0,toBlock:"latest"}).get(function(t,e){t?console.log(t):n(e)})},get_lucky_numbers:function(t,n){interfaces.PublishNumber({_round:t},{fromBlock:0,toBlock:"latest"}).get(function(t,e){t?console.log(t):e&&0<e.length&&n(e[0])})},get_begin_time:function(n){interfaces.beginTime.call(function(t,e){"function"==typeof n&&n(e)})},get_ticket_price:function(n){interfaces.ticketPrice.call(function(t,e){"function"==typeof n&&(t?console.log(t):n(e))})},is_opening:function(n){interfaces.opening.call(function(t,e){"function"==typeof n&&n(e)})},is_drawing:function(n){interfaces.drawlock.call(function(t,e){"function"==typeof n&&n(e)})},get_current_round:function(n){interfaces.round.call(function(t,e){"function"==typeof n&&n(e)})},get_begin_blocknumber:function(n){interfaces.beginBlockNumber.call(function(t,e){"function"==typeof n&&n(e)})},get_bet_result:function(t,n){var e=t?{_round:t}:{};interfaces.PublishResult(e,{fromBlock:0,toBlock:"latest"}).get(function(t,e){t?popDialog(JSON.stringify(t)):n(e)})},bet:function(n,a,s,o,i,t){LottoTable.get_ticket_price(function(t){var e={to:addr,value:new BigNumber(t*i),gas:25e4};interfaces.bet.sendTransaction(a,s,o,n,i,refAgent,e,function(t,e){t&&console.log(t)})})},get_max_bet_multiple:function(n){interfaces.MAX_BET_MULTIPLE.call(function(t,e){t?popDialog(JSON.stringify(t)):n(e)})},bet_batch:function(t){}};function show_agent_box(){$(".mask").removeClass("hide"),$(".agent_dialog").removeClass("hide")}function show_invest_box(){$(".mask").removeClass("hide"),$(".invest_dialog").removeClass("hide")}$(function(){$('[data-click="dialogClose"]').click(function(){$(".dialog").addClass("hide"),$(".mask").addClass("hide")}),$('[data-click="scroll"]').click(function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top;$("html,body").animate({scrollTop:n},500)}),$("#todayKaiJiang").click(function(){$(this).toggleClass("bottomBoxShow")}),$("#lotteryListEntry").hover(function(){$("#lotteryList").show(),$(".lotteryListWrap").slideDown(function(){$("#lotteryListEntry").addClass("open")})},function(){$(".lotteryListWrap").slideUp(function(){$("#lotteryList").hide(),$("#lotteryListEntry").removeClass("open")})})});var SLT_CONTRACT,SLT_INTERFACES,SLT_ADDR="0x2878D33523A8025b66bdf606c8670Fdf3F4C8CDD",SLT_ENABLED=!1,SLT_PRICE=.1,SLT={init:function(){SLT_CONTRACT=web3.eth.contract(SLTABI),SLT_INTERFACES=SLT_CONTRACT.at(SLT_ADDR),web3.version.getNetwork(function(t,e){"1"==e&&(SLT_ENABLED=ture),SLT_ENABLED=!0,setInterval(function(){SLT_INTERFACES.ico_amount.call(function(t,e){t||($("#slt_sold").html(e+""),$("#slt_left").html(2e5-e+""))})},1e3)})}};$(function(){$("#buy_slt").click(function(){var t=vueApp.sltNum;if(/^\d+$/.test(t)&&0<t){var e={to:SLT_ADDR,value:web3.toWei(vueApp.sltPerPrice*t)};SLT_INTERFACES.buy.sendTransaction(e,function(t,e){t?alert(t):alert("Transaction send Completed")})}else alert("请输入正确的数量"),$("#slt_count").focus()})});var LottoType={SUM:0,SINGLE:1,NUM3_CONTINUOUS:2,NUM3_ALL:3,NUM2_MULT:4,NUM2_SINGLE:5,NUM2_DIFF:6};function settle(t,e,n,a){a==LottoType.SUM?(tips={en:"Summmary ",cn:"和值 ",zh_can:"和值 "},$("#my_number").text(tips[language]+t)):a==LottoType.NUM3_ALL?$("#my_number").text("111,222,333,444,555,666"):a==LottoType.SINGLE?$("#my_number").text(t+" "+e+" "+n):a==LottoType.NUM3_CONTINUOUS?$("#my_number").text("123,234,345,456"):a==LottoType.NUM2_MULT?$("#my_number").text(t+" "+t+" *"):a==LottoType.NUM2_SINGLE?$("#my_number").text(t+" "+t+" "+e):a==LottoType.NUM2_DIFF?$("#my_number").text(t+" "+e):a==LottoType.NUM3_CONTINUOUS?$(".btn_bet").removeClass("disabled"):a==LottoType.NUM2_MULT&&$(".btn_bet").removeClass("disabled"),$("#my_number_1").val(t),$("#my_number_2").val(e),$("#my_number_3").val(n),$("#my_number_type").val(a),check_input()}function check_input(){var t=$("#my_number_1").val(),e=$("#my_number_2").val(),n=$("#my_number_3").val(),a=$("#my_number_type").val();(a=parseInt(a))==LottoType.SUM?/^\d{1,2}$/.test(t)&&$(".btn_bet").removeClass("disabled"):a==LottoType.NUM3_ALL?$(".btn_bet").removeClass("disabled"):a==LottoType.SINGLE?/^[1-6]{1}$/.test(t)&&/^[1-6]{1}$/.test(e)&&/^[1-6]{1}$/.test(n)?$(".btn_bet").removeClass("disabled"):$(".btn_bet").addClass("disabled"):a==LottoType.NUM3_CONTINUOUS?$(".btn_bet").removeClass("disabled"):a==LottoType.NUM2_MULT?$(".btn_bet").removeClass("disabled"):a==LottoType.NUM2_SINGLE?/^[1-6]{1}$/.test(t)&&/^[1-6]{1}$/.test(e)?(vueApp.selectBetNum=1,vueApp.selectBonus=.8,$(".btn_bet").removeClass("disabled")):$(".btn_bet").addClass("disabled"):a==LottoType.NUM2_DIFF&&(/^[1-6]{1}$/.test(t)&&/^[1-6]{1}$/.test(e)?$(".btn_bet").removeClass("disabled"):$(".btn_bet").addClass("disabled"))}function set_single(){var t=[];$("#panl_3bt .js_ball.active").each(function(){t.push($(this).attr("data-value"))});for(var e=0;e<=4-t.length;e++)t.push("?");settle(t[0],t[1],t[2],LottoType.SINGLE)}function set_2_single(){var t=$("#panl_2dx .twoNum .js_ball.active").attr("data-value"),e=$("#panl_2dx .twoNumBt .js_ball.active").attr("data-value");t||(t="?"),e||(e="?"),settle(t,e,0,LottoType.NUM2_SINGLE)}function set_only_2(){var t=[];$("#panl_2bt .js_ball.active").each(function(){t.push($(this).attr("data-value"))});for(var e=0;e<=3-t.length;e++)t.push("?");settle(t[0],t[1],0,LottoType.NUM2_DIFF)}function resetBetNum(){vueApp.betMul=1,$(".btn_bet").addClass("disabled"),$("#my_number").text(""),$(".js_ball.active").removeClass("active")}function resetSelectInfo(){vueApp.selectBetNum=0,vueApp.selectBonus=null}function gameTabSwitch(){$(".gameMenus").on("click","li:not(.active)",function(){resetBetNum(),resetSelectInfo(),$(".gameMenus li.active").removeClass("active"),$(this).addClass("active");var t=$(this).attr("name");$(".betBox:not(.hide)").addClass("hide"),$("#panl_"+t).removeClass("hide")})}function toBet(){$(".btn_bet").click(function(){$(this).hasClass("disabled")||LottoTable.is_opening(function(t){t?LottoTable.is_drawing(function(c){LottoTable.get_begin_time(function(t){var e=t,n=(new Date).getTime()/1e3,a=Math.floor(1200-(n-e));if(console.log(c),!(c||a<=0)||(tips={en:"In the "+currentRound+" lottery, the purchased lottery will automatically enter the next round, whether to continue",cn:"第"+currentRound+"期开奖中,购买的彩票将自动进入下期,是否继续？",zh_can:"第"+currentRound+"期開獎中,購買的彩票將自動進入下期,是否繼續？"},window.confirm(tips[language]))){var s=$("#my_number_1").val(),o=$("#my_number_2").val(),i=$("#my_number_3").val(),u=$("#my_number_type").val(),l=vueApp.betMul;LottoTable.bet(u,s,o,i,l)}})}):popDialog("投注未开放")})})}function o(t){for(var e=[].slice.call(document.querySelectorAll("[data-locale]")),n=0;n<e.length;n++){var a=e[n].getAttribute("data-locale");t[a]?e[n].innerHTML=t[a]:console.error("No locale for "+a)}for(e=[].slice.call(document.querySelectorAll("[data-locale-placeholder]")),n=0;n<e.length;n++){var s=e[n].getAttribute("data-locale-placeholder");t[s]?e[n].setAttribute("placeholder",t[s]):console.error("No locale for "+s)}}$(function(){gameTabSwitch(),toBet(),$("#panl_hz .js_ball").click(function(){var t=$(this).data("value");$(".js_ball").removeClass("active"),$(this).addClass("active"),vueApp.selectBetNum=1,vueApp.selectBonus=$(this).data("eth"),settle(t,0,0,LottoType.SUM)}),$("#panl_3tx .js_ball").click(function(){$(".js_ball").removeClass("active"),$(this).addClass("active"),vueApp.selectBetNum=1,vueApp.selectBonus=$(this).data("eth"),settle(0,0,0,LottoType.NUM3_ALL)}),$("#panl_3dx .js_ball").click(function(){$(".js_ball").removeClass("active"),$(this).addClass("active"),vueApp.selectBetNum=1,vueApp.selectBonus=2.4;var t=$(this).attr("data-value");settle(t,t,t,LottoType.SINGLE)}),$("#panl_3bt").on("click",".js_ball:not(.active)",function(){$(".js_ball:not(#panl_3bt .js_ball)").removeClass("active"),3<=$("#panl_3bt .js_ball.active").length?alert("You can select up to 3 numbers"):(2===$("#panl_3bt .js_ball.active").length?($(this).addClass("active"),vueApp.selectBetNum=1,vueApp.selectBonus=.4):$(this).addClass("active"),set_single())}),$("#panl_3bt").on("click",".js_ball.active",function(){$(this).removeClass("active"),vueApp.selectBetNum=0,vueApp.selectBonus=null,set_single()}),$("#panl_3lt .js_ball").click(function(){$(".js_ball").removeClass("active"),$(this).addClass("active"),vueApp.selectBetNum=1,vueApp.selectBonus=.1,settle(0,0,0,LottoType.NUM3_CONTINUOUS)}),$("#panl_2fx .js_ball").click(function(){$(".js_ball").removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-value");vueApp.selectBetNum=1,vueApp.selectBonus=.14,settle(t,0,0,LottoType.NUM2_MULT)}),$("#panl_2dx .twoNum .js_ball").click(function(){$(".js_ball:not(#panl_2dx .twoNumBt .js_ball)").removeClass("active"),$(this).addClass("active"),set_2_single()}),$("#panl_2dx .twoNumBt .js_ball").click(function(){$(".js_ball:not(#panl_2dx .twoNum .js_ball)").removeClass("active"),$(this).addClass("active"),set_2_single()}),$("#panl_2bt").on("click",".js_ball:not(.active)",function(){$(".js_ball:not(#panl_2bt .js_ball)").removeClass("active"),1<$("#panl_2bt .js_ball.active").length?alert("You can select up to 2 numbers"):(1===$("#panl_2bt .js_ball.active").length&&(vueApp.selectBetNum=1,vueApp.selectBonus=.08),$(this).addClass("active"),set_only_2())}),$("#panl_2bt").on("click",".js_ball.active",function(){$(this).removeClass("active"),vueApp.selectBetNum=0,vueApp.selectBonus=null,set_only_2()}),$("#betresult .subtract").click(function(){var t=$("#betresult input").val();1!=(t=parseInt(t))?(t<99&&$("#betresult .add").removeClass(".addDisabled"),$("#betresult input").val(t-1)):$(this).addClass("subtractDisabled")}),$("#betresult .add").click(function(){var t=$("#betresult input").val();99!=(t=parseInt(t))?(1<t&&$("#betresult .subtract").removeClass(".subtractDisabled"),$("#betresult input").val(t+1)):$(this).addClass("addDisabled")})}),(Locale=function(){this.dictionary={},this.createNumberFormats("en-US")}).prototype.fill=function(t){o(this.dictionary)},Locale.prototype.get=function(t){return this.dictionary[t]?this.dictionary[t]:(console.error("No locale for "+t),t)},Locale.prototype.load=function(t,e){var n=this;$.ajax({url:"plugins/i18n/"+t+".tsv",dataType:"text",success:function(i){n.lang=t,n.dictionary=function(t){for(var e={},n=i.split("\n"),a=0;a<n.length;a++){var s=n[a];if(s){var o=n[a].split("\t");2===o.length?e[o[0]]=o[1].trim():console.log("getLocale error",s)}}return console.log(e),e}(),n.createNumberFormats(function(t){switch(t){case"zh_can":case"zh_man":return"zh";default:return t}}(t)),o(n.dictionary),e()}})},Locale.prototype.ticketsString=function(t){switch(t){case 1:return"1 "+this.get("ticket_1").toLowerCase();case 2:case 3:case 4:return t+" "+this.get("ticket_2").toLowerCase();default:return t+" "+this.get("ticket_5").toLowerCase()}},Locale.prototype.ethNumberOptions={maximumFractionDigits:20},Locale.prototype.usdNumberOptions={maximumFractionDigits:0},Locale.prototype.balanceNumberOptions={maximumFractionDigits:4},Locale.prototype.createNumberFormats=function(t){try{this.ethNumberFormat=new Intl.NumberFormat(t,this.ethNumberOptions),this.usdNumberFormat=new Intl.NumberFormat(t,this.usdNumberOptions),this.balanceNumberFormat=new Intl.NumberFormat(t,this.balanceNumberOptions)}catch(t){console.error(t)}},Locale.prototype.formatEth=function(t,e){return(this.ethNumberFormat?this.ethNumberFormat.format(t.toNumber()):t.toNumber())+" "+(e||"ETH")},Locale.prototype.formatUsd=function(t){return"$"+(this.usdNumberFormat?this.usdNumberFormat.format(t.toNumber()):t.toNumber().toFixed(0))},Locale.prototype.formatBalance=function(t){return(this.balanceNumberFormat?this.balanceNumberFormat.format(t.toNumber()):t.toNumber().toFixed(4))+" ETH"},window.addEventListener("load",function(){new Locale});