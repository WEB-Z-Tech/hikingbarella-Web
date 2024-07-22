document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const suggestionsContainer = document.getElementById('suggestions');
    const categorySelect = document.getElementById('category-select');

    const suggestions = [
       'Rice','Hoppers','Kottu','Fried Rice'
    ];

    function filterSuggestions(query) {
        return suggestions.filter(item => item.toLowerCase().startsWith(query.toLowerCase()));
    }

    function displaySuggestions(filteredSuggestions) {
        suggestionsContainer.innerHTML = '';
        filteredSuggestions.forEach(suggestion => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.textContent = suggestion;
            suggestionDiv.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionsContainer.style.display = 'none';
            });
            suggestionsContainer.appendChild(suggestionDiv);
        });
        suggestionsContainer.style.display = filteredSuggestions.length > 0 ? 'block' : 'none';
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        if (query.length > 0) {
            const filteredSuggestions = filterSuggestions(query);
            displaySuggestions(filteredSuggestions);
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar') && !e.target.closest('.suggestions')) {
            suggestionsContainer.style.display = 'none';
        }
    });

    categorySelect.addEventListener('change', () => {
        console.log(`Selected category: ${categorySelect.value}`);
    });
});
