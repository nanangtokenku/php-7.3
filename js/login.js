$(document).ready(function(){

	$("#bt_login").click(function(){
		login();
	});
});


function login(){
	$.ajax({
		//url : base_url+"../php/functions/Auth.php",
		url : base_url+"../token/src/server/doGetToken.php",
		type: "post",
		data: {
			cmd:"login",
			username: $("#username").val(),
			password: $("#password").val()
		},
		dataType: "json",
		success: function(res){

			if(res.status==true){
				createCookie("ck_validLogin", "valid", 1);

				$('#show_welcome_nn').trigger('click');
				setTimeout(function () {
			       window.location.href = base_url+"index.html";
			    }, 3000); //will call the function after 2 secs.
				
			} else {
				
				$('#show_unlog').trigger('click');
				setTimeout(function () {

			    }, 1000); //will call the function after 2 secs.
				
			}
		},
		error: function(){
			
		}
	});
}