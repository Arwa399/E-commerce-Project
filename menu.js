const searchInput = document.getElementById('searchModalInput');
const FilterButtons = document.querySelectorAll('.btn[data-filter]');
const MenuItems = document.querySelectorAll('.menu-item');
const noResultsMessage = document.getElementById('no-results');
const searchButton = document.getElementById('searchButton');
const searchModal = document.getElementById('searchModal');
let activeFilter = 'all';

searchInput.addEventListener('input', filterAndSearch);
function filterAndSearch() {
  const query = searchInput.value.toLowerCase();
  let hasVisibleItems = false;

  MenuItems.forEach(item => {
    const category = item.getAttribute('data-category');
    const name = item.getAttribute('data-name').toLowerCase();

    const matchesFilter = activeFilter === 'all' || category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = name.includes(query);



    if (matchesFilter && matchesSearch) {
      item.style.display = 'block';
      hasVisibleItems = true;
    } else {
      item.style.display = 'none';
    }
  });
  noResultsMessage.style.display = hasVisibleItems ? 'none' : 'block';
}
FilterButtons.forEach(button => {
  button.addEventListener('click', function () {
    activeFilter = this.getAttribute('data-filter');
    FilterButtons.forEach(btn => {
      btn.classList.remove('btn-primary');
      btn.style.backgroundColor = '';
      btn.style.color = '';
      btn.style.border = '';
    });

    this.classList.add('btn-primary');
    this.style.backgroundColor = '#6f4e37fc';
    this.style.color = 'white';
    filterAndSearch();
  });
});

searchButton.addEventListener('click', function (e) {
  e.preventDefault(); 
  filterAndSearch(); 
  $('#searchModal').modal('hide'); 
});


searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    filterAndSearch();
    $('#searchModal').modal('hide'); 
  }
});

searchModal.addEventListener('shown.bs.modal', () => {
  searchInput.focus();
  searchInput.value = '';
  filterAndSearch();
});
// Navbar onScroll
window.onscroll = function () {
  var navbar = document.querySelector('.navbar');
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

