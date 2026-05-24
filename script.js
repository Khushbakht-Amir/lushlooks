// Get necessary UI components
const bookingModal = document.getElementById("bookingModal");
const closeModalBtn = document.querySelector(".close-modal");
const appointmentForm = document.getElementById("appointmentForm");
const serviceSelect = document.getElementById("serviceSelect");

// 1. Open Pop-up when any booking button is clicked
document.querySelectorAll(".book-service-btn").forEach((button, index) => {
    button.addEventListener("click", function() {
        bookingModal.classList.add("show");
        if (index === 0) serviceSelect.value = "facial";
        if (index === 1) serviceSelect.value = "hair";
        if (index === 2) serviceSelect.value = "makeup";
    });
});

// 2. Close Pop-up when hitting the 'X' button
closeModalBtn.addEventListener("click", () => {
    bookingModal.classList.remove("show");
});

// 3. Close Pop-up if the user clicks anywhere outside the white form window box
window.addEventListener("click", (event) => {
    if (event.target === bookingModal) {
        bookingModal.classList.remove("show");
    }
});

// 4. Form Submission Handler
appointmentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const chosenService = serviceSelect.options[serviceSelect.selectedIndex].text;
    const clientName = document.getElementById("clientName").value;
    const clientPhone = document.getElementById("clientPhone").value;
    const chosenDate = document.getElementById("bookingDate").value;
    const chosenTime = document.getElementById("bookingTime").value;
    alert(`Thank you, ${clientName}! Your appointment request for a "${chosenService}" on ${chosenDate} at ${chosenTime} has been received. We will contact you at ${clientPhone} to confirm your slot!`);
    appointmentForm.reset();
    bookingModal.classList.remove("show");
});

// 5. Remove active underline from nav links after tap/click
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        setTimeout(() => {
            document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
        }, 800);
    });
});