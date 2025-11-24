// Sample Cars Data
const carsData = [
    {
        id: 1,
        name: 'BMW X5 2023',
        brand: 'BMW',
        year: 2023,
        price: 85000,
        category: 'suv luxury',
        mileage: '15,000',
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أسود',
        condition: 'ممتازة',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600',
        features: ['فتحة سقف بانورامية', 'نظام ملاحة', 'كاميرا 360', 'مقاعد جلد', 'شاشة لمس'],
        description: 'BMW X5 2023 بحالة ممتازة، فل أوبشن مع جميع الكماليات'
    },
    {
        id: 2,
        name: 'Mercedes C-Class 2024',
        brand: 'Mercedes',
        year: 2024,
        price: 95000,
        category: 'sedan luxury',
        mileage: '5,000',
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'فضي',
        condition: 'جديدة',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600',
        features: ['نظام قيادة ذاتية', 'مقاعد تدفئة وتبريد', 'شاشة OLED', 'نظام صوت Burmester'],
        description: 'Mercedes C-Class 2024 جديدة بالكامل مع ضمان الوكيل'
    },
    {
        id: 3,
        name: 'Tesla Model 3 2023',
        brand: 'Tesla',
        year: 2023,
        price: 78000,
        category: 'sedan electric',
        mileage: '8,000',
        transmission: 'أوتوماتيك',
        fuel: 'كهرباء',
        color: 'أبيض',
        condition: 'ممتازة',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600',
        features: ['قيادة ذاتية كاملة', 'شاحن سريع', 'شاشة 15 إنش', 'تحديثات OTA'],
        description: 'Tesla Model 3 2023 كهربائية بالكامل مع نظام Autopilot'
    },
    {
        id: 4,
        name: 'Audi Q7 2022',
        brand: 'Audi',
        year: 2022,
        price: 120000,
        category: 'suv luxury',
        mileage: '25,000',
        transmission: 'أوتوماتيك',
        fuel: 'ديزل',
        color: 'رمادي',
        condition: 'ممتازة',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600',
        features: ['7 مقاعد', 'دفع رباعي', 'نظام ترفيه خلفي', 'فتحة سقف بانورامية'],
        description: 'Audi Q7 2022 فاخرة و7 مقاعد مريحة للعائلة'
    },
    {
        id: 5,
        name: 'Toyota Camry 2021',
        brand: 'Toyota',
        year: 2021,
        price: 42000,
        category: 'sedan',
        mileage: '45,000',
        transmission: 'أوتوماتيك',
        fuel: 'هجين',
        color: 'أزرق',
        condition: 'جيدة جداً',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600',
        features: ['نظام هايبرد', 'كاميرا خلفية', 'شاشة لمس', 'مقاعد قماش فاخر'],
        description: 'Toyota Camry 2021 هايبرد اقتصادية وموثوقة'
    },
    {
        id: 6,
        name: 'Hyundai Tucson 2023',
        brand: 'Hyundai',
        year: 2023,
        price: 38000,
        category: 'suv',
        mileage: '12,000',
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أحمر',
        condition: 'ممتازة',
        image: 'https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=600',
        features: ['نظام سلامة متقدم', 'شاشة 10 إنش', 'كاميرا 360', 'مقاعد جلد'],
        description: 'Hyundai Tucson 2023 حديثة بتصميم عصري وأمان عالي'
    },
    {
        id: 7,
        name: 'Porsche 911 2023',
        brand: 'Porsche',
        year: 2023,
        price: 350000,
        category: 'sport luxury',
        mileage: '3,000',
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أصفر',
        condition: 'جديدة',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600',
        features: ['محرك توربو', 'نظام سبورت كرونو', 'مقاعد رياضية', 'عادم رياضي'],
        description: 'Porsche 911 2023 سيارة رياضية أسطورية بأداء خرافي'
    },
    {
        id: 8,
        name: 'Range Rover Sport 2023',
        brand: 'Range Rover',
        year: 2023,
        price: 185000,
        category: 'suv luxury',
        mileage: '8,000',
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أخضر',
        condition: 'ممتازة',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600',
        features: ['دفع رباعي فاخر', 'تعليق هوائي', 'جلد Nappa', 'نظام صوت Meridian'],
        description: 'Range Rover Sport 2023 فخامة بريطانية مع قدرات off-road'
    },
    {
        id: 9,
        name: 'Ferrari F8 Tributo 2022',
        brand: 'Ferrari',
        year: 2022,
        price: 950000,
        category: 'sport luxury',
        mileage: '2,500',
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أحمر',
        condition: 'ممتازة',
        image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=600',
        features: ['محرك V8 توربو', '720 حصان', 'كاربون فايبر', 'نظام F1-Trac'],
        description: 'Ferrari F8 Tributo 2022 تحفة إيطالية بأداء فورمولا 1'
    },
    {
        id: 10,
        name: 'Kia Sportage 2023',
        brand: 'Kia',
        year: 2023,
        price: 35000,
        category: 'suv',
        mileage: '18,000',
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'رمادي',
        condition: 'ممتازة',
        image: 'https://images.unsplash.com/photo-1607913109437-d9a8c0b0e45c?w=600',
        features: ['شاشة مزدوجة', 'كاميرا 360', 'مقاعد تدفئة', 'نظام أمان Kia'],
        description: 'Kia Sportage 2023 عملية وأنيقة بسعر منافس'
    },
    {
        id: 11,
        name: 'Nissan Patrol 2023',
        brand: 'Nissan',
        year: 2023,
        price: 95000,
        category: 'suv',
        mileage: '10,000',
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أبيض',
        condition: 'ممتازة',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600',
        features: ['8 مقاعد', 'دفع رباعي قوي', 'نظام ترفيه خلفي', 'شاحن لاسلكي'],
        description: 'Nissan Patrol 2023 قوة وفخامة للرحلات العائلية'
    },
    {
        id: 12,
        name: 'Bugatti Chiron 2023',
        brand: 'Bugatti',
        year: 2023,
        price: 2500000,
        category: 'sport luxury',
        mileage: '1,500',
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أزرق',
        condition: 'جديدة',
        image: 'https://images.unsplash.com/photo-1566024287286-457247b70310?w=600',
        features: ['1500 حصان', 'محرك W16', 'كاربون فايبر', 'سرعة قصوى 420 كم/س'],
        description: 'Bugatti Chiron 2023 أسرع وأقوى سيارة في العالم'
    }
];

