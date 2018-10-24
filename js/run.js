var vueApp=new Vue({el:"#app",data:{isDialogShow:!1,dialogTitle:"Alert",dialogMsg:"",betResult:[],betArr:[],LuckyGuyArr:[],LuckyGuyAniamtion:!1,PublishResult:[],PublishNumber:null,betMul:1,maxBetMul:1,selectBetNum:0,selectBonus:null,isVip:!1,LottoTypeName:{en:{0:"Summary",1:"SINGLE 3 IDENTICAL",2:"3 CONSECUTIVE",3:"ALL 3 IDENTICAL",4:"ALL 2 IDENTICAL",5:"SINGLE 2 SINGLE",6:"DIFF"},cn:{0:"和值",1:"三同号单选",2:"三连号通选",3:"三同号通选",4:"二同号复选",5:"二同号单选",6:"不同号"},zh_can:{0:"和值",1:"三同號單選",2:"三連號通選",3:"三同號通選",4:"二同號複選",5:"二同號單選",6:"不同號"}},myTickets:[],isMyTicketsShow:!1,myRefAgentLink:"",sltNum:10,sltPerPrice:.1,language:"en"},computed:{selectOnceNum:function(){return 0<this.selectBetNum?.02*this.betMul:0},selectGain:function(){return this.selectBonusResult?this.selectBonusResult-this.selectOnceNum:null},selectBonusResult:function(){return this.selectBonus?this.selectBonus*this.betMul:null},betResultReverse:function(){var t=this.betResult.length,e=[];return t&&(e=this.betResult.reverse()),90<t?e.slice(0,89):e},sltPrice:function(){return this.sltPerPrice*this.sltNum}},watch:{betArr:function(t){6===t.length&&bcAniamtion('[data-info="betArr"]')},LuckyGuyArr:function(t){6<=t.length&&!this.LuckyGuyAniamtion&&(this.LuckyGuyAniamtion=!0,bcAniamtion('[data-info="LuckyGuyArr"]'))},PublishResult:function(t){2===t.length&&bcAniamtion('[data-info="PublishResult"]')}},filters:{toFix:function(t,e){if(t)return t.toFixed(e)},toParseInt:function(t,e){if(void 0===e&&(e=10),t)return parseInt(t,e)},toParseFloat:function(t){if(t)return parseFloat(t)},toAmount:function(t){if(t)return parseFloat(t/1e18)}},mounted:function(){this.language=language},methods:{dialogDisplay:function(t){this.isDialogShow=!!t},myTicketsClick:function(){var e=this;Account.get_my_tickets(function(t){t.length&&(e.myTickets=t.reverse()),console.log(t)}),this.isMyTicketsShow=!0,$(".mask").removeClass("hide")},dialogClose:function(t){this[t]=!1,$(".mask").addClass("hide")},numberInform:function(t,e,i){return t==e&&e==i?(tips={en:"ALL 3 IDENTICAL",cn:"三同号",zh_can:"三同號"},tips[language]):t==e||e==i?(tips={en:"ALL 2 IDENTICAL",cn:"二同号",zh_can:"二同號"},tips[language]):t+1==e&&e+1==i?(tips={en:"3 CONSECUTIVE",cn:"三连号",zh_can:"三連號"},tips[language]):t!=e&&e!=i?(tips={en:"3 DIFF",cn:"三不同",zh_can:"三不同"},tips[language]):""},numberType:function(t,e,i){return t==e&&e==i?4:t==e||e==i?2:t+1==e&&e+1==i?3:t!=e&&e!=i?1:0},addMul:function(){this.betMul>=this.maxBetMul||this.betMul++},subtractMul:function(){this.betMul<=1||this.betMul--},checkMul:function(){isNaN(this.betMul)?this.betMul=1:(this.betMul>this.maxBetMul&&(this.betMul=this.maxBetMul),this.betMul<1&&(this.betMul=1))},checkNum:function(t){isNaN(this[t])?this[t]=1:this[t]<1&&(this[t]=1)}}});function popDialogReset(){vueApp.isDialogShow=!1,vueApp.dialogMsg=""}function popDialog(t,e){popDialogReset(),vueApp.dialogMsg=t,void 0!==e?vueApp.dialogTitle=e:vueApp.isDialogShow=!0}function bcAniamtion(t,i){var n=$(t);setInterval(function(){var t=n.find("li:first"),e=t.height();t.animate({marginTop:-e+"px"},600,function(){!0===i&&1<n.children().length?t.remove():t.css("marginTop",0).appendTo(n)})},2e3)}