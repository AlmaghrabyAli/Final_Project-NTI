
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.h12');
    if (window.scrollY > 150) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; 
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';  
    }
  });

  window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.h12');
  if (navbar) { 
    if (window.scrollY > 150) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  }
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 150) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  }
});



const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

function filterItems(filterValue) {
  portfolioItems.forEach(item => {
    if(filterValue === 'all') {
      
      if(item.classList.contains('all-item')) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    } else {
      if(item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filterValue = button.getAttribute('data-filter');
    filterItems(filterValue);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const defaultButton = document.querySelector('.filter-btn[data-filter="all-item"]');
  if(defaultButton) defaultButton.click();
});

