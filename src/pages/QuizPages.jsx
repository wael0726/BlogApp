import React, { useState } from "react";


const questions = [
    {
      question: "Pourquoi est-il important de comprendre les bases de l’intelligence artificielle ?",
      options: [
        "Pour pouvoir coder son propre robot.",
        "Pour mieux apprécier son impact sur notre quotidien et notre avenir.",
        "Parce que c’est obligatoire dans les écoles.",
        "Pour remplacer les humains dans les entreprises.",
      ],
      answer: 1, // Deuxième choix
    },
    {
      question: "ChatGPT est un exemple d’IA. Que fait-il ?",
      options: [
        "Il contrôle des voitures autonomes.",
        "Il détecte les visages sur les photos.",
        "Il joue uniquement aux jeux vidéo.",
        "Il répond aux questions et aide à créer du contenu basé sur des modèles de langage.",
      ],
      answer: 3, // Quatrième choix
    },
    {
      question: "Quel est le but principal du machine learning ?",
      options: [
        "Permettre aux machines d’apprendre à partir de données pour effectuer des tâches sans être explicitement programmées.",
        "Apprendre aux humains à coder.",
        "Rendre les ordinateurs plus rapides.",
        "Remplacer tous les logiciels traditionnels.",
      ],
      answer: 0, // Premier choix
    },
    {
      question: "Qu’est-ce qu’un biais dans les données utilisées par une IA ?",
      options: [
        "Une erreur de calcul.",
        "Une tendance des données à favoriser des décisions incorrectes ou injustes en raison de préjugés humains.",
        "Une optimisation trop rapide de l’algorithme.",
        "Un problème matériel dans les serveurs.",
      ],
      answer: 1, // Deuxième choix
    },
    {
      question: "Pourquoi la surveillance de masse alimentée par l’IA est-elle préoccupante ?",
      options: [
        "Parce qu’elle consomme trop d’énergie.",
        "Parce qu’elle peut réduire la vie privée et accroître les inégalités sociales.",
        "Parce qu’elle ralentit les ordinateurs.",
        "Parce qu’elle remplace les caméras traditionnelles.",
      ],
      answer: 1, // Deuxième choix
    },
    {
      question: "Citez une situation où l’utilisation de l’IA soulève un problème éthique.",
      options: [
        "Lorsqu’elle propose des vidéos amusantes sur YouTube.",
        "Lorsqu’elle est utilisée pour prendre des décisions judiciaires sensibles.",
        "Lorsqu’elle traduit un texte en ligne.",
        "Lorsqu’elle joue de la musique en streaming.",
      ],
      answer: 1, // Deuxième choix
    },
    {
      question: "Que signifie la 'singularité technologique' dans le contexte de l’IA ?",
      options: [
        "Une mise à jour importante des outils de machine learning.",
        "La fusion des ordinateurs avec les robots industriels.",
        "Le moment où l’IA dépasse l’intelligence humaine et devient autonome.",
        "Une panne massive des systèmes d’IA.",
      ],
      answer: 2, // Troisième choix
    },
    {
      question: "Donnez un exemple d’une manière dont l’IA pourrait améliorer la santé dans le futur.",
      options: [
        "Construire de nouvelles machines à laver.",
        "Réduire les coûts des médicaments à travers le monde.",
        "Remplacer les médecins dans les hôpitaux.",
        "Diagnostiquer des maladies rares avec précision.",
      ],
      answer: 3, // Quatrième choix
    },
    {
      question: "Qu’est-ce qu’on entend par 'intelligence artificielle' ?",
      options: [
        "Une machine capable de remplacer l’électricité.",
        "Une machine capable d’imiter l’intelligence humaine.",
        "Un robot qui pense tout seul.",
        "Une technologie réservée aux laboratoires secrets.",
      ],
      answer: 1, // Deuxième choix
    },
    {
      question: "Donnez un exemple d’utilisation courante de l’IA dans notre quotidien.",
      options: [
        "Utiliser une lampe de poche.",
        "Regarder un film classique sans recommandations.",
        "Faire chauffer un four à micro-ondes.",
        "Reconnaissance faciale pour déverrouiller un téléphone.",
      ],
      answer: 3, // Quatrième choix
    },
    {
      question: "Quelle tâche typique l’apprentissage supervisé peut-il accomplir ?",
      options: [
        "Identifier si un email est un spam ou non.",
        "Découvrir automatiquement des groupes cachés dans des données.",
        "Gagner à un jeu vidéo comme un humain.",
        "Faire bouillir de l’eau plus rapidement.",
      ],
      answer: 0, // Premier choix
    },
    {
      question: "Quels sont deux outils populaires pour travailler sur des algorithmes de machine learning ?",
      options: [
        "TensorFlow et PyTorch.",
        "Photoshop et Excel.",
        "Blender et Unity.",
        "Windows et MacOS.",
      ],
      answer: 0, // Premier choix
    },
    {
      question: "Pourquoi l’IA peut-elle être injuste dans ses décisions ?",
      options: [
        "Parce qu’elle manque d’électricité.",
        "Parce qu’elle refuse d’apprendre.",
        "Parce qu’elle est toujours programmée pour mentir.",
        "À cause de biais présents dans les données qu’elle analyse.",
      ],
      answer: 3, // Quatrième choix
    },
    {
      question: "Quel impact l’IA peut-elle avoir sur le marché de l’emploi ?",
      options: [
        "Elle rend tout travail inutile.",
        "Elle n’a aucun effet sur les emplois.",
        "Elle peut remplacer certains emplois humains par l’automatisation.",
        "Elle peut créer des emplois pour tous immédiatement.",
      ],
      answer: 2, // Troisième choix
    },
    {
      question: "Pourquoi est-il important de réguler l’utilisation de l’IA ?",
      options: [
        "Pour qu’elle devienne une technologie réservée aux experts.",
        "Pour qu’elle puisse fonctionner sans électricité.",
        "Pour s’assurer qu’elle soit utilisée de manière responsable et équitable.",
        "Pour éviter qu’elle ne dépasse les ordinateurs traditionnels.",
      ],
      answer: 2, // Troisième choix
    },
    {
      question: "Quel domaine pourrait bénéficier de traitements médicaux personnalisés grâce à l’IA ?",
      options: [
        "La construction.",
        "L’artisanat.",
        "La médecine.",
        "La cuisine.",
      ],
      answer: 2, // Troisième choix
    },
    {
      question: "Quel est l’un des risques majeurs liés à l’évolution de l’IA ?",
      options: [
        "L’extinction de l’électricité mondiale.",
        "La disparition des téléphones portables.",
        "La singularité technologique, où l’IA dépasse l’intelligence humaine.",
        "La surchauffe des ordinateurs.",
      ],
      answer: 2, // Troisième choix
    },
    {
      question: "Comment l’IA pourrait-elle contribuer à la lutte contre le changement climatique ?",
      options: [
        "En optimisant les ressources et en trouvant des solutions écologiques innovantes.",
        "En remplaçant les humains dans les forêts.",
        "En plantant des arbres automatiquement.",
        "En réduisant la température des océans.",
      ],
      answer: 0, // Premier choix
    },
    {
      question: "Quel est l'objectif principal de l'intelligence artificielle ?",
      options: [
        "Créer des machines capables de ressentir des émotions.",
        "Supprimer le besoin de programmateurs humains.",
        "Permettre aux machines d’imiter ou d’améliorer les capacités humaines pour résoudre des problèmes complexes.",
        "Remplacer tous les emplois humains.",
      ],
      answer: 2, // Troisième choix
    },
  ];
  
      

