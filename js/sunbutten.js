
function checkpassword() {
	var password = document.getElementById("upass").value;
	var repassword = document.getElementById("repw").value;
		
	if(password == repassword) {
		document.getElementById("tishi").innerHTML="<font color='green'>两次密码输入一致</font>";
		document.getElementById("submit").disabled = false;
	}else{
		document.getElementById("tishi").innerHTML="<font color='red'>两次输入密码不一致!</font>";
		document.getElementById("submit").disabled = true;
	}
}
