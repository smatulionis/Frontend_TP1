/**
 * Portada (index.html) — interactividad TP1.
 * Muestra u oculta un mensaje breve del equipo y ajusta el fondo de la página.
 */
(function () {
    "use strict";

    var btn = document.getElementById("home-btn-saludo");
    var panel = document.getElementById("home-saludo-panel");
    var labelShow = "Ver mensaje del equipo";
    var labelHide = "Ocultar mensaje";

    if (!btn || !panel) {
        return;
    }

    btn.addEventListener("click", function () {
        var isOpen = !panel.hasAttribute("hidden");

        if (isOpen) {
            panel.setAttribute("hidden", "hidden");
            btn.setAttribute("aria-expanded", "false");
            btn.textContent = labelShow;
            document.body.classList.remove("home-saludo-open");
        } else {
            panel.removeAttribute("hidden");
            btn.setAttribute("aria-expanded", "true");
            btn.textContent = labelHide;
            document.body.classList.add("home-saludo-open");
        }
    });
})();
