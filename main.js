const dropdowns = document.querySelectorAll('.dropdown');
/* Loops through all the dropdown elements */
dropdowns.forEach(dropdown => {
   /* Gets inner elements from each dropdown */
   const select = dropdown.querySelector('.select');
   const caret = dropdown.querySelector('.caret');
   const menu = dropdown.querySelector('.menu');
   const options = dropdown.querySelectorAll('.menu li');
   const selected = dropdown.querySelector('.selected');

   /*  Click event for the selected element */
   select.addEventListener('click', () => {
      /* Adds the clicked select dtyles to the selected element */
      select.classList.toggle('select-clicked');
      /* Adds the rotate styles to the caret element */
      caret.classList.toggle('caret-rotate');
      /* Adds the open styles to the menu element */
      menu.classList.toggle('menu-open');
   });

   /* Loops through all option elements */
   options.forEach(option => {
      /* Adds a click event to the option element */
      option.addEventListener('click', () => {
         /* Changes the selected inner text to the clicked option inner text */
         selected.innerText = option.innerText;
         /* Adds the clicked select styles to the selected element */
         select.classList.remove('select-clicked');
         /* Adds the rotate styles to the caret element */
         caret.classList.remove('caret-rotate');
         /* Adds open styles to the menu element */
         menu.classList.remove('menu-open');
         /* Removes active class from all option elements */
         options.forEach(option => {
            option.classList.remove('active');
         });
         /* Adds active class to clicked option element */
         option.classList.add('active');
      });
   });
});
