function validateForm() {
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (uname == '') {
        alert("please enter user name.");
        return false;
    } else if (email == '') {
        alert("enter the email");
        return false;
    } else if (!filter.test(email)) {
        alert("Enter valid email id.");
        return false;
    } else {
        alert('Thank You for SignIn');
        //Redirecting to other page or webste code or you can set your own html page.
        window.location.href = "127.0.0.1:5500/Assignment.html";
        return true;
    }
}

function clearFunc() {
    document.getElementById("uname").value = "";
    document.getElementById("email").value = "";
}
//khfuihriurffu