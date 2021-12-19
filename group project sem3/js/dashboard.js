
function myFunction(id) {

   let navLink = Array.from(document.getElementsByClassName('nav-link'));
   navLink.forEach(element => {
      console.log(element.removeAttribute('style'))
   });

   document.getElementById(id).style.color = "red";
   document.getElementById(id).style.fontSize = "30px";
  
}


