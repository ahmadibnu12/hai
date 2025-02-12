const questions = [
    {
        question: "Sebutkan aplikasi yang mengenalkan kita?",
        answers: ["Instagram", "Telegram", "Tik-tok", "Twitter"],
        correct: "Telegram"
    } ,
    {
        question: "Kesepakatan tanggal jadian kita adalah?",
        answers: ["26 mei 2025", "25 april 2023", "21 agustus 2024", "26 mei 2024"],
        correct: "26 mei 2024"
    } ,
    {
        question: "Kalau enno lagi marah, apa yang biasanya dia lakukan?",
        answers: ["diam seribu bahasa", "ngomel terus", "makan banyak", "pergi jalan jalan", "semua benar"],
        correct: "semua benar"
    } ,
    {
        question: "Kalau enno jadi hewan, kira kira dia bakal jadi apa?",
        answers: ["kucing", "burung hantu", "panda", "kelinci"],
        correct: "burung hantu"
    } ,
    {
        question: "Siapa boyband K fav enno? ",
        answers: ["seventeen", "BTS", "enhypen", "EXO"],
        correct: "enhypen"
    } ,
    {
        question: "Siapa member enhypen favorit enno?",
        answers: ["jay", "jake", "sunghoon", "jungwoon"],
        correct: "jake"
    } ,
    {
        question: "Kerajaan Hindu-Budha tertua di indonesia adalah?",
        answers: ["majapahit", "sriwijaya", "tarumanegara", "kutai"],
        correct: "kutai"
    } ,
    {
        question: "Gas yang diperlukan tumbuhan untuk fotosintesis adalah?",
        answers: ["O 2", "CO 2", "nitrogen", "hidrogen"],
        correct: "CO 2"
    } ,
    {
        question: "Hasil dari 2⁵ % 2² ?",
        answers: ["4", "6", "8", "16"],
        correct: "8"
    } ,
    {
        question: "Jika ahmad diberikan waktu 1 hari untuk menghabiskan harinya bersama enno, apa yang akan dia lakukan?",
        answers: ["Jalan-Jalan ke tempat baru", "nonton film dan makan enak", "ngobrol panjang tentang banyak hal", "tiduran sambil bermalas malasan"],
        correct: "Jalan-Jalan ke tempat baru"
    } ,
    {
        question: "Dari skala 1-10, seberapa sabar enno menghadapi sesuatu yang menyebalkan?",
        answers: ["1-3 (cepat marah)", "4-6 (tergantung situasi)", "7-9 (sangat sabar)", "10 (kesabaran tingkat dewa)"],
        correct: "1-3 (cepat marah)"
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-button");
  const resultText = document.getElementById("result");

  function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.style.display = "none";
      showQuestion();
  }

  function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      questionText.innerText = currentQuestion.question;

      currentQuestion.answers.forEach(answer => {
          const button = document.createElement("button");
          button.innerText = answer;
          button.classList.add("btn");
          button.addEventListener("click", () => selectAnswer(answer, currentQuestion.correct));
          answerButtons.appendChild(button);
      });
  }

  function resetState() {
      nextButton.style.display = "none";
      answerButtons.innerHTML = "";
  }

  function selectAnswer(selected, correct) {
      if (selected === correct) {
          score++;
      }
      nextButton.style.display = "block";
  }

  function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          showQuestion();
      } else {
          showResult();
      }
  }

  function showResult() {
    questionText.innerText = `Kuis selesai! Skor kamu: ${score} dari ${questions.length}`;
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
  } 

  function goBack() {
      window.location.href = "1.html";
  }


  startQuiz();