
(function(global, svgs){

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


		let c,
			ctx,
			w,
			h,
			count,
			lines,
			tick;

		function rand( min, max ) {
			return Math.random() * ( max - min ) + min;
		};

		class Line {
			constructor( opt ) {
				Object.assign( this, opt )
				this.rx = this.x;
			}
			step() {
				this.rx = this.x + Math.sin( ( tick + this.offset ) / this.div ) * this.range;
			}
			draw() {
				ctx.fillStyle = '#629aa9';
				ctx.fillRect( ( this.rx - this.w / 2 ) + rand( -2, 2 ), ~~( this.y - this.h / 2 ), this.w + rand( -2, 2 ), ~~this.h );
			}
		}

		function init() {
			c = document.querySelector( 'canvas' );
			ctx = c.getContext( '2d' );
			w = 300;
			h = 300;
			count = 250;
			lines = [];
			tick = 0;
			reset();
			loopAnim();
		}

		function reset() {
			c.width = w;
			c.height = h;
			lines.length = 0;	
			for( let i = 0; i < count; i++ ) {
				lines.push( new Line({
					x: w / 2,
					y: 50 + count - i,
					w: ( count - i ) * 1,
					h: 1,
					range: i / 8 + rand( 0, ( count - i ) / 10 ),
					div: 40,
					offset: i + rand( 0, 20 ),
					hue: 120,
					saturation: 0,
					lightness: 0,
					alpha: ( ( count - i * 0.9 ) / count ) * 0.9
				}));
			}
		}

		function step() {
			let i = count;
			while( i-- ) { lines[ i ].step(); }
			tick += rand( 0, 1 ) > 0.2 ? 1 : rand( 5, 10 );
		}

		function draw() {
			// ctx.fillStyle = 'hsla(' + ( 260 + tick + rand( 0, 90 ) ) + ', ' + rand( 75, 100 ) + '%, ' + rand( 45, 55 ) + '%, 0.1)';
			ctx.fillStyle = '#def1fd';
			ctx.fillRect( 0, 0, w, h );
			let i = count;
			while( i-- ) { lines[ i ].draw(); }
			if( rand( 0, 1 ) > 0.5 ) {
				ctx.save();
				// if( rand( 0, 1 ) > 0.5 ) {
				// 	ctx.globalCompositeOperation = 'overlay';
				// } else {
				// 	ctx.globalCompositeOperation = 'lighter';
				// 	ctx.globalAlpha = 0.2;
				// }
				ctx.translate( w / 2 + rand( -0.1, 0.1 ), h / 2 + rand( -0.1, 0.1 ) );
				ctx.scale( rand( 1, 1.1 ), rand( 0.98, 1.02 ) );
				ctx.rotate(rand( -0.005, 0.005 ) );
				ctx.translate( -w / 2 + rand( -0.1, 0.1 ), -h / 2 + rand( -0.1, 0.1 ) );
				// ctx.drawImage( c, 0, 0 );
				ctx.restore();
			}
		}

		function loopAnim() {
			requestAnimationFrame( loopAnim );
			step();
			draw();
		}
		// Homepage animation
		init(); 		// This code is modified version of http://codepen.io/jackrugile/pen/wzgzOP



	function jump(target, options) {
	    var start = window.pageYOffset;
	    console.log(target)
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
    if (!isInPageLink(e.target)) {
    	// console.log(e.target)
      return;  	
    } else {
	    e.stopPropagation();
	    e.preventDefault();
	    // console.dir(e.target);
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


function loadContent(e, selection) {

	const item = parseInt(e.target.dataset.array)
	console.log(selection)
	
	fetch('../data/siteData.json')
		.then( (response) =>  {
			return response.json()
		}).then( (json) => {
			console.log(json[selection])
			
			var data1 = arrayFromObject(json[selection])[item]
			var data2 = arrayFromObject(json[selection])[item + 1]
			
			console.log(data1.title);
			
			update[selection](data1, data2, e.target)
		})
	
}



var update = (function updater(svgs){
	const appButtons = document.querySelectorAll('.webapps .title button');
	const siteButtons = document.querySelectorAll('.websites .title button');	
	const links = document.querySelectorAll('.container .left-col a');
	const titles = document.querySelectorAll('.container .right-col h3');
	const images = document.querySelectorAll('.container .left-col img');
	const descriptions = document.querySelectorAll('.container .right-col p');
	const techBadges = document.querySelectorAll('.container .right-col .tech-list')
	
	console.log(techBadges)
	
	// console.log(buttons)
	function webApps(data1, data2, btn) {
		console.log(data1)
		links[0].href = data1.url;
		titles[0].textContent = data1.title;
		images[0].src = data1.img;
		images[0].alt = data1.title;
		descriptions[0].textContent = data1.blurb;
		console.log(svgs.sketch)
		
		techBadges[0].innerHTML = "";
		techBadges[1].innerHTML = "";		
		
		data1.badges.forEach( (badge) => {
			let listItem = document.createElement('li')
			listItem.innerHTML = svgs[badge];
			techBadges[0].appendChild(listItem);
		})


		links[1].href = data2.url;		
		titles[1].textContent = data2.title;
		images[1].src = data2.img;
		images[1].alt = data2.title;
		descriptions[1].textContent = data2.blurb;

		data2.badges.forEach( (badge) => {		
			let listItem = document.createElement('li')
			listItem.innerHTML = svgs[badge];
			techBadges[1].appendChild(listItem);
		})
				
		appButtons.forEach( (btn) => btn.classList.remove('active') );
		btn.classList.add('active');
		
	}
	
	function webSites(data1, data2, btn) {
		console.log(data1)
		links[2].href = data1.url;
		titles[2].textContent = data1.title;
		images[2].src = data1.img;
		images[2].alt = data1.title;
		descriptions[2].textContent = data1.blurb;

		techBadges[2].innerHTML = "";
		
		data1.badges.forEach( (badge) => {
			let listItem = document.createElement('li')
			listItem.innerHTML = svgs[badge];
			techBadges[2].appendChild(listItem);
		})

		links[3].href = data2.url;		
		titles[3].textContent = data2.title;
		images[3].src = data2.img;
		images[3].alt = data2.title;
		descriptions[3].textContent = data2.blurb;
		
		techBadges[3].innerHTML = "";		

		
		data2.badges.forEach( (badge) => {
			let listItem = document.createElement('li')
			listItem.innerHTML = svgs[badge];
			techBadges[3].appendChild(listItem);
		})
						
		siteButtons.forEach( (btn) => btn.classList.remove('active') );
		btn.classList.add('active');		
	}
	
	return {
		Webapps : webApps,
		Websites : webSites
	}
	
})(svgs)


const title = document.querySelectorAll('.container .right-col h3')
console.log(title)

const slidingfPanelButton = document.querySelector('.sliding-panel-button');

const slidingPanelClose = document.querySelector('.sliding-panel-close');
const slidingPanelContent = document.querySelector('.off-canvas-menu');

const navMenuItems = Array.from(document.querySelectorAll('.off-canvas-menu ul li a'));

const emailButton = document.querySelector('.email-btn');
const phoneButton = document.querySelector('.phone-btn')

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
	window.location.href = "mailto:talk@tbullock.net";
})

phoneButton.addEventListener('click', (e) => {
	e.preventDefault();
	window.location.href = "tel:0403703950"
})
		
		
const webAppButtons = document.querySelectorAll('.webapps .title button');
const webSiteButtons = document.querySelectorAll('.websites .title button');

webAppButtons.forEach( (btn) => {
	btn.addEventListener('click', (e) => {
		console.log(e.target)
		loadContent(e, "Webapps")
	}, false)
})

webSiteButtons.forEach( (btn) => {
	btn.addEventListener('click', (e) => {
		console.log(e.target)
		loadContent(e, "Websites")
	}, false)
})

console.log(svgs)
// page2.addEventListener('click', (e) => {

// 	loadContent(e)
// }, false )		
	
}(window, svgLibrary));

