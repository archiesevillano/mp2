const headernavburger = () => {
    let icon = document.getElementById("myLinks");
    if (icon.style.display === "block") {
        icon.style.display = "none";
    } else {
        icon.style.display = "block";
    }
    console.log(headernavburger)
  }
  
  const openModal = document.getElementById("open-modal");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementsByClassName("close")[0];
  
  openModal.onclick = function() {
    modal.style.display = "block";
  }
  
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

const dropdownBtn = document.querySelector('.drop-btn');
const dropdownContent = document.querySelector('.dropdown-content');

const selectCategory = () => {
  dropdownContent.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
      const selectedCategory = event.target.textContent;
      dropdownBtn.textContent = selectedCategory;
    }
  });
}

selectCategory();
  
  

  