const QuizPages = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setIsCorrect(index === questions[currentQuestion].answer);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);

  return (
    <div className="quiz-page bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute w-[300px] h-[300px] bg-white opacity-10 rounded-full top-5 left-10 blur-xl animate-spin-slow"></div>
      <div className="absolute w-[200px] h-[200px] bg-white opacity-20 rounded-full bottom-5 right-20 blur-xl animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-green-400 to-blue-400 opacity-5 rounded-full -bottom-20 -left-10"></div>

      {/* Introduction */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Bienvenue au Quiz IA !</h1>
          <p className="text-lg">Testez vos connaissances sur l’intelligence artificielle.</p>
        </div>

      {/* Progression */}
      <div className="w-full max-w-3xl mb-5">
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center text-sm mt-2">{progress}% complété</p>
      </div>

      {/* Quiz Card */}
      <div className="max-w-3xl w-full bg-white text-black rounded-lg shadow-lg p-8 transition-all duration-500 transform scale-105">
        <h1 className="text-3xl font-bold mb-5 text-center">
          Question {currentQuestion + 1}/{questions.length}
        </h1>
        <p className="text-lg mb-8 text-center">{questions[currentQuestion].question}</p>

        <div className="options grid grid-cols-1 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`w-full py-3 px-4 rounded-lg text-left text-lg font-medium transition-transform duration-300 transform ${
                selectedOption === index
                  ? isCorrect && selectedOption === index
                    ? "bg-green-500 text-white border-green-500 scale-105"
                    : !isCorrect && selectedOption === index
                    ? "bg-red-500 text-white border-red-500 scale-105"
                    : "bg-gray-100"
                  : "bg-gray-100 hover:bg-indigo-500 hover:text-white"
              }`}
              onClick={() => handleOptionClick(index)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          ))}
        </div>

        {isCorrect !== null && (
          <div className="mt-8 text-center">
            {isCorrect ? (
              <div className="text-green-500 text-lg font-bold animate-bounce">
                Correct! 🎉
              </div>
            ) : (
              <div className="text-red-500 text-lg font-bold animate-shake">
                Incorrect! 😢
              </div>
            )}
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {!isCorrect && selectedOption !== null && (
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all"
              onClick={handleRetry}
            >
              Réessayer
            </button>
          )}
          {isCorrect && currentQuestion < questions.length - 1 && (
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 ml-auto transition-all"
              onClick={handleNextQuestion}
            >
              Suivant
            </button>
          )}
          {isCorrect && currentQuestion === questions.length - 1 && (
            <div className="text-lg font-bold text-green-500 ml-auto animate-bounce">
              Félicitations, vous avez terminé le quiz ! 🎉
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPages;
