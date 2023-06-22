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

