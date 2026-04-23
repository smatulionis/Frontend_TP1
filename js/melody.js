/**
 * Melody Amaro — interactividad en la tarjeta personal (TP1).
 * - Alterna sección "Más sobre mí" (detalles adicionales).
 * - Aplica un segundo tema (claro) a la página para mostrar el cambio de estilo.
 */
(function () {
  "use strict";

  var body = document.body;
  var btnToggle = document.getElementById("melody-btn-toggle");
  var details = document.getElementById("melody-details");
  var labelMore = "Mostrar más sobre mí";
  var labelLess = "Ocultar detalles";

  function applyTheme() {
    var isDay = body.classList.contains("melody-theme-day");
    body.classList.toggle("melody-theme-day", !isDay);
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
        body.classList.remove("melody-theme-day");
      }
    });
  }
})();
