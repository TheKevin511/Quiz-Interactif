// 1 . Récupérer les élément du DOM
const totalQuiz = document.querySelector('#totalQuiz')
const containerBegin = document.querySelector('.container-begin')
const containerAllQuiz = document.querySelector('.container-all-quiz')
const containerScore = document.querySelector('.container-score')
const btnCommencer = document.querySelector('#btnCommencer')
const quizNumber = document.querySelector('#quizNumber')
const quiz = document.querySelector('#quiz')
const reponseUser = document.querySelector('#reponseUser')
const btnValider = document.querySelector('#btnValider')
const pourcentage = document.querySelector('#scorePourcentage')
const chiffre = document.querySelector('#scoreChiffre')
const btnTry = document.querySelector('#btnTry')
const attente = document.querySelector('#attente')

// 2 . Tableau des questions - réponses
let tableauQuiz = [
    { question: "Quelle est la capitale de la France ?", reponse: "Paris" },
    { question: "Quelle est la capitale du Japon ?", reponse: "Tokyo" },
    { question: "Quelle est la capitale de l'Australie ?", reponse: "Canberra" },
    { question: "Quelle est la capitale du Brésil ?", reponse: "Brasília" },
    { question: "Quelle est la capitale du Canada ?", reponse: "Ottawa" },
    { question: "Quelle est la capitale de la Côte d'Ivoire ?", reponse: "Yamoussoukro" },
    { question: "Quelle est la capitale du Sénégal ?", reponse: "Dakar" },
    { question: "Quelle est la capitale de l'Argentine ?", reponse: "Buenos Aires" },
    { question: "Quelle est la capitale de l'Inde ?", reponse: "New Delhi" },
    { question: "Quelle est la capitale de l'Égypte ?", reponse: "Le Caire" },
    { question: "Quelle est la capitale de l'Italie ?", reponse: "Rome" },
    { question: "Quelle est la capitale de l'Espagne ?", reponse: "Madrid" },
    { question: "Quelle est la capitale de l'Allemagne ?", reponse: "Berlin" },
    { question: "Quelle est la capitale du Portugal ?", reponse: "Lisbonne" },
    { question: "Quelle est la capitale du Royaume-Uni ?", reponse: "Londres" },
    { question: "Quelle est la capitale de la Grèce ?", reponse: "Athènes" },
    { question: "Quelle est la capitale de la Russie ?", reponse: "Moscou" },
    { question: "Quelle est la capitale de la Belgique ?", reponse: "Bruxelles" },
    { question: "Quelle est la capitale de la Suisse ?", reponse: "Berne" },
    { question: "Quelle est la capitale des Pays-Bas ?", reponse: "Amsterdam" },
    { question: "Quelle est la capitale de la Turquie ?", reponse: "Ankara" },
    { question: "Quelle est la capitale de la Chine ?", reponse: "Pékin" },
    { question: "Quelle est la capitale de la Corée du Sud ?", reponse: "Séoul" },
    { question: "Quelle est la capitale de la Thaïlande ?", reponse: "Bangkok" },
    { question: "Quelle est la capitale du Vietnam ?", reponse: "Hanoï" },
    { question: "Quelle est la capitale de l'Indonésie ?", reponse: "Jakarta" },
    { question: "Quelle est la capitale du Maroc ?", reponse: "Rabat" },
    { question: "Quelle est la capitale de l'Algérie ?", reponse: "Alger" },
    { question: "Quelle est la capitale de la Tunisie ?", reponse: "Tunis" },
    { question: "Quelle est la capitale du Mali ?", reponse: "Bamako" },
    { question: "Quelle est la capitale du Burkina Faso ?", reponse: "Ouagadougou" },
    { question: "Quelle est la capitale du Ghana ?", reponse: "Accra" },
    { question: "Quelle est la capitale du Nigeria ?", reponse: "Abuja" },
    { question: "Quelle est la capitale du Cameroun ?", reponse: "Yaoundé" },
    { question: "Quelle est la capitale du Kenya ?", reponse: "Nairobi" },
    { question: "Quelle est la capitale de l'Afrique du Sud ?", reponse: "Pretoria" },
    { question: "Quelle est la capitale des États-Unis ?", reponse: "Washington" },
    { question: "Quelle est la capitale du Mexique ?", reponse: "Mexico" },
    { question: "Quelle est la capitale de Cuba ?", reponse: "La Havane" },
    { question: "Quelle est la capitale du Chili ?", reponse: "Santiago" },
    { question: "Quelle est la capitale de la Colombie ?", reponse: "Bogota" },
    { question: "Quelle est la capitale du Pérou ?", reponse: "Lima" },
    { question: "Quelle est la capitale de la Norvège ?", reponse: "Oslo" },
    { question: "Quelle est la capitale de la Suède ?", reponse: "Stockholm" },
    { question: "Quelle est la capitale de la Pologne ?", reponse: "Varsovie" },
    { question: "Quelle est la capitale de l'Autriche ?", reponse: "Vienne" },
    { question: "Quelle est la capitale de la Croatie ?", reponse: "Zagreb" },
    { question: "Quelle est la capitale de l'Arabie Saoudite ?", reponse: "Riyad" },
    { question: "Quelle est la capitale de l'Ukraine ?", reponse: "Kiev" },
    { question: "Quelle est la capitale de la Nouvelle-Zélande ?", reponse: "Wellington" }
];

