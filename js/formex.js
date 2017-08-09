'use strict'
function restForm() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var phone = document.getElementById('phone');
    var err = document.getElementById('err');
    err.innerHTML = username.value;
    if (!password){
        return false;
    };
    return true;
}