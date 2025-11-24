// Settings JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Settings tabs
    const settingsTabs = document.querySelectorAll('.settings-tab');
    const settingsPanels = document.querySelectorAll('.settings-panel');
    
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetPanel = this.dataset.tab;
            
            // Update active tab
            settingsTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show target panel
            settingsPanels.forEach(panel => {
                if (panel.id === targetPanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });
    
    // General Settings Form
    const generalForm = document.getElementById('generalForm');
    if (generalForm) {
        generalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(generalForm);
            const settings = Object.fromEntries(formData);
            
            console.log('General settings:', settings);
            
            // Save to localStorage (in real app, send to server)
            localStorage.setItem('generalSettings', JSON.stringify(settings));
            
            showNotification('تم حفظ الإعدادات العامة بنجاح!', 'success');
        });
    }
    
    // Contact Settings Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const settings = Object.fromEntries(formData);
            
            console.log('Contact settings:', settings);
            
            localStorage.setItem('contactSettings', JSON.stringify(settings));
            
            showNotification('تم حفظ معلومات الاتصال بنجاح!', 'success');
        });
    }
    
    // Social Media Settings Form
    const socialForm = document.getElementById('socialForm');
    if (socialForm) {
        socialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(socialForm);
            const settings = Object.fromEntries(formData);
            
            console.log('Social settings:', settings);
            
            localStorage.setItem('socialSettings', JSON.stringify(settings));
            
            showNotification('تم حفظ روابط وسائل التواصل بنجاح!', 'success');
        });
    }
    
    // Security Settings Form
    const securityForm = document.getElementById('securityForm');
    if (securityForm) {
        securityForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPassword = securityForm.currentPassword.value;
            const newPassword = securityForm.newPassword.value;
            const confirmPassword = securityForm.confirmPassword.value;
            
            // Password change validation
            if (newPassword || confirmPassword) {
                if (!currentPassword) {
                    showNotification('يرجى إدخال كلمة المرور الحالية', 'error');
                    return;
                }
                
                if (newPassword !== confirmPassword) {
                    showNotification('كلمات المرور الجديدة غير متطابقة', 'error');
                    return;
                }
                
                if (newPassword.length < 8) {
                    showNotification('كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل', 'error');
                    return;
                }
                
                // Check current password (in real app, verify with server)
                const storedPassword = 'admin123'; // Demo only
                if (currentPassword !== storedPassword) {
                    showNotification('كلمة المرور الحالية غير صحيحة', 'error');
                    return;
                }
                
                // Save new password
                console.log('Password changed successfully');
                showNotification('تم تغيير كلمة المرور بنجاح!', 'success');
                securityForm.reset();
            } else {
                // Save security options only
                const formData = new FormData(securityForm);
                const settings = Object.fromEntries(formData);
                
                localStorage.setItem('securitySettings', JSON.stringify(settings));
                showNotification('تم حفظ إعدادات الأمان بنجاح!', 'success');
            }
        });
    }
    
    // Appearance Settings Form
    const appearanceForm = document.getElementById('appearanceForm');
    if (appearanceForm) {
        appearanceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(appearanceForm);
            const settings = Object.fromEntries(formData);
            
            console.log('Appearance settings:', settings);
            
            // Apply theme
            applyTheme(settings.theme);
            
            // Apply primary color
            applyPrimaryColor(settings.primaryColor);
            
            // Apply font size
            applyFontSize(settings.fontSize);
            
            localStorage.setItem('appearanceSettings', JSON.stringify(settings));
            
            showNotification('تم حفظ إعدادات المظهر بنجاح!', 'success');
        });
        
        // Live preview for color picker
        const colorOptions = document.querySelectorAll('.color-option input[type="radio"]');
        colorOptions.forEach(option => {
            option.addEventListener('change', function() {
                applyPrimaryColor(this.value);
            });
        });
    }
    
    // Load saved settings
    loadSettings();
});

// Apply theme
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (theme === 'light') {
        document.body.classList.remove('dark-theme');
    } else if (theme === 'auto') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDark) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
}

// Apply primary color
function applyPrimaryColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
    console.log('Primary color changed to:', color);
}

// Apply font size
function applyFontSize(size) {
    const root = document.documentElement;
    if (size === 'small') {
        root.style.fontSize = '14px';
    } else if (size === 'medium') {
        root.style.fontSize = '16px';
    } else if (size === 'large') {
        root.style.fontSize = '18px';
    }
}

// Load saved settings
function loadSettings() {
    // Load general settings
    const generalSettings = localStorage.getItem('generalSettings');
    if (generalSettings) {
        const settings = JSON.parse(generalSettings);
        const form = document.getElementById('generalForm');
        if (form) {
            Object.keys(settings).forEach(key => {
                const input = form.elements[key];
                if (input) input.value = settings[key];
            });
        }
    }
    
    // Load contact settings
    const contactSettings = localStorage.getItem('contactSettings');
    if (contactSettings) {
        const settings = JSON.parse(contactSettings);
        const form = document.getElementById('contactForm');
        if (form) {
            Object.keys(settings).forEach(key => {
                const input = form.elements[key];
                if (input) input.value = settings[key];
            });
        }
    }
    
    // Load social settings
    const socialSettings = localStorage.getItem('socialSettings');
    if (socialSettings) {
        const settings = JSON.parse(socialSettings);
        const form = document.getElementById('socialForm');
        if (form) {
            Object.keys(settings).forEach(key => {
                const input = form.elements[key];
                if (input) input.value = settings[key];
            });
        }
    }
    
    // Load appearance settings
    const appearanceSettings = localStorage.getItem('appearanceSettings');
    if (appearanceSettings) {
        const settings = JSON.parse(appearanceSettings);
        const form = document.getElementById('appearanceForm');
        if (form) {
            Object.keys(settings).forEach(key => {
                const input = form.elements[key];
                if (input) {
                    if (input.type === 'radio') {
                        const radio = form.querySelector(`input[name="${key}"][value="${settings[key]}"]`);
                        if (radio) radio.checked = true;
                    } else if (input.type === 'checkbox') {
                        input.checked = settings[key] === 'on';
                    } else {
                        input.value = settings[key];
                    }
                }
            });
            
            // Apply saved appearance
            applyTheme(settings.theme);
            if (settings.primaryColor) applyPrimaryColor(settings.primaryColor);
            if (settings.fontSize) applyFontSize(settings.fontSize);
        }
    }
}
