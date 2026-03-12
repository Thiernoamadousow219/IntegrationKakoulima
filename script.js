AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

function activateBottomBarLink(link) {
    document.querySelectorAll('.bottom-bar .nav-link').forEach(l => {
        l.classList.remove('active');
        
        l.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        l.style.backgroundColor = 'transparent';
        l.style.color = '';
        l.style.boxShadow = 'none';
        l.style.borderRadius = '';
        l.style.margin = '0';
        l.style.padding = '0.5rem';
        l.style.transform = 'scale(1) translateY(0)';
        
        const icon = l.querySelector('i');
        const span = l.querySelector('span');
        
        if (icon) {
            icon.style.transition = 'all 0.3s ease';
            icon.style.color = '';
            icon.style.transform = 'scale(1)';
        }
        
        if (span) {
            span.style.transition = 'all 0.3s ease';
            span.style.color = '';
            span.style.transform = 'scale(1)';
            span.style.fontWeight = '';
        }
    });
    
    if (link) {
        link.classList.add('active');
        
        link.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        link.style.backgroundColor = 'var(--primary-color)';
        link.style.color = '#ffffff';
        link.style.borderRadius = '12px';
        link.style.margin = '0 4px';
        link.style.padding = '0.6rem 0.3rem';
        link.style.transform = 'scale(1.05) translateY(-3px)';
        link.style.boxShadow = '0 6px 12px rgba(13, 61, 128, 0.25)';
        
        const icon = link.querySelector('i');
        const span = link.querySelector('span');
        
        if (icon) {
            icon.style.transition = 'all 0.4s ease';
            icon.style.color = '#ffffff';
            icon.style.transform = 'scale(1.1)';
        }
        
        if (span) {
            span.style.transition = 'all 0.4s ease';
            span.style.color = '#ffffff';
            span.style.transform = 'scale(1.05)';
            span.style.fontWeight = '600';
        }
        
        setTimeout(() => {
            if (link && link.classList.contains('active')) {
                link.style.transform = 'scale(1) translateY(-2px)';
                link.style.boxShadow = '0 4px 8px rgba(13, 61, 128, 0.2)';
                
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
                if (span) {
                    span.style.transform = 'scale(1)';
                }
            }
        }, 200);
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            const bottomBarLink = document.querySelector(`.bottom-bar .nav-link[href="${this.getAttribute('href')}"]`);
            if (bottomBarLink) {
                activateBottomBarLink(bottomBarLink);
            }
            
            if (bottomBarLink) {
                bottomBarLink.style.transition = 'all 0.3s ease';
                bottomBarLink.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    bottomBarLink.style.transform = '';
                }, 200);
            }
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.transition = 'all 0.3s ease';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    if (window.innerWidth <= 991.98) {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const activeLink = document.querySelector(`.bottom-bar .nav-link[href="#${sectionId}"]`);
                if (activeLink && !activeLink.classList.contains('active')) {
                    activateBottomBarLink(activeLink);
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 991.98) {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const activeLink = document.querySelector(`.bottom-bar .nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activateBottomBarLink(activeLink);
                }
            }
        });
    }
    
    setTimeout(() => {
        document.querySelectorAll('.bottom-bar .nav-link').forEach(link => {
            link.style.transition = 'all 0.3s ease';
        });
    }, 100);
});

window.addEventListener('resize', function() {
    if (window.innerWidth <= 991.98) {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const activeLink = document.querySelector(`.bottom-bar .nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activateBottomBarLink(activeLink);
                }
            }
        });
    } else {
        document.querySelectorAll('.bottom-bar .nav-link').forEach(link => {
            link.classList.remove('active');
            link.style.transition = 'all 0.3s ease';
            link.style.backgroundColor = 'transparent';
            link.style.color = '';
            link.style.borderRadius = '';
            link.style.margin = '';
            link.style.padding = '0.5rem';
            link.style.transform = '';
            link.style.boxShadow = '';
            
            const icon = link.querySelector('i');
            const span = link.querySelector('span');
            if (icon) {
                icon.style.color = '';
                icon.style.transform = '';
            }
            if (span) {
                span.style.color = '';
                span.style.transform = '';
                span.style.fontWeight = '';
            }
        });
    }
});

document.getElementById('signalForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button[type="submit"]');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
    
    alert('Merci ! Votre signalement a été envoyé avec succès.');
    this.reset();
});

document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button[type="submit"]');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
    
    alert('Merci de votre inscription à notre newsletter !');
    this.reset();
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button[type="submit"]');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
    
    alert('Merci ! Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.');
    this.reset();
});

document.getElementById('modalSignalForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button[type="submit"]');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
    
    alert('Signalement envoyé avec succès !');
    const modal = bootstrap.Modal.getInstance(document.getElementById('signalModal'));
    modal.hide();
    this.reset();
});

document.getElementById('loginFormSubmit')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button[type="submit"]');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
    
    alert('Connexion réussie !');
    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
    this.reset();
});

document.getElementById('registerFormSubmit')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button[type="submit"]');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
    
    alert('Inscription réussie ! Bienvenue chez Kakoulima.');
    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
    this.reset();
});

function openSignalModal() {
    const modal = new bootstrap.Modal(document.getElementById('signalModal'));
    modal.show();
}

function openLoginModal() {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
}

// Switch login/register tabs
function switchLoginTab(tab) {
    document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
    
    if (tab === 'login') {
        document.querySelector('.login-tab:first-child').classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        document.querySelector('.login-tab:last-child').classList.add('active');
        document.getElementById('registerForm').classList.add('active');
    }
}

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .pme-card, .testimonial-card').forEach(el => {
    observer.observe(el);
});

function updateTourneeStatus() {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const today = new Date().getDay();
    const todayName = days[today];
    
    const tourneeCards = document.querySelectorAll('.tournee-card');
    tourneeCards.forEach(card => {
        const dayElement = card.querySelector('h5');
        if (dayElement && dayElement.textContent.includes(todayName)) {
            card.style.transition = 'all 0.3s ease';
            card.style.borderLeftColor = '#FFB74D';
            card.style.backgroundColor = '#FFF3E0';
            card.style.transform = 'translateX(5px)';
            card.style.boxShadow = '0 8px 20px rgba(255, 183, 77, 0.2)';
        }
    });
}

updateTourneeStatus();

document.querySelectorAll('.bottom-bar .nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'scale(1.05) translateY(-2px)';
            this.style.backgroundColor = 'rgba(13, 61, 128, 0.1)';
            this.style.borderRadius = '10px';
        }
    });
    
    link.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = '';
            this.style.backgroundColor = '';
            this.style.borderRadius = '';
        }
    });
});

function togglePasswordVisibility(button) {
    const input = button.previousElementSibling;
    const icon = button.querySelector('i');
    
    if (input && input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
        button.setAttribute('title', 'Masquer le mot de passe');
    } else if (input) {
        input.type = 'password';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
        button.setAttribute('title', 'Afficher le mot de passe');
    }
}