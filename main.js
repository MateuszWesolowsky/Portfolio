// HEADER SHADOW
const header = document.querySelector("header");

const headerShadow = () => {
	const scrollY = window.scrollY;
	if (scrollY > 0) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
};
window.addEventListener("scroll", headerShadow);

// TEXT - ADDING LETTERS
const h1 = document.querySelector(".me-h1");
const p = document.querySelector(".me-p");
const text1 = "Mateusz Wesołowski";
const text2 = "Frontend Developer";
let number = 0;
const addLetter = () => {
	h1.textContent += text1[number];
	p.textContent += text2[number];
	number++;
	if (number === text1.length && number === text2.length)
		clearInterval(indexTyping);
};
const indexTyping = setInterval(addLetter, 100);

//BURGER
const burgerBtn = document.querySelector(".burger");
const burgerIconOn = document.querySelector(".fa-bars");
const burgerIconOff = document.querySelector(".fa-x");
const menu = document.querySelector(".menu");
burgerBtn.addEventListener("click", () => {
	menu.classList.toggle("active");
	burgerIconOn.classList.toggle("off");
	burgerIconOff.classList.toggle("off");
});

//SECTION ON CLICK
const menuLinks = document.querySelectorAll(".menu-li");
menuLinks.forEach((li) =>
	li.addEventListener("click", (e) => {
		const link = e.target.dataset.key;
		const section =
			document.querySelector(`.${link}`).getBoundingClientRect().top +
			window.pageYOffset -
			50;

		menu.classList.remove("active");
		burgerIconOn.classList.toggle("off");
		burgerIconOff.classList.toggle("off");
		window.scrollTo({ top: section, behavior: "smooth" });
	})
);

//SHOW PROJECTS
const showProjects = () => {
	const scrolValue = window.scrollY;
	document.querySelectorAll(".show-project").forEach((project) => {
		if (scrolValue > project.offsetTop - project.clientHeight / 2) {
			project.classList.add("active");
		}
		if (scrolValue < 100) {
			project.classList.remove("active");
		}
	});
};

window.addEventListener("scroll", showProjects);

// Render Projects
const mainWrap = document.querySelector(".main-wrap");
const popapWrap = document.querySelector(".popap-wrap");

const currentProjects = projects;

const renderPopap = function () {
	popapWrap.innerHTML = "";
	popapWrap.classList.add("active");
	mainWrap.classList.add("active");
	const item = currentProjects[this.dataset.id];
	const modal = document.createElement("div");
	modal.innerHTML = `
		<img src="${item.image}" alt="Project-${item.id}">
	<div class="modal-buttons">
		<button class="modal-check"><a href="${item.linkGit}">Source Code</a></button>
		<button class="modal-check"><a href="${item.linkLive}">Live Code</a></button>
		<button class="close-modal">X</button>
	</div>
`;
	modal.classList.add("modal", "active");
	popapWrap.appendChild(modal);

	const closeModalBtn = document.querySelector(".close-modal");
	closeModalBtn.addEventListener("click", () => {
		popapWrap.innerHTML = "";
		popapWrap.classList.remove("active");
		mainWrap.classList.remove("active");
	});
};

const projectsOnClick = document
	.querySelectorAll(".project-img")
	.forEach((projectImg) => {
		projectImg.addEventListener("click", renderPopap);
	});
