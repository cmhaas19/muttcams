//var theBase = "http://184.178.136.147:8080";
//var theBase = "http://174.79.250.231:80";

errorimg1= 0;
document.images.webcam1.onload = DoIt1;
document.images.webcam1.onerror = ErrorImage1;

function LoadImage1()
{
        uniq1 = Math.random();
        document.images.webcam1.src = theBase + "/cam_1.jpg?uniq="+uniq1;
}
function ErrorImage1()
{
        errorimg1++;
        if (errorimg1>1){
              document.images.webcam1.onload = "";
              document.images.webcam1.src = "../_images/offline.jpg";
              }else{
              uniq1 = Math.random();
            document.images.webcam1.src = theBase + "/cam_1.jpg?uniq="+uniq1;
              }
}
function DoIt1()
{
        errorimg1=0;
        window.setTimeout("LoadImage1();", 70);
}
//-->

<!--
errorimg2= 0;
document.images.webcam2.onload = DoIt2;
document.images.webcam2.onerror = ErrorImage2;
function LoadImage2()
{
        uniq2 = Math.random();
        document.images.webcam2.src = theBase + "/cam_2.jpg?uniq="+uniq2;
        window.status = "Camp Run-A-Mutt! Cause every dog should have his day!!!";
}
function ErrorImage2()
{
        errorimg2++;
        if (errorimg2>1){
              document.images.webcam2.onload = "";
              document.images.webcam2.src = "../_images/offline.jpg";
              }else{
              uniq2 = Math.random();
            document.images.webcam2.src = theBase + "/cam_2.jpg?uniq="+uniq2;
              }
}
function DoIt2()
{
        errorimg2=0;
        window.setTimeout("LoadImage2();", 70);
}
//-->

<!--
errorimg3= 0;
document.images.webcam3.onload = DoIt3;
document.images.webcam3.onerror = ErrorImage3;
function LoadImage3()
{
        uniq3 = Math.random();
        document.images.webcam3.src = theBase + "/cam_3.jpg?uniq="+uniq3;
        window.status = "Camp Run-A-Mutt! Cause every dog should have his day!!!";
}
function ErrorImage3()
{
        errorimg3++;
        if (errorimg3>1){
              document.images.webcam3.onload = "";
              document.images.webcam3.src = "../_images/offline.jpg";
              }else{
              uniq3 = Math.random();
            document.images.webcam3.src = theBase + "/cam_3.jpg?uniq="+uniq3;
              }
}
function DoIt3()
{
        errorimg3=0;
        window.setTimeout("LoadImage3();", 70);
}
//-->

errorimg4= 0;
document.images.webcam4.onload = DoIt4;
document.images.webcam4.onerror = ErrorImage4;
function LoadImage4()
{
        uniq4 = Math.random();
        document.images.webcam4.src = theBase + "/cam_4.jpg?uniq="+uniq4;
        window.status = "[powered by webcamXP]";
}
function PTZMouseDown4(e)
{
        var IE = document.all?true:false;
        var x,y;
        var myx,myy;
        var myifr = document.getElementById("_iframe-ptz");
        tp = getElPos4();
        myx = tp[0];
        myy = tp[1];
        if(IE){
        x = event.clientX - myx + document.body.scrollLeft;
        y = event.clientY - myy + document.body.scrollTop;
        } else {
        x = e.pageX - myx;
        y = e.pageY - myy;
        }
        //alert(x + " :: " + y);
        if (myifr != null) myifr.src = theBase + "/ptz?source=4&moveto_x=" + x + "&moveto_y=" + y +"";
        return true;
}

function getElPos4()
{
            el = document.images.webcam4;
            x = el.offsetLeft;
            y = el.offsetTop;
            elp = el.offsetParent;
            while(elp!=null)
              { x+=elp.offsetLeft;
                y+=elp.offsetTop;
                elp=elp.offsetParent;
              }
            return new Array(x,y);
}

function ErrorImage4()
{
        errorimg4++;
        if (errorimg4>1){
              document.images.webcam4.onload = "";
              document.images.webcam4.src = "../_images/offline.jpg";
              }else{
              uniq4 = Math.random();
            document.images.webcam4.src = theBase + "/cam_4.jpg?uniq="+uniq4;
              }
}

function DoIt4()
{
        errorimg4=0;
        window.setTimeout("LoadImage4();", 70);
}


errorimg5= 0;
document.images.webcam5.onload = DoIt5;
document.images.webcam5.onerror = ErrorImage5;
function LoadImage5()
{
        uniq5 = Math.random();
        document.images.webcam5.src = theBase + "/cam_5.jpg?uniq="+uniq5;
        window.status = "Camp Run-A-Mutt";
}
function PTZMouseDown5(e)
{
        var IE = document.all?true:false;
        var x,y;
        var myx,myy;
        var myifr = document.getElementById("_iframe-ptz");
        tp = getElPos5();
        myx = tp[0];
        myy = tp[1];
        if(IE){
        x = event.clientX - myx + document.body.scrollLeft;
        y = event.clientY - myy + document.body.scrollTop;
        } else {
        x = e.pageX - myx;
        y = e.pageY - myy;
        }
        //alert(x + " :: " + y);
        if (myifr != null) myifr.src = theBase + "/ptz?source=4&moveto_x=" + x + "&moveto_y=" + y +"";
        return true;
}

