// ===========================
// Smooth Scrolling & Navigation
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    function activateNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);

    // ===========================
    // Scroll to Top Button
    // ===========================
    const scrollTopBtn = document.getElementById('scrollTop');

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

    // ===========================
    // Header Background on Scroll
    // ===========================
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===========================
    // Contact Form Handling
    // ===========================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: contactForm.querySelector('input[type="text"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                phone: contactForm.querySelector('input[type="tel"]').value,
                message: contactForm.querySelector('textarea').value
            };

            // Simple validation
            if (!formData.name || !formData.email || !formData.message) {
                showNotification('الرجاء ملء جميع الحقول المطلوبة', 'error');
                return;
            }

            // Here you would typically send the data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }

    // ===========================
    // Notification System
    // ===========================
    function showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        // Add styles
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

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Append to body
        document.body.appendChild(notification);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // ===========================
    // Scroll Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .about-feature');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===========================
    // Product Card Interactions
    // ===========================
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const orderBtn = card.querySelector('.btn');
        
        if (orderBtn) {
            orderBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const productName = card.querySelector('h3').textContent;
                const productPrice = card.querySelector('.amount').textContent;
                
                showNotification(`تم إضافة "${productName}" - $${productPrice} إلى السلة!`, 'success');
                
                // Here you would typically add to cart or redirect to checkout
                console.log('Product selected:', { name: productName, price: productPrice });
            });
        }
    });

    // ===========================
    // Typing Animation for Hero
    // ===========================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        heroTitle.style.opacity = '0';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.animation = 'fadeInUp 0.8s ease';
        }, 200);
    }

    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(animationStyle);

    // ===========================
    // Parallax Effect for Hero Cards
    // ===========================
    const floatingCards = document.querySelectorAll('.floating-card');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        floatingCards.forEach((card, index) => {
            const speed = 0.5 + (index * 0.1);
            card.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.01}deg)`;
        });
    });

    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // Counter Animation for Stats
    // ===========================
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElements = entry.target.querySelectorAll('.stat-item h3');
                statElements.forEach(el => {
                    const text = el.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    if (number) {
                        el.textContent = '0';
                        animateCounter(el, number);
                    }
                });
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statObserver.observe(heroStats);
    }

    // ===========================
    // Form Input Animations
    // ===========================
    const formControls = document.querySelectorAll('.form-control');
    
    formControls.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.style.borderColor = 'var(--primary-color)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
            if (!this.value) {
                this.style.borderColor = 'var(--border-color)';
            }
        });
    });

    // ===========================
    // Keyboard Navigation
    // ===========================
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // ===========================
    // Loading Animation
    // ===========================
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    console.log('Mustafa Teihi Website - Initialized Successfully! 🚀');
});

// ===========================
// Hero Slider Functionality
// ===========================
let currentSlideIndex = 1;
let slideInterval;

// Initialize slider
function initSlider() {
    showSlide(currentSlideIndex);
    startAutoSlide();
}

// Show specific slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide
    slides[currentSlideIndex - 1].classList.add('active');
    dots[currentSlideIndex - 1].classList.add('active');
}

// Move to next/previous slide
function moveSlide(n) {
    stopAutoSlide();
    currentSlideIndex += n;
    showSlide(currentSlideIndex);
    startAutoSlide();
}

// Jump to specific slide
function currentSlide(n) {
    stopAutoSlide();
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
    startAutoSlide();
}

// Auto slide every 5 seconds
function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }, 5000);
}

// Stop auto slide
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Pause slider on hover
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.hero-slider');
    
    if (sliderContainer) {
        initSlider();
        
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }
});

// Keyboard navigation for slider
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveSlide(1);
    } else if (e.key === 'ArrowRight') {
        moveSlide(-1);
    }
});

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.hero-slider');
    
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderContainer.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        moveSlide(1);
    }
    if (touchEndX > touchStartX + 50) {
        moveSlide(-1);
    }
}

// ===========================
// Contact Modal for Car Purchase
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('.btn-gradient, .btn-primary');
    
    contactButtons.forEach(button => {
        // Only apply to buttons related to car inquiries
        if (button.textContent.includes('استفسر') || 
            button.textContent.includes('احجز') || 
            button.textContent.includes('تواصل')) {
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showContactModal();
            });
        }
    });
});

function showContactModal() {
    // Create modal HTML
    const modalHTML = `
        <div class="contact-modal-overlay" id="contactModal">
            <div class="contact-modal">
                <button class="modal-close" onclick="closeContactModal()">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="modal-header">
                    <i class="fas fa-phone-alt"></i>
                    <h2>تواصل معنا للاستفسار</h2>
                    <p>يسعدنا خدمتك والإجابة على جميع استفساراتك</p>
                </div>
                
                <div class="modal-content">
                    <div class="contact-method">
                        <div class="contact-icon phone">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h3>اتصل بنا</h3>
                            <a href="tel:0780563033" class="contact-link">0780563033</a>
                            <p>متاح من 9 صباحاً - 9 مساءً</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="contact-icon whatsapp">
                            <i class="fab fa-whatsapp"></i>
                        </div>
                        <div class="contact-details">
                            <h3>واتساب</h3>
                            <a href="https://wa.me/962780563033" target="_blank" class="contact-link">0780563033</a>
                            <p>رد فوري على استفساراتك</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="contact-icon email">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h3>البريد الإلكتروني</h3>
                            <a href="mailto:mustafaTeihi2000@gmail.com" class="contact-link">mustafaTeihi2000@gmail.com</a>
                            <p>سنرد خلال 24 ساعة</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="contact-icon instagram">
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div class="contact-details">
                            <h3>إنستغرام</h3>
                            <a href="https://instagram.com/mustafaTeihi005" target="_blank" class="contact-link">@mustafaTeihi005</a>
                            <p>تابعنا لآخر العروض</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="contact-icon facebook">
                            <i class="fab fa-facebook"></i>
                        </div>
                        <div class="contact-details">
                            <h3>فيسبوك</h3>
                            <a href="https://www.facebook.com/share/1Bq2rxJdj9/" target="_blank" class="contact-link">Mustafa Teihi</a>
                            <p>تواصل عبر الماسنجر</p>
                        </div>
                    </div>
                    
                    <div class="contact-method location">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h3>موقعنا</h3>
                            <p class="contact-link">العقبة - الدوار الخامس - شارع الفارابي</p>
                            <p>زرنا للمعاينة الفعلية</p>
                        </div>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="window.location.href='contact.html'">
                        <i class="fas fa-paper-plane"></i> صفحة الاتصال الكاملة
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Close on overlay click
    document.getElementById('contactModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeContactModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeContactModal();
        }
    });
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.add('closing');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}
