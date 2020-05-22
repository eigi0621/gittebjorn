let wp = `http://eigilnikolajsen.dk/kea/10_eksamen/wordpress/wp-json/wp/v2/`;

document.addEventListener("DOMContentLoaded", () => {
  hentJSON();
});

async function hentJSON() {
  let wpEnd = `pages?_fields=title,parent,slug`;
  const response = await fetch(wp + wpEnd);
  let json = await response.json();

  json.forEach((t) => {
    if (t.parent != 0) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = t.title.rendered;
      a.href = `${t.slug}.html`;
      li.appendChild(a);
      ul.appendChild(li);
    }
  })
}

var nav = document.querySelector("nav");
var gitteBjorn = document.createElement("a");
gitteBjorn.textContent = "gitte bjørn";
gitteBjorn.classList.add("nav_link");
var smykkekurser = document.createElement("a");
smykkekurser.textContent = "smykkekurser";
smykkekurser.classList.add("nav_link");
var logo = document.createElement("img");
logo.src = "img/gb_logo_svg.svg";
var logo_link = document.createElement("a");
logo_link.href = "index.html";
logo_link.appendChild(logo);
nav.appendChild(gitteBjorn);
nav.appendChild(logo_link);
nav.appendChild(smykkekurser);

var ul = document.createElement("ul");
smykkekurser.appendChild(ul);
