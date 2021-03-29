// When the user clicks on the button, open the modal

let readMoreBtn = document.getElementsByClassName("read-more");
let postsModal = document.getElementById("postsModal");
let closeModal = postsModal.getElementsByClassName("close")[0];

function showModal() {
    postsModal.style.display = "block";
}

function hideModal() {
    postsModal.style.display = "none";
}

readMoreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    showModal();
    return false;
});
alert('hh');
closeModal.addEventListener('click', function(event) {
    event.preventDefault()
    hideModal();
    return false;
});