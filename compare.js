// Sample car data
const availableCars = [
    {
        id: 1,
        name: 'BMW X5 2023',
        price: 45000,
        year: 2023,
        mileage: 15000,
        transmission: 'أوتوماتيك',
        fuelType: 'بنزين',
        color: 'أسود',
        condition: 'مستعملة',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400'
    },
    {
        id: 2,
        name: 'Mercedes C-Class 2024',
        price: 55000,
        year: 2024,
        mileage: 5000,
        transmission: 'أوتوماتيك',
        fuelType: 'هايبرد',
        color: 'أبيض',
        condition: 'معتمدة',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400'
    },
    {
        id: 3,
        name: 'Tesla Model 3 2023',
        price: 48000,
        year: 2023,
        mileage: 8000,
        transmission: 'أوتوماتيك',
        fuelType: 'كهربائي',
        color: 'أزرق',
        condition: 'معتمدة',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400'
    },
    {
        id: 4,
        name: 'Audi Q7 2022',
        price: 42000,
        year: 2022,
        mileage: 25000,
        transmission: 'أوتوماتيك',
        fuelType: 'ديزل',
        color: 'رمادي',
        condition: 'مستعملة',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400'
    },
    {
        id: 5,
        name: 'Toyota Camry 2021',
        price: 28000,
        year: 2021,
        mileage: 35000,
        transmission: 'أوتوماتيك',
        fuelType: 'بنزين',
        color: 'فضي',
        condition: 'مستعملة',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400'
    },
    {
        id: 6,
        name: 'Hyundai Tucson 2023',
        price: 32000,
        year: 2023,
        mileage: 12000,
        transmission: 'أوتوماتيك',
        fuelType: 'بنزين',
        color: 'أحمر',
        condition: 'مستعملة',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400'
    }
];

let selectedCars = [null, null, null];
let currentSlot = 1;

// Open car selector modal
function openCarSelector(slot) {
    currentSlot = slot;
    const modal = document.getElementById('carSelectorModal');
    const carsGrid = document.getElementById('availableCars');
    
    // Filter out already selected cars
    const selectedIds = selectedCars.filter(c => c).map(c => c.id);
    const available = availableCars.filter(car => !selectedIds.includes(car.id));
    
    carsGrid.innerHTML = available.map(car => `
        <div class="car-card-mini" onclick="selectCar(${car.id})">
            <img src="${car.image}" alt="${car.name}">
            <h4>${car.name}</h4>
            <p class="price">${formatNumber(car.price)} دينار</p>
            <button class="btn btn-primary btn-sm">
                <i class="fas fa-check"></i> اختيار
            </button>
        </div>
    `).join('');
    
    modal.style.display = 'flex';
}

// Close car selector modal
function closeCarSelector() {
    document.getElementById('carSelectorModal').style.display = 'none';
}

// Select a car
function selectCar(carId) {
    const car = availableCars.find(c => c.id === carId);
    selectedCars[currentSlot - 1] = car;
    
    updateSlot(currentSlot, car);
    closeCarSelector();
    updateComparison();
}

