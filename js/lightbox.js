window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}
var tmpWhichOne = "";

//$(function(){
//    $( '#web-light' ).prepend('<iframe is="x-frame-bypass" src="https://www.volkswagen.co.uk/about-us/concept-cars/volkswagen-id"></iframe>');
//})

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
  document.getElementById('web-light').style.display = 'none';
//  $( '#web-light>iframe' ).remove();
//  $( '#web-light' ).prepend('<iframe is="x-frame-bypass" src="https://www.volkswagen.co.uk/about-us/concept-cars/volkswagen-id"></iframe>');
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

function lightbox_browser_open() {

  document.getElementById('web-light').style.display = 'block';
  
  document.getElementById('fade').style.display = 'block';
    
}

function iEsc(){ return false; }
function iRec(){ return true; }
function DisableKeys() {
if(event.ctrlKey || event.shiftKey || event.altKey) {
window.event.returnValue=false;
iEsc();}
}
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
if (typeof document.onselectstart !="undefined")
document.onselectstart=iEsc;
else{
document.onmousedown=iEsc;
document.onmouseup=iRec;
}
function DisableRightClick(qsyzDOTnet){
if (window.Event){
if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3)
iEsc();}
else
if (event.button == 2 || event.button == 3){
event.cancelBubble = true
event.returnValue = false;
iEsc();}
}
