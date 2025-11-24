// Special Offers JavaScript

// Timer countdown
function startCountdown() {
    const timerEnd = new Date('2024-12-31T23:59:59').getTime();
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = timerEnd - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Filter offers
function filterOffers() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const discountFilter = document.getElementById('discountFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;
    
    const offers = Array.from(document.querySelectorAll('.offer-card'));
    
    // Filter by category
    offers.forEach(offer => {
        const category = offer.dataset.category;
        const discount = parseInt(offer.dataset.discount);
        
        let showCategory = !categoryFilter || category === categoryFilter;
        let showDiscount = true;
        
        if (discountFilter === 'high') {
            showDiscount = discount >= 20;
        } else if (discountFilter === 'medium') {
            showDiscount = discount >= 10 && discount < 20;
        } else if (discountFilter === 'low') {
            showDiscount = discount < 10;
        }
        
        if (showCategory && showDiscount) {
            offer.style.display = 'block';
            setTimeout(() => {
                offer.style.opacity = '1';
                offer.style.transform = 'scale(1)';
            }, 10);
        } else {
            offer.style.opacity = '0';
            offer.style.transform = 'scale(0.9)';
            setTimeout(() => {
                offer.style.display = 'none';
            }, 300);
        }
    });
    
    // Sort offers
    const grid = document.getElementById('offersGrid');
    const visibleOffers = offers.filter(o => o.style.display !== 'none');
    
    if (sortFilter === 'price-low') {
        visibleOffers.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.offer-price-value').textContent.replace(/[^0-9]/g, ''));
            const priceB = parseInt(b.querySelector('.offer-price-value').textContent.replace(/[^0-9]/g, ''));
            return priceA - priceB;
        });
    } else if (sortFilter === 'price-high') {
        visibleOffers.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.offer-price-value').textContent.replace(/[^0-9]/g, ''));
            const priceB = parseInt(b.querySelector('.offer-price-value').textContent.replace(/[^0-9]/g, ''));
            return priceB - priceA;
        });
    } else if (sortFilter === 'discount') {
        visibleOffers.sort((a, b) => {
            return parseInt(b.dataset.discount) - parseInt(a.dataset.discount);
        });
    }
    
    visibleOffers.forEach(offer => grid.appendChild(offer));
}

// Favorite button toggle
function toggleFavorite(button) {
    const icon = button.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.style.background = '#f5576c';
        button.style.color = 'white';
        showNotification('تمت إضافة السيارة إلى المفضلة', 'success');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.style.background = 'white';
        button.style.color = '#667eea';
        showNotification('تمت إزالة السيارة من المفضلة', 'info');
    }
}

// Newsletter subscription
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    showNotification('شكراً لاشتراكك! سنرسل لك أحدث العروض على ' + email, 'success');
    e.target.reset();
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        font-family: 'Cairo', sans-serif;
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translate(-50%, -100px);
            opacity: 0;
        }
        to {
            transform: translate(-50%, 0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translate(-50%, 0);
            opacity: 1;
        }
        to {
            transform: translate(-50%, -100px);
            opacity: 0;
        }
    }
    
    .offer-card {
        opacity: 1;
        transform: scale(1);
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Start countdown timer
    startCountdown();
    
    // Setup filters
    document.getElementById('categoryFilter').addEventListener('change', filterOffers);
    document.getElementById('discountFilter').addEventListener('change', filterOffers);
    document.getElementById('sortFilter').addEventListener('change', filterOffers);
    
    // Setup favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleFavorite(btn);
        });
    });
    
    // Setup newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    console.log('✨ صفحة العروض الخاصة جاهزة!');
});
