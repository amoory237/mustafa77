// إدارة السيارات - نظام CRUD كامل

// بيانات السيارات (في تطبيق حقيقي ستأتي من قاعدة البيانات)
var carsData = [
    {
        id: 1,
        name: 'مرسيدس AMG GT 2024',
        brand: 'Mercedes',
        year: 2024,
        price: 285000,
        category: 'luxury',
        status: 'available',
        mileage: 8500,
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'رمادي ميتاليك',
        views: 1245,
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
        description: 'سيارة رياضية فاخرة بحالة ممتازة',
        features: ['فتحة سقف بانورامية', 'نظام ملاحة', 'كاميرا 360', 'مقاعد جلد']
    },
    {
        id: 2,
        name: 'مرسيدس S-Class 2024',
        brand: 'Mercedes',
        year: 2024,
        price: 425000,
        category: 'luxury',
        status: 'reserved',
        mileage: 3200,
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أسود',
        views: 892,
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
        description: 'الفخامة الألمانية بأعلى مستوياتها',
        features: ['نظام قيادة ذاتية', 'مقاعد تدفئة وتبريد', 'شاشة OLED']
    },
    {
        id: 3,
        name: 'بورش 911 تيربو 2023',
        brand: 'Porsche',
        year: 2023,
        price: 395000,
        category: 'sport',
        status: 'available',
        mileage: 12000,
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أصفر',
        views: 1567,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
        description: 'سيارة رياضية أسطورية',
        features: ['محرك توربو', 'نظام سبورت', 'مقاعد رياضية']
    },
    {
        id: 4,
        name: 'BMW M5 2024',
        brand: 'BMW',
        year: 2024,
        price: 225000,
        category: 'sport',
        status: 'available',
        mileage: 5000,
        transmission: 'أوتوماتيك',
        fuel: 'بنزين',
        color: 'أزرق',
        views: 734,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
        description: 'أداء رياضي استثنائي',
        features: ['دفع رباعي', 'نظام M Sport', 'عادم رياضي']
    },
    {
        id: 5,
        name: 'أودي Q7 2023',
        brand: 'Audi',
        year: 2023,
        price: 185000,
        category: 'suv',
        status: 'available',
        mileage: 18000,
        transmission: 'أوتوماتيك',
        fuel: 'ديزل',
        color: 'أبيض',
        views: 623,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
        description: 'SUV فاخرة بـ 7 مقاعد',
        features: ['7 مقاعد', 'دفع رباعي', 'نظام ترفيه خلفي']
    }
];

// متغيرات عامة
var currentView = 'table';
var selectedCategory = '';
var selectedStatus = '';
var searchQuery = '';

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 تحميل نظام إدارة السيارات...');
    renderCars();
    setupEventListeners();
    console.log('✅ نظام إدارة السيارات جاهز!');
});

// إعداد مستمعات الأحداث
function setupEventListeners() {
    // زر إضافة سيارة
    const addCarBtn = document.getElementById('addCarBtn');
    if (addCarBtn) {
        addCarBtn.addEventListener('click', showAddCarModal);
    }

    // البحث
    const searchInput = document.getElementById('searchCars');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderCars();
        });
    }

    // الفلاتر
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            selectedCategory = e.target.value;
            renderCars();
        });
    }

    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', (e) => {
            selectedStatus = e.target.value;
            renderCars();
        });
    }

    // تحديد الكل
    const selectAll = document.getElementById('selectAll');
    if (selectAll) {
        selectAll.addEventListener('change', (e) => {
            document.querySelectorAll('.row-checkbox').forEach(checkbox => {
                checkbox.checked = e.target.checked;
            });
        });
    }

    // زر التصدير
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportCars);
    }

    // تسجيل الخروج
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
                localStorage.removeItem('adminLoggedIn');
                window.location.href = '../login.html';
            }
        });
    }
}

