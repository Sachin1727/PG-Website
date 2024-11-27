// Toggle Hamburger Menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}

// Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const roomType = document.getElementById('room-type').value;

    // Display confirmation message
    const message = document.getElementById('booking-message');
    message.style.color = 'green';
    message.textContent = `Thank you, ${name}! Your request for a ${roomType} room has been submitted. We will contact you soon at ${phone}.`;
    message.scrollIntoView({ behavior: 'smooth' });

    // Clear form fields
    document.getElementById('booking-form').reset();
});

// Feedback Form Submission
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get feedback value
    const feedbackInput = document.getElementById('feedback-input');
    const feedbackText = feedbackInput.value;

    // Add feedback to the list
    const feedbackList = document.getElementById('feedback-list ul');
    const newFeedback = document.createElement('li');
    newFeedback.textContent = feedbackText;
    feedbackList.appendChild(newFeedback);

    // Clear feedback input field
    feedbackInput.value = '';
});
