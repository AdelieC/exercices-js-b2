/*************************************************
1. Ajoutez un fond au document
**************************************************/
const newBackgroundImage = ""; //l'url de votre image ici
const bodyElement = undefined; //remplacez par le code pour récupérer l'élément body

const changeBackgroundImage = (element, newBackgroundImage) => {
	//complétez cette fonction
};

window.addEventListener("DOMContentLoaded", () =>
	changeBackgroundImage(bodyElement, newBackgroundImage)
);

/*************************************************
2. Trouvez un élément par son id et transformez-le
**************************************************/
const newColor = "cornflowerblue";
const newSize = "2em";
const innerHTML =
	"Codez toujours comme si la personne qui allait maintenir votre code était un <em>violent psychopathe</em> qui sait où vous habitez.";
const elementToChange = undefined; //remplacez par le code pour récupérer l'élément

const changeTextColor = (elementToChange, color) => {
	//complétez cette fonction
};

const changeTextSize = (elementToChange, size) => {
	//complétez cette fonction
};

const changeInnerHTML = (elementToChange, innerHTML) => {
	//complétez cette fonction
};

window.addEventListener("DOMContentLoaded", () => {
	changeTextColor(elementToChange, newColor);
	changeTextSize(elementToChange, newColor);
	changeInnerHTML(elementToChange, innerHTML);
});

/**************************************************
3. Utiliser une classe pour changer l'apparence
de plusieurs éléments en même temps
**************************************************/
const elementsToChange = [];
//remplacez ce tableau vide par le code pour récupérer les éléments

const changeTextColorForAllElements = () => {
	//complétez cette fonction en utilisant changeTextColor ;-)
};

window.addEventListener("DOMContentLoaded", changeTextColorForAllElements);

/**************************************************
4. Afficher une modale quand on clique sur un bouton
**************************************************/
const modalElement = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
//je vous mâche le travail cette fois. C'est un peu répétitif autrement.

const showElement = (element) => {
	//complétez en utilisant la propriété style de modalElement
};

const hideElement = (element) => {
	//complétez en utilisant la propriété style de modalElement
};

/*...votre code pour ajouter des eventlisteners qui utiliseront ces fonctions ici...*/

//tentez de faire la question bonus ?

/**************************************************
5. Utiliser la valeur sélectionnée par l'utilisateur
pour changer l'apparence d'un élément
**************************************************/
const selectElement = document.getElementById("background-selector");
const changeBackgroundElement = document.getElementById("change-background");

const handleChange = (event) => {
	//complétez cette fonction en utilisant la propriété target de l'event.
	//N'oubliez pas d'utiliser la fonction changeBackgroundImage ;-)
};

/*...votre code pour ajouter l'event listener et utiliser la fonction handleChange ici...*/

/**************************************************
6. Afficher une ToDo list à partir d'un tableau
**************************************************/
const TODO_LIST = [
	"Profiter du soleil",
	"M'entraîner en JS",
	"Manger, très important...",
	"Dormir, très important aussi...",
];

const toDoListElement = document.getElementById("to-do-list"); //remplacez pour récupérer l'élément html todo list

const createLiElementWithText = (text) => {
	const li = undefined; //remplacez par le code pour créer un element li

	//Ajoutez le code pour mettre du texte dans l'élément li

	return li;
};

const fillListWithStringsArray = (listElement, stringsArray) => {
	//n'oubliez pas de vider l'élément avant de le remplir
	//complétez la fonction en utilisant une boucle et createLiElementWithText
};

window.addEventListener("DOMContentLoaded", () =>
	fillListWithStringsArray(toDoListElement, TODO_LIST)
);

/**************************************************
7. Afficher une liste de blagues plus ou moins douteuses depuis une API externe
**************************************************/
const amountOfResults = 10;
const jokesListElement = document.getElementById("jokes-list");
const API_QUERY_URL = `https://v2.jokeapi.dev/joke/Any?lang=fr&amount=${amountOfResults}`;

const fetchJokes = async () => {
	//Méthode 1 avec await/async:
	try {
		//utilisez la fonction fetch pour réquêter API_QUERY_URL
	} catch (e) {
		console.error(e);
	}

	//OU Méthode 2 avec then/catch:
	//utilisez la fonction fetch pour réquêter API_QUERY_URL en enchaînant les promises avec then puis catch
};

const createLiElementWithJokeParts = (joke) => {
	//Créer l'élément li
	//Créer l'élément span pour la première partie de la blague + y mettre la valeur de joke.setup
	//Créer l'élément span pour la seconde partie de la blague + y mettre la valeur de joke.delivery
	//Mettre les span dans li
	//Mettre li dans la liste jokesListElement
};

const fillListWithApiData = async () => {
	//Videz le contenu de jokesListElement
	//Appelez la fonction fetchJokes
	//Si vous avez des résultats,
	//affichez les en faisant une boucle sur les résultats dans laquelle vous appelerez createLiElementWithJokeParts(joke);
	//Sinon, créez un paragraphe qui indiquera qu'il n'y a pas de résultat
	//et ajoutez-le à jokesListElement
};

window.addEventListener("DOMContentLoaded", fillListWithApiData);
