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
                
        }         
    
    };

    
    if (fname.checkValidity() & lname.checkValidity() & phone.checkValidity() & email.checkValidity()) {

                  
        alert("הטופס נשלח בהצלחה");   
        
    
    } else {
        alert("נא להשלים את השדות האדומים")
    }    
         
}
