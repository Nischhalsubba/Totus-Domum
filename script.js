
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Smooth Scroll (Lenis)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis to ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Preloader Animation
    const preloaderTl = gsap.timeline({
        onComplete: () => {
            gsap.to('#preloader', {
                opacity: 0,
                duration: 0.8,
                pointerEvents: 'none',
                onComplete: () => {
                    document.body.classList.remove('overflow-hidden');
                    // Start Hero Animations
                    startHeroAnimations();
                }
            });
        }
    });

    // Make body visible (but preloader covers it)
    gsap.set('body', { opacity: 1 });

    preloaderTl
        .to('#preloader-logo', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to('#preloader-text', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .to('#preloader-bar', { width: "100%", duration: 2.5, ease: "power1.inOut" });

    // 3. Hero Animations
    function startHeroAnimations() {
        const heroTl = gsap.timeline();
        
        heroTl
            .to('#hero-img', { scale: 1, duration: 2.5, ease: "power2.out" })
            .to('.hero-anim', { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=2")
            .to('.hero-title', { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=1.8")
            .to('.hero-cursive', { opacity: 1, y: 0, rotate: 0, duration: 1.4, ease: "power3.out" }, "-=1.6")
            .to('.hero-desc', { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.2");
    }

    // 4. Horizontal Scroll (Services Section)
    const servicesSection = document.getElementById('services');
    const servicesTrack = document.getElementById('services-track');
    
    // Calculate total scroll amount needed
    // We scroll the width of the track minus the viewport width
    
    if (servicesSection && servicesTrack) {
        let scrollAmount = () => -(servicesTrack.scrollWidth - window.innerWidth);
        
        // Horizontal Scroll Animation
        gsap.to(servicesTrack, {
            x: scrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: servicesSection,
                start: "top top",
                end: () => "+=" + (servicesTrack.scrollWidth - window.innerWidth), // Scroll length = horizontal width
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        // Fade out header text in services
        gsap.to('.fade-out-on-scroll', {
            opacity: 0,
            scrollTrigger: {
                trigger: servicesSection,
                start: "top top",
                end: "top -10%",
                scrub: true
            }
        });
    }

    // 5. General Scroll Reveal (Fade Up)
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%", // Start when top of element hits 85% of viewport height
                toggleActions: "play none none reverse"
            }
        });
    });

    // 6. Vertical Line Growth
    gsap.to('.line-grow', {
        height: '5rem', // 80px equivalent
        duration: 1.5,
        scrollTrigger: {
            trigger: '.line-grow',
            start: "top 80%",
        }
    });

    // 7. Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
        gsap.to(cursorCircle, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
    });

    // Hover effect for interactive elements
    const interactives = document.querySelectorAll('.cursor-interactive, a, button');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
});
