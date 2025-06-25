// let image1 = document.getElementById('img1')
// let image2 = document.getElementById('img2')
// let image3 = document.getElementById('img3')
// let image4 = document.getElementById('img4')
// let image5 = document.getElementById('img5')

let imageContent = document.getElementById("imageContent");

if (imageContent) {
  imageContent.addEventListener("click", function (e) {
    e.preventDefault();
    
     window.location.href = "product-detail.html";

  });
}




// product-detail file start

let addCart = document.getElementById("addcart");

if (addCart) {
  addCart.addEventListener("click", function (e) {
    e.preventDefault();
    // alert ("please Login account");
    form.style.display = "block";
  });
}



let email = document.getElementById("email");
let password = document.getElementById("password");
// let form = document.getElementById("form")

let data = [] || JSON.parse(localStorage.getItem("login", data));






form.addEventListener("submit", function (e) {
  e.preventDefault();

  let log = {
    email: email.value,
    password: password.value,
  };

  console.log(log.email)
  console.log(data);

  
if(!email.value || !password.value){alert("Please Login the Account")}

else{
  form.style.display="none"
 data.push(log);

  localStorage.setItem("login", JSON.stringify(data));
     window.location.href = "profile.html";
  
}




  email.value = "";
  password.value = "";
 
  

});



let card = document.getElementById('cardimage')


 function render(e) {
   e.preventDefault();
 
let show = document.getElementById('show')
          
          show.innerHTML =`<h1>${card}</h1>`
          
 // if{data[i].email == log.email && data}


}

 
