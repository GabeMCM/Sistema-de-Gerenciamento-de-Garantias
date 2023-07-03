const buttonShowData = document.querySelectorAll(".buttonShowData");
const inputStatus = document.querySelectorAll(".status");
const li = document.querySelectorAll("li");

buttonShowData.forEach((button) => {
	button.addEventListener("click", () => {
		const showDataDiv = button.parentElement;
		const principalInfoDiv = showDataDiv.parentElement;
		const liTag = principalInfoDiv.parentElement;
		const info = liTag.querySelector(".hiddenInformation");
		liTag.classList.toggle("openLi");
		info.classList.toggle("displayInformation");
		principalInfoDiv.classList.toggle("open");
	});
});

inputStatus.forEach((input) => {
	const value = input.value;
	const itemData = input.parentElement;
	const select = itemData.parentElement;
	const principalInfoDiv = select.parentElement;
	const liTag = principalInfoDiv.parentElement;
	if (value === "Finalizado") {
		liTag.style.backgroundColor = "darkgreen";
		return;
	} else if (value === "Recusado") {
		liTag.style.backgroundColor = "darkRed";
		return;
	} else if (value === "Enviado") {
		liTag.style.backgroundColor = "grey";
		return;
	} else if (value === "Aberto") {
		liTag.style.backgroundColor = "#191970";
		return;
	} else {
		liTag.style.backgroundColor = "#3f3f9d";
		return;
	}
});

const openForm = () => {
	const form = document.querySelector(".form-box");
	const button = document.querySelector(".open-form-button");
	const header = document.querySelector("header");

	setTimeout(() => {
		button.classList.toggle("rotate");
	}, 0);
	form.classList.toggle("openForm");
	header.classList.toggle("header-with-form-open");
};
