function o(t){for(var e=[].slice.call(document.querySelectorAll("[data-locale]")),o=0;o<e.length;o++){var r=e[o].getAttribute("data-locale");t[r]?e[o].innerHTML=t[r]:console.error("No locale for "+r)}for(e=[].slice.call(document.querySelectorAll("[data-locale-placeholder]")),o=0;o<e.length;o++){var a=e[o].getAttribute("data-locale-placeholder");t[a]?e[o].setAttribute("placeholder",t[a]):console.error("No locale for "+a)}}(Locale=function(){this.dictionary={},this.createNumberFormats("en-US")}).prototype.fill=function(t){o(this.dictionary)},Locale.prototype.get=function(t){return this.dictionary[t]?this.dictionary[t]:(console.error("No locale for "+t),t)},Locale.prototype.load=function(t,e){var r=this;$.ajax({url:"plugins/i18n/"+t+".tsv",dataType:"text",success:function(i){r.lang=t,r.dictionary=function(t){for(var e={},o=i.split("\n"),r=0;r<o.length;r++){var a=o[r];if(a){var n=o[r].split("\t");2===n.length?e[n[0]]=n[1].trim():console.log("getLocale error",a)}}return console.log(e),e}(),r.createNumberFormats(function(t){switch(t){case"zh_can":case"zh_man":return"zh";default:return t}}(t)),o(r.dictionary),e()}})},Locale.prototype.ticketsString=function(t){switch(t){case 1:return"1 "+this.get("ticket_1").toLowerCase();case 2:case 3:case 4:return t+" "+this.get("ticket_2").toLowerCase();default:return t+" "+this.get("ticket_5").toLowerCase()}},Locale.prototype.ethNumberOptions={maximumFractionDigits:20},Locale.prototype.usdNumberOptions={maximumFractionDigits:0},Locale.prototype.balanceNumberOptions={maximumFractionDigits:4},Locale.prototype.createNumberFormats=function(t){try{this.ethNumberFormat=new Intl.NumberFormat(t,this.ethNumberOptions),this.usdNumberFormat=new Intl.NumberFormat(t,this.usdNumberOptions),this.balanceNumberFormat=new Intl.NumberFormat(t,this.balanceNumberOptions)}catch(t){console.error(t)}},Locale.prototype.formatEth=function(t,e){return(this.ethNumberFormat?this.ethNumberFormat.format(t.toNumber()):t.toNumber())+" "+(e||"ETH")},Locale.prototype.formatUsd=function(t){return"$"+(this.usdNumberFormat?this.usdNumberFormat.format(t.toNumber()):t.toNumber().toFixed(0))},Locale.prototype.formatBalance=function(t){return(this.balanceNumberFormat?this.balanceNumberFormat.format(t.toNumber()):t.toNumber().toFixed(4))+" ETH"},window.addEventListener("load",function(){new Locale});