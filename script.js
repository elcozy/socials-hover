const appendCards = () => {
  const cards = document.getElementById("all-cards");
  const d_flex = "d-flex justify-content-center align-items-center";
  const icon_size = "fa-xs";
  var icon_all = [
    "fa-github",
    "fa-twitter",
    "fa-whatsapp",
    "fa-linkedin-in",
    "fa-youtube",
    "fa-instagram",
    "fa-facebook-f",
    "fa-tiktok",
  ];
  //to repeat all the array items
  const icon_i = Array.from({ length: 10 }).fill(icon_all).flat();
  for (var i = 0; i < 50; i++) {
    const icon_selected = icon_i[i];
    const z_index = 1;
    const icons_card = `<div class="iconss ml-4 my-2" style="z-index: ${z_index}">
  <span class="icon-shadow ${d_flex}"></span>
  <a href="#" target="_blank" rel="noopener noreferrer">
  <div class="icon ${icon_selected} ${d_flex}">
  <div>
  <span class="${d_flex}"></span>
  </div>
  <div>
  <span class="${d_flex}"></span>
  </div>
  <div>
  <span class="${d_flex}"></span>
  </div>
  <div>
  <span class="${d_flex}"></span>
  </div>
  <div>
  <span class="${d_flex}">
  <i class="fab ${icon_selected} ${icon_size}"></i>
  </span>
  </div>
  </div>
  </a>
  </div>`;

    icons_card;
    cards.innerHTML += icons_card;
  }
};
window.addEventListener("load", function () {
  appendCards();
});
