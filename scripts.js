document.addEventListener('DOMContentLoaded', () => {

    /* ===========================
       PRELOADER
       =========================== */
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2200);
    }

    /* ===========================
       NAVBAR SCROLL EFFECT
       =========================== */
    const header = document.getElementById('header');
    const handleScroll = () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    /* ===========================
       MOBILE MENU TOGGLE
       =========================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open', isOpen);
            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? 'hidden' : '';

            // Collapse all dropdowns when menu is closed
            if (!isOpen) {
                navMenu.querySelectorAll('.has-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('open');
                });
            }
        });

        // Toggle sub-menus on mobile click
        const dropdownLinks = navMenu.querySelectorAll('.has-dropdown > a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    const parentLi = link.parentElement;
                    const isOpen = parentLi.classList.contains('open');

                    // Close all other dropdowns for accordion effect
                    navMenu.querySelectorAll('.has-dropdown').forEach(item => {
                        if (item !== parentLi) {
                            item.classList.remove('open');
                        }
                    });

                    // Toggle active state on current dropdown
                    parentLi.classList.toggle('open', !isOpen);
                }
            });
        });

        // Close drawer on nav link click (excluding mobile dropdown triggers)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768 && link.parentElement.classList.contains('has-dropdown')) {
                    return; // Don't close the drawer when clicking mobile sub-menu triggers
                }
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
                document.body.style.overflow = '';

                // Reset dropdowns
                navMenu.querySelectorAll('.has-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('open');
                });
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
                document.body.style.overflow = '';

                // Reset dropdowns
                navMenu.querySelectorAll('.has-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('open');
                });
            }
        });
    }

    /* ===========================
       SMOOTH SCROLLING
       =========================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = header ? header.offsetHeight : 80;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ===========================
       SCROLL ANIMATIONS (AOS)
       =========================== */
    const aosElements = document.querySelectorAll('[data-aos]');
    const aosObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                aosObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    aosElements.forEach(el => aosObserver.observe(el));

    /* ===========================
       STATS COUNTER ANIMATION
       =========================== */
    const counterEls = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterEls.forEach(el => counterObserver.observe(el));

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const duration = 1800;
        const start = performance.now();
        const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
        };
        requestAnimationFrame(update);
    }

    /* ===========================
       TESTIMONIAL CAROUSEL
       =========================== */
    const track = document.getElementById('testimonial-carousel');
    const dotsContainer = document.getElementById('carousel-dots');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    if (track && dotsContainer && nextBtn && prevBtn) {
        const slides = Array.from(track.children);
        const dots = Array.from(dotsContainer.children);
        let currentIndex = 0;

        const updateCarousel = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        };

        nextBtn.addEventListener('click', () => {
            let nextIndex = (currentIndex + 1) % slides.length;
            updateCarousel(nextIndex);
        });

        prevBtn.addEventListener('click', () => {
            let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel(prevIndex);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateCarousel(index);
            });
        });

        // Auto-slide every 5 seconds
        let autoSlide = setInterval(() => {
            nextBtn.click();
        }, 5000);

        // Pause on hover
        track.addEventListener('mouseenter', () => clearInterval(autoSlide));
        track.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                nextBtn.click();
            }, 5000);
        });
    }

    /* ===========================
       FORM SUBMISSION — GOOGLE SHEETS
       (DO NOT MODIFY THIS BLOCK)
       =========================== */
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    // Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz6pVRHx9z-3gdO_3hLuzqjorUIADpt5lloerndbKDvsQS8A7g4rOufSoMWA0pzy4Cz/exec';

    if (contactForm && submitBtn) {
        let isSubmitting = false;

        // Form Validation Locking: disable by default, enable only when all fields are valid & filled
        const allInputs = Array.from(contactForm.querySelectorAll('input, select, textarea'));
        
        const validateForm = () => {
            if (isSubmitting) return;
            
            let allFilledAndValid = true;
            
            allInputs.forEach(input => {
                if (input.required) {
                    if (input.tagName === 'SELECT') {
                        if (!input.value || input.value === '') {
                            allFilledAndValid = false;
                        }
                    } else if (input.type === 'checkbox' || input.type === 'radio') {
                        if (!input.checked) {
                            allFilledAndValid = false;
                        }
                    } else {
                        if (!input.value.trim()) {
                            allFilledAndValid = false;
                        }
                    }
                }
            });
            
            // Also check standard HTML5 browser validation
            if (!contactForm.checkValidity()) {
                allFilledAndValid = false;
            }
            
            // Update button disabled state
            submitBtn.disabled = !allFilledAndValid;
        };

        // Initialize disabled state on load
        submitBtn.disabled = true;
        validateForm();

        // Listen for input changes to dynamically lock/unlock
        allInputs.forEach(input => {
            input.addEventListener('input', validateForm);
            input.addEventListener('change', validateForm);
            input.addEventListener('keyup', validateForm);
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            isSubmitting = true;

            // Show loader and disable button
            const loader = document.getElementById('submit-loader');
            if (loader) loader.classList.add('active');
            submitBtn.disabled = true;
            submitBtn.querySelector('span').textContent = 'Sending...';

            // Combine country code and phone number into the phone input field before sending to Google Sheets
            const countryCodeSelect = contactForm.querySelector('select[name="country_code"]');
            const phoneInput = contactForm.querySelector('input[name="phone"]');
            if (countryCodeSelect && phoneInput) {
                const code = countryCodeSelect.value;
                if (!phoneInput.value.startsWith(code)) {
                    phoneInput.value = code + ' ' + phoneInput.value;
                }
            }

            // Dynamically set all common variations of country code and country name 
            // to guarantee they are printed in Google Sheets regardless of column name format.
            const setHiddenInput = (name, value) => {
                let input = contactForm.querySelector(`input[name="${name}"]`);
                if (!input) {
                    input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = name;
                    contactForm.appendChild(input);
                }
                input.value = value;
            };

            if (countryCodeSelect) {
                const code = countryCodeSelect.value;
                const selectedOption = countryCodeSelect.options[countryCodeSelect.selectedIndex];
                const optionText = selectedOption ? selectedOption.textContent : '';
                let countryName = '';
                if (optionText.includes(' - ')) {
                    countryName = optionText.split(' - ')[1].trim();
                } else {
                    countryName = optionText.replace(code, '').trim();
                }

                // Set country code under common column headers
                setHiddenInput('country_code', code);
                setHiddenInput('Country Code', code);
                setHiddenInput('CountryCode', code);
                setHiddenInput('country-code', code);
                setHiddenInput('Dial Code', code);
                setHiddenInput('dial_code', code);

                // Set country name under common column headers
                if (countryName) {
                    setHiddenInput('country', countryName);
                    setHiddenInput('Country', countryName);
                    setHiddenInput('country_name', countryName);
                    setHiddenInput('Country Name', countryName);
                }
            }

            // Use iframe method for 100% reliability with Google Sheets
            contactForm.action = SCRIPT_URL;
            contactForm.target = 'hidden_iframe';
            contactForm.method = 'POST';

            window.submitted = true;
            contactForm.submit();
        });
    }

    /* ===========================
       CRAFTSMANSHIP VIDEO PLAYERS
       =========================== */
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        const video = card.querySelector('.showcase-video');
        const playBtn = card.querySelector('.video-play-btn');
        const playIcon = playBtn ? playBtn.querySelector('i') : null;
        const videoWrap = card.querySelector('.video-wrap');

        if (!video) return;

        const updateUI = () => {
            if (video.paused) {
                if (videoWrap) videoWrap.classList.add('paused');
                if (playIcon) {
                    playIcon.className = 'fas fa-play';
                }
            } else {
                if (videoWrap) videoWrap.classList.remove('paused');
                if (playIcon) {
                    playIcon.className = 'fas fa-pause';
                }
            }
        };

        // Sync UI on play/pause/playing events
        video.addEventListener('play', updateUI);
        video.addEventListener('pause', updateUI);
        video.addEventListener('playing', updateUI);

        // Initial sync
        updateUI();

        // Toggle action
        const togglePlay = () => {
            if (video.paused) {
                video.play().catch(err => {
                    console.log('Video play failed or interrupted:', err);
                });
            } else {
                video.pause();
            }
        };

        if (playBtn) {
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePlay();
            });
        }

        if (videoWrap) {
            videoWrap.addEventListener('click', togglePlay);
        }
    });

});

