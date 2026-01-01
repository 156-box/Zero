/* the purpose 
-add smooth animation
-no tracking , no external libraries
-read only DOM ops
=================================================*/
"use strict"; // enforces safer javascript rules

/*============================================================
S E L E C T    E L E M E N T S 
- any section in class will animate
============================================================*/

const animatedSections = document.querySelectorAll(".scroll-section");

/*=============================================================
I N T E R S E C T I O N   O B S E R V E R
-Triggers Animation
=====================================================*/

const observerOptions = {
    root: null,          // uses browser viewport
    threshold: 0.2     // 20% of element must be visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //add class that triggers CSS animation
            entry.target.classList.add("visible");

            // stop observing once animation is triggered 
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

/*=============================================================

I N I T     O B S E R V E R
=================================================*/

animatedSections.forEach(section => {
    observer.observe(section);
});