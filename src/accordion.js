const accordionBtns = document.querySelectorAll("._accordion > ._title");
const accordionArrows = document.querySelectorAll("._accordion ._arrow");
const accordionBodys = document.querySelectorAll(
  "._accordion > ._body_wrapper"
);

accordionBtns.forEach((accordionBtn, index) => {
  accordionBtn.addEventListener("click", () => {
    accordionArrows[index].classList.toggle("_show");
    accordionBodys[index].classList.toggle("_show");
  });
});
