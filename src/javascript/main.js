(function(global){


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
		
	
}(window));

