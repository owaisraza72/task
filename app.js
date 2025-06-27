// Get elements
const blockimg1 = document.getElementById("blockimg1");
const cardimg1 = document.getElementById("cardimg1");
const addCart = document.getElementById("addcart");
const signupForm = document.getElementById("signupform");
const loginForm = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const profileDisplay = document.getElementById("show");
let signbtn = document.getElementById("signbtn");

// Navigation on image click
if (cardimg1) {
  cardimg1.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "product-detail.html";
    // Redirect to product detail
  });
}

// Add to cart
if (blockimg1) {
  blockimg1.style.display = "flex";
  addCart.addEventListener("click", (e) => {
    e.preventDefault();
    // Example cart item
    const cartItem = {
      imgSrc: "1.jpg",
      description:
        "Jordan shoes, also known as Air Jordans, are a line of basketball and sportswear shoes, apparel, and accessories produced by Nike, Inc",
      price: "Rs. 9500",
    };

    // loginForm.style.display="block"

    if (localStorage.getItem("login")) {
      window.location.href = "profile.html";
      localStorage.setItem("cart", JSON.stringify(cartItem));
      alert("Product added to cart");
    } else {
      alert("Please Login Your Account");
      loginForm.style.display = "block";

      // window.location.href = "product-detail.html";
    }

    // Save cart item in localStorage
  });
}

// Show signup form 
if (signupForm) {
  signupForm.style.display = "none";

  signbtn.addEventListener("click", function () {
    signupForm.style.display = "block";
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (!email || !password) {
      alert("Please enter your email and password to Sign Up");
    } else {
      // Save signup data
      localStorage.setItem(
        "signup",
        JSON.stringify({ signemail: email, signpassword: password })
      );
      alert("Signup successful!");
      // Save login state
      // localStorage.setItem("login", "true");
      // Hide signup form after signup
      signupForm.style.display = "none";
    }
    // loginForm.style.display="block"
  });
}

// Login process
if (loginForm) {
  loginForm.style.display = "none";

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginEmail = emailInput.value;
    const loginPassword = passwordInput.value;

    const signupData = JSON.parse(localStorage.getItem("signup"));

    if (!loginEmail || !loginPassword) {
      alert("Please enter your email and password to login");
    } else if (
      signupData &&
      signupData.signemail === loginEmail &&
      signupData.signpassword === loginPassword
    ) {
      alert("Login successful");

      localStorage.setItem("login", "true");
    } else {
      alert("Invalid credentials or user not signed up");
    }

    // Redirect pg on login to profile pg

    // Clear inputs
    emailInput.value = "";
    passwordInput.value = "";
    loginForm.style.display = "none";
  });
}

// Render cart data in profile page
function renderCart() {
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const showDiv = document.getElementById("show");
  if (cartData && showDiv) {
    showDiv.innerHTML += `
   
      <li><img src="${cartData.imgSrc}" alt="Product Image" width="100"></li>
      <li>Description: ${cartData.description}</li>
      <li>Price: ${cartData.price}</li>
      <button onclick="removeitem()">Remove</button>
    `;
    console.log(showDiv);
  }
}
// Call kya profile page
if (profileDisplay) {
  renderCart();

  function removeitem() {
    const showDiv = document.getElementById("show");

    showDiv.innerHTML = "No Card Itmes";

    localStorage.removeItem("cart");
  }

  let logout = document.getElementById("logout");

  logout.addEventListener("click", function () {
    if (logout) {
      const showDiv = document.getElementById("show");
      alert("Logout Your Account");
      window.location.href = "product-detail.html";

      localStorage.removeItem("login");
    }
  });

  function backhome() {
    window.location.href = "index.html";
  }
}

















                    // 2ND CART IMAGE FILE START

// if(true){
// console.log("ok")
// // Get elements
// const blockimg2 = document.getElementById("blockimg2");
// const cardimg2 = document.getElementById("cardimg2");
// const addCart2 = document.getElementById("addcart2");
// const signupForm = document.getElementById("signupform");
// const loginForm = document.getElementById("form");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const profileDisplay = document.getElementById("show");
// let signbtn = document.getElementById("signbtn");

// // Navigation on image click
// if (cardimg2) {
// console.log("ok")

//   cardimg2.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.location.href = "product-detail.html";
// // Redirect to product detail
//   });
// }

// // Add to cart
// if (blockimg2) {
// blockimg2.style.display="flex"
//   addCart2.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Example cart item
//     const cartItem2 = {
//       imgSrc: "2.jpg",
//       description: "Shoes NIKE AIR JORDAN 1 RED/BLACK Only meet in public / crowded places such as metro stations and malls",
//       price: "Rs.6000"
//     };

//          // loginForm.style.display="block"

//  if (localStorage.getItem("login")) {
//         window.location.href = "profile.html";
//     localStorage.setItem("cart2", JSON.stringify(cartItem2));
//     alert("Product added to cart");

//       } else {
//       alert("Please Login ")
//         loginForm.style.display="block";

//         // window.location.href = "product-detail.html";
//       }

//     // Save cart item in localStorage
//   });
// }

// // Show signup form (if exists)
// if (signupForm) {
// signupForm.style.display="none"

// signbtn.addEventListener('click', function (){
//   signupForm.style.display = "block";

// })

//   signupForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const email = document.getElementById("signup-email").value;
//     const password = document.getElementById("signup-password").value;

//     if (!email || !password) {
//       alert("Please enter your email and password to Sign Up");
//     } else {
//       // Save signup data
//       localStorage.setItem("signup", JSON.stringify({ signemail: email, signpassword: password }));
//       alert("Signup successful!");
//       // Save login state
//       // localStorage.setItem("login", "true");
//       // Hide signup form after signup
//       signupForm.style.display = "none";
//     }
//     // loginForm.style.display="block"
//   });
// }

// // Login process
// if (loginForm) {
//      loginForm.style.display="none"

//   loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const loginEmail = emailInput.value;
//     const loginPassword = passwordInput.value;

//     const signupData = JSON.parse(localStorage.getItem("signup"));

//     if (!loginEmail || !loginPassword) {
//       alert("Please enter your email and password to login");
//     } else if (signupData && signupData.signemail === loginEmail && signupData.signpassword === loginPassword) {
//       alert("Login successful");

//       localStorage.setItem("login", "true");
// }
//      else {
//       alert("Invalid credentials or user not signed up");
//     }

//       // Redirect based on login

//     // Clear inputs
//     emailInput.value = "";
//     passwordInput.value = "";
//      loginForm.style.display="none"

//   });

// }

// // Render cart data in profile page
// function renderCart() {
//   const cartData = JSON.parse(localStorage.getItem("cart"));
//   const showDiv = document.getElementById("show");
//   if (cartData && showDiv) {
//     showDiv.innerHTML += `
//     <button onclick="backhome()">Back to Home</button>
//       <li><img src="${cartData.imgSrc}" alt="Product Image" width="100"></li>
//       <li>Description: ${cartData.description}</li>
//       <li>Price: ${cartData.price}</li>
//       <button onclick="logout()">Logout</button>
//     `;
//     console.log(showDiv)
//   }
// }
// // Call in profile page
// if (profileDisplay) {
//   renderCart();

// function logout(){
//           if(logout){
//   const showDiv = document.getElementById("show");
//           alert('Logout Your Account');
//           showDiv.innerHTML="";
//           window.location.href="product-detail.html"
//           localStorage.removeItem('cart')
//           localStorage.removeItem('login')

//           }

// }

// function backhome(){
//           window.location.href="index.html"
//           }

//                     }

// }
