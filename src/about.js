import img from "./about.jpeg";

export function loadAbout(content) {
    content.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = "About";

    const div = document.createElement("div");
    div.id = "about-display";

    const myImg = new Image();
    myImg.src = img;
    const p = document.createElement("p");
    p.innerHTML = "Mikul's Restaurant was created to serve people good, quality food! <br> We believe that people should be able to eat amazing food for reasonable prices. <br> Come into Mikul's today to see what all the hype is about!";

    div.appendChild(myImg);
    div.appendChild(p);

    content.appendChild(h1);
    content.appendChild(div);
}