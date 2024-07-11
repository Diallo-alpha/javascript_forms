function validate() {
    var isStudentNameValid = true;
    var isStudentPasswordValid = true;
    var isStudentCPasswordValid = true;
    var isStudentGenderValid = true;

    // Validate student name
    if (document.getElementById("txtStudentName").value === "") {
        isStudentNameValid = false;
        document.getElementById("spnIsStudentNameValid").innerHTML = "&#x2716; Veuillez saisir votre nom.";
        document.getElementById("spnIsStudentNameValid").style.color = "red";
    } else {
        isStudentNameValid = true;
        document.getElementById("spnIsStudentNameValid").innerHTML = "&#x2714; C'est bon.";
        document.getElementById("spnIsStudentNameValid").style.color = "green";
    }

    // Validate password
    if (document.getElementById('pwdStudent').value === "") {
        isStudentPasswordValid = false;
        document.getElementById('spnIsStudentPasswordValid').innerHTML = "&#x2716; Veuillez indiquer votre mot de passe.";
        document.getElementById('spnIsStudentPasswordValid').style.color = "red";
    } else {
        isStudentPasswordValid = true;
        document.getElementById('spnIsStudentPasswordValid').innerHTML = "&#x2714; C'est bon.";
        document.getElementById('spnIsStudentPasswordValid').style.color = "green";
    }

    // Confirm password
    if (document.getElementById("cpwdStudent").value === "") {
        isStudentCPasswordValid = false;
        document.getElementById('spnIsStudentCPasswordValid').innerHTML = "&#x2716; Veuillez confirmer votre mot de passe.";
        document.getElementById('spnIsStudentCPasswordValid').style.color = "red";
    } else if (document.getElementById('cpwdStudent').value !== document.getElementById('pwdStudent').value) {
        isStudentCPasswordValid = false;
        document.getElementById('spnIsStudentCPasswordValid').innerHTML = "&#x2716; Les mots de passe ne correspondent pas.";
        document.getElementById('spnIsStudentCPasswordValid').style.color = "red";
    } else {
        isStudentCPasswordValid = true;
        document.getElementById('spnIsStudentCPasswordValid').innerHTML = "&#x2714; C'est bon.";
        document.getElementById('spnIsStudentCPasswordValid').style.color = "green";
    }

    // Validate gender
    if (document.getElementById('rdbMale').checked !== true && document.getElementById("rdbFemale").checked !== true) {
        isStudentGenderValid = false;
        document.getElementById('spnIsStudentGenderValid').innerHTML = "&#x2716; Veuillez sélectionner votre genre.";
        document.getElementById('spnIsStudentGenderValid').style.color = "red";
    } else {
        isStudentGenderValid = true;
        document.getElementById('spnIsStudentGenderValid').innerHTML = "&#x2714; C'est bon.";
        document.getElementById('spnIsStudentGenderValid').style.color = "green";
    }

    return isStudentNameValid && isStudentPasswordValid && isStudentCPasswordValid && isStudentGenderValid;
}

function resetForm() {
    document.getElementById("spnIsStudentNameValid").innerHTML = "";
    document.getElementById('spnIsStudentPasswordValid').innerHTML = "";
    document.getElementById('spnIsStudentCPasswordValid').innerHTML = "";
    document.getElementById('spnIsStudentGenderValid').innerHTML = "";
}
