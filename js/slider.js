const isMobile    = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/*drag scrolling. - js https://codepen.io/toddwebdev/pen/yExKoj */

if(!isMobile){
	const slider = document.querySelector('.story-bubbles');
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
	  isDown = true;
	  slider.classList.add('active');
	  startX = e.pageX - slider.offsetLeft;
	  scrollLeft = slider.scrollLeft;
	});

	slider.addEventListener('mouseleave', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});

	slider.addEventListener('mouseup', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});

	slider.addEventListener('mousemove', (e) => {
	  if(!isDown) return;
	  e.preventDefault();
	  const x = e.pageX - slider.offsetLeft;
	  const walk = (x - startX) * 1; //scroll-fast
	  slider.scrollLeft = scrollLeft - walk;
	});
}
