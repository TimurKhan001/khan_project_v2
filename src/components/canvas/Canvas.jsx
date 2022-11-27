import { useEffect } from 'react';

const Canvas = () => {
	useEffect(() => {
		const canvas = document.querySelector('#canvas');
		const ctx = canvas.getContext('2d');

		let w, h, particles;
		const particleDistance = 10;
		const mouse = {
			x: undefined,
			y: undefined,
			radius: 75,
		};

		function init() {
			resizeReset();
			animationLoop();
		}

		function resizeReset() {
			w = canvas.width = canvas.parentElement.clientWidth;
			h = canvas.height = canvas.parentElement.clientHeight;

			particles = [];
			for (
				let y =
					(((h - particleDistance) % particleDistance) +
						particleDistance) /
					2;
				y < h;
				y += particleDistance
			) {
				for (
					let x =
						(((w - particleDistance) % particleDistance) +
							particleDistance) /
						2;
					x < w;
					x += particleDistance
				) {
					particles.push(new Particle(x, y));
				}
			}
		}

		function animationLoop() {
			ctx.clearRect(0, 0, w, h);
			drawScene();
			requestAnimationFrame(animationLoop);
		}

		function drawScene() {
			for (let i = 0; i < particles.length; i++) {
				particles[i].update();
				particles[i].draw();
			}
		}

		function mousemove(e) {
			const position = canvas.getBoundingClientRect();
			mouse.x = e.x - position.x;
			mouse.y = e.y - position.y;
		}

		function mouseout() {
			mouse.x = undefined;
			mouse.y = undefined;
		}

		class Particle {
			constructor(x, y) {
				this.x = x;
				this.y = y;
				this.size = 1;
				this.baseX = this.x;
				this.baseY = this.y;
				this.speed = Math.random() * 25 + 5;
			}
			draw() {
				ctx.fillStyle = 'rgba(10,10,10,.6)';
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fill();
			}
			update() {
				const dx = mouse.x - this.x;
				const dy = mouse.y - this.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const maxDistance = mouse.radius;
				const force = (maxDistance - distance) / maxDistance; // 0 ~ 1
				const forceDirectionX = dx / distance;
				const forceDirectionY = dy / distance;
				const directionX = forceDirectionX * force * this.speed;
				const directionY = forceDirectionY * force * this.speed;

				if (distance < mouse.radius) {
					this.x -= directionX;
					this.y -= directionY;
				} else {
					if (this.x !== this.baseX) {
						const dx = this.x - this.baseX;
						this.x -= dx / 10;
					}
					if (this.y !== this.baseY) {
						const dy = this.y - this.baseY;
						this.y -= dy / 10;
					}
				}
			}
		}

		init();
		window.addEventListener('resize', resizeReset);
		window.addEventListener('mousemove', mousemove);
		window.addEventListener('mouseout', mouseout);
	}, []);

	return <canvas id="canvas"></canvas>;
};

export default Canvas;
