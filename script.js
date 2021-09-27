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
const home = document.querySelector(".link-home");
const bookmark = document.querySelector(".link-bookmark");
const add = document.querySelector(".link-add");
const profil = document.querySelector(".link-profil");

home.addEventListener("click", () => {
  bookmark.classList.remove("currently");
  add.classList.remove("currently");
  profil.classList.remove("currently");
  home.classList.add("currently");
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


//get array from local storage
const getQuestions = () => {
  let array;

  if (localStorage.getItem("array")) {
    array = JSON.parse(localStorage.getItem("array"));
  } else {
    array = []; // <-- initial value goes here
    localStorage.setItem("array", JSON.stringify(array));
  }
  return array;
};
//set questions
const setQuestions = (newQuestions) => {
  localStorage.setItem("array", JSON.stringify(newQuestions));
};
//submit formular array
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  array = getQuestions();
  array.push({
    question: form.elements.question.value,
    answer: form.elements.answer.value,
    tags: form.elements.tags.value,
    isBookmarked: false,
  });
  
  setQuestions(array);
  renderQuestions(array);
});

/*inner html*/

const createQuestionsHtml = (array) => {
  //split tags section
  let html = "";
  array.forEach((wurst, index) => {
    const splitTags = (stringToSplit, seperator) => {
      const arrayTags = stringToSplit.split(seperator);
      let taghtml = "";
      console.log(arrayTags);
      arrayTags.forEach((arrayTag) => {
        taghtml =
          taghtml +
          `
            <li>${arrayTag}</li>
      `;
      });
      return taghtml;
    };
    const space = ",";
    const tagHtml = splitTags(wurst.tags, space);
    //isBookmarked section
    const bookmarkedClass = wurst.isBookmarked ? " bookmark-icon-color" : "";

    html =
      html +
      `
    <div class="distance-header"></div>
    <container class="question">
    <div class="bookmark-icon${bookmarkedClass}" data-index="${index}"></div>
          <h3>Question</h3>
          <p class="distance2h3">
            ${wurst.question}
          </p>
          <button data-index="${index}"><p>Show Answer</p></button>
          <p class="answer">
            ${wurst.answer}
          </p>
          
          <ul>
          ${tagHtml}
          </ul>
    </container>
    <div class="distance-nav"></div>    
          `;
  });

  return html;
};
//render question cards
const renderQuestions = () => {

  array = getQuestions();

  const questionHtml = createQuestionsHtml(array);
  const questionsContainer = document.querySelector("#home");//oder .question?
  questionsContainer.innerHTML = questionHtml;

  /*bookmarked questions filter*/
  const bookmarkedQuestions = array.filter((wurst) => {
    return wurst.isBookmarked == true;
  });
  const bookmarkedQuestionsHtml = createQuestionsHtml(bookmarkedQuestions);
  const bookmarkedQuestionsContainer = document.querySelector("#bookmark");
  bookmarkedQuestionsContainer.innerHTML = bookmarkedQuestionsHtml;

  /*bookmark and show answer*/
  const cards = document.querySelectorAll(".question");

  cards.forEach((card, index) => {
    const buttonList = card.querySelector("button");
    const answerList = card.querySelector(".answer");

    buttonList.addEventListener("click", () => {
      answerList.classList.toggle("show");
      console.log(index);
    });
  });
  cards.forEach((card, index) => {
    const bookmarks = card.querySelector(".bookmark-icon");
    console.log(card);
    bookmarks.addEventListener("click", () => {
      bookmarks.classList.toggle("bookmark-icon-color");

      const index = bookmarks.dataset.index;
      array[index].isBookmarked = !array[index].isBookmarked;
      console.log(index);

      setQuestions(array);
      renderQuestions();
      
    });
  });
};

renderQuestions();
