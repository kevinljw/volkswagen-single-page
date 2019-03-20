window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}
var tmpWhichOne = "";
function lightbox_open(whichOne) {
  tmpWhichOne = whichOne;
  console.log(tmpWhichOne);
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
//  window.scrollTo(0, 0);
  lightBoxVideo.src = "../video/"+tmpWhichOne+".mp4"
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
    
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

function lightbox_browser_open() {

  document.getElementById('inner-browser').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
    
}