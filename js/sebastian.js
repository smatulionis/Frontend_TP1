/**
 * Sebastian Matulionis - interactividad en la tarjeta personal (TP1).
 * - Alterna la seccion "Mas sobre mi" (detalles adicionales).
 * - Aplica un segundo tema a la pagina al mostrar el contenido extra.
 */
(function () {
  "use strict";

  var body = document.body;
  var btnToggle = document.getElementById("sebastian-btn-toggle");
  var details = document.getElementById("sebastian-details");
  var labelMore = "Mostrar más sobre mí";
  var labelLess = "Ocultar detalles";

  function applyTheme() {
    body.classList.toggle("sebastian-theme-day", true);
  }

  if (btnToggle && details) {
    btnToggle.addEventListener("click", function () {
      var hidden = details.hasAttribute("hidden");

      if (hidden) {
        details.removeAttribute("hidden");
        btnToggle.setAttribute("aria-expanded", "true");
        btnToggle.textContent = labelLess;
        applyTheme();
      } else {
        details.setAttribute("hidden", "hidden");
        btnToggle.setAttribute("aria-expanded", "false");
        btnToggle.textContent = labelMore;
        body.classList.remove("sebastian-theme-day");
      }
    });
  }
})();
