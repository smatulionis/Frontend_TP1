/**
 * Sebastián Vitcop — interactividad en la tarjeta personal (TP1).
 * - Alterna la sección "Más sobre mí" (detalles adicionales).
 */
(function () {
  "use strict";

  var btnToggle = document.getElementById("sv-btn-toggle");
  var extra = document.getElementById("sv-extra");
  var labelMore = "Mostrar más sobre mí";
  var labelLess = "Ocultar detalles";

  if (btnToggle && extra) {
    btnToggle.addEventListener("click", function () {
      var isHidden = extra.hasAttribute("hidden");

      if (isHidden) {
        extra.removeAttribute("hidden");
        btnToggle.setAttribute("aria-expanded", "true");
        btnToggle.textContent = labelLess;
      } else {
        extra.setAttribute("hidden", "hidden");
        btnToggle.setAttribute("aria-expanded", "false");
        btnToggle.textContent = labelMore;
      }
    });
  }
})();
