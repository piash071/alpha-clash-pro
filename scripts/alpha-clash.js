// function play(){
//     const homeScreenSection = document.getElementById('home-screen');
//     homeScreenSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}