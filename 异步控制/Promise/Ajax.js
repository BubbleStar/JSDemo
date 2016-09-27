var getJson = function(url){
	var promise = new Promise(function(resolve, reject){
		var client = new XMLHttpRequest();
		client.open("GET",url);
		client.onreadystatechange = handler;
		client.responsType = 'JSON';
		client.setRequestHeader("Accept","application/json");
		client.send();
	
		function handler(){
			if(this.readyState === this.DONE){
				if(this.status === 200){
					var result = this.responsText;
					//resolve函数将Promise状态从pending->resolved，参数是成功返回的数据
					resolve(JSON.parse(result); 
				}
			}
			else{
				//reject函数将Promise状态从pending->rejected,参数是异步操作失败报出的错误
				reject(this);
			}
		}
	});
	return promise;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}


//then有两个参数，一个是成功后的回调函数(该函数参数是成功返回的数据)，一个是失败的回调函数。
getJson('/post.json').then(function(json){
	console.log("返回了" + json);
},function(err){
	console.log("出错了" + err);
});