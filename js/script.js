function init() {

    const button = document.getElementById('alertMe');
    const input = document.getElementById('alertMessage');
    const output = document.getElementById('output');

    button.addEventListener('click', function() {
        const userText = input.value;
        alert("Your name: " + userText);
        output.textContent = userText;
    });


}
window.addEventListener('load', init);