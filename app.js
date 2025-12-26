// ==================== Theme Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Initialize theme based on system preference or localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;
    
    applyTheme(theme);
}

function applyTheme(theme) {
    if (theme === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggle.classList.add('light-mode');
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.removeAttribute('data-theme');
        themeToggle.classList.remove('light-mode');
        themeToggle.querySelector('.theme-icon').textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
});

// Initialize theme on page load
initializeTheme();

// ==================== Smooth Scroll Navigation ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                updateHamburger();
            }
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Mobile Menu Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    updateHamburger();
});

function updateHamburger() {
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideNav = navMenu.contains(e.target) || hamburger.contains(e.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        updateHamburger();
    }
});

// ==================== Navbar Background on Scroll ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.7)';
    }
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// ==================== Active Navigation Link ====================
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.color = 'var(--primary-cyan)';
        } else {
            link.style.color = 'var(--text-secondary)';
        }
    });
}

// ==================== CTA Button Click ====================
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ==================== Project Button Click & Details Toggle ====================
document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectCard = btn.closest('.project-card');
        const projectDetails = projectCard.querySelector('.project-details');
        
        projectDetails.classList.toggle('expanded');
        btn.textContent = projectDetails.classList.contains('expanded') ? '상세 내용 접기' : '자세히 보기';
    });
});

// ==================== Project Details Accordion ====================
document.querySelectorAll('.detail-accordion').forEach(accordion => {
    accordion.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains('active');
        
        // Close other accordions in the same project
        const projectCard = this.closest('.project-card');
        projectCard.querySelectorAll('.detail-accordion').forEach(acc => {
            if (acc !== this) {
                acc.classList.remove('active');
                acc.nextElementSibling.classList.remove('expanded');
            }
        });
        
        // Toggle current accordion
        this.classList.toggle('active');
        content.classList.toggle('expanded');
    });
});

// ==================== Project Filter ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            const techs = card.getAttribute('data-tech').split(' ');
            
            if (filter === 'all' || techs.includes(filter)) {
                card.classList.remove('hidden');
                card.classList.add('fade-in');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ==================== Back to Top Button ====================
document.querySelectorAll('.contact-card').forEach(card => {
    const href = card.getAttribute('href');
    if (href && href.startsWith('mailto:')) {
        card.addEventListener('click', (e) => {
            // Allow default email behavior
        });
    } else if (href === '#') {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const title = card.querySelector('h3').textContent;
            alert(`${title} 링크가 추가될 예정입니다.`);
        });
    }
});

