const menuButton = document.getElementById("menu__button");
const firstPage = document.getElementById('first-page');
const  secondPage = document.getElementById('second-page');
let menuOn = false;

function toggle_menu() {
	const iconPath = '../assets/menu-buguer-'
	let icon = 'open.svg'
	menuOn = !menuOn;

	if (menuOn) {
		icon = 'close.svg'
		firstPage.style.visibility = "hidden"
		secondPage.style.visibility = "visible"
	}
	else {
		firstPage.style.visibility = "visible"
		secondPage.style.visibility = "hidden"
	}

	let html = `<img src="${iconPath}${icon}" alt="menu">`
	menuButton.innerHTML = html
}
