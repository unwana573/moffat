let classes = (classes) => document.getElementsByClassName(classes);  
  
let id = (id) => document.getElementById(id);  
  
  
let username = id("username"),  
    email = id("email"),
    country = id("country"), 
    password = id("password"), 
    confirm = id("confirm"), 
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failuerIcon = classes("failure-icon");
    
    let engine = (id, serial, message) =>   {  
        if (id.value.trim() === "")  {
            errorMsg[serial].innerHTML = message;
            failuerIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
        } else {
        errorMsg[serial].innerHTML = "";
        failuerIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
        }
    };
    
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        engine(username, 0, "Username cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(country, 2, "Country  cannot be blank");
        engine(password, 3, "Password cannot be blank");
        engine(confirm, 4, "confirm cannot be blank");
        
        //debugger
        // if(form.value = empty) {
        //     alert("password are do not match");
        //     failuerIcon[4].style.opacity = "1";
        //     successIcon[4].style.opacity = "0";
        // }
        
            if (password.value !== confirm.value)   {
            alert("password are do not match");
            failuerIcon[4].style.opacity = "1";
            successIcon[4].style.opacity = "0";
        } else {
        
            alert ("Welcome to Eazylife, Thanks for having an account with us and please always come around ");
        }
        
    });
   
   