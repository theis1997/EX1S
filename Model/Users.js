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

    
    createProfile(){
        var button = document.getElementById("subButton");
        var username = document.getElementById("uname");
        var firstname = document.getElementById("fname");
        var lastName = document.getElementById("lname")
        var gender = document.getElementById("gender")
        var age = document.getElementById("age")
        var interests = document.getElementById("interest1","interest2","interest3")
        var form = document.getElementById("form1") //måske er denne nok og ovenstående idelementer kan udelades!

        button.addEventListener("click", function() {
            (form.value) 



    }
    )}// ovenstående skal fikses

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




