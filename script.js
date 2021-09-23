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



const form = document.querySelector("form");
let addQ = {};
/*submit formular object
form.addEventListener("submit", (event) => {
  addQ = {
    question: form.elements.question.value,
    answer: form.elements.answer.value,
    tags: form.elements.tags.value,
  };

  console.log(addQ);
  event.preventDefault();
});*/
//submit formular array
const array = [
  {
    question: "ist das eine frage?",
    answer: "ja das ist die antwort",
    tags: "a",
  }
];

form.addEventListener("submit", (event) => {
  array.push(
    {
      question: form.elements.question.value,
      answer: form.elements.answer.value,
      tags: form.elements.tags.value,
    }
  );
  console.log(array);
  event.preventDefault();
  renderQuestions();
});

/*inner html*/

const createQuestionsHtml=(array) => {
  let html = "";
  array.forEach((wurst) => {
    html =
      html +
      `
    <container class="question">
    <div class="bookmark-icon"></div>
          <h3>Question</h3>
          <p class="distance2h3">
            ${wurst.question}
          </p>
          <button ><p>Show Answer</p></button>
          <p class="answer">
            ${wurst.answer}
          </p>
          <ul>
            <li>${wurst.tags}</li>
            <li>${wurst.tags}</li>
            <li>${wurst.tags}</li>
            <li>${wurst.tags}</li>
          </ul>
    </container>      
          `;
  });
  console.log(html);
  return html;
};
console.log(createQuestionsHtml(array));

const renderQuestions = () => {
  const questionHtml = createQuestionsHtml(array);
  const questionsContainer = document.querySelector('#home');

  questionsContainer.innerHTML = questionHtml;
  /*bookmark and show answer*/
  const cards = document.querySelectorAll(".question");

  cards.forEach((card) => {
    const bookmarks = card.querySelector(".bookmark-icon");
    console.log(card)
    bookmarks.addEventListener("click", () => {
      bookmarks.classList.toggle("bookmark-icon-color");
    });
  });

  cards.forEach((card) => {
    const buttonList = card.querySelector("button");
    const answerList = card.querySelector(".answer");

    buttonList.addEventListener("click", () => {
      answerList.classList.toggle("show");
    });
  });
};

renderQuestions();