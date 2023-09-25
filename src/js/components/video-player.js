const playBtn = document.querySelector('.video__btn');
const videoTitle = document.querySelector('.video__title');
const videoText = document.querySelector('.video__text');
const videoGradient = document.querySelector('.video__gradient');
const videoIntro = document.querySelector('.video__intro');
const videoMask = document.querySelector('.video__mask');
const videoJsTech = document.querySelector('.vjs-tech');

const videoPlayer = videojs(document.getElementById('video__player'), {
	autoplay: true,
	loop: true,
	muted: true,
	controls: false,
	playToggle: false,
});
videoPlayer.volume(0.7);
const changePlayerStatus = () => {
	videoPlayer.play();
	videoPlayer.addClass('play');
	videoPlayer.muted(false);
	videoPlayer.controls(true);
	videoPlayer.loop(false);

	playBtn.classList.add('hide');
	videoTitle.classList.add('hide');
	videoText.classList.add('hide');
};

videoPlayer.on('play', () => {
	if (!videoPlayer.played()) {
		videoPlayer.addClass('play');
		videoPlayer.removeClass('play');
		playBtn?.classList.add('hide');
	} else if (videoPlayer.played() && videoPlayer.loop()) {
		videoPlayer.removeClass('play');
	} else if (videoPlayer.played() && !videoPlayer.loop()) {
		videoPlayer.removeClass('play');
		playBtn?.classList.add('hide');
	}
});

videoPlayer.on('pause', () => {
	playBtn?.classList.remove('hide');
});

videoPlayer.on('ended', () => {
	playBtn?.classList.remove('hide');
	videoMask?.classList.remove('visible');
});

videoMask.addEventListener('click', () => {
	playBtn?.classList.remove('hide');
	videoPlayer.pause();
	videoMask?.classList.remove('visible');
});

playBtn.addEventListener('click', () => {
	videoGradient?.classList.add('hide');
	videoMask?.classList.add('visible');
	playBtn?.classList.add('center-position');
	document.querySelector('video').style.objectFit = 'contain';

	if (videoPlayer.muted()) {
		videoPlayer.currentTime(0);
		changePlayerStatus();
	} else {
		changePlayerStatus();
	}
});
