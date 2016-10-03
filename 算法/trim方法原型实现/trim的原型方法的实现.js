String.prototype.trim = function(){
  return this.replace(/(^\s+)|(\s+$)/g,'')
}

var a = "  bala  bala  "
console.log(a);
console.log(a.trim());
