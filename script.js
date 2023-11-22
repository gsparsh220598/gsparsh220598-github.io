// This script will add 'active' class to the navigation items as you scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach((li) => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.getElementById('projects');
    const showProjectsBtn = document.getElementById('show-projects');

    showProjectsBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor tag behavior
        projectsSection.classList.toggle('visible');
    });
});
