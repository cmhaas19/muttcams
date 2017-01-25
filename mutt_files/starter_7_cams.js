function cam1()
{

//document.getElementById('theVideo').innerHTML = '<div id="camDivX"><img src="http://www.camprunamutt.com/missionhills/_images/pond_coming_soon.jpg" class="webcam_in_frame" id="webcamX" width="320" height="240" alt="" /></div>';

// UNCOMMENT WHEN POND IS COMPLETED 
document.getElementById('theVideo').innerHTML = '<div id="camDiv1"><img src="../_images/clear.gif" class="webcam_in_frame" id="webcam1" width="320" height="240" alt="" /></div>';

errorimg1= 0;
document.images.webcam1.onload = DoIt1;
document.images.webcam1.onerror = ErrorImage1;
var theChannel = 1;
}
function cam2()
{
document.getElementById('theVideo').innerHTML = '<div id="camDiv2"><img src="../_images/clear.gif" class="webcam_in_frame" id="webcam2" width="320" height="240" alt="" /></div>';
errorimg2= 0;
document.images.webcam2.onload = DoIt2;
document.images.webcam2.onerror = ErrorImage2;
var theChannel = 2;
}
function cam3()
{
document.getElementById('theVideo').innerHTML = '<div id="camDiv3"><img src="../_images/clear.gif" class="webcam_in_frame" id="webcam3" width="320" height="240" alt="" /></div>';
errorimg3= 0;
document.images.webcam3.onload = DoIt3;
document.images.webcam3.onerror = ErrorImage3;
var theChannel = 3;
}
function cam4()
{
document.getElementById('theVideo').innerHTML = '<div id="camDiv4"><img src="../_images/clear.gif" class="webcam_in_frame" id="webcam4" width="320" height="240" alt="" /></div>';
errorimg4= 0;
document.images.webcam4.onload = DoIt4;
document.images.webcam4.onerror = ErrorImage4;
var theChannel = 4;
}

function cam5()
{
document.getElementById('theVideo').innerHTML = '<div id="camDiv5"><img src="../_images/clear.gif" class="webcam_in_frame" id="webcam5" width="320" height="240" alt="" /></div>';
errorimg5= 0;
document.images.webcam5.onload = DoIt5;
document.images.webcam5.onerror = ErrorImage5;
var theChannel = 5;
}

function cam6()
{
document.getElementById('theVideo').innerHTML = '<div id="camDiv6"><img src="../_images/clear.gif" class="webcam_in_frame" id="webcam6" width="320" height="240" alt="" /></div>';
errorimg6= 0;
document.images.webcam6.onload = DoIt6;
document.images.webcam6.onerror = ErrorImage6;
var theChannel = 6;
}

function cam7()
{
document.getElementById('theVideo').innerHTML = '<div id="camDiv7"><img src="../_images/clear.gif" class="webcam_in_frame" id="webcam7" width="320" height="240" alt="" /></div>';
errorimg7= 0;
document.images.webcam7.onload = DoIt7;
document.images.webcam7.onerror = ErrorImage7;
var theChannel = 7;
}