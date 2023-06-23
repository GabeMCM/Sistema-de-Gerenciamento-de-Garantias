const buttonShowData = document.querySelectorAll(".buttonShowData");

buttonShowData.forEach((button) => {
	console.log(button);
	button.addEventListener("click", () => {
		const divPai = button.parentElement;
		const li = divPai.parentElement;
		const info = li.querySelector("#hiddenInformation");
		li.classList.toggle("openLi");
		info.classList.toggle("displayInformation");
		divPai.classList.toggle("resizeButton")
	});
});

const openForm = () => {
	const form = document.querySelector(".form-box");
	const button = document.querySelector(".open-form-button");
	const header = document.querySelector("header");

	setTimeout(() => {
		button.classList.toggle("rotate");
	}, 200);
	form.classList.toggle("openForm");
	header.classList.toggle("header-with-form-open");
};
