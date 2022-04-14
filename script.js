const navItems = document.querySelector('.nav_items')
const toggle = document.querySelector(".toggle");


function toggleNav() {
  if (navItems.classList.contains("nav_items__toggle")) {
      navItems.classList.remove("nav_items__toggle");
      document.getElementById('icon').classList.toggle('fa-times');  
  
  } else {
      navItems.classList.add("nav_items__toggle");
      document.getElementById('icon').classList.toggle('fa-times');  
      
  }
}

toggle.addEventListener("click", toggleNav, false);


