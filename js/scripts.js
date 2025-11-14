 // --- Floating WhatsApp Initialization ---
// NOTE: This requires jQuery and floating-wpp.min.js to be loaded in the HTML before this script.
$(function() {
    $('#WAButton').floatingWhatsApp({
        phone: '6376082287', 
        headerTitle: 'Chat with me on WhatsApp!',
        popupMessage: 'Hello, how can i help you?', 
        showPopup: true, 
        buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', // Button Image
        position: "right"    
    });
});


// --- Navigation Active State Logic ---
// This script highlights the current page link in the navigation menu.
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the path of the current page.
    let currentPath = window.location.pathname;

    // Remove leading slash if present
    if (currentPath.startsWith('/')) {
        currentPath = currentPath.substring(1);
    }

    // If on the root directory, treat it as 'index.html'
    if (currentPath === '' || currentPath.endsWith('/')) {
        currentPath = 'index.html';
    }

    // 2. Select all navigation links
    const navLinks = document.querySelectorAll('.main-menu a');

    navLinks.forEach(link => {
        // Get the href attribute of the link
        const linkPath = link.getAttribute('href');

        // Check if the link's href matches the current file path
        if (linkPath === currentPath) {
            
            // First, remove 'active' from all links for a clean state
            document.querySelectorAll('.main-menu a.active').forEach(activeLink => {
                activeLink.classList.remove('active');
            });
            
            // Add 'active' class to the current link
            link.classList.add('active');
        } else {
             // Fallback: compare just the filename if path is complex (e.g., /portfolio/index.html)
            const currentFilename = currentPath.split('/').pop();
            if (linkPath === currentFilename) {
                 // Remove 'active' from all links for a clean state
                document.querySelectorAll('.main-menu a.active').forEach(activeLink => {
                    activeLink.classList.remove('active');
                });
                link.classList.add('active');
            }
        }
    });
});


 // Auto-dismiss alert after 3 seconds
    setTimeout(() => {
        const alert = document.getElementById('responseMessage');
        if (alert) {
            const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
            bsAlert.close();
        }
    }, 3000);

    const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('submitted') === 'true') {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert alert-success alert-dismissible fade show mt-4';
    alertBox.setAttribute('role', 'alert');
    alertBox.innerHTML = `
      <strong>Thank you!</strong> Your message has been sent successfully.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    const form = document.querySelector("form");
    form.parentNode.insertBefore(alertBox, form);

    // Remove query string from URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }



     document.addEventListener('DOMContentLoaded', () => {
    // Select all links that start with #details-
    const detailLinks = document.querySelectorAll('a[href^="#details-"]');

    detailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default jump behavior
            e.preventDefault(); 

            // Get the target ID from the href attribute
            const targetId = this.getAttribute('href'); 
            
            // Get the target element
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use the scrollIntoView method for smooth scrolling
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error("Target element not found for ID:", targetId);
            }
        });
    });
});


     document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the full path of the current page (e.g., /myservices.html)
    // We use .pathname to ignore the protocol, domain, and query parameters.
    let currentPath = window.location.pathname;

    // Remove leading slash if present (optional but helps comparison)
    if (currentPath.startsWith('/')) {
        currentPath = currentPath.substring(1);
    }

    // If we are on the root, currentPath will be empty, so set it to 'index.html'
    if (currentPath === '') {
        currentPath = 'index.html';
    }

    // 2. Select all navigation links
    const navLinks = document.querySelectorAll('.main-menu a');

    navLinks.forEach(link => {
        // Get the href attribute of the link
        const linkPath = link.getAttribute('href');

        // 3. Compare the current page path with the link's href
        if (linkPath === currentPath) {
            // 4. Remove 'active' class from any other link and add it to the current link
            
            // First, remove 'active' from all links (optional, but good practice)
            document.querySelectorAll('.main-menu a.active').forEach(activeLink => {
                activeLink.classList.remove('active');
            });
            
            // Add 'active' class to the current link
            link.classList.add('active');
        }
    });
    
    // Fallback for sub-pages or if the path is complex, compare filenames
    if (currentPath.includes('/')) {
        const currentFilename = currentPath.split('/').pop();
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentFilename) {
                document.querySelectorAll('.main-menu a.active').forEach(activeLink => {
                    activeLink.classList.remove('active');
                });
                link.classList.add('active');
            }
        });
    }
});

 document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');

    // Dummy project data (replace with your actual project details)
   const projectsData = {
    1: {
        title: 'Medzy Health: Personalized Healthcare Platform',
        image: 'assets/projectimg/medzy.png', // Replace with a screenshot of the site
        description: 'Designed and developed a personalized healthcare service platform. The solution provides users with easy booking of pathology tests and diagnostic services right to their doorstep. My role encompassed both the modern, intuitive UI/UX design and the robust full-stack development using the Laravel framework, focusing on secure service booking flows and a smooth user experience.',
        techs: ['PHP Laravel', 'Frontend Design', 'MySQL', 'Bootstrap', 'Secure Booking'],
        liveDemo: 'https://medzyhealth.com/',
    },
    2: {
        title: 'MSH Path Labs: Smart Health Package Booking System',
        image: 'assets/projectimg/MSH.png', // Replace with a screenshot of the site
        description: 'Developed a complete Smart Health Package booking system for a path lab. The system features dynamic test searching, real-time package price updates, and a simple checkout flow. I handled the end-to-end design and development, utilizing Laravel for the backend logic and heavy use of jQuery/AJAX for asynchronous data handling to ensure a fast and interactive user experience.',
        techs: ['PHP Laravel', 'jQuery', 'AJAX', 'MySQL', 'Custom Design', 'Real-time Updates'],
        liveDemo: 'https://mshpathlabs.com/',
    },
    3: {
        title: 'Authentic Jaipur: Medical Device Industry Website',
        image: 'assets/projectimg/authentic.png', // Replace with a screenshot of the site
        description: 'Created a professional and responsive website for Authentic Instrument Industries Ltd., a medical device company. The focus was on clear presentation of their business verticals, product quality, and compliance information. Developed on the WordPress platform, ensuring easy content management while maintaining a professional and informative online presence.',
        techs: ['WordPress', 'Responsive Design', 'Business Verticals', 'Informational Site'],
        liveDemo: 'https://authenticjaipur.com/',
    },
    4: {
        title: 'Rosium Developers: Luxury Real Estate Portfolio',
        image: 'assets/projectimg/rosium.png', // Replace with a screenshot of the site
        description: 'Designed and developed an aesthetically rich portfolio website for Rosium Developers, specializing in luxury real estate. The site uses high-quality visuals and a sophisticated layout (inspired by the Mughal architecture in the design) to showcase their properties. Built on WordPress to provide a strong visual impact and easy management of property listings and lead generation forms.',
        techs: ['WordPress', 'Visual Page Builder', 'High-Fidelity Imagery', 'Lead Generation Focus'],
        liveDemo: 'https://rosiumdevelopers.com/',
    }
};

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            const project = projectsData[projectId];

            if (project) {
                document.getElementById('modalProjectImage').src = project.image;
                document.getElementById('modalProjectTitle').textContent = project.title;
                document.getElementById('modalProjectDescription').textContent = project.description;
                
                // Clear previous techs and add new ones
                const modalTechsDiv = document.getElementById('modalProjectTechs');
                modalTechsDiv.innerHTML = '';
                project.techs.forEach(tech => {
                    const span = document.createElement('span');
                    span.className = 'tech-tag';
                    span.textContent = tech;
                    modalTechsDiv.appendChild(span);
                });

                document.getElementById('modalLiveDemoBtn').href = project.liveDemo;
                document.getElementById('modalGithubBtn').href = project.github;

                projectModal.classList.add('active'); // Show modal
                document.body.style.overflow = 'hidden'; // Prevent scrolling background
            }
        });
    });

    // Close modal when close button is clicked
    closeButton.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal when clicking outside of the modal content
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close modal when Escape key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});



document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbyKuiK7UxJj6WaODKMiJGU4nEF7aPMU52xyTaSpVBRUaVgvTmGv6GA-2reutrJ93qcCaA/exec", {
        method: "POST",
        body: JSON.stringify({
            full_name: this.full_name.value,
            email: this.email.value,
            subject: this.subject.value,
            phone: this.phone.value,
            message: this.message.value
        })
    })
    .then(res => res.text())
    .then(data => {
        // alert("Message sent successfully!");
        // document.getElementById('contactForm').reset();
    })
    .catch(err => alert("Error! Something went wrong."));
});