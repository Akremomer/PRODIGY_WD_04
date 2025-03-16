
  AOS.init();
    document.addEventListener("DOMContentLoaded", function () {
      const themeToggle = document.getElementById("themeToggle");
      const body = document.body;
  
      if (localStorage.getItem("theme") === "lightmode") {
          body.classList.remove("darkmode");
          body.classList.add("lightmode");
          themeToggle.textContent = "🌙";
      }
  
      themeToggle.addEventListener("click", function () {
          if (body.classList.contains("darkmode")) {
              body.classList.remove("darkmode");
              body.classList.add("lightmode");
              themeToggle.textContent = "🌙";
              localStorage.setItem("theme", "lightmode");
          } else {
              body.classList.remove("lightmode");
              body.classList.add("darkmode");
              themeToggle.textContent = "🌞";
              localStorage.setItem("theme", "darkmode");
          }
      });
    });
  