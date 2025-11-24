// ===========================
// Admin Panel JavaScript
// ===========================

// Default credentials (for demo purposes - في الإنتاج يجب استخدام قاعدة بيانات)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Validate credentials
            if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
                // Success
                if (rememberMe) {
                    localStorage.setItem('adminLoggedIn', 'true');
                } else {
                    sessionStorage.setItem('adminLoggedIn', 'true');
                }
                
                showDashboard();
            } else {
                // Error
                showError('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        });
    }
    
    // Check if already logged in
    if (localStorage.getItem('adminLoggedIn') === 'true' || 
        sessionStorage.getItem('adminLoggedIn') === 'true') {
        showDashboard();
    }
});

// Toggle Password Visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

// Show Dashboard
function showDashboard() {
    const loginContainer = document.getElementById('loginContainer');
    const adminDashboard = document.getElementById('adminDashboard');
    
    loginContainer.style.display = 'none';
    adminDashboard.style.display = 'flex';
}

// Show Error Message
function showError(message) {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        background: #fee;
        color: #c33;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        font-weight: 600;
        animation: shake 0.5s;
    `;
    errorDiv.textContent = message;
    
    const loginForm = document.getElementById('loginForm');
    loginForm.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Logout Function
function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('adminLoggedIn');
        sessionStorage.removeItem('adminLoggedIn');
        
        const loginContainer = document.getElementById('loginContainer');
        const adminDashboard = document.getElementById('adminDashboard');
        
        loginContainer.style.display = 'flex';
        adminDashboard.style.display = 'none';
        
        // Reset form
        document.getElementById('loginForm').reset();
    }
}

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('adminSidebar');
    sidebar.classList.toggle('collapsed');
    
    // For mobile
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('active');
    }
}

// Show Section
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionName + 'Section');
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Update active nav item
    event.currentTarget.classList.add('active');
    
    // Update page title
    const titles = {
        'dashboard': 'لوحة المعلومات',
        'cars': 'إدارة السيارات',
        'orders': 'الطلبات',
        'messages': 'الرسائل',
        'gallery': 'المعرض',
        'settings': 'الإعدادات',
        'analytics': 'التحليلات'
    };
    
    document.getElementById('pageTitle').textContent = titles[sectionName] || 'لوحة التحكم';
    
    // Close mobile sidebar
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('adminSidebar');
        sidebar.classList.remove('active');
    }
}

// Show Add Car Form
function showAddCarForm() {
    alert('نموذج إضافة سيارة جديدة قيد التطوير...');
    // في الإصدار الكامل، سيتم فتح نموذج modal لإضافة سيارة
}

// Charts (using Chart.js - placeholder)
document.addEventListener('DOMContentLoaded', function() {
    const salesChart = document.getElementById('salesChart');
    if (salesChart) {
        // هنا يمكن إضافة مكتبة Chart.js لعرض الرسوم البيانية
        salesChart.style.height = '250px';
        salesChart.style.display = 'flex';
        salesChart.style.alignItems = 'center';
        salesChart.style.justifyContent = 'center';
        salesChart.style.background = '#f8f9fa';
        salesChart.style.borderRadius = '15px';
        salesChart.innerHTML = '<p style="color: #999;">الرسم البياني قيد التطوير</p>';
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const sidebar = document.getElementById('adminSidebar');
        sidebar.classList.remove('active');
    }
});

// Close mobile sidebar when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('adminSidebar');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Prevent form submission on demo
document.addEventListener('DOMContentLoaded', function() {
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        const saveBtn = settingsForm.querySelector('.btn-primary');
        if (saveBtn) {
            saveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('تم حفظ التغييرات بنجاح!\n\nملاحظة: هذه نسخة تجريبية من لوحة التحكم');
            });
        }
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + D = Dashboard
    if (e.altKey && e.key === 'd') {
        e.preventDefault();
        const dashboardLink = document.querySelector('.nav-item[onclick*="dashboard"]');
        if (dashboardLink) dashboardLink.click();
    }
    
    // Alt + C = Cars
    if (e.altKey && e.key === 'c') {
        e.preventDefault();
        const carsLink = document.querySelector('.nav-item[onclick*="cars"]');
        if (carsLink) carsLink.click();
    }
    
    // Alt + S = Settings
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        const settingsLink = document.querySelector('.nav-item[onclick*="settings"]');
        if (settingsLink) settingsLink.click();
    }
});

console.log('%c🚗 Mustafa Teihi Admin Panel', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cبيانات الدخول التجريبية:', 'color: #764ba2; font-size: 14px; font-weight: bold;');
console.log('Username: admin');
console.log('Password: admin123');
