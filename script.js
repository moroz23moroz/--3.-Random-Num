const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  const colorValue = "#" + randomColor;
  document.body.style.backgroundColor = colorValue;
};

const changeBackground = setInterval(() => {
  generateColor();
}, 300);
