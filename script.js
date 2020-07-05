var images = ["discount.jpg","tip.jpg","lavaza.jpg"]; 
var i = 0;
var renew = setInterval(function(){

    if(i==images.length) i=0;
    else {

        document.getElementById("diff-image").src = images[i]; 
        i++;

    }
    

},500); 


    // else {    
    // document.getElementById("diff-image").src = images[i]; 
    // i++;
    // }


