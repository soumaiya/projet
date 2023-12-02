//Attend que le contenue de la page soit chargé 
document.addEventListener('DOMContentLoaded', function() {
// récupère le formulaire du quizz par son élément du DOM "quiz-form"
  const form = document.getElementById('quiz-form');
//Ajoute un gestionnaire d'événement de soumission du formulaire 
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
    checkAnswers(); // Appelle la fonction pour verifier les reponses 
  });
});
//Fonction pour verifier les reponse du quizz 
function checkAnswers() {
// Objetc avec les reponses correctes pour chaque question du quiz 
  const correctAnswers = {
    'answer-1': 'true',
    'answer-2': 'true',
    'answer-3': 'true'
  };
// initialisation des compteur 
  let totalCorrect = 0;
  let allQuestionsAnswered = true; // Vérifie si toutes les questions ont été répondues

// parcouts chaque question du quizz 
  Object.keys(correctAnswers).forEach(questionId => {
//selectionne la reponse choisie pour chaque question 
    const selectedAnswer = document.querySelector(`input[name=${questionId}]:checked`);
// verifie les reponses selectionnés
    if (selectedAnswer) {
      const selectedValue = selectedAnswer.value; // valeur de la reponse selectionné 
      const correctValue = correctAnswers[questionId]; // valeur de la reponse correcte 
      // Récupère l'élément parent de la question
      const questionItem = selectedAnswer.closest('.question-item'); 

// verifie si les reponses sont vrai ou fausse 
      if (selectedValue === correctValue) {
// Bonne réponse : toute la question en vert
        questionItem.style.color = 'green'; 
        totalCorrect++;
// Mauvaise réponse : toute la question en rouge
      } else {
        questionItem.style.color = 'red'; 
// Si une réponse est incorrecte, marque comme fausse
        allQuestionsAnswered = false; 
      }
// Si une question n'a pas de réponse, marque comme fausse
    } else {
      allQuestionsAnswered = false; 
    }
  });
// recuperer les element du DOM pour afficher le message de fin
  const quizForm = document.getElementById('quiz-form');
  const alertDiv = document.getElementById('alert');
// message de felicitation si toute les reponses son correcte 
  if (allQuestionsAnswered && totalCorrect === Object.keys(correctAnswers).length) {
    alertDiv.style.display = 'block';
    alertTitle.textContent = 'Congratulations!!';
    alertDiv.textContent = 'You got them all right!'; // Affichage du message de félicitations
    quizForm.classList.remove('incorrect');
    quizForm.classList.add('correct');
  } else {
    alertDiv.style.display = 'none';
    quizForm.classList.remove('correct');
    quizForm.classList.add('incorrect');
  }
}
