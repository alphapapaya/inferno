

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed)/100;
    const y = (window.innerHeight - e.pageY * speed)/100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
}





var bleep = new Audio();
bleep.src = "bleep.mp3";
function loadContent(num){
    bleep.play(); // Play button sound now
    var div1 = document.getElementById("div1");
    div1.innerHTML = "Loaded content for section "+num;
}























var playBtn = document.getElementById('play');
var  resetBtn = document.getElementById('reset');
var  hearbeat = document.getElementById('heartbeat');
var  two = document.getElementById('two');
var  three = document.getElementById('three');
var  four = document.getElementById('four');
var  five = document.getElementById('five');
var  six = document.getElementById('six');
var  seven = document.getElementById('seven');
var  eight = document.getElementById('eight');
var  nine = document.getElementById('nine');
var  ten = document.getElementById('ten');
var  eleven = document.getElementById('eleven');
var  tweleve = document.getElementById('tweleve');
var  thirteen = document.getElementById('thirteen');
var  fourteen = document.getElementById('fourteen');
var  fithteen = document.getElementById('fithteen');
var	audios = document.querySelectorAll('audio');
console.log(audios);



playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

fithteen.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.fithteenbtn();
});
}, false);
























var nyan = document.getElementById('nyan');
var nyanBtn = document.getElementById('nyan-btn');

function playPause(song){
   if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
   } else {
      song.pause();
   }
}

function reset(btn, song){
   if(btn.classList.contains('playing')){
      btn.classList.toggle('playing');
   }
   song.pause();
   song.currentTime = 0;
}

function progress(btn, song){
   setTimeout(function(){
      var end = song.duration;
      var current = song.currentTime;
      var percent = current/(end/100);
      //check if song is at the end
      if(current==end){
         reset(btn, song);
      }
      //set inset box shadow
      btn.style.boxShadow = "inset " + btn.offsetWidth * (percent/100) + "px 0px 0px 0px rgba(0,0,0,0.125)"
      //call function again
      progress(btn, song);
   }, 1000);
}

nyanBtn.addEventListener('click', function(){
   nyanBtn.classList.toggle('playing');
   playPause(nyan);
   progress(nyanBtn, nyan);
});
