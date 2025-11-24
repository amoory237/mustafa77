// Admin Common Functions

// Sidebar Toggle
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('adminSidebar');
    
    console.log('🔧 تحميل وظائف الإدارة...');
    console.log('Sidebar:', sidebar);
    console.log('Mobile Btn:', mobileMenuBtn);
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
                sidebar.classList.toggle('collapsed');
                // إخفاء كامل في الجوال
                if (window.innerWidth <= 768) {
                    sidebar.classList.add('fully-hidden');
                }
                console.log('تبديل القائمة');
        });
    }
    
    if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                sidebar.classList.remove('fully-hidden');
                sidebar.classList.toggle('active');
                console.log('تبديل القائمة للموبايل (إظهار):', sidebar.classList.contains('active'));
            });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                sidebar.classList.remove('active');
                console.log('إغلاق القائمة - نقر خارجي');
            }
        }
    });
    
    // Close sidebar when clicking on any menu item (mobile)
    const sidebarLinks = sidebar.querySelectorAll('.nav-link');
    console.log('عدد روابط القائمة:', sidebarLinks.length);
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                    sidebar.classList.add('fully-hidden');
                    console.log('إغلاق القائمة بالكامل - نقر على رابط');
            }
        });
    });
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
                localStorage.removeItem('adminLoggedIn');
                window.location.href = '../admin.html';
            }
        });
    }
    
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn && !window.location.href.includes('admin.html')) {
        window.location.href = '../admin.html';
    }
});

// Utility Functions
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(amount) {
    return formatNumber(amount) + ' دينار';
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('ar-JO', options);
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification styles dynamically
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background: #fff;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 10000;
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .notification.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
    
    .notification-success {
        border-right: 4px solid #43e97b;
    }
    
    .notification-success i {
        color: #43e97b;
        font-size: 1.5rem;
    }
    
    .notification-error {
        border-right: 4px solid #f5576c;
    }
    
    .notification-error i {
        color: #f5576c;
        font-size: 1.5rem;
    }
    
    .notification span {
        font-weight: 600;
        color: #2d3748;
    }
`;
document.head.appendChild(style);