// ==================== Scroll Animation Observer ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all glass cards
document.querySelectorAll('.glass-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// ==================== Parallax Effect on Hero ====================
const hero = document.querySelector('.hero');
const blobs = document.querySelectorAll('.blob');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    blobs.forEach((blob, index) => {
        const speed = 0.5 + (index * 0.1);
        blob.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// ==================== Mouse Move Effect on Blobs ====================
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    blobs.forEach((blob, index) => {
        const x = (mouseX - 0.5) * 50 * (index + 1) * 0.1;
        const y = (mouseY - 0.5) * 50 * (index + 1) * 0.1;
        blob.style.setProperty('--mouse-x', `${x}px`);
        blob.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ==================== Add CSS Variables for Mouse Effects ====================
const style = document.createElement('style');
style.textContent = `
    .blob {
        --mouse-x: 0px;
        --mouse-y: 0px;
    }
`;
document.head.appendChild(style);

// ==================== Loading Animation ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';

setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// ==================== Utility Functions ====================

// Add active class styling
const style2 = document.createElement('style');
style2.textContent = `
    .nav-link.active::after {
        width: 100%;
        background: var(--primary-cyan);
    }
`;
document.head.appendChild(style2);

// ==================== Print Analytics (Development) ====================
console.log('%c📊 Data Analyst Portfolio', 'font-size: 20px; color: #00D9FF; font-weight: bold;');
console.log('%c불확실한 상황에서 판단 기준을 만드는 데이터 분석가', 'font-size: 14px; color: #FF006E;');
console.log('%c포트폴리오가 성공적으로 로드되었습니다.', 'font-size: 12px; color: #8338EC;');

// ==================== Chart.js 인터랙티브 차트 초기화 ====================

// Chart colors
const chartColors = {
    cyan: 'rgba(0, 217, 255, 0.8)',
    pink: 'rgba(255, 0, 110, 0.8)',
    purple: 'rgba(131, 56, 236, 0.8)',
    yellow: 'rgba(255, 190, 11, 0.8)',
    cyanLight: 'rgba(0, 217, 255, 0.2)',
    pinkLight: 'rgba(255, 0, 110, 0.2)',
};

// 1. E-commerce Conversion Funnel Chart
const conversionCtx = document.getElementById('conversionChart');
if (conversionCtx) {
    new Chart(conversionCtx, {
        type: 'bar',
        data: {
            labels: ['Page View', 'Product View', 'Add to Cart', 'Checkout', 'Purchase'],
            datasets: [{
                label: '사용자 수 (단위: 천명)',
                data: [100, 78, 42, 18, 14],
                backgroundColor: [
                    'rgba(0, 217, 255, 0.8)',
                    'rgba(131, 56, 236, 0.8)',
                    'rgba(255, 0, 110, 0.8)',
                    'rgba(255, 190, 11, 0.8)',
                    'rgba(0, 217, 255, 1)'
                ],
                borderColor: [
                    'rgba(0, 217, 255, 1)',
                    'rgba(131, 56, 236, 1)',
                    'rgba(255, 0, 110, 1)',
                    'rgba(255, 190, 11, 1)',
                    'rgba(0, 217, 255, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8,
            }, {
                label: '이탈율 (%)',
                data: [0, 22, 46, 57, 72],
                type: 'line',
                borderColor: 'rgba(255, 0, 110, 1)',
                backgroundColor: 'rgba(255, 0, 110, 0.1)',
                yAxisID: 'y1',
                fill: true,
                tension: 0.4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#b0b9c3',
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 14, 39, 0.9)',
                    titleColor: '#00D9FF',
                    bodyColor: '#b0b9c3',
                    borderColor: '#00D9FF',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        afterLabel: function(context) {
                            if (context.datasetIndex === 0) {
                                return '전환율: ' + (context.parsed.y / 100 * 14).toFixed(2) + '%';
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: { color: '#b0b9c3' },
                    grid: { color: 'rgba(0, 217, 255, 0.1)' },
                    title: { display: true, text: '사용자 수 (천명)', color: '#b0b9c3' }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: { color: '#b0b9c3' },
                    grid: { drawOnChartArea: false },
                    title: { display: true, text: '이탈율 (%)', color: '#b0b9c3' }
                },
                x: {
                    ticks: { color: '#b0b9c3' },
                    grid: { color: 'rgba(0, 217, 255, 0.1)' }
                }
            }
        }
    });
}

// 2. Churn Cohort Retention Chart
const churnCtx = document.getElementById('churnChart');
if (churnCtx) {
    new Chart(churnCtx, {
        type: 'line',
        data: {
            labels: ['Month 0', 'Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
            datasets: [
                {
                    label: 'Q1 2024 가입자',
                    data: [100, 85, 72, 62, 54, 48, 42],
                    borderColor: 'rgba(0, 217, 255, 1)',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: 'rgba(0, 217, 255, 1)',
                    pointHoverRadius: 7,
                },
                {
                    label: 'Q2 2024 가입자',
                    data: [100, 82, 68, 58, 50, 44],
                    borderColor: 'rgba(255, 0, 110, 1)',
                    backgroundColor: 'rgba(255, 0, 110, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: 'rgba(255, 0, 110, 1)',
                    pointHoverRadius: 7,
                },
                {
                    label: 'Q3 2024 가입자',
                    data: [100, 88, 75, 65, 57],
                    borderColor: 'rgba(131, 56, 236, 1)',
                    backgroundColor: 'rgba(131, 56, 236, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: 'rgba(131, 56, 236, 1)',
                    pointHoverRadius: 7,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#b0b9c3',
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 14, 39, 0.9)',
                    titleColor: '#00D9FF',
                    bodyColor: '#b0b9c3',
                    borderColor: '#00D9FF',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        afterLabel: function(context) {
                            return '생존율: ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { color: '#b0b9c3' },
                    grid: { color: 'rgba(0, 217, 255, 0.1)' },
                    title: { display: true, text: '생존율 (%)', color: '#b0b9c3' }
                },
                x: {
                    ticks: { color: '#b0b9c3' },
                    grid: { color: 'rgba(0, 217, 255, 0.1)' }
                }
            }
        }
    });
}

// 3. Sales by Region Chart
const salesCtx = document.getElementById('salesChart');
if (salesCtx) {
    new Chart(salesCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: '수도권 (서울/경기/인천)',
                    data: [1200, 1450, 1600, 1900, 2100, 2400, 2200, 2500, 2600, 2800, 3200, 3500],
                    backgroundColor: 'rgba(0, 217, 255, 0.8)',
                    borderColor: 'rgba(0, 217, 255, 1)',
                    borderWidth: 2,
                    borderRadius: 6,
                },
                {
                    label: '지방 (기타 지역)',
                    data: [450, 520, 600, 700, 850, 920, 950, 1100, 1200, 1350, 1500, 1800],
                    backgroundColor: 'rgba(255, 0, 110, 0.8)',
                    borderColor: 'rgba(255, 0, 110, 1)',
                    borderWidth: 2,
                    borderRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#b0b9c3',
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 14, 39, 0.9)',
                    titleColor: '#00D9FF',
                    bodyColor: '#b0b9c3',
                    borderColor: '#00D9FF',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toLocaleString() + '만원';
                        }
                    }
                }
            },
            scales: {
                y: {
                    stacked: false,
                    ticks: { color: '#b0b9c3' },
                    grid: { color: 'rgba(0, 217, 255, 0.1)' },
                    title: { display: true, text: '매출 (만원)', color: '#b0b9c3' }
                },
                x: {
                    ticks: { color: '#b0b9c3' },
                    grid: { color: 'rgba(0, 217, 255, 0.1)' }
                }
            }
        }
    });
}
