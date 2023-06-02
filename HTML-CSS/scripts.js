
// const menuToggle = document.getElementById('menu-toggle');
//       const menuDropdown = document.getElementById('menu-dropdown');
      
//       menuToggle.addEventListener('click', () => {
//         // Toggle the appearance of the dropdown menu
//         menuDropdown.classList.toggle('opacity-0');
//         menuDropdown.classList.toggle('pointer-events-none');
      
//         // Animate the hamburger icon to X
//         menuToggle.classList.toggle('close');
      
//         // Get all the span tags within the button
//         const spans = menuToggle.getElementsByTagName('span');
        
//         // Change the span icons to X
//         if (spans[0].classList.contains('transform-gpu')) {
//           for (let i = 0; i < spans.length; i++) {
//             spans[i].classList.remove('transform-gpu');
//             spans[i].classList.add('transform-gpu-rotate-45');
//             if (i === 1) spans[i].classList.replace('mt-1', '-mt-0.5');
//             else if (i === 2) spans[i].classList.replace('mt-1', '-mt-2');
//           }
//         } else {
//           // Change the span icons back to hamburger
//           for (let i = 0; i < spans.length; i++) {
//             spans[i].classList.remove('transform-gpu-rotate-45');
//             spans[i].classList.add('transform-gpu');
//             if (i === 1) spans[i].classList.replace('-mt-0.5', 'mt-1');
//             else if (i === 2) spans[i].classList.replace('-mt-2', 'mt-1');
//           }
//         }
//       });