function getElPos5()
{
            el = document.images.webcam5;
            x = el.offsetLeft;
            y = el.offsetTop;
            elp = el.offsetParent;
            while(elp!=null)
              { x+=elp.offsetLeft;
                y+=elp.offsetTop;
                elp=elp.offsetParent;
              }
            return new Array(x,y);
}

function ErrorImage5()
{
        errorimg5++;
        if (errorimg5>1){
              document.images.webcam5.onload = "";
              document.images.webcam5.src = "../_images/offline.jpg";
              }else{
              uniq5 = Math.random();
            document.images.webcam5.src = theBase + "/cam_5.jpg?uniq="+uniq5;
              }
}

function DoIt5()
{
        errorimg5=0;
        window.setTimeout("LoadImage5();", 70);
}



// CAM 6

errorimg6= 0;
document.images.webcam6.onload = DoIt6;
document.images.webcam6.onerror = ErrorImage6;
function LoadImage6()
{
        uniq6 = Math.random();
        document.images.webcam6.src = theBase + "/cam_6.jpg?uniq="+uniq6;
        window.status = "Camp Run-A-Mutt";
}
function PTZMouseDown6(e)
{
        var IE = document.all?true:false;
        var x,y;
        var myx,myy;
        var myifr = document.getElementById("_iframe-ptz");
        tp = getElPos6();
        myx = tp[0];
        myy = tp[1];
        if(IE){
        x = event.clientX - myx + document.body.scrollLeft;
        y = event.clientY - myy + document.body.scrollTop;
        } else {
        x = e.pageX - myx;
        y = e.pageY - myy;
        }
        //alert(x + " :: " + y);
        if (myifr != null) myifr.src = theBase + "/ptz?source=4&moveto_x=" + x + "&moveto_y=" + y +"";
        return true;
}

function getElPos6()
{
            el = document.images.webcam6;
            x = el.offsetLeft;
            y = el.offsetTop;
            elp = el.offsetParent;
            while(elp!=null)
              { x+=elp.offsetLeft;
                y+=elp.offsetTop;
                elp=elp.offsetParent;
              }
            return new Array(x,y);
}

function ErrorImage6()
{
        errorimg6++;
        if (errorimg6>1){
              document.images.webcam6.onload = "";
              document.images.webcam6.src = "../_images/offline.jpg";
              }else{
              uniq6 = Math.random();
            document.images.webcam6.src = theBase + "/cam_6.jpg?uniq="+uniq6;
              }
}

function DoIt6()
{
        errorimg6=0;
        window.setTimeout("LoadImage6();", 70);
}

// END

// CAM 7

errorimg7= 0;
document.images.webcam7.onload = DoIt7;
document.images.webcam7.onerror = ErrorImage7;
function LoadImage7()
{
        uniq7 = Math.random();
        document.images.webcam7.src = theBase + "/cam_7.jpg?uniq="+uniq7;
        window.status = "Camp Run-A-Mutt";
}
function PTZMouseDown7(e)
{
        var IE = document.all?true:false;
        var x,y;
        var myx,myy;
        var myifr = document.getElementById("_iframe-ptz");
        tp = getElPos7();
        myx = tp[0];
        myy = tp[1];
        if(IE){
        x = event.clientX - myx + document.body.scrollLeft;
        y = event.clientY - myy + document.body.scrollTop;
        } else {
        x = e.pageX - myx;
        y = e.pageY - myy;
        }
        //alert(x + " :: " + y);
        if (myifr != null) myifr.src = theBase + "/ptz?source=4&moveto_x=" + x + "&moveto_y=" + y +"";
        return true;
}

function getElPos7()
{
            el = document.images.webcam7;
            x = el.offsetLeft;
            y = el.offsetTop;
            elp = el.offsetParent;
            while(elp!=null)
              { x+=elp.offsetLeft;
                y+=elp.offsetTop;
                elp=elp.offsetParent;
              }
            return new Array(x,y);
}

function ErrorImage7()
{
        errorimg7++;
        if (errorimg7>1){
              document.images.webcam7.onload = "";
              document.images.webcam7.src = "../_images/offline.jpg";
              }else{
              uniq7 = Math.random();
            document.images.webcam7.src = theBase + "/cam_7.jpg?uniq="+uniq7;
              }
}

function DoIt7()
{
        errorimg7=0;
        window.setTimeout("LoadImage7();", 70);
}

// END