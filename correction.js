/*************************************************
1. Ajoutez un fond au document
**************************************************/
const newBackgroundImage =
	"https://i.picsum.photos/id/51/5000/3333.jpg?hmac=9dZb89mIRt-mPQpI_ScJAxVsNI82SFCGOuiKsvGSchY";
const bodyElement = document.querySelector("body");

const changeBackgroundImage = (element, newBackgroundImage) => {
	element.style.backgroundImage = `url(${newBackgroundImage})`;
};

window.addEventListener("DOMContentLoaded", () =>
	changeBackgroundImage(bodyElement, newBackgroundImage)
);

/*************************************************
2. Trouvez un élément par son id et transformez-le
**************************************************/
const elementToChange = document.getElementById("text-to-change");
const newColor = "cornflowerblue"; //remplacez
const newSize = "2rem"; //remplacez
const innerHTML =
	"Codez toujours comme si la personne qui allait maintenir votre code était un <em>violent psychopathe</em> qui sait où vous habitez.";

const changeTextColor = (elementToChange, color) => {
	elementToChange.style.color = color;
};

const changeTextSize = (elementToChange, size) => {
	elementToChange.style.fontSize = size;
};

const changeInnerHTML = (elementToChange, innerHTML) => {
	elementToChange.innerHTML = innerHTML;
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
const elementsToChange = document.querySelectorAll(".make-coral");

const changeTextColorForAllElements = () => {
	elementsToChange.forEach((element) => changeTextColor(element, "coral"));
};

window.addEventListener("DOMContentLoaded", changeTextColorForAllElements);

/**************************************************
4. Afficher une modale quand on clique sur un bouton
**************************************************/
const modalElement = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");

const showElement = (element) => {
	element.style.display = "flex";
};

const hideElement = (element) => {
	element.style.display = "none";
};

openModalButton.onclick = () => showElement(modalElement);
closeModalButton.onclick = () => hideElement(modalElement);

//BONUS
window.onclick = function (e) {
	if (e.target === modalElement) {
		hideElement(modalElement);
	}
};

/**************************************************
5. Utiliser la valeur sélectionnée par l'utilisateur
pour changer l'apparence d'un élément
**************************************************/
const selectElement = document.getElementById("background-selector");
const changeBackgroundElement = document.getElementById("change-background");

const handleChange = (event) => {
	const newBackground = event.target.value;
	changeBackgroundImage(changeBackgroundElement, newBackground);
};

selectElement.onchange = handleChange;

/**************************************************
6. Afficher une ToDo list à partir d'un tableau
**************************************************/
const TODO_LIST = [
	"Profiter du soleil",
	"M'entraîner en JS",
	"Manger, très important...",
	"Dormir, très important aussi...",
];

const toDoListElement = document.getElementById("to-do-list");

const createLiElementWithText = (text) => {
	const li = document.createElement("li");
	li.innerHTML = text;
	return li;
};

const fillListWithStringsArray = (listElement, stringsArray) => {
	toDoListElement.innerHTML = "";
	stringsArray.forEach((string) => {
		toDoListElement.appendChild(createLiElementWithText(string));
	});
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
	//Méthode 1 :
	try {
		const results = await fetch(API_QUERY_URL);
		const data = await results.json();
		return data?.jokes;
	} catch (e) {
		console.error(e);
	}

	//Méthode 2 :
	/*
    const data = await fetch(API_QUERY_URL)
        .then((res) => res.json())
        .catch((e) => console.error(e));
    return data?.jokes;

    return quotes;
    */
};

const createLiElementWithJokeParts = (joke) => {
	const li = document.createElement("li");
	const firstPartSpan = document.createElement("span");
	const secondPartSpan = document.createElement("span");
	firstPartSpan.innerHTML = joke.setup;
	secondPartSpan.innerHTML = joke.delivery;
	li.append(firstPartSpan);
	li.append(secondPartSpan);
	jokesListElement.append(li);
};

const fillListWithApiData = async () => {
	jokesListElement.innerHTML = "";
	const jokes = await fetchJokes();
	if (jokes?.length) {
		jokes.forEach((joke) => {
			createLiElementWithJokeParts(joke);
		});
	} else {
		jokesListElement.innerHTML = "<p>Aucune blague n'a été trouvée...</p>";
	}
};

window.addEventListener("DOMContentLoaded", fillListWithApiData);
