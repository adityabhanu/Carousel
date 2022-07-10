document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel_item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel_btn"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
    <div class="carousel_nav">
        ${buttonsHtml.join("")}
    </div>
  `
  );

  const buttons = carousel.querySelectorAll(".carousel_btn");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("carousel_item_selected"));
      buttons.forEach((button) =>
        button.classList.remove("carousel_btn_selected")
      );

      items[i].classList.add("carousel_item_selected");
      buttons[i].classList.add("carousel_btn_selected");
    });
  });
  items[0].classList.add("carousel_item_selected");
  buttons[0].classList.add("carousel_btn_selected");
});
