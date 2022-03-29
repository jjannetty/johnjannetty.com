window.init = () => {
	let hero = document.querySelector('.grid');
	let currentBoxNumber = 5;
	let currentVideo = document.getElementById(`${currentBoxNumber}`);
	const boxes = document.getElementsByClassName('box');

	Array.from(boxes).forEach((box, index) => {
		box.dataset.number = index + 1;
		box.addEventListener("mouseenter", handleBoxEnter, false)
	});

	function handleBoxEnter(e) {
		let	boxNumber = e.target.dataset.number;

		if (boxNumber == currentBoxNumber) {
			return false;
		} else {
			changeVideo(boxNumber);
		}
	}

	function handleEnded() {
		const nextVideo = document.getElementById(`${currentBoxNumber}`);
		currentVideo.style.display = "none";
		nextVideo.style.display = "block";
		nextVideo.play();
		currentVideo = nextVideo;
	};

	function changeVideo(boxNumber) {
		const transitionNumbers = `${currentBoxNumber}-${boxNumber}`;
		const transitionVideo = document.getElementById(transitionNumbers);

		if (transitionVideo == null) {
			return false;
		} else {
			currentVideo.style.display = "none";
			transitionVideo.style.display = "block";
			transitionVideo.play();
			currentVideo = transitionVideo;
			currentBoxNumber = boxNumber;
			currentVideo.addEventListener("ended", handleEnded, {once : true});
		}
	};

	currentVideo.style.display = "block";
	hero.classList.add("grid-loaded");
}
