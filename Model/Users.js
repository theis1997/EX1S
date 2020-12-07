class User{
    constructor(username,password,firstName,lastName,gender,age,profilePicture,interests){

        this.username = username
        this.password = password  
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age 
        this.profilePicture = profilePicture
        this.interests = interests
    };

    
    
        
            // her skal der sendes en httprequest som skal kobles med en post 
             createProfile(ev){
                ev.preventDefault();  //to stop the form submitting
                let user = {
                id: Date.now,
                firstname: document.getElementById('firstname').value,
                lastname: document.getElementById('lastname').value,
                username: document.getElementById('username').value,
                age: document.getElementById('age').value,
                interests: document.getElementById('interests').value,
                password: document.getElementById('pwd').value,
                //gender: document.getElementById('gender').value FEJLER!
                gender: 'male' // Hardcoded FOR TEST.
                };
                console.log(user);
    
                document.forms[0].reset(); // to clear the form for the next entries
                //document.querySelector('form').reset();
    
                //for display purposes only
                console.warn('added' , {user} );
                let pre = document.querySelector('#msg pre');
                pre.textContent = '\n' + JSON.stringify(user, '\t', 2);
    
                axios.post("http://localhost:3001/users/", {user})
                .then(user => showOutput(user))
                .catch(err => console.error(err));
    };
    




    // ovenstående skal fikses

    uploadProfilePicture(){

    }

    login(){

    }

    logout(){

    }

    deleteProfile(){

    }
    
    editProfile(){

    }
    
    likeProfile(){

    }

    dislikeProfile(){

    }
};


document.addEventListner("DomContentloaded" , () =>{
    document.getElementById("regButton").addEventListener("click", createProfile);
});

