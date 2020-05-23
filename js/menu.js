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
logo.id = "logo";
logo.alt = "Gitte Bjørn logo";
var logo_link = document.createElement("a");
logo_link.href = "index.html";
logo_link.appendChild(logo);
var burger_wrap = document.createElement("div");
burger_wrap.classList.add("burger_wrap");
var burger1 = document.createElement("img");
burger1.src = "img/burger1.svg";
burger1.id = "burger1";
burger1.alt = "top of burger icon";
var burger2 = document.createElement("img");
burger2.src = "img/burger2.svg";
burger2.id = "burger2";
burger2.alt = "middle of burger icon";
var burger3 = document.createElement("img");
burger3.src = "img/burger3.svg";
burger3.id = "burger3";
burger3.alt = "bottom of burger icon";
burger_wrap.appendChild(burger1);
burger_wrap.appendChild(burger2);
burger_wrap.appendChild(burger3);
var nav_link_wrap = document.createElement("div");
nav_link_wrap.classList.add("nav_link_wrap");
nav_link_wrap.appendChild(gitteBjorn);
nav_link_wrap.appendChild(smykkekurser);
nav.appendChild(logo_link);
nav.appendChild(nav_link_wrap);
nav.appendChild(burger_wrap);

var ul = document.createElement("ul");
smykkekurser.appendChild(ul);



burger_wrap.addEventListener("click", () => {
  nav_link_wrap.classList.toggle("burger_show");
  burger1.classList.toggle("burger1");
  burger2.classList.toggle("burger2");
  burger3.classList.toggle("burger3");
})
