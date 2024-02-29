console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('moonlight.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('playing');
let masterSongName=document.getElementById('masterSongName');
let songsItems=document.getElementsByClassName('songItem');
let songs=[
    {songName:"moonlight",filePath:"songs/moonlight.mp3",coverPath:"covers/1.jpg"},
    {songName:"peaceful soul",filePath:"songs/song2.mp3",coverPath:"covers/2.jpg"},
    {songName:"old street",filePath:"songs/song3.mp3",coverPath:"covers/3.jpg"},
    {songName:"hate to love",filePath:"songs/song4.mp3",coverPath:"covers/4.jpg"},
    {songName:"vintage love",filePath:"songs/song5.mp3",coverPath:"covers/5.jpg"}
]
songsItems.forEach((element,i )=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByTagName("songName")[0].innerText=songs[i].songName;  

})
const playButton = document.getElementById('play-button');
const musicPlayer = document.getElementById('music-player');

playButton.addEventListener('click', () => {
  if (musicPlayer.paused) {
    musicPlayer.play();
    playButton.innerHTML = 'Pause';
  } else {
    musicPlayer.pause();
    playButton.innerHTML = 'Play';
  }
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})




audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');n
       element.classList.add('fa-play-circle');

    })

}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays(); 
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle'); 
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    })

    
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;

        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
})
