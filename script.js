/*variables*/
const home = document.querySelector("#home");
const bookmark = document.querySelector("#bookmark");
const add = document.querySelector("#add");
const profil = document.querySelector("#profil");
const section = document.querySelector('.section');

const nav_home = document.querySelector(".link-home");
const nav_bookmark = document.querySelector(".link-bookmark");
const nav_add = document.querySelector(".link-add");
const nav_profil = document.querySelector(".link-profil");
/*page.current*/
nav_home.addEventListener("click", () => {
  bookmark.classList.remove("current");
  add.classList.remove("current");
  profil.classList.remove("current");
  home.classList.add("current");
});

nav_bookmark.addEventListener("click", () => {
  home.classList.remove("current");
  add.classList.remove("current");
  profil.classList.remove("current");
  bookmark.classList.add("current");
});

nav_add.addEventListener("click", () => {
  home.classList.remove("current");
  bookmark.classList.remove("current");
  profil.classList.remove("current");
  add.classList.add("current");
});

nav_profil.addEventListener("click", () => {
  home.classList.remove("current");
  bookmark.classList.remove("current");
  add.classList.remove("current");
  profil.classList.add("current");
});

/*currently*/
nav_home.addEventListener("click", () => {
  nav_bookmark.classList.remove("currently");
  nav_add.classList.remove("currently");
  nav_profil.classList.remove("currently");
  nav_home.classList.add("currently");
});

nav_bookmark.addEventListener("click", () => {
  nav_home.classList.remove("currently");
  nav_add.classList.remove("currently");
  nav_profil.classList.remove("currently");
  nav_bookmark.classList.add("currently");
});

nav_add.addEventListener("click", () => {
  nav_home.classList.remove("currently");
  nav_bookmark.classList.remove("currently");
  nav_profil.classList.remove("currently");
  nav_add.classList.add("currently");
});

nav_profil.addEventListener("click", () => {
  nav_home.classList.remove("currently");
  nav_bookmark.classList.remove("currently");
  nav_add.classList.remove("currently");
  nav_profil.classList.add("currently");
});
