
const containerP = document.getElementById("container");
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";

containerP.append(p);

const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3!";

containerP.append(heading3);

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.background = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
div.append(h1);

const p1 = document.createElement("p");
p1.textContent = "Me too!";
div.append(p1);

containerP.append(div);



const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
