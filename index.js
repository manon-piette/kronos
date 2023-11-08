
var imagesLoaded = 0;
var nbImages = 0;

function checkImagesLoaded() {
    // Get all the images on the page
    var images = document.querySelectorAll('img');
    nbImages = images.length;
    console.log(images.length);
    for (var i = 0; i < nbImages; i++) {
        console.log("loded");
      var img = new window.Image();
      img.src = images[i].src;
      img.onload = function() {
        imagesLoaded++;
      }
    }
  }



function sleep(s){
    setTimeout( ()=>{console.log(`sleep ${s}s` )}, s*1000);
    
}

function loaded(){
    //checkImagesLoaded();
    //console.log(imagesLoaded, nbImages);
    // while(imagesLoaded != nbImages ){
    //     sleep(1);
    // }
    
    document.getElementsByClassName("loading-cont")[0].remove();
}

window.addEventListener("load",  loaded) ;