// Sample reviews data
const reviewsData = [
    {
        id: 1,
        name: 'أحمد محمد',
        rating: 5,
        title: 'خدمة ممتازة وسيارة رائعة',
        review: 'اشتريت BMW X5 من معرض مصطفى تيهي والتعامل كان أكثر من رائع. الموظفون محترفون جداً وساعدوني في اختيار السيارة المناسبة. السيارة كانت بحالة ممتازة وبسعر مناسب. أنصح بشدة!',
        date: '2024-11-15',
        car: 'BMW X5 2023',
        verified: true,
        helpful: 24,
        avatar: 'https://ui-avatars.com/api/?name=Ahmed+Mohamed&background=667eea&color=fff'
    },
    {
        id: 2,
        name: 'فاطمة علي',
        rating: 5,
        title: 'تجربة شراء مميزة',
        review: 'من أفضل التجارب في شراء السيارات. الفريق كان متعاوناً جداً ووفروا لي كل المعلومات التي احتاجها. التقسيط سهل والإجراءات سريعة. شكراً لكم!',
        date: '2024-11-10',
        car: 'Mercedes C-Class 2024',
        verified: true,
        helpful: 18,
        avatar: 'https://ui-avatars.com/api/?name=Fatima+Ali&background=f093fb&color=fff'
    },
    {
        id: 3,
        name: 'خالد حسن',
        rating: 4,
        title: 'سيارة جيدة وسعر معقول',
        review: 'السيارة التي اشتريتها كانت بحالة جيدة جداً. السعر كان تنافسياً مقارنة بالسوق. الشيء الوحيد هو أن الضمان كان يمكن أن يكون أطول قليلاً، لكن بشكل عام تجربة إيجابية.',
        date: '2024-11-05',
        car: 'Toyota Camry 2021',
        verified: true,
        helpful: 12,
        avatar: 'https://ui-avatars.com/api/?name=Khaled+Hassan&background=4facfe&color=fff'
    },
    {
        id: 4,
        name: 'سارة أحمد',
        rating: 5,
        title: 'احترافية عالية',
        review: 'معرض محترم جداً. الموظفون أمناء وصادقون في التعامل. قدموا لي تقرير فحص كامل للسيارة قبل الشراء. أنا سعيدة جداً بالتعامل معهم وسأرجع لهم في المستقبل.',
        date: '2024-10-28',
        car: 'Hyundai Tucson 2023',
        verified: false,
        helpful: 15,
        avatar: 'https://ui-avatars.com/api/?name=Sara+Ahmed&background=764ba2&color=fff'
    },
    {
        id: 5,
        name: 'محمود سعيد',
        rating: 5,
        title: 'أفضل معرض في العقبة',
        review: 'تعاملت مع عدة معارض قبل أن أختار مصطفى تيهي، ووجدت عندهم أفضل أسعار وأفضل خدمة. السيارة نظيفة ومفحوصة بعناية. التقسيط كان سهل جداً. شكراً للفريق الرائع!',
        date: '2024-10-20',
        car: 'Audi Q7 2022',
        verified: true,
        helpful: 21,
        avatar: 'https://ui-avatars.com/api/?name=Mahmoud+Said&background=f59e0b&color=fff'
    },
    {
        id: 6,
        name: 'نور حسين',
        rating: 4,
        title: 'تجربة جيدة بشكل عام',
        review: 'الخدمة كانت جيدة والسيارة كما وصفت تماماً. كنت أتمنى لو كانت هناك خيارات أكثر في التقسيط، لكن بشكل عام أنا راضية عن الصفقة.',
        date: '2024-10-15',
        car: 'KIA Sportage 2022',
        verified: true,
        helpful: 8,
        avatar: 'https://ui-avatars.com/api/?name=Noor+Hussein&background=ec4899&color=fff'
    },
    {
        id: 7,
        name: 'يوسف عبدالله',
        rating: 5,
        title: 'سيارة كهربائية ممتازة',
        review: 'اشتريت Tesla Model 3 من عندهم وكانت تجربة رائعة. الموظفون يعرفون كل شيء عن السيارات الكهربائية وساعدوني في فهم كيفية استخدامها. السيارة بحالة ممتازة!',
        date: '2024-10-10',
        car: 'Tesla Model 3 2023',
        verified: true,
        helpful: 19,
        avatar: 'https://ui-avatars.com/api/?name=Youssef+Abdullah&background=10b981&color=fff'
    },
    {
        id: 8,
        name: 'ليلى مصطفى',
        rating: 5,
        title: 'خدمة عملاء ممتازة',
        review: 'من أول اتصال وحتى استلام السيارة، الخدمة كانت في القمة. ردوا على كل استفساراتي بصبر واهتمام. السيارة جاءت نظيفة ومجهزة بالكامل. أنصح الجميع بالتعامل معهم.',
        date: '2024-10-05',
        car: 'Mercedes GLE 2023',
        verified: false,
        helpful: 11,
        avatar: 'https://ui-avatars.com/api/?name=Laila+Mustafa&background=6366f1&color=fff'
    },
    {
        id: 9,
        name: 'عمر صالح',
        rating: 4,
        title: 'صفقة جيدة',
        review: 'حصلت على سعر جيد مقابل السيارة. الفحص الفني كان شاملاً والتقرير واضح. كان هناك تأخير بسيط في الأوراق لكن تم حل كل شيء في النهاية.',
        date: '2024-09-28',
        car: 'BMW 3 Series 2024',
        verified: true,
        helpful: 7,
        avatar: 'https://ui-avatars.com/api/?name=Omar+Saleh&background=f5576c&color=fff'
    },
    {
        id: 10,
        name: 'رنا خالد',
        rating: 5,
        title: 'موثوقون وأمناء',
        review: 'المعرض موثوق جداً. كل ما وعدوا به تم تنفيذه. السيارة كانت أفضل من المتوقع والسعر كان عادلاً. التعامل احترافي وراقي. شكراً لكم!',
        date: '2024-09-22',
        car: 'Audi A4 2023',
        verified: true,
        helpful: 14,
        avatar: 'https://ui-avatars.com/api/?name=Rana+Khaled&background=764ba2&color=fff'
    }
];

