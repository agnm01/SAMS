// When the user clicks on the button, open the modal

let submitBtn = document.getElementById("submit");
let submitModal = document.getElementById("submitModal");
let closeModal = submitModal.getElementsByClassName("close")[0];
let submitModalYesBtn = submitModal.getElementsByClassName("yes")[0];
let submitModalNoBtn = submitModal.getElementsByClassName("no")[0];

function showModal() {
    submitModal.style.display = "block";
}

function hideModal() {
    submitModal.style.display = "none";
}

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    showModal();
    return false;
});

closeModal.addEventListener('click', function(event) {
    event.preventDefault()
    hideModal();
    return false;
});

submitModalYesBtn.addEventListener('click', function(event) {
    window.location.reload();
});

submitModalNoBtn.addEventListener('click', function(event) {
    event.preventDefault();
    hideModal();
});