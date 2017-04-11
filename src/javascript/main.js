(function(global){

let message = 'Application is running!'

// console.log(message)
	


const slidingfPanelButton = document.querySelector('.sliding-panel-button');

const slidingPanelClose = document.querySelector('.sliding-panel-close');
const slidingPanelContent = document.querySelector('.off-canvas-menu');

const navMenuItems = Array.from(document.querySelectorAll('.off-canvas-menu ul li a'));

const emailButton = document.querySelector('.email-btn');
const phoneButton = document.querySelector('.phone-btn')

console.log(navMenuItems);

slidingfPanelButton.addEventListener('click', (e) => {
	slidingfPanelButton.classList.toggle('open');
	slidingPanelContent.classList.toggle('is-visible');
})

navMenuItems.forEach( (item) => {
	item.addEventListener('click', (e) => {
		slidingfPanelButton.classList.toggle('open');
		slidingPanelContent.classList.toggle('is-visible');
	})
})


emailButton.addEventListener('click', (e) => {
	e.preventDefault();
	window.location.href = "mailto:motbollox@gmail.com";
})

phoneButton.addEventListener('click', (e) => {
	e.preventDefault();
	window.location.href = "tel:0403703950"
})


		
	
}(window));

