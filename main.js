// if on submit form, input field is empty dispaly error message
let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
let email = document.getElementById('email-address')
let password = document.getElementById('password')

let errorMessageList = document.querySelectorAll('.error')
let errorImgList = document.querySelectorAll('.error-img')

const checkForm = () => {
    if (firstName.value.length === 0) {
        errorMessageList[0].style.display = 'block';
        errorImgList[0].style.display = 'block'
    }  else {

    }

    if (lastName.value.length === 0) {
        errorMessageList[1].style.display = 'block'
    } else {
        
    }

}