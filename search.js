// Sample car data
const carsData = [
    {
        id: 1,
        name: 'BMW X5 2023',
        brand: 'bmw',
        category: 'suv',
        year: 2023,
        price: 45000,
        mileage: 15000,
        color: 'black',
        transmission: 'automatic',
        fuelType: 'petrol',
        condition: 'used',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
        features: ['فتحة سقف', 'كاميرا خلفية', 'نظام ملاحة']
    },
    {
        id: 2,
        name: 'Mercedes C-Class 2024',
        brand: 'mercedes',
        category: 'sedan',
        year: 2024,
        price: 55000,
        mileage: 5000,
        color: 'white',
        transmission: 'automatic',
        fuelType: 'hybrid',
        condition: 'certified',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500',
        features: ['نظام صوتي متطور', 'مقاعد جلد', 'تحكم صوتي']
    },
    {
        id: 3,
        name: 'Tesla Model 3 2023',
        brand: 'tesla',
        category: 'electric',
        year: 2023,
        price: 48000,
        mileage: 8000,
        color: 'blue',
        transmission: 'automatic',
        fuelType: 'electric',
        condition: 'certified',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500',
        features: ['قيادة ذاتية', 'شحن سريع', 'شاشة كبيرة']
    },
    {
        id: 4,
        name: 'Audi Q7 2022',
        brand: 'audi',
        category: 'suv',
        year: 2022,
        price: 42000,
        mileage: 25000,
        color: 'gray',
        transmission: 'automatic',
        fuelType: 'diesel',
        condition: 'used',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500',
        features: ['دفع رباعي', 'مقاعد 7 أفراد', 'نظام أمان متقدم']
    },
    {
        id: 5,
        name: 'Toyota Camry 2021',
        brand: 'toyota',
        category: 'sedan',
        year: 2021,
        price: 28000,
        mileage: 35000,
        color: 'silver',
        transmission: 'automatic',
        fuelType: 'petrol',
        condition: 'used',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500',
        features: ['اقتصادية', 'موثوقة', 'صيانة منخفضة']
    },
    {
        id: 6,
        name: 'Hyundai Tucson 2023',
        brand: 'hyundai',
        category: 'suv',
        year: 2023,
        price: 32000,
        mileage: 12000,
        color: 'red',
        transmission: 'automatic',
        fuelType: 'petrol',
        condition: 'used',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500',
        features: ['تصميم عصري', 'استهلاك وقود جيد', 'ضمان طويل']
    },
    {
        id: 7,
        name: 'BMW 3 Series 2024',
        brand: 'bmw',
        category: 'sedan',
        year: 2024,
        price: 52000,
        mileage: 3000,
        color: 'black',
        transmission: 'automatic',
        fuelType: 'petrol',
        condition: 'certified',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
        features: ['أداء رياضي', 'تقنيات حديثة', 'تصميم فاخر']
    },
    {
        id: 8,
        name: 'KIA Sportage 2022',
        brand: 'kia',
        category: 'suv',
        year: 2022,
        price: 29000,
        mileage: 20000,
        color: 'white',
        transmission: 'automatic',
        fuelType: 'petrol',
        condition: 'used',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500',
        features: ['واسعة', 'عملية', 'ضمان ممتاز']
    },
    {
        id: 9,
        name: 'Mercedes GLE 2023',
        brand: 'mercedes',
        category: 'suv',
        year: 2023,
        price: 68000,
        mileage: 10000,
        color: 'gray',
        transmission: 'automatic',
        fuelType: 'hybrid',
        condition: 'certified',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500',
        features: ['فاخرة جداً', 'تقنيات متطورة', 'راحة قصوى']
    },
    {
        id: 10,
        name: 'Audi A4 2023',
        brand: 'audi',
        category: 'sedan',
        year: 2023,
        price: 46000,
        mileage: 8000,
        color: 'blue',
        transmission: 'automatic',
        fuelType: 'petrol',
        condition: 'certified',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500',
        features: ['تصميم أنيق', 'أداء ممتاز', 'تجهيزات كاملة']
    },
    {
        id: 11,
        name: 'Toyota RAV4 2022',
        brand: 'toyota',
        category: 'suv',
        year: 2022,
        price: 34000,
        mileage: 18000,
        color: 'green',
        transmission: 'automatic',
        fuelType: 'hybrid',
        condition: 'used',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500',
        features: ['هايبرد اقتصادية', 'موثوقية عالية', 'مساحة كبيرة']
    },
    {
        id: 12,
        name: 'Hyundai Elantra 2024',
        brand: 'hyundai',
        category: 'sedan',
        year: 2024,
        price: 24000,
        mileage: 2000,
        color: 'silver',
        transmission: 'automatic',
        fuelType: 'petrol',
        condition: 'new',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500',
        features: ['جديدة كلياً', 'ضمان طويل', 'سعر مناسب']
    }
];