// عرض السيارات
function renderCars() {
    // تصفية السيارات
    let filteredCars = carsData.filter(car => {
        let matchesSearch = car.name.toLowerCase().includes(searchQuery) || 
                          car.brand.toLowerCase().includes(searchQuery);
        let matchesCategory = !selectedCategory || car.category === selectedCategory;
        let matchesStatus = !selectedStatus || car.status === selectedStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    // تحديث العداد
    const headerTitle = document.querySelector('.card-header h3');
    if (headerTitle) {
        headerTitle.innerHTML = `<i class="fas fa-car"></i> قائمة السيارات (${filteredCars.length})`;
    }

    renderTableView(filteredCars);
}

// عرض الجدول
function renderTableView(cars) {
    const tbody = document.getElementById('carsTableBody');
    if (!tbody) return;
    
    if (cars.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 3rem;">
                    <i class="fas fa-car" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
                    <p>لا توجد سيارات</p>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = cars.map(car => `
        <tr data-car-id="${car.id}">
            <td><input type="checkbox" class="row-checkbox"></td>
            <td>
                <img src="${car.image}" alt="${car.name}" class="table-img">
            </td>
            <td><strong>${car.name}</strong></td>
            <td><span class="category-badge ${car.category}">${getCategoryName(car.category)}</span></td>
            <td>${car.year}</td>
            <td>${formatPrice(car.price)} دينار</td>
            <td><span class="status-badge ${car.status}">${getStatusName(car.status)}</span></td>
            <td>${car.views.toLocaleString()}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit" onclick="editCar(${car.id})" title="تعديل">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn view" onclick="viewCar(${car.id})" title="عرض">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn delete" onclick="deleteCar(${car.id})" title="حذف">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// نافذة إضافة سيارة
function showAddCarModal() {
    const modal = createCarModal('add');
    document.body.appendChild(modal);
}

// نافذة تعديل سيارة
function editCar(id) {
    const car = carsData.find(c => c.id === id);
    if (!car) return;
    
    const modal = createCarModal('edit', car);
    document.body.appendChild(modal);
}

// إنشاء نافذة السيارة
function createCarModal(mode, car = null) {
    const isEdit = mode === 'edit';
    const title = isEdit ? 'تعديل السيارة' : 'إضافة سيارة جديدة';
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-container large">
            <div class="modal-header">
                <h3><i class="fas fa-car"></i> ${title}</h3>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="carForm" class="car-form">
                    <div class="form-section">
                        <h4><i class="fas fa-info-circle"></i> المعلومات الأساسية</h4>
                        <div class="form-grid">
                            <div class="form-group">
                                <label>اسم السيارة *</label>
                                <input type="text" name="name" class="form-control" required 
                                    value="${car ? car.name : ''}" placeholder="مثال: مرسيدس AMG GT 2024">
                            </div>
                            <div class="form-group">
                                <label>الماركة *</label>
                                <select name="brand" class="form-control" required>
                                    <option value="">اختر الماركة</option>
                                    <option value="Mercedes" ${car?.brand === 'Mercedes' ? 'selected' : ''}>مرسيدس</option>
                                    <option value="BMW" ${car?.brand === 'BMW' ? 'selected' : ''}>BMW</option>
                                    <option value="Audi" ${car?.brand === 'Audi' ? 'selected' : ''}>أودي</option>
                                    <option value="Porsche" ${car?.brand === 'Porsche' ? 'selected' : ''}>بورش</option>
                                    <option value="Ferrari" ${car?.brand === 'Ferrari' ? 'selected' : ''}>فيراري</option>
                                    <option value="Tesla" ${car?.brand === 'Tesla' ? 'selected' : ''}>تسلا</option>
                                    <option value="Toyota" ${car?.brand === 'Toyota' ? 'selected' : ''}>تويوتا</option>
                                    <option value="Hyundai" ${car?.brand === 'Hyundai' ? 'selected' : ''}>هيونداي</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>السنة *</label>
                                <input type="number" name="year" class="form-control" required 
                                    value="${car ? car.year : 2024}" min="2000" max="2025">
                            </div>
                            <div class="form-group">
                                <label>السعر (دينار) *</label>
                                <input type="number" name="price" class="form-control" required 
                                    value="${car ? car.price : ''}" min="0" step="1000">
                            </div>
                            <div class="form-group">
                                <label>الفئة *</label>
                                <select name="category" class="form-control" required>
                                    <option value="">اختر الفئة</option>
                                    <option value="luxury" ${car?.category === 'luxury' ? 'selected' : ''}>فاخرة</option>
                                    <option value="sport" ${car?.category === 'sport' ? 'selected' : ''}>رياضية</option>
                                    <option value="suv" ${car?.category === 'suv' ? 'selected' : ''}>SUV</option>
                                    <option value="sedan" ${car?.category === 'sedan' ? 'selected' : ''}>سيدان</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>الحالة *</label>
                                <select name="status" class="form-control" required>
                                    <option value="available" ${car?.status === 'available' ? 'selected' : ''}>متاح</option>
                                    <option value="reserved" ${car?.status === 'reserved' ? 'selected' : ''}>محجوز</option>
                                    <option value="sold" ${car?.status === 'sold' ? 'selected' : ''}>مباع</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h4><i class="fas fa-cogs"></i> المواصفات</h4>
                        <div class="form-grid">
                            <div class="form-group">
                                <label>المسافة المقطوعة (كم) *</label>
                                <input type="number" name="mileage" class="form-control" required 
                                    value="${car ? car.mileage : ''}" min="0">
                            </div>
                            <div class="form-group">
                                <label>ناقل الحركة *</label>
                                <select name="transmission" class="form-control" required>
                                    <option value="أوتوماتيك" ${car?.transmission === 'أوتوماتيك' ? 'selected' : ''}>أوتوماتيك</option>
                                    <option value="يدوي" ${car?.transmission === 'يدوي' ? 'selected' : ''}>يدوي</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>نوع الوقود *</label>
                                <select name="fuel" class="form-control" required>
                                    <option value="بنزين" ${car?.fuel === 'بنزين' ? 'selected' : ''}>بنزين</option>
                                    <option value="ديزل" ${car?.fuel === 'ديزل' ? 'selected' : ''}>ديزل</option>
                                    <option value="كهرباء" ${car?.fuel === 'كهرباء' ? 'selected' : ''}>كهرباء</option>
                                    <option value="هجين" ${car?.fuel === 'هجين' ? 'selected' : ''}>هجين</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>اللون *</label>
                                <input type="text" name="color" class="form-control" required 
                                    value="${car ? car.color : ''}" placeholder="مثال: أسود ميتاليك">
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h4><i class="fas fa-image"></i> الصورة</h4>
                        <div class="form-group">
                            <label>رابط الصورة *</label>
                            <input type="url" name="image" class="form-control" required 
                                value="${car ? car.image : ''}" placeholder="https://example.com/image.jpg">
                            <small>يمكنك استخدام روابط من Unsplash أو أي مصدر آخر</small>
                        </div>
                    </div>

                    <div class="form-section">
                        <h4><i class="fas fa-align-left"></i> الوصف والمميزات</h4>
                        <div class="form-group">
                            <label>الوصف *</label>
                            <textarea name="description" class="form-control" rows="3" required 
                                placeholder="وصف مختصر عن السيارة...">${car ? car.description : ''}</textarea>
                        </div>
                        <div class="form-group">
                            <label>المميزات (افصل بفاصلة)</label>
                            <input type="text" name="features" class="form-control" 
                                value="${car ? car.features.join(', ') : ''}" 
                                placeholder="مثال: فتحة سقف, نظام ملاحة, كاميرا 360">
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn-outline" onclick="this.closest('.modal-overlay').remove()">
                            <i class="fas fa-times"></i> إلغاء
                        </button>
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-save"></i> ${isEdit ? 'حفظ التعديلات' : 'إضافة السيارة'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    // معالج إرسال النموذج
    modal.querySelector('#carForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const carData = {
            name: formData.get('name'),
            brand: formData.get('brand'),
            year: parseInt(formData.get('year')),
            price: parseInt(formData.get('price')),
            category: formData.get('category'),
            status: formData.get('status'),
            mileage: parseInt(formData.get('mileage')),
            transmission: formData.get('transmission'),
            fuel: formData.get('fuel'),
            color: formData.get('color'),
            image: formData.get('image'),
            description: formData.get('description'),
            features: formData.get('features').split(',').map(f => f.trim()).filter(f => f)
        };

        if (isEdit) {
            updateCar(car.id, carData);
        } else {
            addCar(carData);
        }

        modal.remove();
    });

    return modal;
}

// إضافة سيارة جديدة
function addCar(carData) {
    const newCar = {
        id: Date.now(),
        ...carData,
        views: 0
    };
    
    carsData.unshift(newCar);
    renderCars();
    showNotification('تمت إضافة السيارة بنجاح', 'success');
}

// تحديث سيارة
function updateCar(id, carData) {
    const index = carsData.findIndex(c => c.id === id);
    if (index !== -1) {
        carsData[index] = { ...carsData[index], ...carData };
        renderCars();
        showNotification('تم تحديث السيارة بنجاح', 'success');
    }
}

// حذف سيارة
function deleteCar(id) {
    const car = carsData.find(c => c.id === id);
    if (!car) return;

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-container small">
            <div class="modal-header">
                <h3><i class="fas fa-exclamation-triangle"></i> تأكيد الحذف</h3>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p>هل أنت متأكد من حذف السيارة <strong>${car.name}</strong>؟</p>
                <p style="color: #ef4444; margin-top: 1rem;">
                    <i class="fas fa-info-circle"></i> هذا الإجراء لا يمكن التراجع عنه.
                </p>
            </div>
            <div class="modal-footer">
                <button class="btn-outline" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i> إلغاء
                </button>
                <button class="btn-danger" onclick="confirmDelete(${id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// تأكيد الحذف
function confirmDelete(id) {
    carsData = carsData.filter(c => c.id !== id);
    renderCars();
    document.querySelector('.modal-overlay').remove();
    showNotification('تم حذف السيارة بنجاح', 'success');
}

// عرض تفاصيل السيارة
function viewCar(id) {
    const car = carsData.find(c => c.id === id);
    if (!car) return;

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-container large">
            <div class="modal-header">
                <h3><i class="fas fa-car"></i> ${car.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="car-details-view">
                    <img src="${car.image}" alt="${car.name}" style="width: 100%; border-radius: 10px; margin-bottom: 1.5rem;">
                    
                    <div class="details-grid">
                        <div class="detail-item">
                            <strong>الماركة:</strong>
                            <span>${car.brand}</span>
                        </div>
                        <div class="detail-item">
                            <strong>السنة:</strong>
                            <span>${car.year}</span>
                        </div>
                        <div class="detail-item">
                            <strong>السعر:</strong>
                            <span>${formatPrice(car.price)} دينار</span>
                        </div>
                        <div class="detail-item">
                            <strong>الفئة:</strong>
                            <span class="category-badge ${car.category}">${getCategoryName(car.category)}</span>
                        </div>
                        <div class="detail-item">
                            <strong>الحالة:</strong>
                            <span class="status-badge ${car.status}">${getStatusName(car.status)}</span>
                        </div>
                        <div class="detail-item">
                            <strong>المسافة:</strong>
                            <span>${car.mileage.toLocaleString()} كم</span>
                        </div>
                        <div class="detail-item">
                            <strong>ناقل الحركة:</strong>
                            <span>${car.transmission}</span>
                        </div>
                        <div class="detail-item">
                            <strong>الوقود:</strong>
                            <span>${car.fuel}</span>
                        </div>
                        <div class="detail-item">
                            <strong>اللون:</strong>
                            <span>${car.color}</span>
                        </div>
                        <div class="detail-item">
                            <strong>المشاهدات:</strong>
                            <span>${car.views.toLocaleString()}</span>
                        </div>
                    </div>

                    <div style="margin-top: 1.5rem;">
                        <strong>الوصف:</strong>
                        <p style="margin-top: 0.5rem; color: #6b7280;">${car.description}</p>
                    </div>

                    ${car.features && car.features.length > 0 ? `
                        <div style="margin-top: 1.5rem;">
                            <strong>المميزات:</strong>
                            <ul style="margin-top: 0.5rem; padding-right: 1.5rem; color: #6b7280;">
                                ${car.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-outline" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i> إغلاق
                </button>
                <button class="btn-primary" onclick="editCar(${car.id}); this.closest('.modal-overlay').remove();">
                    <i class="fas fa-edit"></i> تعديل
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// تصدير البيانات
function exportCars() {
    const dataStr = JSON.stringify(carsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cars-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showNotification('تم تصدير البيانات بنجاح', 'success');
}

// دوال مساعدة
function formatPrice(price) {
    return price.toLocaleString('en-US');
}

function getCategoryName(category) {
    const categories = {
        luxury: 'فاخرة',
        sport: 'رياضية',
        suv: 'SUV',
        sedan: 'سيدان'
    };
    return categories[category] || category;
}

function getStatusName(status) {
    const statuses = {
        available: 'متاح',
        reserved: 'محجوز',
        sold: 'مباع'
    };
    return statuses[status] || status;
}
