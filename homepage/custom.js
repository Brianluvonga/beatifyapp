document.addEventListener('DOMContentLoaded', function () {
    // Array of features with title and description
    const features = [
        { title: 'Categorise Music', description: 'App lets you organize music based on the genre and artist but also provides personalized recommendations based on your listening history, ensuring you never miss out on the perfect track.' },
        { title: 'Train Music', description: 'Elevate your music journey with our revolutionary playlist creation feature powered by cutting-edge music analysis technology. Our platform delves deep into your music preferences, extracting key features and scanning vast music datasets from the internet to uncover unique and undiscovered gems.' },
        { title: 'Auto-Download', description: 'Immerse yourself in a world of limitless musical discovery with our auto-download feature. As soon as new music that aligns with your refined preferences, as identified through our sophisticated analysis, becomes available, it is automatically downloaded to your device. Seamlessly integrating with your personalized music library, this feature ensures that you are always at the forefront of musical innovation, with fresh tracks and emerging artists at your fingertips, ready to enrich your listening experience at a moments notice' }
    ];

    const featureNames = document.getElementById('feature-names');
    const featureDetails = document.getElementById('feature-details');
    let selectedListItem = null; // To track the currently selected list item

    // Populate feature names list
    features.forEach(function (feature, index) {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = feature.title;
        listItem.addEventListener('click', function () {
            displayFeatureDetails(index);
            highlightListItem(listItem);
        });
        featureNames.appendChild(listItem);

        // Highlight the first list item by default
        if (index === 0) {
            selectedListItem = listItem;
            selectedListItem.classList.add('active');
        }
    });

    // Display details of the default feature
    displayFeatureDetails(0);

    // Function to display feature details
    function displayFeatureDetails(index) {
        // Clear previous details
        featureDetails.innerHTML = '';

        // Create and display details of the selected feature
        const feature = features[index];
        const featureTitle = document.createElement('h3');
        featureTitle.textContent = feature.title;
        const featureDescription = document.createElement('p');
        featureDescription.textContent = feature.description;
        featureDetails.appendChild(featureTitle);
        featureDetails.appendChild(featureDescription);
    }

    // Function to highlight the clicked list item
    function highlightListItem(listItem) {
        // Remove active class from previously selected list item
        if (selectedListItem) {
            selectedListItem.classList.remove('active');
        }
        // Add active class to the clicked list item
        selectedListItem = listItem;
        selectedListItem.classList.add('active');
    }
});

// scroll section feature
// Scroll to section when navbar item is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjusted for navbar height
            behavior: 'smooth'
        });
    });
});

// provide navbar with background color
document.addEventListener('DOMContentLoaded', function () {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Get the hero section element
    const heroSection = document.getElementById('hero-section');

    // Function to add the 'scrolled' class to the navbar
    function addScrolledClass() {
        navbar.classList.add('scrolled');
    }

    // Function to remove the 'scrolled' class from the navbar
    function removeScrolledClass() {
        navbar.classList.remove('scrolled');
    }

    // Function to handle scroll event
    function handleScroll() {
        const heroSectionBottom = heroSection.getBoundingClientRect().bottom;
        if (heroSectionBottom <= 0) {
            addScrolledClass(); // Add 'scrolled' class when hero section is scrolled past
        } else {
            removeScrolledClass(); // Remove 'scrolled' class when hero section is at the top
        }
    }

    // Listen for scroll event
    window.addEventListener('scroll', handleScroll);
});

