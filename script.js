const cardWrapper = document.querySelector(".content-cards");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const films = [
	{
		id: 0,
		title: "Марсианин",
		original: "The Martian 2015",
		category: "Фантастика/Приключения",
		rating: "7.6",
		link: "/film.html",
		image: "./images/film_image.png",
	},
	{
		id: 1,
		title: "Форрест Гамп",
		original: "Forrest Gump 1994",
		category: "Комедия/Романтика",
		rating: "8.9",
		link: "/film.html",
		image: "./images/forrest.png",
	},
	{
		id: 2,
		title: "Гордость и предубеждение",
		original: "Pride and Prejudice 2005",
		category: "Драма/Мелодрама",
		rating: "8.1",
		link: "/film.html",
		image: "./images/Pride.png",
	},
];
const render = (films) => {
	cardWrapper.innerHTML = "";
	films.forEach((item) => {
		cardWrapper.insertAdjacentHTML(
			"beforeend",
			`
     <a href="${item.link}" class="content-cards_item">
    <div class="content-cards_item--img">
     <img src="${item.image}"
    alt="film image"/>
     </div>
     <div class="content-cards_item--title">
        <h5>${item.title},</h5>
         <span>${item.original}</span></div
    >
     <p class="content-cards_item--description">
	 ${item.category}
     </p>
     <p class="content-cards-item--rating">${item.rating}</p>
 </a>`
		);
	});
};
searchButton.addEventListener("click", () => {
	render(films.filter((item) => item.title.includes(searchInput.value)));
});
searchButton.addEventListener("click", () => {
	render(films.filter((item) => item.original.includes(searchInput.value)));
});
render(films);
