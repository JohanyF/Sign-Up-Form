const input_pass = document.querySelector("#user_password");
const input_confirm_pass = document.querySelector("#user_confirm_password");

const validatePassword = (() => {
    let pass = input_pass.value;
    let confirm_pass = input_confirm_pass.value;

    if(pass === confirm_pass) {
        input_pass.style.borderColor = "green";
        input_confirm_pass.style.borderColor = "green";
    } else {
        input_pass.style.borderColor = "red";
        input_confirm_pass.style.borderColor = "red";
        // Add a <p> tag to be added below user_password input element
        // Also change the colors of both green and red to be a bit more dull
    }
})

input_confirm_pass.addEventListener("keyup", validatePassword);
