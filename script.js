const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const scrollTopBtn = document.getElementById('scroll-top');

// Theme Toggle
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

toggleBtn.addEventListener('click', () => {
    let theme = htmlElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Scroll to Top
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
    
    // Active Nav Link Logic
    const sections = document.querySelectorAll('section, header');
    const navLi = document.querySelectorAll('.navbar ul li a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
            a.classList.add('active');
        }
    });
};

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
