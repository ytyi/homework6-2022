var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
    document.querySelector("#volume").innerHTML = `${video.volume * 100}%`;
 });

document.querySelector("#pause").addEventListener('click', function(){
	console.log('Pause Video');
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate =video.playbackRate* 0.95;
	console.log(`New speed is ${ video.playbackRate }`);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate =video.playbackRate/ 0.95;
	console.log(`New speed is ${ video.playbackRate }`);
});

