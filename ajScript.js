var cardArray = ['cardProgramming', 'cardWeb', 'card3d'];

function chooseVideo(id) {
    var videoFrame = document.getElementById("videoFrame");
    var params = "?autoplay=1&rel=0&showinfo=0&autohide=1&color=white"
    if (id=="cardProgramming") { 
        videoFrame.src="http://www.youtube.com/embed/DR_7Y5M9ORE"  + params;
    } else if (id=="cardWeb") {
        videoFrame.src = "http://www.youtube.com/embed/h2FNqSrc7ZQ"  + params;
    } else  if (id=="card3d") {
        videoFrame.src = "http://www.youtube.com/embed/ZGLgQxvKRnQ"  + params;
    }
    
    //change colors
    for (i = 0; i < 3; i += 1) {
        if (id != cardArray[i]) {
            document.getElementById(cardArray[i]).className = "card"; 
         } else {
            document.getElementById(cardArray[i]).className = "card selectedCard";
        }
    }
}


function alreadyRevealed() {
    chooseVideo(this.id); 
}


var targetWidth, targetHeight, padding;
function getTargetMeasurements() {
    var currentWidth = window.innerWidth;
    if (currentWidth >= 624) {
        targetWidth = 600;
    } else {
        targetWidth = currentWidth;
    }
    
    targetHeight = targetWidth * (336 / 600); 
    padding = currentWidth >= 624 ? 10 : 5; 
    
}
    
function updateVideoFrame() {
    getTargetMeasurements(); 
    
    //VideoWrapper
    document.getElementById("videoWrapper").style.width = (targetWidth) + "px"; 
    document.getElementById("videoWrapper").style.height = (targetHeight) + "px"; 
    
    //videoFrame
    document.getElementById("videoFrame").style.width = (targetWidth -  padding * 2) + "px"; 
    document.getElementById("videoFrame").style.height = (targetHeight - padding * 2) + "px"; 
    document.getElementById("videoFrame").style.marginTop = padding + "px"; 
  
}





function revealVideo () {
    getTargetMeasurements(); 

    var timeDown = 1500; 
    $('#videoWrapper').animate({ height: targetHeight + "px"}, { duration: timeDown }); // 1 second is 1000
    $("#cardWrapper").delay(timeDown-200).queue($('#cardWrapper').animate({ marginTop: "0"}, { duration: 1500 }));
    document.getElementById("videoWrapper").style.display = "inline-block"; 
    
    document.getElementById("videoWrapper").style.width = (targetWidth) + "px"; 
    document.getElementById("videoFrame").style.width = (targetWidth -  padding * 2) + "px"; 
    document.getElementById("videoFrame").style.height = (targetHeight - padding * 2) + "px"; 
    document.getElementById("videoFrame").style.marginTop = padding + "px"; 
    
    for (i = 0; i < 3; i += 1) {
        document.getElementById(cardArray[i]).removeEventListener("click", revealVideo, false);
        document.getElementById(cardArray[i]).addEventListener("click", alreadyRevealed, false);
    }
    chooseVideo(this.id); 
}



for (i = 0; i < 3; i += 1) {
        document.getElementById(cardArray[i]).addEventListener("click", revealVideo, false);
}


window.onresize = updateVideoFrame;     // When the browser changes size