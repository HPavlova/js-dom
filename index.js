const arr = [
  {
    id: 1,
    title: "Porsche 718 Cayman S",
    desc: "Coupe",
    img: "./images/cars/porsche718.svg",
    top: true,
    myGallery: true,
    favourites: true,
  },
  {
    id: 2,
    title: "Porsche 911 Turbo",
    desc: "Coupe",
    img: "./images/cars/porsche911.svg",
    top: true,
    myGallery: true,
    favourites: true,
  },
  {
    id: 3,
    title: "Mini Cooper 5-DOOR",
    desc: "Hatchback",
    img: "./images/cars/miniCooper5DOOR.svg",
    top: false,
    myGallery: true,
    favourites: true,
  },
  {
    id: 4,
    title: "Porsche Taycan 4S",
    desc: "Coupe",
    img: "./images/cars/porscheTaycan.svg",
    top: false,
    myGallery: true,
    favourites: true,
  },
  {
    id: 5,
    title: "Mini Cooper WORKS...",
    desc: "Hatchback",
    img: "./images/cars/miniCooperWorks.svg",
    top: false,
    myGallery: false,
    favourites: false,
  },
  {
    id: 6,
    title: "Toyota GR Supra",
    desc: "Coupe",
    img: "./images/cars/toyotaGR.svg",
    top: false,
    myGallery: false,
    favourites: false,
  },
];

const main = document.querySelector(".main");
const nav = document.querySelector(".nav");
const article = document.querySelector("article");
const articleList = document.querySelector(".article__list");
const articleListSets = document.querySelector(".article__list__sets");
let currentLink = null;

function createArticle(arr) {
  return arr
    .map((item) =>
      item.favourites
        ? `
        <li class="article__item">
         <div class="article__item__title">
            <h3>${item.title}</h3>
            <img src="./images/icons/heart-fill.svg" alt="heart-fill"></img>
          </div>
          <p class="article__desc">${item.desc}</p>
          <img src=${item.img} alt=${item.title}></img>
      </li>`
        : `<li class="article__item">
        <div class="article__item__title">
          <h3>${item.title}</h3>
          <img src="./images/icons/heart.svg" alt="heart"></img>
        </div>
        <p class="article__desc">${item.desc}</p>
        <img src=${item.img} alt=${item.title}></img>
    </li>`
    )
    .join("");
}

nav.addEventListener("click", ({ target }) => {
  if (target.innerText !== currentLink) {
    articleList.innerHTML = "";
    articleListSets.innerHTML = "";
    currentLink = target.innerText;

    if (target.innerText === "Objects sets") {
      articleListSets.insertAdjacentHTML("beforeend", createArticle(arr));
    } else {
      articleList.insertAdjacentHTML(
        "beforeend",
        createArticle(
          arr.filter(
            (item) =>
              item[target.id] == true || target.innerText === "Single objects"
          )
        )
      );
    }
  }
});
