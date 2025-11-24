// Car Details Page JavaScript

// Thumbnails Gallery
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Change main image
            const imgSrc = this.querySelector('img').src.replace('w=300', 'w=1200');
            mainImage.src = imgSrc;
        });
    });

    // Wishlist Toggle
    const wishlistBtn = document.getElementById('wishlistBtn');
    wishlistBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        const icon = this.querySelector('i');
        
        if (this.classList.contains('active')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    });

    // Tabs Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Contact Buttons - Show Contact Modal
    const contactButtons = document.querySelectorAll('.btn-contact, .btn-whatsapp');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (typeof showContactModal === 'function') {
                showContactModal();
            }
        });
    });

    // Test Drive Button
    const testDriveBtn = document.querySelector('.btn-test-drive');
    if (testDriveBtn) {
        testDriveBtn.addEventListener('click', function() {
            alert('سيتم التواصل معك قريباً لتحديد موعد تجربة القيادة');
        });
    }

    // Share Buttons
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentUrl = window.location.href;
            const carTitle = document.querySelector('.car-title').textContent;
            
            if (this.classList.contains('facebook')) {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
            } else if (this.classList.contains('twitter')) {
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(carTitle)}`, '_blank');
            } else if (this.classList.contains('whatsapp')) {
                window.open(`https://wa.me/?text=${encodeURIComponent(carTitle + ' - ' + currentUrl)}`, '_blank');
            } else if (this.classList.contains('copy')) {
                navigator.clipboard.writeText(currentUrl).then(() => {
                    alert('تم نسخ الرابط!');
                });
            }
        });
    });

    // Initialize Calculator
    initCalculator();
});

// Loan Calculator
function initCalculator() {
    const carPrice = 285000;
    const downPaymentSlider = document.getElementById('downPaymentSlider');
    const downPaymentValue = document.getElementById('downPaymentValue');
    const downPaymentAmount = document.getElementById('downPaymentAmount');
    
    if (downPaymentSlider) {
        downPaymentSlider.addEventListener('input', function() {
            const percentage = this.value;
            downPaymentValue.textContent = percentage + '%';
            const amount = (carPrice * percentage / 100).toLocaleString('en-US');
            downPaymentAmount.value = amount + ' دينار';
        });
    }
}

function calculateLoan() {
    const carPrice = 285000;
    const downPaymentPercentage = parseFloat(document.getElementById('downPaymentSlider').value);
    const loanPeriodYears = parseInt(document.getElementById('loanPeriod').value);
    const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
    
    // Calculate loan amount
    const downPayment = carPrice * (downPaymentPercentage / 100);
    const loanAmount = carPrice - downPayment;
    
    // Calculate monthly interest rate
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = loanPeriodYears * 12;
    
    // Calculate monthly payment using loan formula
    let monthlyPayment;
    if (monthlyInterestRate === 0) {
        monthlyPayment = loanAmount / numberOfPayments;
    } else {
        monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
                        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    }
    
    // Calculate totals
    const totalPayments = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayments - loanAmount;
    const totalAmount = downPayment + totalPayments;
    
    // Update UI
    document.getElementById('monthlyPayment').textContent = Math.round(monthlyPayment).toLocaleString('en-US') + ' دينار';
    document.getElementById('totalLoan').textContent = Math.round(loanAmount).toLocaleString('en-US') + ' دينار';
    document.getElementById('totalInterest').textContent = Math.round(totalInterest).toLocaleString('en-US') + ' دينار';
    document.getElementById('totalAmount').textContent = Math.round(totalAmount).toLocaleString('en-US') + ' دينار';
    
    // Scroll to results
    document.getElementById('calculatorResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Scroll to top button (reuse from main script)
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
