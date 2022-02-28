let email = document.querySelector('#email');
let invalidEmailText = document.querySelector('.invalid-email')

email.focus()

function ValidateEmail() {
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    
    if (email.value.match(mailformat)) {
        invalidEmailText.style.display = 'none'
        email.style.borderColor = 'lightblue'
        alert('Subscribed.')
        if (alert) {
           email.value = ''
        }
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


email.addEventListener('keyup', (e) => {
    clearError(e.target.value)
})

const clearError = (input) => {
  // console.log(input)
   if (input === '' || input === email.value) {
       invalidEmailText.style.display = 'none'
       email.style.borderColor = 'lightblue'
   }
}
