$(document).ready(function () {

    var $registerAlert = $("#register-alert"),
        $loginAlert = $("#login-alert");

    $("#register-me").click(function ()
    {
        $(".login-side").fadeToggle();
        $(".register-side").fadeToggle("fast");
    });

    $("#return-to-login").click(function ()
    {
        $(".register-side").fadeToggle();
        $(".login-side").fadeToggle("fast");
    });

    $("#btn-login").click(function ()
    {
        $loginAlert.removeClass('in');
        $loginAlert.text('');

        var username =  $("#username").val(),
            password = $("#password").val();

        doAjax("./rest/user/login", 'POST', 'JSON', {username: username, password: password}, null).
        success(function(response)
        {
            sessionStorage.username = response.username;
            sessionStorage.auth_token = response.auth_token;
            console.log(response);
        }).
        error(function(errorThrown)
        {
            $loginAlert.addClass("in");
            $loginAlert.text(errorThrown.responseText);
            console.log(errorThrown);
        });
    });

    $("#btn-register").click(function () {
        $registerAlert.removeClass('in');
        $registerAlert.text('');

        var username =  $('#new-username').val(),
            email = $('#new-email').val(),
            repeatEmail = $('#new-repeat-email').val(),
            password = $('#new-password').val(),
            repeatPassword = $('#new-repeat-password').val();

        console.log(username, email, repeatEmail, password, repeatPassword);
        doAjax("./rest/user/registration", 'POST', 'JSON',
            {
                'username': username,
                'email' : email,
                'repeat_email': repeatEmail,
                'password': password,
                'repeat_password': repeatPassword
            }, null).
        error(function(errorThrown)
        {
            $registerAlert.addClass("in");
            $registerAlert.text(errorThrown.responseText);
        });

    });


});