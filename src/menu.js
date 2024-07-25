import img from "./menu.jpg";

export function loadMenu(content) {
    content.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";

    const div = document.createElement("div");
    div.id = "menu-display";

    const myImg = new Image();
    myImg.src = img;
    const p = document.createElement("p");
    p.innerHTML = "Mikul's Restaurant has any type of food you could ever dream of! <br> We use a special chefs and ingredients to magically present you with any food you could possibly want! <br> Come into to Mikul's today for whatever you desire!";

    div.appendChild(myImg);
    div.appendChild(p);

    content.appendChild(h1);
    content.appendChild(div);
}