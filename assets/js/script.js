let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.loginform');
let formclose = document.querySelector('#form-close');

window.onscroll =() =>{
  formbtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
}

 formbtn.addEventListener('click', () =>{
  loginform.classList.add('active');
});

formclose .addEventListener('click', () =>{
  loginform.classList.remove('active');
});
// function login(){
//   userid="yashashree"
//   pass="123"
  
//   username= document.getElementById("username").value;
//   password= document.getElementById("password").value;
//   // nested if 
//   if(username == userid){
//       if(password == pass){
//           alert("Successfully login")
//       }
//       else{
//           alert("Invalid password")
//       }
//   }
//   else{
//       alert("Invalid username")
//   }
//}







/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 




function valsubmit(){
  // button = document.getElementById('but12').disabled = true;

  email = document.getElementById('femail1').value;
  phone = document.getElementById('fphone1').value;
  passwd = document.getElementById('fpass1').value;
  cpasswd = document.getElementById('fcpass1').value;
  
  phoneLength = phone.length
  passwdLength = passwd.length

  console.log(email,phone,passwd,cpasswd)
  if (phoneLength == 10){
    if(passwdLength==8){
      if(passwd==cpasswd){
        button = document.getElementById('but12').disabled = false;
      }
      else{
        button = document.getElementById('but12').disabled = true;
        alert('password and current password does not match')
      }
    }
    else{
      button = document.getElementById('but12').disabled = true;
      alert('password length must be 8 digit')

    }
  }
  else{
    button = document.getElementById('but12').disabled = true;
    alert('phone length must be 10 digit')
  }

}
