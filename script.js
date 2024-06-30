const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  const colorValue = "#" + randomColor;
  document.body.style.backgroundColor = colorValue;
};

const changeBackground = setInterval(() => {
  generateColor();
}, 300);

const bts = document.querySelector(".generate");
const num = document.querySelector(".number");
const generateNumber = () => {
  const rand = Math.floor(Math.random() * 10 + 1);
  console.log(rand);
  num.innerHTML = rand;
};
bts.addEventListener("click", generateNumber);
generateNumber();
