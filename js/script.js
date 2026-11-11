function init() {

    let button = document.getElementById("entrybutton");
    let input = document.getElementById("entryinput");
    let output = document.getElementById("textoutput");

    button.addEventListener("click", function() {

        let message = input.value;

        alert("Isatu Kargbo: " + message);

        output.innerHTML = message;
    });

}

window.addEventListener('load', init);
