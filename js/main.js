//Cambiar de preferncia del tema dark y light
document.addEventListener("DOMContentLoaded", function () {
  const lightModeButton = document.querySelector("button.mode:nth-child(1)");
  const darkModeButton = document.querySelector("button.mode:nth-child(2)");
  const body = document.body;

  function applyTheme(theme) {
    if (theme === "dark") {
      body.classList.add("dark-theme");
      lightModeButton.classList.remove("btnActive");
      darkModeButton.classList.add("btnActive");
    } else {
      body.classList.remove("dark-theme");
      lightModeButton.classList.add("btnActive");
      darkModeButton.classList.remove("btnActive");
    }
  }

  // Detectar la preferencia del usuario
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(userPrefersDark ? "dark" : "light");

  lightModeButton.addEventListener("click", function () {
    applyTheme("light");
  });

  darkModeButton.addEventListener("click", function () {
    applyTheme("dark");
  });
});

//Sliders
$(document).ready(function () {
  $(".slider").owlCarousel({
    loop: false,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },

      900: {
        items: 3,
      },

      1200: {
        items: 3,
      },
    },
  });

});


//ALTERNAR ENTRE TABS DE PROYECTOS
$(function () {
    $(".group-projects a").click(function () {
      var tabId = $(this).attr("data-tab");

      $(".group-projects a").removeClass("active");
      $(".Tabcondent").removeClass("active");

      $(this).addClass("active");
      $("#" + tabId).addClass("active");
    });
  });

  //AGREGAR CLASE AL HEADER AL HACER SCROLL
  jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 50) {
        jQuery("#header").addClass("fixed");
    } else {
        jQuery("#header").removeClass("fixed");
    }
});

//Cambio de idioma
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");




langButtons.forEach((button) => {
  button.addEventListener("click", () => {
      fetch(`../languages/${button.dataset.language}.json`)
          .then(res => res.json())
          .then(data => {
              textsToChange.forEach((el) => {
                  const section = el.dataset.section;
                  const value = el.dataset.value;

                  el.innerHTML = data[section][value];
              });

              // Remover la clase 'btnActive' de todos los botones
              langButtons.forEach(btn => btn.classList.remove("btnActive"));
              // Agregar la clase 'btnActive' al botón clicado
              button.classList.add("btnActive");
          });
  });
});

