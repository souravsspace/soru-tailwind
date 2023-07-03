
let menuBAr = document.querySelector(".menu--bar");
let navBar = document.querySelector(".nav--bar");
let crossMenu = document.querySelector(".cross--menu");

menuBAr.addEventListener('click', ()=>{
      navBar.classList.remove("max-md:hidden")
      crossMenu.classList.remove("hidden")

      navBar.classList.add("absolute", "inset-0", "bg-black-900", "text-white-900", "flex-col", "items-center", "justify-center", "text-xl")
      
      
      crossMenu.addEventListener("click", (e)=>{
            e.target.classList.add("hidden");
            
            navBar.classList.add("max-md:hidden");
            navBar.classList.remove("absolute", "inset-0", "bg-black-900", "text-white-900", "flex-col", "items-center", "justify-center", "text-xl")
      });
});






