 


  auth.onAuthStateChanged( user => {
    if (user) {
        console.log('user logged in: ', user);
    } else{
        console.log('user logged out' ,user);
    }
});

   // signupForm
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    //get user info 
    const email = signupForm ['email'].value;
    const Password = signupForm ['Password'].value;

    //sign up the user 
    auth.createUserWithEmailAndPassword(email,Password).then(cred => {
        //close &reset the signup form 
        const sideForm = document.querySelector ('#side-form');
        M.Sidenav.getInstance(sideForm).close();
        signupForm.reset();
    });
});



//sign In
const loginForm = document.querySelector('#login-form');
signupForm.addEventListener('click',(e)=>{
    e.preventDefault();

    //get user info 
    const email = signupForm ['login-email'].value;
    const Password = signupForm ['login-Password'].value;

    //sign up the user 
    auth.createUserWithEmailAndPassword(email,Password).then(cred => {
        //reset form 
        loginForm.reset();
        window.location.href = "index.html"
    });
});