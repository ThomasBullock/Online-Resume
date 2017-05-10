
;(function(global){
		const backgroundFallback  = document.querySelector('img.fallback');
	
		const md = new MobileDetect(window.navigator.userAgent);
		
		if( md.mobile() ) {
			backgroundFallback.classList.add('show');
		}
		
		// if user resizes browser refresh browsers so mobile / desktop button are reloaded

			window.addEventListener('resize', (e) => {
				if(window.innerWidth > 767 && !md.mobile() ) {  // prevent reloading on mobile devices
					console.log('resize')
					clearTimeout(resizeTimeout);
					var resizeTimeout = setTimeout( () => {
							location.reload();	
					}, 1500);
				}
			})			

		// utility functions	

		function arrayFromObject(object, key) {
			const array = [];
			if(key) {
				for (var key in object) { 
					array.push({[key] : object[key]} )
				}		
			} else {
				for (var key in object) { 
					array.push(object[key])
				}
			}			
			return array;
		}


		// smooth scroll 
	function jump(target, options) {
	    var start = window.pageYOffset;
	    var opt = {
	      duration: options.duration,
	      offset: options.offset || 0,
	      callback: options.callback,
	      easing: options.easing || easeInOutQuad
	    };

	    var distance = typeof target === 'string' ? 
	        opt.offset + document.querySelector(target).getBoundingClientRect().top : 
	        target
	    ;

	    var duration = typeof opt.duration === 'function'
	          ? opt.duration(distance)
	          : opt.duration
	    ;

	    var 
	        timeStart = null,
	        timeElapsed
	    ;

			requestAnimationFrame(function(time) { timeStart = time; loop(time); });

	    // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
	    function easeInOutQuad(t, b, c, d)  {
	        t /= d / 2
	        if(t < 1) return c / 2 * t * t + b
	        t--
	        return -c / 2 * (t * (t - 2) - 1) + b
	    }


	    function loop(time) {
	        if (timeStart === null)
	            timeStart = time;

	        timeElapsed = time - timeStart;

	        window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

	        if (timeElapsed < duration)
	            requestAnimationFrame(loop)
	        else
	            end();
	    }

	    function end() {
	        window.scrollTo(0, start + distance);
	        console.log('end')
	        typeof opt.callback === 'function' && opt.callback();
	        timeStart = null;
	    }

	}

const pageUrl = location.hash
        ? stripHash(location.href)
        : location.href
    ;

function stripHash(url) {
    return url.slice(0, url.lastIndexOf('#'));
}

function isInPageLink(n) {
	if(n.tagName.toLowerCase() === 'svg' || n.tagName.toLowerCase() === 'path') {
		return true
	} else {
     return n.tagName.toLowerCase() === 'a' 
        && n.hash.length > 0
        && stripHash(n.href) === pageUrl;
	}
}

function onClick(e) {
		console.dir(e.target);
    if (!isInPageLink(e.target)) {
    	// console.log(e.target)
      return;  	
    } else {
	    e.stopPropagation();
	    e.preventDefault();

	    if(e.target.tagName.toLowerCase() === 'path') {
	    	if(e.target.parentNode.parentNode.hash) {
			    jump(e.target.parentNode.parentNode.hash, {
			        duration: 500
			    }); 	    
			  }	
	    } else if(e.target.tagName.toLowerCase() === 'svg') {
	    	if(e.target.parentNode.hash) {
					jump(e.target.parentNode.hash, {
							        duration: 500
							    }); 	
				}   	    	
	    } else {
		    jump(e.target.hash, {
		        duration: 500
		    });  	    	
	    }    
  	
    }
}

document.body.addEventListener('click', onClick, false); // Smooth scroll link eventListener




function loadContent(e, selection, mobile) {

	const item = parseInt(e.target.dataset.array)
	
	fetch('../data/siteData.json')
		.then( (response) =>  {
			return response.json()
		}).then( (json) => {
			console.log(json[selection])
			
			var data1 = arrayFromObject(json[selection])[item]
			var data2 = (!mobile) ? arrayFromObject(json[selection])[item + 1] : null;
			
			console.log(data1.title);
			
			update[selection](data1, data2, e.target)
		})	
}



var update = (function updater(){
	const appButtons = Array.from(document.querySelectorAll('.webapps .title button'));
	const siteButtons = Array.from(document.querySelectorAll('.websites .title button'));	
	const links = document.querySelectorAll('.container .left-col a');
	const titles = document.querySelectorAll('.container .right-col h3');
	const images = document.querySelectorAll('.container .left-col img');
	const descriptions = document.querySelectorAll('.container .right-col p');
	const techBadges = document.querySelectorAll('.container .right-col .tech-list')

	function webApps(data1, data2, btn) {
		links[0].href = data1.url;
		titles[0].textContent = data1.title;
		images[0].src = data1.img;
		images[0].alt = data1.title;
		
		images[0].addEventListener('load', (e) => { // do we need ?
		})
		
		descriptions[0].textContent = data1.blurb;
		
		techBadges[0].innerHTML = "";
		techBadges[1].innerHTML = "";		
		
		data1.badges.forEach( (badge) => {
			let listItem = document.createElement('li')
			listItem.innerHTML = svgLibrary[badge];
			techBadges[0].appendChild(listItem);
		})

		if(data2) { // if data 2 is null we are updating mobile and ignore this
			links[1].href = data2.url;		
			titles[1].textContent = data2.title;
			images[1].src = data2.img;
			images[1].alt = data2.title;
			descriptions[1].textContent = data2.blurb;

			data2.badges.forEach( (badge) => {		
				let listItem = document.createElement('li')
				listItem.innerHTML = svgLibrary[badge];
				techBadges[1].appendChild(listItem);
			})			
		}			
		appButtons.forEach( (btn) => btn.classList.remove('active') );
		btn.classList.add('active');		
	}
	
	function webSites(data1, data2, btn) {
		links[2].href = data1.url;
		titles[2].textContent = data1.title;
		images[2].src = data1.img;
		images[2].alt = data1.title;
		descriptions[2].textContent = data1.blurb;

		techBadges[2].innerHTML = "";
		
		data1.badges.forEach( (badge) => {
			let listItem = document.createElement('li')
			listItem.innerHTML = svgLibrary[badge];
			techBadges[2].appendChild(listItem);
		})

		if(data2) { // if data 2 is null we are updating mobile and ignore this
			links[3].href = data2.url;		
			titles[3].textContent = data2.title;
			images[3].src = data2.img;
			images[3].alt = data2.title;
			descriptions[3].textContent = data2.blurb;
			
			techBadges[3].innerHTML = "";		
		
			data2.badges.forEach( (badge) => {
				let listItem = document.createElement('li')
				listItem.innerHTML = svgLibrary[badge];
				techBadges[3].appendChild(listItem);
			})
		}
						
		siteButtons.forEach( (btn) => btn.classList.remove('active') );
		btn.classList.add('active');		
	}
	
	return {
		Webapps : webApps,
		Websites : webSites
	}
	
})()


const title = document.querySelectorAll('.container .right-col h3')

const slidingPanelButton = document.querySelector('.sliding-panel-button');

const slidingPanelClose = document.querySelector('.sliding-panel-close');
const slidingPanelContent = document.querySelector('.off-canvas-menu');

const navMenuItems = Array.from(document.querySelectorAll('.off-canvas-menu ul li a'));

const emailButton = document.querySelector('.email-btn');
const phoneButton = document.querySelector('.phone-btn')
const githubButton = Array.from(document.querySelectorAll('.github-btn'));
const instagramButton = document.querySelector('.instagram-btn');


slidingPanelButton.addEventListener('click', (e) => {
	slidingPanelButton.classList.toggle('open');
	slidingPanelContent.classList.toggle('is-visible');
})

const spans = Array.from(document.querySelectorAll('.sliding-panel-button span'));

console.log(navMenuItems);

navMenuItems.forEach( (item) => {
	item.addEventListener('click', (e) => {
		console.log('open!')
		slidingPanelButton.classList.toggle('open');
		slidingPanelContent.classList.toggle('is-visible');
	})
})

instagramButton.addEventListener('click', (e) => {
	e.preventDefault();
	window.location.href= "https://www.instagram.com/motbollox/";	
})

emailButton.addEventListener('click', (e) => {
	e.preventDefault();
	window.location.href = "mailto:talk@tbullock.net";
})

phoneButton.addEventListener('click', (e) => {
	e.preventDefault();
	window.location.href = "tel:0403703950"
})

githubButton.forEach( (btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		window.location.href= "https://github.com/ThomasBullock";
	})
})

