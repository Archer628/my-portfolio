// Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img src="" alt="Fullscreen Image">';
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Add click event to all main images
    const mainImages = document.querySelectorAll('.main-image-container');
    mainImages.forEach(container => {
        container.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && img.src) {
                // Use higher resolution image for fullscreen (replace w=800 with w=1600 or higher)
                let highResSrc = img.src;
                highResSrc = highResSrc.replace(/w=\d+/, 'w=1600');
                highResSrc = highResSrc.replace(/q=\d+/, 'q=100');
                
                lightboxImg.src = highResSrc;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Add click event to all design image containers
    const designImages = document.querySelectorAll('.design-image-container');
    designImages.forEach(container => {
        container.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && img.src) {
                let highResSrc = img.src;
                highResSrc = highResSrc.replace(/w=\d+/, 'w=1600');
                highResSrc = highResSrc.replace(/q=\d+/, 'q=100');
                
                lightboxImg.src = highResSrc;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox on click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === lightboxClose) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close lightbox on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Scroll Animation for Design Items
    const designItems = document.querySelectorAll('.design-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    designItems.forEach(item => {
        observer.observe(item);
    });

    // Filter Functionality (for work.html)
    const filterTabs = document.querySelectorAll('.filter-tab');
    const workItems = document.querySelectorAll('.work-item');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            workItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
