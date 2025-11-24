// Orders JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const status = this.dataset.status;
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter orders
            filterOrders(status);
        });
    });
    
    function filterOrders(status) {
        const orders = document.querySelectorAll('.order-detail-item');
        
        orders.forEach(order => {
            if (status === 'all') {
                order.style.display = 'block';
            } else {
                const orderStatus = order.querySelector('.status-badge');
                if (orderStatus && orderStatus.classList.contains(status)) {
                    order.style.display = 'block';
                } else {
                    order.style.display = 'none';
                }
            }
        });
    }
    
    // Confirm order buttons
    document.querySelectorAll('.btn-success').forEach(btn => {
        if (btn.textContent.includes('تأكيد الطلب') || btn.textContent.includes('تأكيد الموعد')) {
            btn.addEventListener('click', function() {
                const orderItem = this.closest('.order-detail-item');
                const orderNumber = orderItem.querySelector('h3').textContent;
                
                if (confirm(`هل تريد تأكيد ${orderNumber}؟`)) {
                    const statusBadge = orderItem.querySelector('.status-badge');
                    statusBadge.classList.remove('pending');
                    statusBadge.classList.add('confirmed');
                    statusBadge.textContent = 'مؤكدة';
                    
                    showNotification('تم تأكيد الطلب بنجاح!', 'success');
                }
            });
        }
        
        if (btn.textContent.includes('إكمال البيع')) {
            btn.addEventListener('click', function() {
                const orderItem = this.closest('.order-detail-item');
                const orderNumber = orderItem.querySelector('h3').textContent;
                
                if (confirm(`هل تم إتمام ${orderNumber} بنجاح؟`)) {
                    const statusBadge = orderItem.querySelector('.status-badge');
                    statusBadge.classList.remove('confirmed');
                    statusBadge.classList.add('completed');
                    statusBadge.textContent = 'مكتملة';
                    
                    showNotification('تم إكمال البيع بنجاح!', 'success');
                }
            });
        }
    });
    
    // Cancel/Reject buttons
    document.querySelectorAll('.btn-danger').forEach(btn => {
        if (btn.textContent.includes('إلغاء') || btn.textContent.includes('رفض')) {
            btn.addEventListener('click', function() {
                const orderItem = this.closest('.order-detail-item');
                const orderNumber = orderItem.querySelector('h3').textContent;
                
                if (confirm(`هل تريد إلغاء ${orderNumber}؟`)) {
                    orderItem.style.opacity = '0';
                    setTimeout(() => {
                        orderItem.remove();
                        showNotification('تم إلغاء الطلب', 'error');
                    }, 300);
                }
            });
        }
    });
    
    // Contact buttons (Phone/WhatsApp)
    document.querySelectorAll('.btn-outline').forEach(btn => {
        if (btn.innerHTML.includes('fa-phone')) {
            btn.addEventListener('click', function() {
                const orderItem = this.closest('.order-detail-item');
                const phoneNumber = orderItem.querySelector('.order-customer-info p:nth-child(3)').textContent.split(': ')[1];
                window.location.href = `tel:${phoneNumber}`;
            });
        }
        
        if (btn.innerHTML.includes('fa-whatsapp')) {
            btn.addEventListener('click', function() {
                const orderItem = this.closest('.order-detail-item');
                const phoneText = orderItem.querySelector('.order-customer-info p:nth-child(3)').textContent;
                const phoneNumber = phoneText.split(': ')[1].replace(/\s/g, '');
                window.open(`https://wa.me/962${phoneNumber.substring(1)}`, '_blank');
            });
        }
        
        if (btn.innerHTML.includes('fa-print')) {
            btn.addEventListener('click', function() {
                window.print();
            });
        }
    });
    
    // Search orders
    const searchOrders = document.getElementById('searchOrders');
    if (searchOrders) {
        searchOrders.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const orders = document.querySelectorAll('.order-detail-item');
            
            orders.forEach(order => {
                const orderText = order.textContent.toLowerCase();
                if (orderText.includes(searchTerm)) {
                    order.style.display = 'block';
                } else {
                    order.style.display = 'none';
                }
            });
        });
    }
});
