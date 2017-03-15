!function(t){"use strict";function s(t,s,e){this.el=t,s=s||'input[type="password"]',e=e||".form-group__password > .password-strength",this.field=this.el.find(s),this.meter=this.el.find(e),this._init()}s.prototype={_init:function(){this.characters=0,this.capitalletters=0,this.lowerletters=0,this.number=0,this.special=0,this.upperCase=new RegExp("[A-Z]"),this.lowerCase=new RegExp("[a-z]"),this.numbers=new RegExp("[0-9]"),this.specialchars=new RegExp("([!,%,&,@,#,$,^,*,?,_,~,/])");var t=this;this.field.on("keyup keydown",function(){t._checkStrength($(this).val())})},_setPercentage:function(t){this.meter.css({width:t+"%"})},_setClass:function(t){t<=1?(this.meter.removeClass(),this.meter.addClass("password-strength password-strength--veryweak")):2===t?(this.meter.removeClass(),this.meter.addClass("password-strength password-strength--weak")):3===t?(this.meter.removeClass(),this.meter.addClass("password-strength password-strength--medium")):(this.meter.removeClass(),this.meter.addClass("password-strength password-strength--strong"))},_checkStrength:function(t){t.length>=8?this.characters=1:this.characters=0,t.match(this.upperCase)?this.capitalletters=1:this.capitalletters=0,t.match(this.lowerCase)?this.lowerletters=1:this.lowerletters=0,t.match(this.numbers)?this.number=1:this.number=0,t.match(this.specialchars)?this.special=1:this.special=0;var s=this._getTotal(),e=this._getPercentage(5,s);this._setPercentage(e),this._setClass(s)},_getPercentage:function(t,s){return s/t*100},_getTotal:function(){return this.characters+this.capitalletters+this.lowerletters+this.number+this.special}},t.PasswordMeter=s}(window),$(".form-group--password").each(function(){new PasswordMeter($(this))});