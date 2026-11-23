	class TextScramble {
		constructor(el) {
			this.el = el
			this.chars = '!<>-_\\/[]{}—=+*^?#________'
			this.update = this.update.bind(this)
		}
		setText(newText) {
			const oldText = this.el.innerText
			const length = Math.max(oldText.length, newText.length)
			const promise = new Promise((resolve) => this.resolve = resolve)
			this.queue = []
			for (let i = 0; i < length; i++) {
			const from = oldText[i] || ''
			const to = newText[i] || ''
			const start = Math.floor(Math.random() * 40)
			const end = start + Math.floor(Math.random() * 40)
			this.queue.push({ from, to, start, end })
		}
		cancelAnimationFrame(this.frameRequest)
			this.frame = 0
			this.update()
			return promise
		}
		update() {
			let output = ''
			let complete = 0
			for (let i = 0, n = this.queue.length; i < n; i++) {
				let { from, to, start, end, char } = this.queue[i]
				if (this.frame >= end) {
					complete++
					output += to
				} else if (this.frame >= start) {
					if (!char || Math.random() < 0.28) {
						char = this.randomChar()
						this.queue[i].char = char
					}
					output += char
				} else {
					output += from
				}
			}
			this.el.innerHTML = output
			if (complete === this.queue.length) {
				this.resolve()
			} else {
				this.frameRequest = requestAnimationFrame(this.update)
				this.frame++
			}
		}
		randomChar() {
			return this.chars[Math.floor(Math.random() * this.chars.length)]
		}
	}
  
  function animate (animationElementId, phrases) {
	var container = document.body;
	var animationElement = document.getElementById(animationElementId);
	
	const fx = new TextScramble(animationElement)

	let counter = 0
	const next = () => {
		fx.setText(phrases[counter]).then(() => {
			setTimeout(next, 800)
		})
		counter = (counter + 1) % phrases.length
	}

	next()

	container.onmousemove = event => {
		var halfW = ( container.clientWidth / 2 );
		var halfH = ( container.clientHeight / 2 );

		var coorX = ( halfW - ( event.pageX - container.offsetLeft ) );
		var coorY = ( halfH - ( event.pageY - container.offsetTop ) );

		var degX  = ( ( coorY / halfH ) * 20 ); 
		var degY  = ( ( coorX / halfW ) * -20 );

		var factorX = 0.75; if (coorY < 0) { factorX = 1.5 - factorX; }
		var factorY = 0.75; if (coorX < 0) { factorY = 1.5 - factorY; }

		animationElement.style.transform = 'perspective( 600px ) translate3d( 0, 0, 0 ) rotateX('+ (degX*factorX) +'deg) rotateY('+ (degY*factorY) +'deg)';
	}
}

export default animate