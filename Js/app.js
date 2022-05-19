
// Nav Search Bar
function navSearch() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("navSearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("nav");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const container = document.querySelector('.container');
const phone=document.getElementById('phone');

//Listen for for submission
form.addEventListener('submit', (e) => {  
    e.preventDefault();

    const usernameValue = username.value;
    const emailValue = email.value;
    const phoneValue=phone.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
  
  

    if (usernameValue === '') {
        errorMessage(username, "Username is empty");
    } else {
        successMessage(username);
    }

    if (emailValue === '') {
        errorMessage(email, "Email is empty");
    } else if (!validateEmail(emailValue)) {
        errorMessage(email, "Email is invalid");
    } else {
        successMessage(email);
    }
    if (phoneValue === '') {
      errorMessage(phone, "Phone Number is empty");
  } else {
      successMessage(phone);
  }

    if (passwordValue === '') {
        errorMessage(password, "Password is empty");
    } else {
        successMessage(password);
    }

    if (password2Value === '') {
        errorMessage(password2, "Password is empty");
    } else if (password2Value !== passwordValue) {
        errorMessage(password2, "Both Passwords does not match");
    } else {
        successMessage(password2);
    }

    if (username.parentElement.classList.contains('success') && email.parentElement.classList.contains('success') && password.parentElement.classList.contains('success') && password2.parentElement.classList.contains('success')) {

        swal({
            title: 'Account Created',
            text: 'Your are now our official member',
            icon: 'success',
            button: 'Back to Home',
        });
        const obj = {}
        obj.username = usernameValue;
        obj.email = emailValue;
        obj.number = phoneValue;
        obj.password = passwordValue;
        obj.password2 = password2Value;
        console.log(obj);
        username.value = '';
        email.value = '';
        phone.value = '';
        password.value = '';
        password2.value = '';
    }
    
});



function errorMessage(value, message) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('success')) {
        formControl.classList.remove('success');
        formControl.classList.add('error');
    } else {
        formControl.classList.add('error');
    }
    formControl.querySelector('.errorMessage').textContent = message;


}


function successMessage(value) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('error')) {
        formControl.classList.remove('error');
        formControl.classList.add('success');
    } else {
        formControl.classList.add('success');
    }
}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





function messageSubmit(){  
const messageName=document.getElementById('messageName');
const messageEmail=document.getElementById('messageEmail');
const messagePhone=document.getElementById('messagePhone');
const messageDescription=document.getElementById('messageDescription');

        swal({
            title: 'Your Message has been sent',
            text: 'Thank you for your message',
            icon: 'success',
            button: 'Back to Home',
        });
        const messagesObj = {}
        messagesObj.messageName = usernameValue;
        messagesObj.messageEmail = emailValue;
        messagesObj.messageSubject = subjectValue;
        messagesObj.messageDescription = messageDescriptionValue;
        console.log(messagesObj);
        messageName.value = '';
        messageEmail.value = '';
        messageSubject.value = '';
        messageDescription.value = '';

    }

