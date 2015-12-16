var SimpleJekyllSearch = SimpleJekyllSearch || [];

SimpleJekyllSearch({
  searchInput: document.getElementById('modal-search-input'),
  resultsContainer: document.getElementById('search-results-container'),
  json: '/search.json'
});