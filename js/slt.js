var SLT_CONTRACT,SLT_INTERFACES,SLT_ADDR="0x2878D33523A8025b66bdf606c8670Fdf3F4C8CDD",SLT_ENABLED=!1,SLT_PRICE=.1,SLT={init:function(){SLT_CONTRACT=web3.eth.contract(SLTABI),SLT_INTERFACES=SLT_CONTRACT.at(SLT_ADDR),web3.version.getNetwork(function(t,e){"1"==e&&(SLT_ENABLED=!0),SLT_ENABLED=!0,setInterval(function(){SLT_INTERFACES.ico_amount.call(function(t,e){t||($("#slt_sold").html(e+""),$("#slt_left").html(2e5-e+""))})},1e3)})}};$(function(){$("#buy_slt").click(function(){var t=vueApp.sltNum;if(/^\d+$/.test(t)&&0<t){var e={to:SLT_ADDR,value:web3.toWei(vueApp.sltPerPrice*t)};SLT_INTERFACES.buy.sendTransaction(e,function(t,e){t?alert(t):alert("Transaction send Completed")})}else alert("请输入正确的数量"),$("#slt_count").focus()})});