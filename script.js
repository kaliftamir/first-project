var images = ["discount.jpg","tip.jpg","lavaza.jpg"]; 
var i = 0;
var renew = setInterval(function(){

    if(i==images.length) i=0;
    else {

        document.getElementById("diff-image").src = images[i]; 
        i++;

    }
    

},500); 


function validation () {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    
    var mail = document.getElementById ("email");
    mail.addEventListener("keyup", myValidation());
    
    function myValidation () {
        if (mail.validity.typeMismatch) {
           
            mail.setCustomValidity("נא להקיש דואר אלקטרוני תקין")
                
        
        } else {
          mail.setCustomValidity("");
          mail.style.color="green";
         
        }         
    
    };

    
    if (fname.checkValidity() & lname.checkValidity() & phone.checkValidity() & email.checkValidity()) {

                  
        alert("הטופס נשלח בהצלחה");   
        
    
    } else {
        alert("נא להשלים את השדות האדומים")
    }    
         
}
