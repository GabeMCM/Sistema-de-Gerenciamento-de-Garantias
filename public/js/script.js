const buttonShowData = document.querySelectorAll(".buttonShowData");
const selects = document.querySelectorAll("#status");
const li = document.querySelector("li");
const info = li.querySelector("#hiddenInformation");

buttonShowData.forEach((button) => {
	button.addEventListener("click", () => {
		const showDataDiv = button.parentElement;
		const principalInfoDiv = showDataDiv.parentElement;
		li.classList.toggle("openLi");
		info.classList.toggle("displayInformation");
		principalInfoDiv.classList.toggle("open");
	});
});

selects.forEach((select) => {
	const value = select.value;
	if (value == "positive") {
		console.log(value);
	}
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
