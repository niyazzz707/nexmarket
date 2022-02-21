
const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    signIn = document.querySelector(".signin-link");

//   show/hide password
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{
            if(pwField.type ==="password"){
                pwField.type = "text";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye-slash", "fa-eye");
                    clickSound();
                })
            }else{
                pwField.type = "password"; 

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye", "fa-eye-slash");
                    clickSound();
                })
            }
        })
    })
})


// appear sign in and sign up
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
signIn.addEventListener("click", ( )=>{
    container.classList.remove("active");
});

// Click Sound
function clickSound() {

    document.getElementById('click').play();
}
