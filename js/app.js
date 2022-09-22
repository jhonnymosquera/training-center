const nav = document.querySelector('.nav');
const elipse = document.querySelector('.elipse');
elipse.onclick = (e) => {
	elipse.classList.toggle('btn');
	nav.classList.toggle('nav-active');
};
