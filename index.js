// THE GENERATED PASSWORD GETS PLACED HERE
const output = document.getElementById("password");

// ADDING EVENTLISTENER TO GENERATOR BUTTON
document.getElementById("generate").addEventListener("click", passGen);
    

// CREATING A FUNCTION TO START PASSWORD CRITERIA QUESTIONS
    function passGen() {


    let password = [];
    let allowedChars = "";
    
    // INITIAL QUESTION TO DETERMINE PW LENGTH
    let passLength = parseInt(prompt("How many characters would you like your password to contain? (8-128)"));
        if (!(passLength >= 8 && passLength <= 128)) {
            alert("Password length must be between 8-128 characters.");
            return;
        }
        if (confirm("Would you like to use special characters?")) {
            let special = "!@#$%^&";
            allowedChars += special;
        }
        if (confirm("Would you like to use numerical characters?")) {
            let number = "0123456789";
            allowedChars += number;
        }
        if (confirm("Would you like to use lowercase characters?")) {
            let lowercase = "abcdefghijklmnopqrstuvwxyz";
            allowedChars += lowercase;
        }
        if (confirm("Would you like to use uppercase characters?")) {
            let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            allowedChars += uppercase;
        }


    // FOR LOOP TO LOOP THROUGH ALL CHARACTER CHOICES OF EACH CRITERIA
    if (allowedChars) {
        let special = "!@#$%^&";
        let number = "0123456789";
        let lowercase = "abcdefghijklmnopqrstuvwxyz";
        let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < passLength; i++) {
            if (i === 0) {
                if (special) {
                     password.splice(Math.round(Math.random()*password.length),0,special[Math.floor(Math.random()*special.length)])
                     i++;
                }

                if (number) {
                     password.splice(Math.round(Math.random()*password.length),0,number[Math.floor(Math.random()*number.length)])
                     i++;
                }

                if (lowercase) {
                     password.splice(Math.round(Math.random()*password.length),0,lowercase[Math.floor(Math.random()*lowercase.length)])
                     i++;
                }

                if (uppercase) {
                     password.splice(Math.round(Math.random()*password.length),0,uppercase[Math.floor(Math.random()*uppercase.length)])
                     i++;
                }
            }

             // GENERATES THE REST OF THE PASSWORD AT RANDOM
             password.splice(Math.round(Math.random()*password.length),0,allowedChars[Math.floor(Math.random()*allowedChars.length)]);
        }

        // OUTPUT THE PASSWORD ARRAY AS A COMBINED STRING
        output.innerText = password.join("");

    } else {
        // ERROR MESSAGE FOR MISSED CRITERIA
        alert("Password was not generated. Please confirm at least one character type.");
    }
    }    
    
    