// Shopping Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cars on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCars(carsData);
    setupFilters();
    setupSort();
    updateCounts();
});

// Display cars function
function displayCars(cars) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = cars.map(car => `
        <div class="shop-card" data-price="${car.price}" data-category="${car.category}" data-brand="${car.brand.toLowerCase()}" data-year="${car.year}">
            ${car.condition === 'جديدة' ? '<div class="shop-card-badge">جديد</div>' : ''}
            ${car.price > 500000 ? '<div class="shop-card-badge">حصري</div>' : ''}
            <div class="shop-card-image">
                <img src="${car.image}" alt="${car.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/600x400?text=No+Image'">
                <div class="card-actions">
                    <button class="card-action-btn" onclick="addToCompare(${car.id})" title="إضافة للمقارنة">
                        <i class="fas fa-exchange-alt"></i>
                    </button>
                    <button class="card-action-btn" onclick="addToWishlist(${car.id})" title="إضافة للمفضلة">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="card-action-btn" onclick="quickView(${car.id})" title="نظرة سريعة">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="shop-card-content">
                <h3>${car.name}</h3>
                <p><i class="fas fa-calendar"></i> ${car.year} • <i class="fas fa-road"></i> ${car.mileage} كم • <i class="fas fa-cog"></i> ${car.transmission}</p>
                <div class="car-features-mini">
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    <span><i class="fas fa-palette"></i> ${car.color}</span>
                    <span><i class="fas fa-star"></i> ${car.condition}</span>
                </div>
                <div class="shop-card-footer">
                    <span class="price">${formatPrice(car.price)} د.أ</span>
                    <button class="btn btn-primary btn-sm" onclick="viewCarDetails(${car.id})">
                        <i class="fas fa-info-circle"></i>
                        التفاصيل
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    updateResultsCount(cars.length);
}

// Setup filters
function setupFilters() {
    // Category filters
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            filterCars();
        });
    });

    // Price filter
    const priceSlider = document.getElementById('priceRangeSlider');
    const maxPriceLabel = document.getElementById('maxPriceLabel');
    
    if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
            maxPriceLabel.textContent = formatPrice(e.target.value) + ' د.أ';
        });
        
        priceSlider.addEventListener('change', filterCars);
    }

    // Price quick filters
    const priceTags = document.querySelectorAll('.price-tag');
    priceTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const price = tag.dataset.price;
            priceSlider.value = price;
            maxPriceLabel.textContent = formatPrice(price) + ' د.أ';
            filterCars();
        });
    });

    // Brand filters
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterCars);
    });

    // Year filters
    const yearRadios = document.querySelectorAll('input[name="year"]');
    yearRadios.forEach(radio => {
        radio.addEventListener('change', filterCars);
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterCars);
    }
}

// Filter cars based on selected criteria
function filterCars() {
    const activeCategory = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
    const maxPrice = parseInt(document.getElementById('priceRangeSlider')?.value || 3000000);
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);
    const selectedYear = document.querySelector('input[name="year"]:checked')?.value || 'all';
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';

    let filtered = carsData.filter(car => {
        // Category filter
        if (activeCategory !== 'all' && !car.category.includes(activeCategory)) return false;
        
        // Price filter
        if (car.price > maxPrice) return false;
        
        // Brand filter
        if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand.toLowerCase())) return false;
        
        // Year filter
        if (selectedYear !== 'all' && car.year.toString() !== selectedYear) return false;
        
        // Search filter
        if (searchTerm && !car.name.toLowerCase().includes(searchTerm)) return false;
        
        return true;
    });

    displayCars(filtered);
}

// Setup sorting
function setupSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            filterCars();
            sortCars();
        });
    }
}

// Sort cars
function sortCars() {
    const sortValue = document.getElementById('sortSelect')?.value || 'featured';
    const cards = Array.from(document.querySelectorAll('.shop-card'));
    
    cards.sort((a, b) => {
        const priceA = parseInt(a.dataset.price);
        const priceB = parseInt(b.dataset.price);
        const yearA = parseInt(a.dataset.year);
        const yearB = parseInt(b.dataset.year);
        
        switch(sortValue) {
            case 'price-high':
                return priceB - priceA;
            case 'price-low':
                return priceA - priceB;
            case 'newest':
                return yearB - yearA;
            case 'name':
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
            default:
                return 0;
        }
    });
    
    const grid = document.getElementById('productsGrid');
    cards.forEach(card => grid.appendChild(card));
}

// Update counts
function updateCounts() {
    const totalCars = carsData.length;
    
    // Update filter chip counts
    const allChip = document.querySelector('[data-filter="all"] .chip-count');
    const luxuryChip = document.querySelector('[data-filter="luxury"] .chip-count');
    const suvChip = document.querySelector('[data-filter="suv"] .chip-count');
    const sedanChip = document.querySelector('[data-filter="sedan"] .chip-count');
    const sportChip = document.querySelector('[data-filter="sport"] .chip-count');
    
    if (allChip) allChip.textContent = totalCars;
    if (luxuryChip) luxuryChip.textContent = carsData.filter(c => c.category.includes('luxury')).length;
    if (suvChip) suvChip.textContent = carsData.filter(c => c.category.includes('suv')).length;
    if (sedanChip) sedanChip.textContent = carsData.filter(c => c.category.includes('sedan')).length;
    if (sportChip) sportChip.textContent = carsData.filter(c => c.category.includes('sport')).length;
}

// Helper function to format price
function formatPrice(price) {
    return parseInt(price).toLocaleString('en-US');
}

// View car details
function viewCarDetails(id) {
    window.location.href = `car-details.html?id=${id}`;
}

// Add to compare
function addToCompare(id) {
    const car = carsData.find(c => c.id === id);
    if (car) {
        let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
        
        if (compareList.find(c => c.id === id)) {
            showNotification('هذه السيارة موجودة بالفعل في قائمة المقارنة', 'error');
            return;
        }
        
        if (compareList.length >= 3) {
            showNotification('يمكنك مقارنة 3 سيارات كحد أقصى', 'error');
            return;
        }
        
        compareList.push(car);
        localStorage.setItem('compareList', JSON.stringify(compareList));
        showNotification('تمت إضافة السيارة إلى قائمة المقارنة');
    }
}

// Add to wishlist
function addToWishlist(id) {
    const car = carsData.find(c => c.id === id);
    if (car) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        
        if (wishlist.find(c => c.id === id)) {
            showNotification('هذه السيارة موجودة بالفعل في المفضلة', 'error');
            return;
        }
        
        wishlist.push(car);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('تمت إضافة السيارة إلى المفضلة');
    }
}

// Quick view
function quickView(id) {
    const car = carsData.find(c => c.id === id);
    if (!car) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <div class="modal-header">
                <h3>${car.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <img src="${car.image}" alt="${car.name}" style="width: 100%; border-radius: 10px; margin-bottom: 1.5rem;">
                <p style="margin-bottom: 1rem;">${car.description}</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                    <div><strong>السعر:</strong> ${formatPrice(car.price)} د.أ</div>
                    <div><strong>السنة:</strong> ${car.year}</div>
                    <div><strong>المسافة:</strong> ${car.mileage} كم</div>
                    <div><strong>الوقود:</strong> ${car.fuel}</div>
                    <div><strong>ناقل الحركة:</strong> ${car.transmission}</div>
                    <div><strong>اللون:</strong> ${car.color}</div>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <strong>المميزات:</strong>
                    <ul style="margin-top: 0.5rem; padding-right: 1.5rem;">
                        ${car.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-primary" onclick="viewCarDetails(${car.id})">
                        عرض التفاصيل الكاملة
                    </button>
                    <button class="btn btn-outline" onclick="window.location.href='contact.html'">
                        استفسار
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// View toggle (grid/list)
const viewToggle = document.getElementById('viewToggle');
if (viewToggle) {
    viewToggle.addEventListener('click', () => {
        const grid = document.getElementById('productsGrid');
        grid.classList.toggle('list-view');
        
        const icon = viewToggle.querySelector('i');
        if (grid.classList.contains('list-view')) {
            icon.className = 'fas fa-th-large';
        } else {
            icon.className = 'fas fa-list';
        }
    });
}

// Dropdown toggles
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const menu = btn.nextElementSibling;
        
        // Close other dropdowns
        document.querySelectorAll('.filter-dropdown-menu').forEach(m => {
            if (m !== menu) m.classList.remove('show');
        });
        
        menu.classList.toggle('show');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.filter-dropdown-menu').forEach(m => {
        m.classList.remove('show');
    });
});

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Update results count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = count;
    }
}

// Notification function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 0.8rem;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-family: 'Cairo', sans-serif;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Initialize
updateCartCount();
