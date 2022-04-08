import somar from "./somar";
// import "../css/index.css";
import img from "../assets/coca.png"

const num1 = 60;
const num2 = 10;

const soma = somar(num1, num2);

console.log(soma);

const texto = () => {
    // const element = document.createElement('div');
    // element.innerHTML = "Olá mundo!";
    const myImage = document.createElement("img");
    myImage.src = img;
    myImage.innerHTML = myImage;

    return myImage;
}

document.body.appendChild(texto());