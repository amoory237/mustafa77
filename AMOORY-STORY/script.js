function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu.style.right === "0px") {
    menu.style.right = "-220px";
  } else {
    menu.style.right = "0px";
  }
}

function toggleMenu() {
  document.getElementById('sideMenu').classList.toggle('show');
}

// 🌙 تفعيل الوضع الليلي
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  document.getElementById('darkModeToggle').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

// عند تحميل الصفحة، نحفظ الإعداد
window.onload = () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    document.getElementById('darkModeToggle').className = 'fas fa-sun';
  }
};

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ تم إرسال رسالتك بنجاح! سنرد عليك قريبًا.');
  this.reset();
});

function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  menu.classList.toggle('open');
}

// نموذج التواصل
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
    form.reset();
  });
}

// زر الصعود للأعلى
let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function toggleMenu() {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  menu.classList.toggle("open");
  overlay.classList.toggle("visible");
}

// زر الصعود للأعلى
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });


.bottom-nav a.active {
  color: #ffb300;
}

// 🌟 القائمة الجانبية
function toggleMenu() {
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');
  const isOpen = menu.style.transform === 'translateX(0%)';
  if (isOpen) {
    menu.style.transform = 'translateX(100%)';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
  } else {
    menu.style.transform = 'translateX(0%)';
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
  }
}

// 🌟 زر الصعود للأعلى
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
    scrollBtn.style.display = "block";
  else
    scrollBtn.style.display = "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 🌟 تفعيل الأزرار السفلية تلقائيًا حسب الصفحة
const current = location.pathname.split("/").slice(-1)[0];
document.querySelectorAll(".bottom-nav a").forEach(a => {
  if (a.getAttribute("href") === current) a.classList.add("active");
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');
  const isOpen = menu.style.transform === 'translateX(0%)';

  if (isOpen) {
    menu.style.transform = 'translateX(100%)';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
  } else {
    menu.style.transform = 'translateX(0%)';
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
  }
}