let currentReviews = [...reviewsData];
let currentFilter = 'all';
let currentSort = 'recent';
let selectedRating = 0;

// Display reviews
function displayReviews(reviews) {
    const reviewsList = document.getElementById('reviewsList');
    
    if (!reviewsList) return;
    
    if (reviews.length === 0) {
        reviewsList.innerHTML = `
            <div class="no-reviews">
                <i class="fas fa-comment-slash"></i>
                <h3>لا توجد تقييمات</h3>
                <p>كن أول من يكتب تقييماً</p>
            </div>
        `;
        return;
    }
    
    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="reviewer-info">
                    <img src="${review.avatar}" alt="${review.name}" class="reviewer-avatar">
                    <div>
                        <h4>${review.name} ${review.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}</h4>
                        <div class="review-stars">
                            ${generateStars(review.rating)}
                        </div>
                    </div>
                </div>
                <div class="review-date">${formatDate(review.date)}</div>
            </div>
            
            <div class="review-body">
                <h5>${review.title}</h5>
                <p>${review.review}</p>
                ${review.car ? `<div class="review-car"><i class="fas fa-car"></i> ${review.car}</div>` : ''}
            </div>
            
            <div class="review-footer">
                <button class="helpful-btn" onclick="markHelpful(${review.id})">
                    <i class="far fa-thumbs-up"></i> مفيد (${review.helpful})
                </button>
                <button class="report-btn" onclick="reportReview(${review.id})">
                    <i class="far fa-flag"></i> إبلاغ
                </button>
            </div>
        </div>
    `).join('');
}

// Generate stars HTML
function generateStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<i class="fas fa-star"></i>';
        } else {
            html += '<i class="far fa-star"></i>';
        }
    }
    return html;
}

// Format date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diff === 0) return 'اليوم';
    if (diff === 1) return 'أمس';
    if (diff < 7) return `منذ ${diff} أيام`;
    if (diff < 30) return `منذ ${Math.floor(diff / 7)} أسابيع`;
    if (diff < 365) return `منذ ${Math.floor(diff / 30)} شهور`;
    
    return date.toLocaleDateString('ar');
}

// Filter reviews
function filterReviews(filter) {
    currentFilter = filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (filter === 'all') {
        currentReviews = [...reviewsData];
    } else if (filter === 'verified') {
        currentReviews = reviewsData.filter(r => r.verified);
    } else {
        currentReviews = reviewsData.filter(r => r.rating === filter);
    }
    
    sortReviews(currentSort);
}

// Sort reviews
function sortReviews(sortBy) {
    currentSort = sortBy;
    
    switch(sortBy) {
        case 'recent':
            currentReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'rating-high':
            currentReviews.sort((a, b) => b.rating - a.rating);
            break;
        case 'rating-low':
            currentReviews.sort((a, b) => a.rating - b.rating);
            break;
        case 'helpful':
            currentReviews.sort((a, b) => b.helpful - a.helpful);
            break;
    }
    
    displayReviews(currentReviews);
}

// Mark review as helpful
function markHelpful(reviewId) {
    const review = reviewsData.find(r => r.id === reviewId);
    if (review) {
        review.helpful++;
        displayReviews(currentReviews);
    }
}

// Report review
function reportReview(reviewId) {
    alert('شكراً لإبلاغك. سيتم مراجعة التقييم من قبل فريقنا.');
}

// Load more reviews
function loadMoreReviews() {
    alert('تم تحميل جميع التقييمات المتاحة');
}

// Open review form
function openReviewForm() {
    document.getElementById('reviewFormModal').style.display = 'flex';
    initStarRating();
}

// Close review form
function closeReviewForm() {
    const modal = document.getElementById('reviewFormModal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    const form = document.getElementById('reviewForm');
    if (form) {
        form.reset();
    }
    
    selectedRating = 0;
    resetStars();
}

// Initialize star rating input
function initStarRating() {
    const stars = document.querySelectorAll('.star-rating-input i');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-rating'));
            document.getElementById('ratingInput').value = selectedRating;
            
            stars.forEach((s, index) => {
                if (index < selectedRating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
        
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.style.color = '#f59e0b';
                } else {
                    s.style.color = '';
                }
            });
        });
    });
    
    document.querySelector('.star-rating-input').addEventListener('mouseleave', function() {
        stars.forEach((s, index) => {
            if (index < selectedRating) {
                s.style.color = '#f59e0b';
            } else {
                s.style.color = '';
            }
        });
    });
}

// Reset stars
function resetStars() {
    const stars = document.querySelectorAll('.star-rating-input i');
    stars.forEach(star => {
        star.classList.remove('fas');
        star.classList.add('far');
        star.style.color = '';
    });
}

// Handle review form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reviewForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (selectedRating === 0) {
                alert('الرجاء اختيار التقييم');
                return;
            }
            
            const formData = new FormData(this);
            const newReview = {
                id: reviewsData.length + 1,
                name: formData.get('name'),
                rating: selectedRating,
                title: formData.get('title'),
                review: formData.get('review'),
                date: new Date().toISOString().split('T')[0],
                car: formData.get('car') || null,
                verified: false,
                helpful: 0,
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.get('name'))}&background=667eea&color=fff`
            };
            
            reviewsData.unshift(newReview);
            currentReviews = [...reviewsData];
            displayReviews(currentReviews);
            closeReviewForm();
            
            alert('شكراً لك! تم إرسال تقييمك بنجاح. سيتم مراجعته ونشره قريباً.');
        });
    }
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('reviewFormModal');
        if (modal && event.target === modal) {
            closeReviewForm();
        }
    }
    
    // Initial display
    displayReviews(currentReviews);
});
