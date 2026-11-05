// ==========================================================================
// SANCHARAM MASTER APPLICATION JAVASCRIPT (sancharam-theme.js)
// Universal interactive scripts: Navbar, Mobile Drawer, Filters & Search
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky / Scrolled Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links') || document.querySelector('.nav-items');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close mobile menu on clicking any link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 3. Auto-Highlight Active Navigation Link
    const currentPath = window.location.pathname.toLowerCase();
    const navAnchors = document.querySelectorAll('.navbar a');

    navAnchors.forEach(a => {
        const href = (a.getAttribute('href') || '').toLowerCase();
        if (!href || href === '#' || href.includes('javascript:')) return;

        // Check matching patterns
        let isMatch = false;
        if (currentPath.endsWith('/explore.html') && href.includes('explore.html')) {
            isMatch = true;
        } else if (currentPath.endsWith('/bookings.html') && href.includes('bookings.html')) {
            isMatch = true;
        } else if ((currentPath.includes('/features') || currentPath.endsWith('features.html')) && href.includes('features.html')) {
            isMatch = true;
        } else if (currentPath.endsWith('/profile.html') && href.includes('profile.html')) {
            isMatch = true;
        } else if ((currentPath.endsWith('/home.html') || currentPath.endsWith('/') || currentPath === '') && href.includes('home.html')) {
            isMatch = true;
        }

        if (isMatch) {
            a.classList.add('active');
            if (a.parentElement && a.parentElement.classList.contains('nav-item')) {
                a.parentElement.classList.add('active');
            }
        } else if (!href.includes('ai itinenary.html')) {
            a.classList.remove('active');
        }
    });

    // 4. Destination Cards Category Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.dest-card');

    if (filterBtns.length > 0 && cards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                cards.forEach(card => {
                    const category = card.getAttribute('data-category') || '';
                    if (filterValue === 'all' || category.includes(filterValue)) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(15px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 200);
                    }
                });
            });
        });
    }

    // 5. Hero Search Form Handler
    const searchForm = document.getElementById('hero-search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const destInput = document.getElementById('search-dest');
            const catInput = document.getElementById('search-category');
            const destSelect = destInput ? destInput.value.toLowerCase() : 'all';
            const catSelect = catInput ? catInput.value.toLowerCase() : 'all';

            const exploreSection = document.getElementById('Explore') || document.querySelector('.section-explore');
            if (exploreSection) {
                exploreSection.scrollIntoView({ behavior: 'smooth' });
            }

            if (catSelect && catSelect !== 'all') {
                const targetBtn = document.querySelector(`.filter-btn[data-filter="${catSelect}"]`);
                if (targetBtn) {
                    targetBtn.click();
                }
            } else if (destSelect && destSelect !== 'all') {
                cards.forEach(card => {
                    const text = card.innerText.toLowerCase();
                    if (text.includes(destSelect)) {
                        card.style.display = 'flex';
                        card.style.border = '2px solid var(--primary, #E63946)';
                    } else {
                        card.style.border = '1px solid rgba(226, 232, 240, 0.7)';
                    }
                });
            }
        });
    }
});
