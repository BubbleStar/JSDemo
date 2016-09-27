Function.prototype.bind = function(context){
	var self = this;	//保存原函数
	return function(){	//返回一个新函数
		return self.apply(context,arguments);
	}
}

var obj = {
	name : 'bubble';
}

var func = function(){
	alert(this.name);
}.bind(obj)

func(1,2); //输出:bubble12