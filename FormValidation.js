function checkAll() {
    var uname = document.getElementById("fname").value;
    var regname = "^[a-zA-Z ]{5,20}$";
    
    if (uname === "") {
        window.alert("This field is required");
        document.getElementById("fname").focus();
        return false;
    }
    if (!uname.match(regname)) {
        window.alert("Name must be in proper format");
        document.getElementById("fname").focus();
        return false;
    }

}