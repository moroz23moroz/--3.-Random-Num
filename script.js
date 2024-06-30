// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);
// console.log(color);

const hex = document.querySelector(".hex");
const bts = document.querySelector(".generate");
const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  const colorValue = "#" + randomColor;
  document.body.style.backgroundColor = colorValue;
  hex.innerHTML = colorValue;
  console.log(randomColor);
};

bts.addEventListener("click", generateColor);
