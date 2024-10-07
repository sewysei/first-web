// Fungsi untuk mengganti slide secara otomatis
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("suisei-costume");
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
  
    // setInterval(() => plusDivs(1), 5000);

// Mengatur navbar agar berubah ketika di-scroll
const navbar = document.getElementById('navbar');

window.onscroll = function() {
  if (window.scrollY > 460) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('scrolled');
  }
};

// Menambahkan class 'transparent' pada awal load
window.onload = function() {
  navbar.classList.add('transparent');
};

window.onload = function() {
  window.scrollTo(0, 0);  // Scrolls to the top of the page on load
};

const playButtons = document.querySelectorAll('.play-btn');

playButtons.forEach(button => {
  button.addEventListener('click', function() {
    const track = this.parentElement;
    const audioPlayer = track.querySelector('.audio-player'); // Ambil audio player terkait
    const isPlaying = !audioPlayer.paused && !audioPlayer.ended && audioPlayer.currentTime > 0;

    if (isPlaying) {
      audioPlayer.pause(); // Jika audio sedang diputar, hentikan
      this.textContent = 'Play';
    } else {
      resetAllPlayers(); // Matikan semua audio sebelum memainkan yang baru
      audioPlayer.play();
      this.textContent = 'Back'; // Ubah tombol menjadi Back saat audio dimainkan
    }
  });
});

function resetAllPlayers() {
  const allAudioPlayers = document.querySelectorAll('.audio-player');
  allAudioPlayers.forEach(audioPlayer => {
    audioPlayer.pause(); // Hentikan semua audio player
    audioPlayer.currentTime = 0; // Reset posisi waktu audio
  });

  playButtons.forEach(button => {
    button.textContent = 'Play'; // Reset semua tombol ke Play
  });
}

// Mengatur slider volume untuk setiap audio player
const volumeSliders = document.querySelectorAll('.volume-slider');

volumeSliders.forEach(slider => {
  slider.addEventListener('input', function() {
    const track = this.closest('.track');
    const audioPlayer = track.querySelector('.audio-player'); // Ambil player audio terkait
    audioPlayer.volume = this.value; // Sesuaikan volume berdasarkan slider
  });
});

