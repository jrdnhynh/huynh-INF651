// array of pad configurations: sound ID, display name, and keyboard key
const padsConfig = [
    { id: 'kick', name: 'Kick', key: 'q' },
    { id: 'snare', name: 'Snare', key: 'w' },
    { id: 'rimshot', name: 'Rimshot', key: 'e' },
    { id: 'hi-hat-closed', name: 'Hi-Hat (Closed)', key: 'a' },
    { id: 'hi-hat-open', name: 'Hi-Hat (Open)', key: 's' },
    { id: 'clap', name: 'Clap', key: 'd' },
    { id: 'cowbell', name: 'Cowbell', key: 'z' },
    { id: 'triangle', name: 'Triangle', key: 'x' },
    { id: '808-bass', name: '808 Bass', key: 'c' }
];

// get the container for beat pad
const beatPadContainer = document.getElementById('beat-pad-container');

// play sound and provide visual feedback
function playSound(soundId, padElement) {
    const audio = document.getElementById(soundId);
    if (audio) {
        // reset audio to beginning to allow rapid playback
        audio.currentTime = 0;
        audio.play();

        // apply active class for visual feedback
        if (padElement) {
            padElement.classList.add('active');
            // remove active class after short delay
            setTimeout(() => {
                padElement.classList.remove('active');
            }, 100); // duration of active state in milliseconds
        }
    } else {
        console.error(`Audio element with ID '${soundId}' not found.`);
    }
}

// create beatpad and append to conntainer
function createPads() {
    padsConfig.forEach(pad => {
        const button = document.createElement('button');
        button.classList.add('pad');
        button.dataset.sound = pad.id; // store sound ID
        button.dataset.key = pad.key; // store keyboard key

        // span for the text content -> allows for multi-line labels
        const span = document.createElement('span');
        span.innerHTML = `${pad.name}<br><small>(${pad.key.toUpperCase()})</small>`;
        button.appendChild(span);

        // click event listener for each button
        button.addEventListener('click', () => {
            playSound(pad.id, button);
        });

        beatPadContainer.appendChild(button);
    });
}

// keyboard key presses to handle sounds
function handleKeyPress(event) {
    const pressedKey = event.key.toLowerCase(); // get pressed key -> convert to lowercase
    const targetPad = Array.from(beatPadContainer.children).find(
        pad => pad.dataset.key === pressedKey
    );

    if (targetPad) {
        // prevent default action (scrolling if spacebar is pressed)
        event.preventDefault();
        playSound(targetPad.dataset.sound, targetPad);
    }
}

// init beat pad when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    createPads(); // create the pad elements
    // global keydown event listener for keyboard input
    document.addEventListener('keydown', handleKeyPress);
});