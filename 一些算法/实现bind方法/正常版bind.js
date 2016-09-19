Function.prototype.bind = function(){
	var self = this; //保存原函数
	var context = [].shift.apply(arguments); //保存要绑定的对象
	var args = [].slice.call(arguments);
	return function(){
		return self.apply(context,[].concat.apply(args,[].slice.call(arguments)));
	}
}

var obj = {
	name : 'bubble'
}

var func = function(a,b,c,d){
	alert(this.name + a + b + c + d);
}.bind(obj,1,2);

func(3,4); //输出：bubble1234