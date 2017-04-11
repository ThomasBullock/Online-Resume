(function(global){

let message = 'Application is running!'

// console.log(message)
	
// $(document).ready(function(){
//   $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
//     $('.off-canvas-menu,.sliding-panel-fade-screen').toggleClass('is-visible');
//     e.preventDefault();
//   });
// });	

const slidingfPanelButton = document.querySelector('.sliding-panel-button');

const slidingPanelClose = document.querySelector('.sliding-panel-close');
const slidingPanelContent = document.querySelector('.off-canvas-menu');

const navMenuItems = Array.from(document.querySelectorAll('.off-canvas-menu ul li a'));

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


		
	
}(window));
//# sourceMappingURL=app.js.map
