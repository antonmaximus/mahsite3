//Getting Element's Width and Height:  
//http://www.cjboco.com/blog.cfm/post/determining-an-elements-width-and-height-using-javascript
Element.prototype.getElementWidth = function() {
   if (typeof this.clip !== "undefined") {
      return this.clip.width;
   } else {
      if (this.style.pixelWidth) {
         return this.style.pixelWidth;
      } else {
         return this.offsetWidth;
      }
   }
};
Element.prototype.getElementHeight = function() {
   if (typeof this.clip !== "undefined") {
      return this.clip.height;
   } else {
      if (this.style.pixelHeight) {
         return this.style.pixelHeight;
      } else {
         return this.offsetHeight;
      }
   }
};



var previousProject;
var info = [{
    title: "Bearded Dragon Project",
    category: "Animated Short",
    text: "I led a short animation project with four friends. I was also the project's rigger, whereby I created skeletons for the assets and analyzed/developed their movements. In addition, I spent time rendering &amp; compositing various shots and creating the storyline. The entire project was developed using Houdini Software and Adobe After Effects."
    },{
    title: "Star Wars 2D Assets",
    category: "2D Images",
    text: "I created 2D assets for Lucasfilm, whereby I developed lighting for character poses and rendered them using Maya Software. I used Adobe Photoshop to polish the resulting images.  The produced images are then verified by the directors during asset meetings to ensure that overall aesthetic feel follows the show."
    },{
    title: "Clone Wars Animation",
    category: "CG Animation",
    text: "I developed animation cycles and turntable lighting for Star Wars characters that were released for Clone Wars seasons 3 and 4.  The final images were created using Maya Software and Lucasfilm's in-house render tools."
    },{
    title: "Jell-o and Flocking Effects",
    category: "Programming",
    text: "I used C++ to mimic an object's Jell-o effect.  The Jell-o's spring-like property is based on Hooke's Law \<span style='font-style: italic'\>(F=kX)\<\/span\> from Physics.  I also programmed the flocking effect using C++, and it emulates elocity, acceleration, and collision properties in the physical world.  Both programs were used as part of a college project."  
    }];


function updateInfo(i) {
    document.getElementById("infoTitle").innerHTML = info[i].title;
    document.getElementById("infoCategory").innerHTML = info[i].category;
    document.getElementById("infoText").innerHTML = info[i].text;    
}

function chooseVideo(id) {
    var targetIframe = document.getElementById("videoIframe");
    var params = "?autoplay=1&rel=0&showinfo=0&autohide=1&color=white";
    if (id=="project1") { 
        targetIframe.src= "http://www.youtube.com/embed/kmEs-sFpi2Q"  + params;
    } else if (id=="project2") {
        targetIframe.src = "./html/carousel.html"; 
    } else  if (id=="project3") {
        targetIframe.src = "http://www.youtube.com/embed/IGdQ-C8-jlc"  + params;
    } else  if (id=="project4") {
        targetIframe.src = "http://www.youtube.com/embed/DR_7Y5M9ORE"  + params;
    }

    //Update Info
    var i = parseInt(id.replace("project", ""), 10) - 1;  //Minus one because we start at zero
    updateInfo(i);


}
function clickHappened() {
    chooseVideo(this.id); 
    //reinstate previous state to launch clicking event.
    document.getElementById(previousProject).addEventListener("click", clickHappened, false);
    document.getElementById(previousProject).className = "";
    //make current state unclickable.
    document.getElementById(this.id).removeEventListener("click", clickHappened, false); 
    document.getElementById(this.id).className += "selected";

    //current state now becomes previous state
    previousProject = this.id; 
}


var showcaseWidth, showcaseHeight, padding;
function getTargetMeasurements() {
 
}
    
function updateIframe() {    
    //iframe
    var showcaseWidth = document.getElementById("showcase").getElementWidth();
    var showcaseHeight = document.getElementById("showcase").getElementHeight(); 
    document.getElementById("videoIframe").style.width = showcaseWidth + "px"; 
    var targetHeight = showcaseWidth * (360/640);
    document.getElementById("videoIframe").style.height = targetHeight + "px"; 

}

function initialState() {
    updateIframe();
    updateInfo(0);
    var currentProject = "project1";
    var params = "?autoplay=0&rel=0&showinfo=0&autohide=1&color=white";
    document.getElementById("videoIframe").src = "http://www.youtube.com/embed/kmEs-sFpi2Q"  + params;
    document.getElementById(currentProject).removeEventListener("click", clickHappened, false); 
    previousProject = currentProject;
}



//Add Listeners
for (i = 0; i < 4; i += 1) {
    document.getElementById("project" + (i+1)).addEventListener("click", clickHappened, false);
}
window.addEventListener("resize", updateIframe);    // When the browser changes size
window.addEventListener("load", initialState());    // When the browser loads





