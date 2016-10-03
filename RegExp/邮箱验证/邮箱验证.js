// 一串英文，数字，下划线  + @ + 一串英文，数字 + . + 英文(一般长度在2~4) (. + 英文可能有1个或2个)
function mailCheck(mail) {
  var re = /^\w+@[a-z0-9]+(\.[a-z]{2,4}){1,2}$/g;
  if(re.test(mail)){
    alert("正确的邮箱格式");
  }
  else{
    alert("邮箱格式恐怕不对");
  }
}
mailCheck("zdl234@3qq.com.cnms");
