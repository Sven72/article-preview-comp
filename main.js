let shareBtnBef = document.getElementById("shareBarBtnBefore");
let share = document.getElementById("shareBar");

let shareBtnAft = document.getElementById("shareBarBtnAfter");

let authorImg = document.getElementsByClassName(".hero--author");

shareBtnBef.addEventListener("click", () => {
  share.classList.toggle("visible");
});

shareBtnAft.addEventListener("click", () => {
  share.classList.toggle("visible");
});
