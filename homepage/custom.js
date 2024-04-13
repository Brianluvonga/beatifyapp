// loader element

window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(function () {
        loader.style.display = 'none';
    }, 1500);
});




// header typing effect
const typingText = document.getElementById('typingText');
const cursor = document.querySelector('.cursor');
const textToType = "Pick a genre, add your preferred songs, discover jams as per your listening habits";
let index = 0;
let isDeleting = false;
let currentText = '';
let speed = 100; // Adjust the typing speed here (lower number = faster)

function typeText() {
    if (index < textToType.length) {
        if (!isDeleting) {
            currentText = textToType.slice(0, ++index);
            typingText.textContent = currentText;
        } else {
            currentText = textToType.slice(0, index--);
            typingText.textContent = currentText;
        }
        cursor.classList.remove('fade');
    } else {
        isDeleting = true;
        cursor.classList.add('fade');
    }

    if (isDeleting && index === -1) {
        isDeleting = false;
        index = 0;
    }

    setTimeout(typeText, speed);
}

typeText();

// Cursor blinking effect
setInterval(() => {
    cursor.classList.toggle('fade');
}, 500);
// end of typing effect


// feature section
document.addEventListener('DOMContentLoaded', function () {
    // Array of features with title and description
    const features = [
        { title: 'Categorise Music', description: 'App lets you add and organize music based on the genres you prefer.' },
        { title: 'Train Music', description: 'Be your own driver, customise your genres with song samples that best suit your listening habits, let the app analysis and fetch clues to your song samples, it then performs scanning on vast music datasets from the internet to uncover jams that match your preferred samples.' },
        { title: 'Auto-Download', description: 'Well, music downloading is a repetitive task. We want to make this a success. As soon as new music that aligns with your refined preferences, as identified through our sophisticated analysis, becomes available, it is automatically downloaded to your device. \n\n This feature ensures that you are always at the forefront of music discovery, with fresh tracks to keep the entertainment going.' }
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
            selectedListItem.style.backgroundColor = '#022c4ef5'; // Set background color for the first item
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
        // Remove active class from previously selected list item and reset background color
        if (selectedListItem) {
            selectedListItem.classList.remove('active');
            selectedListItem.style.backgroundColor = ''; // Remove background color
        }
        // Add active class to the clicked list item and set background color
        selectedListItem = listItem;
        selectedListItem.classList.add('active');
        selectedListItem.style.backgroundColor = '#022c4ef5'; // Set background color
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

// Toggle visibility of navbar toggler and close icon
$('.navbar-toggler').click(function () {
    $('.navbar-toggler-icon').toggle();
    $('.navbar-close-icon').toggle();
});


// feedback form

document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedback-form');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // You can add your logic here to handle form submission,
        // such as sending the data to a server or displaying a thank you message.

        // For example, to display a thank you message:
        alert('Thank you for your feedback!');

        // Reset the form
        feedbackForm.reset();
    });
});


// subscription section
document.querySelector('.sub-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('.sub-input').value;
    const subMessage = document.querySelector('.sub-message');

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: 'your_service_id',
            template_id: 'your_template_id',
            user_id: 'your_user_id',
            template_params: {
                'email': email,
                'to_email': 'brnluvonga@gmail.com'
            }
        })
    })
        .then(response => {
            if (response.status === 200) {
                subMessage.textContent = 'Thank you for subscribing!';
                subMessage.classList.add('success');
            } else {
                subMessage.textContent = 'Sorry, there was an error processing your subscription.';
                subMessage.classList.add('error');
            }
        })
        .catch(error => {
            subMessage.textContent = 'Sorry, there was an error processing your subscription.';
            subMessage.classList.add('error');
        });
});