const deskAppButtons = Array.from(document.querySelectorAll('.webapps .title .desktop-buttons button'));
const deskSiteButtons = Array.from(document.querySelectorAll('.websites .title .desktop-buttons button'));

deskAppButtons.forEach( (btn) => {
	btn.addEventListener('click', (e) => {
		loadContent(e, "Webapps")
	}, false)
})

deskSiteButtons.forEach( (btn) => {
	btn.addEventListener('click', (e) => {
		loadContent(e, "Websites")
	}, false)
})



/// Mobile ////

const mobAppButtons = Array.from(document.querySelectorAll('.webapps .title .mob-buttons button'));
const mobSiteButtons = Array.from(document.querySelectorAll('.websites .title .mob-buttons button'));

mobAppButtons.forEach( (btn) => {
	btn.addEventListener('click', (e) => {
		loadContent(e, "Webapps", true)
	}, false)
	
	btn.addEventListener('touchstart', (e) => {
		loadContent(e, "Webapps", true)
	}, false)	
})

mobSiteButtons.forEach( (btn) => {
	btn.addEventListener('click', (e) => {
		loadContent(e, "Websites", true)
	}, false)
	btn.addEventListener('touchstart', (e) => {
		loadContent(e, "Websites", true)
	}, false)		
})

	
}(window));

