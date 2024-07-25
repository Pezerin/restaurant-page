import img from "./restaurant.jpg";

export function loadHome(content) {
    content.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = "Mikul's Restaurant";

    const div = document.createElement("div");
    div.id = "home-display";

    const myImg = new Image();
    myImg.src = img;
    const p = document.createElement("p");
    p.innerHTML = "Mikul's Restaurant is a new restaurant on Earth!<br>It is very popular and many have said it is the best in the world!<br>Come try it now!";

    div.appendChild(myImg);
    div.appendChild(p);

    content.appendChild(h1);
    content.appendChild(div);
}