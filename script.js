/*navigation one page*/
const pages = document.querySelectorAll(".page");
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.remove("current");
    });
    const attribute = link.getAttribute("href");
    const nextPage = document.querySelector(attribute);
    nextPage.classList.add("current");
  });
});
/*currently*/
const home = document.querySelector('.link-home');
const bookmark = document.querySelector('.link-bookmark')
const add = document.querySelector(".link-add");
const profil = document.querySelector(".link-profil");


home.addEventListener("click", () => {
  bookmark.classList.remove('currently');
  add.classList.remove('currently');
  profil.classList.remove('currently');
  home.classList.add('currently');
});
bookmark.addEventListener("click", () => {
  home.classList.remove("currently");
  add.classList.remove("currently");
  profil.classList.remove("currently");
  bookmark.classList.add("currently");
});
add.addEventListener("click", () => {
  bookmark.classList.remove("currently");
  home.classList.remove("currently");
  profil.classList.remove("currently");
  add.classList.add("currently");
});
profil.addEventListener("click", () => {
  bookmark.classList.remove("currently");
  add.classList.remove("currently");
  home.classList.remove("currently");
  profil.classList.add("currently");
});



/*bookmark */
const cards = document.querySelectorAll(".question");

cards.forEach((card) => {
  const linksBookmark = card.querySelector("a");
  const bookmarks = card.querySelector("img");
  
  linksBookmark.addEventListener("click", () => {
    bookmarks.classList.toggle("color");
  })
})
/*and show answer*/
cards.forEach((card) => {
  const buttonList = card.querySelector("button");
  const answerList = card.querySelector(".answer");

  buttonList.addEventListener("click", () => {
    answerList.classList.toggle("show"); 
  });
});

/*submit formular object*/
const form = document.querySelector("form");
let addQ = {};

form.addEventListener("submit", (event) => {
  addQ = {
    question: form.elements.question.value,
    answer: form.elements.answer.value,
    tags: form.elements.tags.value,
  };

  console.log(addQ);
  event.preventDefault();
});
form.addEventListener("submit", (event) => {
  addQ = {
    question: form.elements.question.value,
    answer: form.elements.answer.value,
    tags: form.elements.tags.value,
  };

  console.log(addQ);
  event.preventDefault();
});
//submit formular array
const array = [];

form.addEventListener("submit", (event) => {
  array.push(
    (addQ = {
      question: form.elements.question.value,
      answer: form.elements.answer.value,
      tags: form.elements.tags.value,
    })
  );
  console.log(array);
  event.preventDefault();
});
