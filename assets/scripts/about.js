const headernavburger = () => {
    let icon = document.getElementById("myLinks");
    if (icon.style.display === "block") {
        icon.style.display = "none";
    } else {
        icon.style.display = "block";
    }
    console.log(headernavburger)
  }