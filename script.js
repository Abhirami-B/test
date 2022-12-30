function submitForm() {
    // 1. get all the user input values
    // let number = document.getElementById('number').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let reason = document.getElementById('reason').value;
    console.log(fname, email, reason);
    // check if all the inputs are filled
    if ( fname && lname && email && reason ) {
        // show the alert only if all inputs are filled
        alert("Form submitted successfully!")
    } 
    else {
        alert("All fields are required!")  
    }
}