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

// 5. Highlight nav link based on which section is currently visible
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink(id) {
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
        }
    });
}

// Intersection Observer: fires whenever a section enters/leaves the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
        }
    });
}, {
    threshold: 0.3   // section must be 30% visible to trigger
});

sections.forEach(section => observer.observe(section));

// Also update instantly on click before scroll settles
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        const targetId = this.getAttribute("href").replace("#", "");
        setActiveLink(targetId);
    });
});