totalQuiz.textContent = tableauQuiz.length


// 3 . Initialisation du score et de l'index en cours
let score = 0
let index = 0

afficherQuiz()

// 4 . Fonction pour afficher les questions
function afficherQuiz(){
    
    quiz.textContent = tableauQuiz[index].question
    quizNumber.textContent = 'Question ' + (index + 1) + ' / ' + tableauQuiz.length 

    quiz.style.animation = 'none';
    quiz.offsetHeight;  //remettre l'animation à zero
    quiz.style.animation = 'quiz 0.2s linear';
}


// 5 . Fonction pour supprimer les accent d'un texte
function clear(text){
    return text
        .normalize('NFD')                // Chaque accent devient un caractère
        .replace(/\p{Diacritic}/gu, "")  // Supprime les accents
        .toLowerCase()                   
        .trim();
}


// 6 . Fonction pour afficher le score
function afficherScore(){
    containerAllQuiz.style.display = 'none'

    containerScore.style.display = 'flex'
    pourcentage.textContent = (score * 100) / tableauQuiz.length + ' %'
    chiffre.textContent = `${score} / ${tableauQuiz.length} bonnes réponses`
}

// 7 . Fonction pour incrementer le score
function scoreValue(){

    const reponse = reponseUser.value
    const correct = tableauQuiz[index].reponse

    const p = document.createElement('p')
    p.id = 'message'

    if( clear(reponse) === clear(correct) ){
        score++
        p.textContent = 'Bravo. correct'
        p.style.color = '#00c2d1'
    }else{
        p.textContent = "Faux. C'était " +  correct 
        p.style.color = '#ff4757'
    }

    quiz.insertAdjacentElement('afterend' , p)

    btnValider.disabled = true
    btnValider.style.cursor = 'not-allowed'
    btnValider.style.animation = 'none'

    setTimeout(() => {
        p.remove()

        btnValider.disabled = false
        btnValider.style.cursor = 'pointer'
        btnValider.style.animation = ''
    }, 1500);
}



// 7 . Evènements

// Bouton commencer
btnCommencer.addEventListener('click' , () => {
    containerBegin.style.display = 'none'
    containerAllQuiz.style.display = 'flex'

    reponseUser.focus()
})



// Bouton valider
btnValider.addEventListener('click' , ()=>{
    
    scoreValue()
    
    setTimeout(() => {
        index++

        if(index < tableauQuiz.length){
            afficherQuiz()

        }else{
            afficherScore()
        }
        
        reponseUser.value = ''
        reponseUser.focus()
    }, 1500);

})



// Bouton pour réessayer le quiz
btnTry.addEventListener('click' , ()=>{
    score = 0
    index = 0

    afficherQuiz()

    containerScore.style.display = 'none'
    attente.style.display = 'block'

    setTimeout(() => {
        attente.style.display = 'none'
        containerBegin.style.display = 'flex'
    }, 1000);
    
})



