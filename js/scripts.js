const main = document.querySelector("main")
const modal = document.querySelector(".modal");
const inputEmail = document.getElementById("email");
const errorSpan = document.querySelector(".error-message");
const formBtn = document.querySelector(".submit-btn")
const modalBtn = document.querySelector(".dismiss-btn");


const validateForm = () => {
    let validator = true;

    if(!inputEmail.value || !inputEmail.value.includes("@")){
        errorSpan.innerHTML = "Valid email required.";
        inputEmail.style.borderColor = "var(--Tomato)";
        inputEmail.style.backgroundColor= "hsla(4, 100%, 67%, 0.1)";
        inputEmail.style.color = "var(--Tomato)"
        validator = false;
    }
    else{
        errorSpan.innerHTML = "";
        inputEmail.style.borderColor = "var(--Grey)";
        inputEmail.style.backgroundColor= "var(--White)";
        inputEmail.style.color = "black"
        validator = true
    }
    return validator
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
        main.style.display = "none";
        modal.style.display= "flex";
    }
}

const handleDismiss = (e) => {
    e.preventDefault();
    main.style.display = "flex";
    modal.style.display= "none";
}

formBtn.addEventListener('click', handleSubmit)
modalBtn.addEventListener('click', handleDismiss)