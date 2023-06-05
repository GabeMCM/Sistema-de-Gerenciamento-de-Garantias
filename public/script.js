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




const dropdownInput = document.querySelector('.dropdown-input');
const dropdownList = document.querySelector('.dropdown-list');

dropdownInput.addEventListener('click', function() {
  dropdownList.style.display = dropdownList.style.display === 'none' ? 'block' : 'none';
});

dropdownList.addEventListener('click', function(event) {
  if (event.target.classList.contains('dropdown-item')) {
    dropdownInput.value = event.target.innerText;
    dropdownList.style.display = 'none';
  }
});