let filteredCars = [...carsData];

// Display results
function displayResults(cars) {
    const resultsGrid = document.getElementById('searchResultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    resultsCount.textContent = cars.length;
    
    if (cars.length === 0) {
        resultsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على نتائج</h3>
                <p>جرب تعديل معايير البحث</p>
            </div>
        `;
        return;
    }
    
    resultsGrid.innerHTML = cars.map(car => `
        <div class="car-card" data-car-id="${car.id}">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
                <span class="car-badge ${car.condition}">${getConditionText(car.condition)}</span>
                <button class="wishlist-btn" onclick="toggleWishlist(${car.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <div class="car-specs">
                    <span><i class="fas fa-calendar"></i> ${car.year}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${formatNumber(car.mileage)} كم</span>
                    <span><i class="fas fa-cog"></i> ${getTransmissionText(car.transmission)}</span>
                </div>
                <div class="car-features">
                    ${car.features.slice(0, 2).map(f => `<span class="feature-tag">${f}</span>`).join('')}
                </div>
                <div class="car-footer">
                    <div class="car-price">
                        <span class="price">${formatNumber(car.price)} دينار</span>
                    </div>
                    <div class="car-actions">
                        <a href="car-details.html?id=${car.id}" class="btn btn-primary btn-sm">
                            <i class="fas fa-eye"></i> عرض
                        </a>
                        <button class="btn btn-outline btn-sm" onclick="addToCompare(${car.id})">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter cars
function filterCars() {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    const category = document.getElementById('category').value;
    const brand = document.getElementById('brand').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const minYear = parseInt(document.getElementById('minYear').value) || 0;
    const maxYear = parseInt(document.getElementById('maxYear').value) || Infinity;
    const minMileage = parseFloat(document.getElementById('minMileage').value) || 0;
    const maxMileage = parseFloat(document.getElementById('maxMileage').value) || Infinity;
    const color = document.getElementById('color').value;
    const transmission = document.getElementById('transmission').value;
    const fuelType = document.getElementById('fuelType').value;
    const condition = document.getElementById('condition').value;
    
    filteredCars = carsData.filter(car => {
        return (
            (searchText === '' || car.name.toLowerCase().includes(searchText)) &&
            (category === '' || car.category === category) &&
            (brand === '' || car.brand === brand) &&
            (car.price >= minPrice && car.price <= maxPrice) &&
            (car.year >= minYear && (maxYear === Infinity || car.year <= maxYear)) &&
            (car.mileage >= minMileage && car.mileage <= maxMileage) &&
            (color === '' || car.color === color) &&
            (transmission === '' || car.transmission === transmission) &&
            (fuelType === '' || car.fuelType === fuelType) &&
            (condition === '' || car.condition === condition)
        );
    });
    
    displayResults(filteredCars);
}

// Sort results
function sortResults() {
    const sortBy = document.getElementById('sortBy').value;
    
    switch(sortBy) {
        case 'price-low':
            filteredCars.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredCars.sort((a, b) => b.price - a.price);
            break;
        case 'year':
            filteredCars.sort((a, b) => b.year - a.year);
            break;
        case 'mileage':
            filteredCars.sort((a, b) => a.mileage - b.mileage);
            break;
        default:
            filteredCars.sort((a, b) => b.id - a.id);
    }
    
    displayResults(filteredCars);
}

// Reset filters
function resetFilters() {
    document.getElementById('advancedSearchForm').reset();
    filteredCars = [...carsData];
    displayResults(filteredCars);
}

// Helper functions
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getConditionText(condition) {
    const conditions = {
        'new': 'جديدة',
        'used': 'مستعملة',
        'certified': 'معتمدة'
    };
    return conditions[condition] || condition;
}

function getTransmissionText(transmission) {
    return transmission === 'automatic' ? 'أوتوماتيك' : 'يدوي';
}

function toggleWishlist(carId) {
    alert('تم إضافة السيارة للمفضلة!');
}

function addToCompare(carId) {
    alert('تم إضافة السيارة للمقارنة!');
}

// Form submit handler
document.getElementById('advancedSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    filterCars();
});

// Initial display
displayResults(filteredCars);
