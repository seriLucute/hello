// ==================== SCROLL PROGRESS BAR ==================== 
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';

    // Update active navigation link
    updateActiveNavLink();

    // Show/hide back to top button
    const backToTop = document.getElementById('backToTop');
    if (scrollTop > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// ==================== ACTIVE NAV LINK ==================== 
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// ==================== SMOOTH SCROLL ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== BACK TO TOP BUTTON ==================== 
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== MOBILE HAMBURGER MENU ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ==================== SKILLS FILTER ==================== 
const filterBtns = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Filter skill cards
        skillCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                }, 0);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ==================== CONTACT FORM SUBMISSION ==================== 
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create mailto link
        const mailtoLink = `mailto:hello@example.com?subject=포트폴리오 문의: ${encodeURIComponent(name)}&body=${encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`)}`;
        
        // Open mail client
        window.location.href = mailtoLink;

        // Reset form
        contactForm.reset();
    });
}

// ==================== CHART.JS INITIALIZATION ==================== 
// Time Series Chart
const timeSeriesCtx = document.getElementById('timeSeriesChart');
if (timeSeriesCtx) {
    new Chart(timeSeriesCtx, {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [{
                label: '성과 개선율 (%)',
                data: [15, 18, 22, 25, 28, 26, 32, 29, 25, 23, 20, 24],
                borderColor: '#00E5FF',
                backgroundColor: 'rgba(0, 229, 255, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#00E5FF',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#fff',
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 14, 39, 0.8)',
                    titleColor: '#00E5FF',
                    bodyColor: '#fff',
                    borderColor: '#00E5FF',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 6,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 40,
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            size: 11
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 229, 255, 0.05)',
                    }
                },
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false,
                    }
                }
            }
        }
    });
}

// Bar Chart
const barCtx = document.getElementById('barChart');
if (barCtx) {
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['프로덕트팀', '마케팅팀', '영업팀', '재무팀', '운영팀'],
            datasets: [{
                label: '평균 KPI 개선율 (%)',
                data: [32, 28, 25, 18, 15],
                backgroundColor: [
                    '#00E5FF',
                    '#9D00FF',
                    '#FF006E',
                    '#00FF88',
                    '#FFD700'
                ],
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#fff',
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 14, 39, 0.8)',
                    titleColor: '#00E5FF',
                    bodyColor: '#fff',
                    borderColor: '#00E5FF',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 6,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.x + '%';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 40,
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            size: 11
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 229, 255, 0.05)',
                    }
                },
                y: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    },
                    grid: {
                        display: false,
                    }
                }
            }
        }
    });
}

// Funnel Chart
const funnelCtx = document.getElementById('funnelChart');
if (funnelCtx) {
    new Chart(funnelCtx, {
        type: 'bar',
        data: {
            labels: ['제시', '분석', '실행', '평가'],
            datasets: [{
                label: '프로젝트 단계별 개수',
                data: [18, 15, 12, 8],
                backgroundColor: ['#00E5FF', '#9D00FF', '#FF006E', '#00FF88'],
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#fff',
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 14, 39, 0.8)',
                    titleColor: '#00E5FF',
                    bodyColor: '#fff',
                    borderColor: '#00E5FF',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 6,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.x + '개';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 20,
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(0, 229, 255, 0.05)',
                    }
                },
                y: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    },
                    grid: {
                        display: false,
                    }
                }
            }
        }
    });
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .impact-card, .dashboard-card').forEach(el => {
    observer.observe(el);
});
