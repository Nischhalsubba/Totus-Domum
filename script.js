
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
    gsap.registerPlugin(ScrollTrigger);

    // 2. HELPER: Split Text
    const splitTextToSpans = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if(el.classList.contains('split-done')) return; 
            const text = el.textContent.trim();
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

    // Hide all pages except active
    function showPage(pageName) {
        // Fade out current content
        gsap.to(window, { scrollTo: 0, duration: 0.5, ease: "power2.inOut" });
        
        const currentActive = document.querySelector('.page-section:not(.hidden)');
        
        const transitionTl = gsap.timeline({
            onComplete: () => {
                // Hide all
                Object.values(pages).forEach(el => el.classList.add('hidden'));
                // Show target
                const target = pages[pageName] || pages['home'];
                target.classList.remove('hidden');
                
                // Re-init animations for the new page
                ScrollTrigger.refresh();
                initAnimations();
                
                // Fade In
                gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.8 });
            }
        });

        if (currentActive) {
            transitionTl.to(currentActive, { opacity: 0, duration: 0.4 });
        }
    }

    // Handle Nav Clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-link');
            if (targetPage) showPage(targetPage);
        });
    });

    // 4. ANIMATION INIT (Called on load & page switch)
    function initAnimations() {
        splitTextToSpans('.split-text');
        
        // Hero Parallax (generic for all pages with .img-parallax)
        const heroes = document.querySelectorAll('.img-parallax');
        heroes.forEach(img => {
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

        // Text Reveals
        document.querySelectorAll('.split-text').forEach(el => {
            gsap.to(el.querySelectorAll('.char-wrap'), {
                y: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%"
                }
            });
        });

        // Slide Up Elements
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

        // Fade Up Elements
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
        
        // Specific Logic for Home Services Horizontal Scroll
        const servicesSection = document.querySelector('#services');
        const track = document.querySelector('.services-track');
        if (servicesSection && track && !servicesSection.closest('.hidden')) {
            const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);
            const tween = gsap.to(track, { x: getScrollAmount, ease: "none" });
            
            ScrollTrigger.create({
                trigger: servicesSection,
                start: "top top",
                end: () => `+=${track.scrollWidth - window.innerWidth}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
            });
        }
    }

    // 5. Initial Load
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
        .to('#preloader', { delay: 0.2 });

    // 6. Custom Cursor
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

    const interactiveElements = document.querySelectorAll('.cursor-interactive, a, button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => gsap.to(cursorCircle, { scale: 1.5, opacity: 0.5, backgroundColor: 'rgba(176, 141, 85, 0.1)' }));
        el.addEventListener('mouseleave', () => gsap.to(cursorCircle, { scale: 1, opacity: 1, backgroundColor: 'transparent' }));
    });
});
