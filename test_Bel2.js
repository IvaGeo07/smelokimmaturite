(function() {
  const myQuestions = [
    
    {
      question: "Кое от тези две определения е на художествения текст?",
      answers: {
        a: "Текст който внушава чувства в читателя и му дава възможност да си представи това което чете. ",
        b: "Текст с който се предават сведения, знания и други",
        c: "И двете"
       },
      correctAnswer: "a" 
    
    },
    {
      question: "Какъв по вид е следния текст: „Падна чудна лятна нощ, прохладна и свежа. Безкрайното Тракийско поле потъна в мрака, сякаш изчезна, и се предаде на дълбока почивка под монотонния напев на жаби и щурци. Мир и ведрина повея от дълбокото звездно небе. Земята отвори страстните си гърди и замря в наслада.“ ? ",
      answers: {
        a: "Разсъждение",
        b: "Описание",
        c: "Повествование"
      },
      correctAnswer: "b"
    },
    {
      question: "Кое изразно средство намирате в изречението: „Нощта вече покриваше с тъмното си було Черепишкия манастир.“ ?",
      answers: {
        a: "Епитет",
        b: "Метафора",
        c: "Сравнение",
       
      },
      correctAnswer: "a"
    },
     {
      question: "С коя дума е представено изразното средство в изречението от трети въпрос: „Нощта вече покриваше с тъмното си було Черепишкия манастир.“ ?",
      answers: {
        a: "Було",
        b: "Покриваше",
        c: "Тъмното ",
       
      },
      correctAnswer: "c"
    },
     {
      question: "Текст разсъждение наричаме текст с който:",
      answers: {
        a: "Разясняваме своето мнение по-определен проблем",
        b: "Описваме предме",
        c: "Описваме случка",
       
      },
      correctAnswer: "a"
    },
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();