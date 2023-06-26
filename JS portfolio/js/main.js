// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 

    // Function to validate the form fields
    function validateForm() {
        // Get the form fields
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Check if the name field is empty
        if (name.trim() === '') {
            alert('Please enter your name');
            return false;
        }

        // Check if the phone field is empty
        if (phone.trim() === '') {
            alert('Please enter your phone number');
            return false;
        }

        // Check if the email field is empty
        if (email.trim() === '') {
            alert('Please enter your email');
            return false;
        }

        // Check if the message field is empty
        if (message.trim() === '') {
            alert('Please enter your message');
            return false;
        }

        // If all fields are filled, the form is valid
        return true;
    }