// Update slot with selected car
function updateSlot(slot, car) {
    const slotElement = document.querySelector(`[data-slot="${slot}"]`);
    slotElement.innerHTML = `
        <div class="selected-car">
            <img src="${car.image}" alt="${car.name}">
            <div class="car-info-mini">
                <h4>${car.name}</h4>
                <p class="price">${formatNumber(car.price)} دينار</p>
            </div>
            <button class="remove-btn" onclick="removeCar(${slot})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
}

// Remove car from comparison
function removeCar(slot) {
    selectedCars[slot - 1] = null;
    const slotElement = document.querySelector(`[data-slot="${slot}"]`);
    slotElement.innerHTML = `
        <div class="slot-placeholder">
            <i class="fas fa-car"></i>
            <p>اختر السيارة ${slot === 1 ? 'الأولى' : slot === 2 ? 'الثانية' : 'الثالثة'}</p>
            <button class="btn ${slot === 3 ? 'btn-outline' : 'btn-primary'}" onclick="openCarSelector(${slot})">
                <i class="fas fa-plus"></i> إضافة
            </button>
        </div>
    `;
    updateComparison();
}

// Update comparison table
function updateComparison() {
    const activeCars = selectedCars.filter(c => c !== null);
    
    if (activeCars.length < 2) {
        document.getElementById('comparisonTable').style.display = 'none';
        document.getElementById('winnerCard').style.display = 'none';
        return;
    }
    
    document.getElementById('comparisonTable').style.display = 'block';
    
    // Update comparison data
    selectedCars.forEach((car, index) => {
        const slot = index + 1;
        
        if (car) {
            document.getElementById(`img-${slot}`).innerHTML = `
                <img src="${car.image}" alt="${car.name}" style="width: 100%; border-radius: 10px;">
            `;
            document.getElementById(`name-${slot}`).textContent = car.name;
            document.getElementById(`price-${slot}`).innerHTML = `<strong>${formatNumber(car.price)} دينار</strong>`;
            document.getElementById(`year-${slot}`).textContent = car.year;
            document.getElementById(`mileage-${slot}`).textContent = formatNumber(car.mileage) + ' كم';
            document.getElementById(`transmission-${slot}`).textContent = car.transmission;
            document.getElementById(`fuel-${slot}`).textContent = car.fuelType;
            document.getElementById(`color-${slot}`).textContent = car.color;
            document.getElementById(`condition-${slot}`).textContent = car.condition;
            document.getElementById(`action-${slot}`).innerHTML = `
                <a href="car-details.html?id=${car.id}" class="btn btn-primary btn-sm" style="width: 100%;">
                    <i class="fas fa-eye"></i> عرض التفاصيل
                </a>
            `;
        } else {
            // Clear empty slots
            ['img', 'name', 'price', 'year', 'mileage', 'transmission', 'fuel', 'color', 'condition', 'action'].forEach(field => {
                const element = document.getElementById(`${field}-${slot}`);
                if (element) element.innerHTML = '-';
            });
        }
    });
    
    // Highlight best value
    highlightBestValue();
    
    // Show winner if we have at least 2 cars
    if (activeCars.length >= 2) {
        showWinner();
    }
}

// Highlight best values
function highlightBestValue() {
    const activeCars = selectedCars.filter(c => c !== null);
    if (activeCars.length < 2) return;
    
    // Find lowest price
    const minPrice = Math.min(...activeCars.map(c => c.price));
    activeCars.forEach((car, index) => {
        const slot = selectedCars.indexOf(car) + 1;
        const priceCell = document.getElementById(`price-${slot}`);
        if (car.price === minPrice) {
            priceCell.style.color = '#10b981';
            priceCell.innerHTML = `<strong>${formatNumber(car.price)} دينار</strong> <i class="fas fa-crown" style="color: #f59e0b;"></i>`;
        }
    });
    
    // Find newest year
    const maxYear = Math.max(...activeCars.map(c => c.year));
    activeCars.forEach((car, index) => {
        const slot = selectedCars.indexOf(car) + 1;
        const yearCell = document.getElementById(`year-${slot}`);
        if (car.year === maxYear) {
            yearCell.style.color = '#10b981';
            yearCell.innerHTML = `${car.year} <i class="fas fa-star" style="color: #f59e0b;"></i>`;
        }
    });
    
    // Find lowest mileage
    const minMileage = Math.min(...activeCars.map(c => c.mileage));
    activeCars.forEach((car, index) => {
        const slot = selectedCars.indexOf(car) + 1;
        const mileageCell = document.getElementById(`mileage-${slot}`);
        if (car.mileage === minMileage) {
            mileageCell.style.color = '#10b981';
            mileageCell.innerHTML = `${formatNumber(car.mileage)} كم <i class="fas fa-star" style="color: #f59e0b;"></i>`;
        }
    });
}

// Show winner recommendation
function showWinner() {
    const activeCars = selectedCars.filter(c => c !== null);
    
    // Calculate score for each car
    const scores = activeCars.map(car => {
        let score = 0;
        
        // Price score (lower is better)
        const priceRatio = 1 - (car.price / Math.max(...activeCars.map(c => c.price)));
        score += priceRatio * 40;
        
        // Year score (newer is better)
        const yearRatio = car.year / Math.max(...activeCars.map(c => c.year));
        score += yearRatio * 30;
        
        // Mileage score (lower is better)
        const mileageRatio = 1 - (car.mileage / Math.max(...activeCars.map(c => c.mileage)));
        score += mileageRatio * 30;
        
        return { car, score };
    });
    
    // Find winner
    const winner = scores.reduce((max, current) => current.score > max.score ? current : max);
    
    const winnerCard = document.getElementById('winnerCard');
    const winnerContent = document.getElementById('winnerContent');
    
    winnerContent.innerHTML = `
        <div class="winner-details">
            <img src="${winner.car.image}" alt="${winner.car.name}">
            <div class="winner-info">
                <h4>${winner.car.name}</h4>
                <p class="winner-reason">الخيار الأفضل بناءً على السعر، السنة، والكيلومترات</p>
                <div class="winner-stats">
                    <span><i class="fas fa-dollar-sign"></i> ${formatNumber(winner.car.price)} دينار</span>
                    <span><i class="fas fa-calendar"></i> ${winner.car.year}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${formatNumber(winner.car.mileage)} كم</span>
                </div>
                <a href="car-details.html?id=${winner.car.id}" class="btn btn-primary">
                    <i class="fas fa-eye"></i> عرض التفاصيل
                </a>
            </div>
        </div>
    `;
    
    winnerCard.style.display = 'block';
}

// Clear comparison
function clearComparison() {
    if (confirm('هل تريد مسح جميع السيارات من المقارنة؟')) {
        selectedCars = [null, null, null];
        [1, 2, 3].forEach(slot => {
            const slotElement = document.querySelector(`[data-slot="${slot}"]`);
            slotElement.innerHTML = `
                <div class="slot-placeholder">
                    <i class="fas fa-car"></i>
                    <p>اختر السيارة ${slot === 1 ? 'الأولى' : slot === 2 ? 'الثانية' : 'الثالثة'}</p>
                    <button class="btn ${slot === 3 ? 'btn-outline' : 'btn-primary'}" onclick="openCarSelector(${slot})">
                        <i class="fas fa-plus"></i> إضافة
                    </button>
                </div>
            `;
        });
        document.getElementById('comparisonTable').style.display = 'none';
        document.getElementById('winnerCard').style.display = 'none';
    }
}

// Helper functions
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('carSelectorModal');
    if (event.target === modal) {
        closeCarSelector();
    }
}
