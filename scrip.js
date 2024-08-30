document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form fields
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const bikeType = document.getElementById('bike-type').value;
        const rideDistance = document.getElementById('ride-distance').value;

        if (!fullName || !email || !phone || !bikeType || !rideDistance) {
            alert('Please fill out all required fields.');
            return;
        }

        // Additional validation can be added here, e.g., phone number format

        // Simulate successful registration
        alert('Registration successful! Thank you for signing up for the bike ride.');
        form.reset();
    });
});
