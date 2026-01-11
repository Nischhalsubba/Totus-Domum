
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Lenis (Smooth Scroll)
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // 2. HELPER: Split Text (Simulates simple character split)
    const splitTextToSpans = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if(el.classList.contains('split-done')) return; 
            const text = el.textContent.trim();
            // Don't split if it contains HTML (like the span for Art of Living)
            if (el.children.length > 0 && el.tagName === 'H1') return; // Skip complex H1s for now to avoid breaking structure

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

    // 3. PAGE ROUTER LOGIC
    const pages = {
        home: document.getElementById('page-home'),
        management: document.getElementById('page-management'),
        search: document.getElementById('page-search'),
        concierge: document.getElementById('page-concierge')
    };

    function showPage(pageName) {
        // 1. Fade out current content
        const currentActive = document.querySelector('.page-section:not(.hidden)');
        
        gsap.to(window, { scrollTo: 0, duration: 0.5, ease: "power2.inOut" });

        const tl = gsap.timeline({
            onComplete: () => {
                // 2. Hide all, show target
                Object.values(pages).forEach(el => {
                    if(el) el.classList.add('hidden');
                });
                const target = pages[pageName] || pages['home'];
                if(target) {
                    target.classList.remove('hidden');
                    // 3. Fade In target
                    gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.8 });
                    
                    // 4. Refresh ScrollTrigger for new content height
                    ScrollTrigger.refresh();
                    initAnimations();
                }
            }
        });

        if (currentActive) {
            tl.to(currentActive, { opacity: 0, duration: 0.4 });
        } else {
            // First load or edge case
        }
    }

    // Handle Internal Nav Clicks
    document.querySelectorAll('[data-link], .nav-link-internal').forEach(link => {
        link.addEventListener('click', (e) => {
            // Only capture if it's an internal link
            const targetPage = link.getAttribute('data-link');
            if (targetPage) {
                e.preventDefault();
                showPage(targetPage);
            }
        });
    });

    // 4. NAVIGATION SCROLL EFFECT
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            nav.classList.add('bg-[#0A0A0A]', 'border-b', 'border-white/10', 'py-4');
            nav.classList.remove('py-8');
        } else {
            nav.classList.remove('bg-[#0A0A0A]', 'border-b', 'border-white/10', 'py-4');
            nav.classList.add('py-8');
        }
    });

    // 5. ANIMATION INIT
    function initAnimations() {
        splitTextToSpans('.split-text');
        
        // Parallax Images
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

        // Text Reveals (Characters)
        document.querySelectorAll('.split-text').forEach(el => {
            const chars = el.querySelectorAll('.char-wrap');
            if(chars.length > 0) {
                gsap.to(chars, {
                    y: 0,
                    duration: 1,
                    stagger: 0.05,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%"
                    }
                });
            } else {
                // Fallback for H1 complex structure
                 gsap.fromTo(el, { y: 50, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                 });
            }
        });

        // Slide Up Elements (Cursive etc)
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

        // Fade Up Elements (Generic)
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

         // Reveal Stagger (Hero items)
         const staggers = document.querySelectorAll('.reveal-stagger');
         if(staggers.length > 0) {
            gsap.fromTo(staggers, 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out", delay: 1 }
            );
         }

        // Horizontal Scroll for Services
        const servicesSection = document.querySelector('#services');
        const track = document.querySelector('.services-track');
        if (servicesSection && track && !servicesSection.closest('.hidden')) {
            const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);
            const tween = gsap.to(track, { x: getScrollAmount, ease: "none" });
            
            ScrollTrigger.create({
                trigger: ".services-wrapper",
                start: "top top",
                end: () => `+=${track.scrollWidth - window.innerWidth}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
            });
            
            // Fade out intro text on scroll
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

    // 6. PRELOADER & INITIAL LOAD
    const preloaderTl = gsap.timeline({
        onComplete: () => {
            gsap.to('#preloader', {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => {
                    initAnimations();
                    document.body.classList.remove('opacity-0');
                    document.body.style.cursor = 'none';
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

    // 7. CUSTOM CURSOR
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        gsap.to(cursorDot, { x: mouseX - 4, y: mouseY - 4, duration: 0 });
    });

    function animateCursor() {
        const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
        cursorX += (mouseX - cursorX) * dt;
        cursorY += (mouseY - cursorY) * dt;
        gsap.set(cursorCircle, { x: cursorX - 20, y: cursorY - 20 });
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor Interactions
    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        if (target.closest('.cursor-interactive') || target.tagName === 'A' || target.tagName === 'BUTTON') {
             gsap.to(cursorCircle, { scale: 1.5, opacity: 0.5, backgroundColor: 'rgba(198, 168, 124, 0.1)' });
        } else {
             gsap.to(cursorCircle, { scale: 1, opacity: 1, backgroundColor: 'transparent' });
        }
    });
});
