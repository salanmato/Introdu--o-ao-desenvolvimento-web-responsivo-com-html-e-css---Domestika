/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const fadeOut = () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
  }
  window.addEventListener('load', fadeOut);