function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }


  
  const scrollToTopBtn = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
