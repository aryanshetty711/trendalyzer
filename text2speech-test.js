onload = function() {
    if ('speechSynthesis' in window) with (speechSynthesis) {

        console.log('started text2speech-test.js');
		
		var playEle = document.querySelector('#tts-button');
        var pauseEle = document.querySelector('#tts-pause');
        var stopEle = document.querySelector('#tts-stop');

        console.log(playEle);
        console.log(pauseEle);
        console.log(stopEle);

        var synth = speechSynthesis;
        var playing = false;
        var paused = false;

        var text = document.querySelector('#tts-text').textContent;
        console.log(text);
        utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = getVoices()[1];
        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);

        function onClickPlay() {
            console.log('click detected!');
            
			if (!playing && !paused) {
				text = document.querySelector('#tts-text').textContent;
				console.log(text);
				playing = true;
				utterance = new SpeechSynthesisUtterance(text);
				speechSynthesis.speak(utterance);
			}
            else if (!speechSynthesis.paused) {
                window.speechSynthesis.cancel();
                playing = true;
                speechSynthesis.speak(utterance);
            }
            else {
                speechSynthesis.resume();
            }
        }

        function onClickPause() {
            console.log('pause detected!');

			playing = false;
			paused = true;
			speechSynthesis.pause();
          
        }

        function onClickStop() {
            console.log('stop detected!');
            speechSynthesis.resume();
            speechSynthesis.cancel();
        }
    }
    else { 
        /* speech synthesis not supported */
        /*
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
        */ 
    }

}
