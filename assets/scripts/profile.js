const init = () => {
    const clsBtn = document.querySelector(".profile-cls-btn");
    const profileBox = document.querySelector(".profile-box");
    const overlay = document.querySelector(".modal-overlay");

    clsBtn.addEventListener('click', () => {
        profileBox.classList.remove('active');
        overlay.classList.remove("active");
    });
}

init();