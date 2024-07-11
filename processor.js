document.addEventListener('DOMContentLoaded', function () {
    var queryString = window.location.search; 
    var queryStringParams = new URLSearchParams(queryString);

    var outputDiv = document.getElementById('output');

    outputDiv.innerHTML = "Nom d'étudiant: " + queryStringParams.get('txtStudentName') + "<br/>";
    outputDiv.innerHTML += "Mot de passe de l'étudiant : " + queryStringParams.get('pwdStudent') + "<br/>";
    outputDiv.innerHTML += "Confirmation du mot de passe : " + queryStringParams.get('cpwdStudent') + "<br/>";
    outputDiv.innerHTML += "Genre : " + (queryStringParams.get('rdStudentGender') === "male" ? "Masculin" : "Féminin") + "<br/>";
});
