/**
 * Lucrecia Vigo — interactividad en la tarjeta personal (TP1).
 * - Alterna la sección "Más sobre mí" (detalles adicionales).
 * - Recomendador por humor.
 */

// --- Toggle "Más sobre mí" (código original) ---
(function () {
  "use strict";

  var btnToggle = document.getElementById("lucrecia-btn-toggle");
  var extra = document.getElementById("lucrecia-details");
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

// --- Recomendador por humor (nuevo) ---
(function () {
  "use strict";

  var moodData = {
    aventurero: {
      movie: "UP: una aventura de altura",
      movieNote: "Porque a veces hay que lanzarse sin mapa.",
      album: "¿Dónde están los ladrones? — Shakira",
      albumNote: "Energía pura para emprender camino.",
      act: "Viajar",
      actNote: "Nada como descubrir un lugar nuevo."
    },
    reflexivo: {
      movie: "Una mente brillante",
      movieNote: "Para pensar en grande y no rendirse.",
      album: "Mediterráneo — Joan Manuel Serrat",
      albumNote: "Poesía hecha música, ideal para pensar.",
      act: "Leer",
      actNote: "Un buen libro siempre es buena compañía."
    },
    melancolico: {
      movie: "UP: una aventura de altura",
      movieNote: "Te va a hacer llorar y después sonreír.",
      album: "Vasos vacíos — Los Fabulosos Cadillacs",
      albumNote: "Para sentir y dejar pasar.",
      act: "Tener animales cerca",
      actNote: "Pelos, plumas o escamas: siempre ayudan."
    },
    feliz: {
      movie: "Bastardos sin gloria",
      movieNote: "Intenso, audaz y lleno de adrenalina.",
      album: "Vasos vacíos — Los Fabulosos Cadillacs",
      albumNote: "Ritmo que no para.",
      act: "Leer",
      actNote: "Aprovechá el buen estado de ánimo para un libro nuevo."
    }
  };

  var btns = document.querySelectorAll(".lucrecia-mood-btn");
  var card = document.getElementById("lucrecia-rec-card");

  if (!btns.length || !card) return;

  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btns.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");

      var mood = btn.getAttribute("data-mood");
      var d = moodData[mood];

      card.querySelector(".lucrecia-rec-movie").textContent = d.movie;
      card.querySelector(".lucrecia-rec-movie-note").textContent = d.movieNote;
      card.querySelector(".lucrecia-rec-album").textContent = d.album;
      card.querySelector(".lucrecia-rec-album-note").textContent = d.albumNote;
      card.querySelector(".lucrecia-rec-act").textContent = d.act;
      card.querySelector(".lucrecia-rec-act-note").textContent = d.actNote;

      card.removeAttribute("hidden");
    });
  });
})();