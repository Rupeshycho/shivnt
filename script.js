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


