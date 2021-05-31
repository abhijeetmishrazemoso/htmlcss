function activate(activeId, idOfSourceButton) {
    var tabs = document.getElementsByClassName("tabbing");
    var tabButtons = document.getElementsByClassName('tabs');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].style.backgroundColor = 'lightgrey';
    }
    document.getElementById(activeId).style.display = "flex";
    document.getElementById(idOfSourceButton).style.backgroundColor = 'white';
    document.getElementById(idOfSourceButton).style.color = 'grey';
}

function sendConfirmation() {

    var formm = document.forms[0];
    formm.elements.Subj.value = "";
    formm.elements.Message.value = "";
    document.getElementById("resultMessageh2").innerHTML = "Message Sent!";

    alert("Message Sent!");
    changeMessageByTimeOut();
    return false;
}

function changeMessageByTimeOut() {
    setTimeout(() => {
        document.getElementById("resultMessageh2").innerHTML = "Waiting for a new Message!";
    }, 4000);
}