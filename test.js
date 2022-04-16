(function() {
  const myQuestions = [
    {
      question: "Най-голямото трицифрено число е цифра на единиците 8 е:",
      answers: {
        a: "998",
        b: "198",
        c: "888"
       },
      correctAnswer: "a" 
    
    },
    {
      question: "Числото, което е 3 пъти по-голямо от 230, е:",
      answers: {
        a: "693",
        b: "690",
        c: "490"
      },
      correctAnswer: "b"
    },
    {
      question: "Кое сравнение е вярно?",
      answers: {
        a: "(537 + 315):2 > (977 - 746).2",
        b: "(537 + 315):2 < (977 - 746).2",
        c: "(537 + 315):2 = (977 - 746).2",
       
      },
      correctAnswer: "b"
    },
    {
      question: "Ако увеличим числото 129 със 7, ще получим:",
      answers: {
        a: "136",
        b: "803",
        c: "903",
       
      },
      correctAnswer: "a"
    },
     {
      question: "Неизвестният множител в равенството 4. x = 936 e:",
      answers: {
        a: "324",
        b: "243",
        c: "234",
       
      },
      correctAnswer: "c"
    },
     {
      question: "Посочете двойката числа, с които трябва да се допълни числовата редица 14, 28, ..., 112, 224, ..., 896.",
      answers: {
        a: "56 и 448",
        b: "84 и 672",
        c: "56 и 484",
       
      },
      correctAnswer: "a"
    },
     {
      question: "Ако AB = 146мм, BC = 180мм, а CA = AB, обиколката на триъгълника ABC е:",
      answers: {
        a: "326",
        b: "472",
        c: "652",
       
      },
      correctAnswer: "b"
    },
     {
      question: "Кати редилапъзел от 500 части. Първият ден успяла да подреди 168 части, втория - с 56 части повече, а третия ден довършила пъзела. Третия ден Кати подредила:",
      answers: {
        a: "108 части",
        b: "224 части",
        c: "392 части",
       
      },
      correctAnswer: "a"
    },
     {
      question: "Делимото е 756, а делителя е 7. Часното е:",
      answers: {
        a: "109",
        b: "108",
        c: "117",
       
      },
      correctAnswer: "b"
    },
     {
      question: "Намислих число, разделих го с 3 и получих 326. Намисленото от мен число е:",
      answers: {
        a: "978",
        b: "972",
        c: "968",
       
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