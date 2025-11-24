// ===========================
// Modern Filter System
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const searchInput = document.getElementById('searchInput');
    const filterChips = document.querySelectorAll('.filter-chip');
    const priceRangeSlider = document.getElementById('priceRangeSlider');
    const maxPriceLabel = document.getElementById('maxPriceLabel');
    const priceTags = document.querySelectorAll('.price-tag');
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const yearRadios = document.querySelectorAll('input[name="year"]');
    const sortSelect = document.getElementById('sortSelect');
    const productsGrid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const activeFiltersDiv = document.getElementById('activeFilters');
    const viewToggle = document.getElementById('viewToggle');

    // Filter dropdowns
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Current filters state
    let currentFilters = {
        search: '',
        category: 'all',
        maxPrice: 3000000,
        brands: [],
        year: 'all',
        sort: 'featured'
    };

    // Initialize
    init();

    function init() {
        setupEventListeners();
        updateDisplay();
    }

    function setupEventListeners() {
        // Search
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }

        // Category chips
        filterChips.forEach(chip => {
            chip.addEventListener('click', handleCategoryFilter);
        });

        // Price range
        if (priceRangeSlider) {
            priceRangeSlider.addEventListener('input', handlePriceRange);
        }

        // Price quick filters
        priceTags.forEach(tag => {
            tag.addEventListener('click', handlePriceTag);
        });

        // Brand checkboxes
        brandCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', handleBrandFilter);
        });

        // Year radios
        yearRadios.forEach(radio => {
            radio.addEventListener('change', handleYearFilter);
        });

        // Sort select
        if (sortSelect) {
            sortSelect.addEventListener('change', handleSort);
        }

        // Filter dropdown toggles
        filterBtns.forEach(btn => {
            btn.addEventListener('click', toggleFilterDropdown);
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', closeDropdowns);

        // View toggle
        if (viewToggle) {
            viewToggle.addEventListener('click', toggleView);
        }
    }

    function handleSearch(e) {
        currentFilters.search = e.target.value.toLowerCase();
        updateDisplay();
        updateActiveFilters();
    }

    function handleCategoryFilter(e) {
        const category = e.currentTarget.dataset.filter;
        
        // Update active state
        filterChips.forEach(chip => chip.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        currentFilters.category = category;
        updateDisplay();
        updateActiveFilters();
    }

    function handlePriceRange(e) {
        const value = parseInt(e.target.value);
        currentFilters.maxPrice = value;
        
        if (maxPriceLabel) {
            maxPriceLabel.textContent = formatPrice(value);
        }
        
        updateDisplay();
        updateActiveFilters();
    }

    function handlePriceTag(e) {
        const price = parseInt(e.currentTarget.dataset.price);
        currentFilters.maxPrice = price;
        
        // Update slider
        if (priceRangeSlider) {
            priceRangeSlider.value = price;
        }
        if (maxPriceLabel) {
            maxPriceLabel.textContent = formatPrice(price);
        }
        
        // Update active state
        priceTags.forEach(tag => tag.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        updateDisplay();
        updateActiveFilters();
    }

    function handleBrandFilter() {
        currentFilters.brands = Array.from(brandCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        updateDisplay();
        updateActiveFilters();
    }

    function handleYearFilter(e) {
        currentFilters.year = e.target.value;
        updateDisplay();
        updateActiveFilters();
    }

    function handleSort(e) {
        currentFilters.sort = e.target.value;
        updateDisplay();
    }

    function toggleFilterDropdown(e) {
        e.stopPropagation();
        const btn = e.currentTarget;
        const menuId = btn.id.replace('Btn', 'Menu');
        const menu = document.getElementById(menuId);
        
        // Close other dropdowns
        document.querySelectorAll('.filter-dropdown-menu').forEach(m => {
            if (m.id !== menuId) {
                m.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        menu.classList.toggle('active');
        btn.classList.toggle('active');
    }

    function closeDropdowns(e) {
        if (!e.target.closest('.filter-dropdown')) {
            document.querySelectorAll('.filter-dropdown-menu').forEach(menu => {
                menu.classList.remove('active');
            });
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        }
    }

    function updateDisplay() {
        const cards = document.querySelectorAll('.shop-card');
        let visibleCount = 0;
        
        cards.forEach(card => {
            const matchesFilters = checkCardFilters(card);
            
            if (matchesFilters) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update results count
        if (resultsCount) {
            resultsCount.textContent = visibleCount;
        }
        
        // Sort cards
        sortCards();
        
        // Show no results message
        showNoResults(visibleCount === 0);
    }

    function checkCardFilters(card) {
        const cardPrice = parseInt(card.dataset.price);
        const cardCategory = card.dataset.category || '';
        const cardBrand = card.dataset.brand || '';
        const cardYear = card.dataset.year || '';
        const cardText = card.textContent.toLowerCase();
        
        // Search filter
        if (currentFilters.search && !cardText.includes(currentFilters.search)) {
            return false;
        }
        
        // Category filter
        if (currentFilters.category !== 'all' && !cardCategory.includes(currentFilters.category)) {
            return false;
        }
        
        // Price filter
        if (cardPrice > currentFilters.maxPrice) {
            return false;
        }
        
        // Brand filter
        if (currentFilters.brands.length > 0 && !currentFilters.brands.includes(cardBrand)) {
            return false;
        }
        
        // Year filter
        if (currentFilters.year !== 'all' && cardYear !== currentFilters.year) {
            return false;
        }
        
        return true;
    }

    function sortCards() {
        const cards = Array.from(document.querySelectorAll('.shop-card'));
        const grid = productsGrid;
        
        cards.sort((a, b) => {
            const priceA = parseInt(a.dataset.price);
            const priceB = parseInt(b.dataset.price);
            const nameA = a.querySelector('h3').textContent;
            const nameB = b.querySelector('h3').textContent;
            
            switch (currentFilters.sort) {
                case 'price-low':
                    return priceA - priceB;
                case 'price-high':
                    return priceB - priceA;
                case 'name':
                    return nameA.localeCompare(nameB, 'ar');
                case 'newest':
                    return parseInt(b.dataset.year || 0) - parseInt(a.dataset.year || 0);
                default:
                    return 0;
            }
        });
        
        cards.forEach(card => grid.appendChild(card));
    }

    function updateActiveFilters() {
        if (!activeFiltersDiv) return;
        
        activeFiltersDiv.innerHTML = '';
        
        // Search filter
        if (currentFilters.search) {
            addActiveFilterTag(`البحث: ${currentFilters.search}`, () => {
                searchInput.value = '';
                currentFilters.search = '';
                updateDisplay();
                updateActiveFilters();
            });
        }
        
        // Category filter
        if (currentFilters.category !== 'all') {
            const categoryNames = {
                'luxury': 'فاخرة',
                'suv': 'SUV',
                'sedan': 'سيدان',
                'sport': 'رياضية'
            };
            addActiveFilterTag(`${categoryNames[currentFilters.category]}`, () => {
                document.querySelector('.filter-chip[data-filter="all"]').click();
            });
        }
        
        // Price filter
        if (currentFilters.maxPrice < 3000000) {
            addActiveFilterTag(`السعر: حتى ${formatPrice(currentFilters.maxPrice)}`, () => {
                priceRangeSlider.value = 3000000;
                currentFilters.maxPrice = 3000000;
                maxPriceLabel.textContent = formatPrice(3000000);
                updateDisplay();
                updateActiveFilters();
            });
        }
        
        // Brand filters
        currentFilters.brands.forEach(brand => {
            const brandNames = {
                'ferrari': 'Ferrari',
                'porsche': 'Porsche',
                'rangerover': 'Range Rover',
                'toyota': 'Toyota',
                'mercedes': 'Mercedes',
                'bmw': 'BMW',
                'hyundai': 'Hyundai',
                'kia': 'Kia',
                'bugatti': 'Bugatti',
                'nissan': 'Nissan',
                'chevrolet': 'Chevrolet',
                'volkswagen': 'Volkswagen',
                'honda': 'Honda',
                'mazda': 'Mazda'
            };
            addActiveFilterTag(brandNames[brand], () => {
                const checkbox = document.querySelector(`input[name="brand"][value="${brand}"]`);
                checkbox.checked = false;
                handleBrandFilter();
            });
        });
        
        // Year filter
        if (currentFilters.year !== 'all') {
            addActiveFilterTag(`سنة ${currentFilters.year}`, () => {
                document.querySelector('input[name="year"][value="all"]').checked = true;
                currentFilters.year = 'all';
                updateDisplay();
                updateActiveFilters();
            });
        }
    }

    function addActiveFilterTag(text, onRemove) {
        const tag = document.createElement('div');
        tag.className = 'active-filter-tag';
        tag.innerHTML = `
            ${text}
            <i class="fas fa-times"></i>
        `;
        tag.querySelector('i').addEventListener('click', onRemove);
        activeFiltersDiv.appendChild(tag);
    }

    function showNoResults(show) {
        let noResultsMsg = document.getElementById('noResultsMsg');
        
        if (show) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'noResultsMsg';
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = `
                    <i class="fas fa-search" style="font-size: 4rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                    <h3>لا توجد نتائج</h3>
                    <p>حاول تغيير معايير البحث أو التصفية</p>
                `;
                productsGrid.parentElement.appendChild(noResultsMsg);
            }
            noResultsMsg.style.display = 'block';
            productsGrid.style.display = 'none';
        } else {
            if (noResultsMsg) {
                noResultsMsg.style.display = 'none';
            }
            productsGrid.style.display = 'grid';
        }
    }

    function toggleView() {
        const icon = viewToggle.querySelector('i');
        
        if (productsGrid.classList.contains('list-view')) {
            productsGrid.classList.remove('list-view');
            icon.className = 'fas fa-th-large';
        } else {
            productsGrid.classList.add('list-view');
            icon.className = 'fas fa-list';
        }
    }

    function formatPrice(price) {
        return new Intl.NumberFormat('ar-JO').format(price) + ' د.أ';
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .no-results-message {
            text-align: center;
            padding: 4rem 2rem;
            color: var(--text-light);
        }
        
        .no-results-message h3 {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
        }
        
        .products-grid.list-view {
            grid-template-columns: 1fr;
        }
        
        .products-grid.list-view .shop-card {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 2rem;
        }
        
        .products-grid.list-view .shop-card-image {
            height: 100%;
        }
        
        .products-grid.list-view .shop-card-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    `;
    document.head.appendChild(style);
});
