    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if(hamburger) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                console.log("Menu toggled!"); // This helps you debug
            });
        } else {
            console.error("Hamburger element not found. Check your ID!");
        }
    });


function sendWhatsApp() {
    alert("Thank you for your message.");
    window.open("https://wa.me/+9779819961413", "_blank");
}


//Engaging Hover effects added 

document.addEventListener('DOMContentLoaded', () => {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    // --- DESKTOP: Mouse Movement ---
    window.addEventListener('mousemove', (e) => {
        // Only run if not a touch device
        if (window.innerWidth > 768) {
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;

            outline.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 500, fill: "forwards" });
        }
    });

    // --- MOBILE: Touch Ripple Effect ---
    window.addEventListener('touchstart', (e) => {
        // Create the ripple element
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        
        // Get touch coordinates
        const touch = e.touches[0];
        ripple.style.left = `${touch.clientX}px`;
        ripple.style.top = `${touch.clientY}px`;
        
        document.body.appendChild(ripple);

        // Remove element after animation ends to keep site fast
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // --- HOVER EFFECTS (For Desktop) ---
    const links = document.querySelectorAll('a, button, .icon-box');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if(outline) outline.classList.add('cursor-grow');
        });
        link.addEventListener('mouseleave', () => {
            if(outline) outline.classList.remove('cursor-grow');
        });
    });
});

