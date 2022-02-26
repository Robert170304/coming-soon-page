
function ValidateEmail() {
    let invalidEmailText = document.querySelector('.invalid-email')
    let email = document.querySelector('#email');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
 
    if (email.value.match(mailformat)) {
        invalidEmailText.style.display = 'none'
        email.style.borderColor = 'lightblue'
        email.value = '' 
        return true;
    } else if (email.value === '') {
        invalidEmailText.textContent = 'Whoops! It looks like you forgot to add your email'
        invalidEmailText.style.display = 'block'
        email.style.borderColor = 'red'
        return false
    }else{
        invalidEmailText.textContent = 'Please provide a valid email address'
        invalidEmailText.style.display = 'block'
        email.style.borderColor = 'red'
        return false;
    } 
} 