const siAmoButton = document.getElementById("si-amo-button");
const noTeAmoButton = document.getElementById("no-te-amo-button");

siAmoButton.addEventListener("click", function () {
  alert("Te amo");
  const videoWindow = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&rel=0&autoplay=1&fs=1&iv_load_policy=3&showinfo=0&disablekb=1&cc_load_policy=1&vq=hd1080", "_blank", "width=600,height=400");

  setTimeout(function () {
    videoWindow.close();
  }, 258000);
});

noTeAmoButton.addEventListener("click", function () {
  alert("No te amo");
});
