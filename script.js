let mybutton1 = document.getElementById("btn1");
let mybutton2 = document.getElementById("btn2");
let copycode = document.querySelector(".color");

let myhexValues = () => {
  let myHexagon = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexagon[Math.floor([Math.random() * 16])];
  }
  return colors;
};
let rgb1 = "#000";
let rgb2 = "#fff";
const handleButton1 = () => {
  rgb1 = myhexValues();
  console.log(rgb1);
  mybutton1.innerText=rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right ,${rgb1},${rgb2}`;
  copycode.innerHTML = `background-image:linear-gradient(to right, ${rgb1},${rgb2});`;
};
const handleButton2 = () => {
  rgb2 = myhexValues();
  console.log(rgb2);
  mybutton2.innerText=rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right ,${rgb1},${rgb2}`;
  copycode.innerHTML = `background-image:linear-gradient(to right, ${rgb1},${rgb2});`;
};

mybutton1.addEventListener("click", handleButton1);
mybutton2.addEventListener("click", handleButton2);
