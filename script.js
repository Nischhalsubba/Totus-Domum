
document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // 1. HELPER: Split Text
    const splitTextToSpans = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if(el.classList.contains('split-done')) return; 
            const text = el.textContent.trim();
            if (el.children.length > 0 && el.tagName === 'H1') return; 

            const words = text.split(' ');
            el.innerHTML = ''; 
            words.forEach(word => {
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('word-wrap');
                const innerSpan = document.createElement('span');
                innerSpan.classList.add('char-wrap');
                innerSpan.textContent = word;
                innerSpan.style.display = 'inline-block';
                innerSpan.style.transform = 'translateY(100%)'; 
                wordSpan.appendChild(innerSpan);
                el.appendChild(wordSpan);
                el.appendChild(document.createTextNode(' ')); 
            });
            el.classList.add('split-done');
        });
    };

    // 2. PAGE ROUTER LOGIC
    const pages = {
        home: document.getElementById('page-home'),
        management: document.getElementById('page-management'),
        search: document.getElementById('page-search'),
        concierge: document.getElementById('page-concierge')
    };

    function showPage(pageName) {
        const currentActive = document.querySelector('.page-section:not(.hidden)');
        
        gsap.to(window, { scrollTo: 0, duration: 0.5, ease: "power2.inOut" });

        const tl = gsap.timeline({
            onComplete: () => {
                Object.values(pages).forEach(el => {
                    if(el) el.classList.add('hidden');
                });
                const target = pages[pageName] || pages['home'];
                if(target) {
                    target.classList.remove('hidden');
                    gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.8 });
                    ScrollTrigger.refresh();
                    initAnimations();
                }
            }
        });

        if (currentActive) {
            tl.to(currentActive, { opacity: 0, duration: 0.4 });
        }
    }

    document.querySelectorAll('[data-link], .nav-link-internal').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetPage = link.getAttribute('data-link');
            if (targetPage) {
                e.preventDefault();
                showPage(targetPage);
            }
        });
    });

    // 3. NAVIGATION SCROLL EFFECT
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            nav.classList.add('bg-[#080808]/90', 'backdrop-blur-sm', 'border-b', 'border-white/5', 'py-4');
            nav.classList.remove('py-8');
        } else {
            nav.classList.remove('bg-[#080808]/90', 'backdrop-blur-sm', 'border-b', 'border-white/5', 'py-4');
            nav.classList.add('py-8');
        }
    });

    // 4. ANIMATION INIT
    function initAnimations() {
        splitTextToSpans('.split-text');
        
        document.querySelectorAll('.img-parallax').forEach(img => {
            gsap.to(img, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: img.closest('section'),
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        document.querySelectorAll('.split-text').forEach(el => {
            const chars = el.querySelectorAll('.char-wrap');
            if(chars.length > 0) {
                gsap.to(chars, {
                    y: 0,
                    duration: 1.2,
                    stagger: 0.03,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            } else {
                 gsap.fromTo(el, { y: 50, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                 });
            }
        });

        gsap.utils.toArray('.reveal-slide-up').forEach(el => {
            gsap.fromTo(el, 
                { y: 100, opacity: 0, rotate: 5 },
                {
                    y: 0, opacity: 1, rotate: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                }
            );
        });

        gsap.utils.toArray('.reveal-fade-up').forEach(el => {
            gsap.fromTo(el, 
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: { trigger: el, start: "top 90%" }
                }
            );
        });

         const staggers = document.querySelectorAll('.reveal-stagger');
         if(staggers.length > 0) {
            gsap.fromTo(staggers, 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out", delay: 1 }
            );
         }

        // --- FIXED HORIZONTAL SCROLL ---
        const servicesSection = document.querySelector('#services');
        const track = document.querySelector('.services-track');
        
        if (servicesSection && track && !servicesSection.closest('.hidden')) {
            // Calculate EXACT width needed to scroll (scroll width - viewport width)
            const scrollAmount = track.scrollWidth - window.innerWidth;
            
            // Apply horizontal scroll animation
            gsap.to(track, {
                x: -scrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: ".services-wrapper",
                    start: "top top",
                    // The 'end' duration now matches exactly the pixel amount we need to scroll horizontally.
                    // This creates a 1:1 scroll mapping and removes extra space (the void).
                    end: () => `+=${scrollAmount}`, 
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                }
            });
            
            gsap.to('.services-intro', {
                opacity: 0,
                scrollTrigger: {
                    trigger: ".services-wrapper",
                    start: "top top",
                    end: "top -10%",
                    scrub: true
                }
            });
        }
    }

    // 5. PRELOADER & INITIAL LOAD
    const preloaderTl = gsap.timeline({
        onComplete: () => {
            gsap.to('#preloader', {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => {
                    initAnimations();
                    document.body.classList.remove('opacity-0');
                    document.body.style.cursor = 'auto'; // Ensure default cursor
                }
            });
        }
    });

    gsap.set('body', { opacity: 1 });
    preloaderTl
        .to('#preloader-logo', { opacity: 1, y: 0, duration: 1 })
        .to('#preloader-text', { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to('#preloader-bar', { width: "100%", duration: 1.5, ease: "expo.inOut" })
        .to('#preloader-sub', { opacity: 0.5, duration: 0.5 }, "-=1")
        .to('#preloader', { delay: 0.2 });

});
