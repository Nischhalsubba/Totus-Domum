
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

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Helper: Split Text Logic (Simulates SplitText Plugin)
    const splitTextToSpans = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            const text = el.textContent;
            const words = text.split(' ');
            el.innerHTML = ''; // Clear text
            
            words.forEach(word => {
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('word-wrap');
                
                // Wrap word in an overflow-hidden span for reveal effect
                const innerSpan = document.createElement('span');
                innerSpan.classList.add('char-wrap');
                innerSpan.textContent = word;
                innerSpan.style.display = 'inline-block';
                innerSpan.style.transform = 'translateY(100%)'; // Start hidden
                
                wordSpan.appendChild(innerSpan);
                el.appendChild(wordSpan);
                el.appendChild(document.createTextNode(' ')); // Space
            });
        });
    };

    // Apply split text
    splitTextToSpans('.split-text');

    // 3. Preloader Sequence
    const preloaderTl = gsap.timeline({
        onComplete: () => {
            // Remove Preloader
            gsap.to('#preloader', {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => {
                    initHeroAnimations();
                    document.body.classList.remove('opacity-0');
                    document.body.style.cursor = 'none';
                }
            });
        }
    });

    gsap.set('body', { opacity: 1 }); // Reveal body behind preloader
    preloaderTl
        .to('#preloader-logo', { opacity: 1, y: 0, duration: 1 })
        .to('#preloader-text', { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to('#preloader-bar', { width: "100%", duration: 1.5, ease: "expo.inOut" })
        .to('#preloader', { delay: 0.2 }); // Pause briefly

    // 4. Hero Animations
    function initHeroAnimations() {
        const tl = gsap.timeline();
        
        // Parallax Image
        gsap.to('#hero-img', {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: '#hero',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Text Reveals
        tl.to('#hero .char-wrap', {
            y: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: "power4.out"
        })
        .from('.reveal-slide-up', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "-=1")
        .from('.reveal-stagger', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.8");
    }

    // 5. Global Scroll Reveals
    // Text Split Reveals
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

    // Fade Up Elements
    gsap.utils.toArray('.reveal-fade-up').forEach(el => {
        gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%"
            }
        });
    });

    // Slide Up (Cursive)
    gsap.utils.toArray('.reveal-slide-up:not(#hero *)').forEach(el => {
        gsap.from(el, {
            y: 100,
            opacity: 0,
            rotate: 5,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%"
            }
        });
    });

    // Line Growth
    gsap.utils.toArray('.reveal-line').forEach(el => {
        gsap.from(el, {
            scaleY: 0,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: el,
                start: "top 85%"
            }
        });
    });

    // 6. Services Horizontal Scroll
    const servicesSection = document.querySelector('#services');
    const track = document.querySelector('.services-track');
    
    if (servicesSection && track) {
        // Calculate the distance to scroll
        // Track width - Viewport width
        const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

        const tween = gsap.to(track, {
            x: getScrollAmount,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: servicesSection,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });

        // Fade out intro text
        gsap.to('.services-intro', {
            opacity: 0,
            scrollTrigger: {
                trigger: servicesSection,
                start: "top top",
                end: "top -10%",
                scrub: true
            }
        });
    }

    // 7. Watermark Parallax & Rotation
    gsap.to('#watermark-bg', {
        rotation: 45,
        y: 100,
        opacity: 0.08,
        ease: "none",
        scrollTrigger: {
            trigger: '#heritage',
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // 8. Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Immediate dot movement
        gsap.to(cursorDot, { x: mouseX - 4, y: mouseY - 4, duration: 0 });
    });

    // Smooth circle movement loop
    function animateCursor() {
        const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
        cursorX += (mouseX - cursorX) * dt;
        cursorY += (mouseY - cursorY) * dt;
        
        gsap.set(cursorCircle, { x: cursorX - 20, y: cursorY - 20 });
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover interactions
    const interactiveElements = document.querySelectorAll('.cursor-interactive, a, button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursorCircle, { scale: 1.5, opacity: 0.5, backgroundColor: 'rgba(176, 141, 85, 0.1)' });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursorCircle, { scale: 1, opacity: 1, backgroundColor: 'transparent' });
        });
    });
});
