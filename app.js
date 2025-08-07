
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('text-blue-600', 'border-blue-600', 'active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.add('hidden'));

        this.classList.add('text-blue-600', 'border-blue-600', 'active');
        const tabId = this.dataset.tab;
        document.getElementById(tabId).classList.remove('hidden');
    });
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        const currentItem = this.parentElement;
        const content = this.nextElementSibling;
        const icon = this.querySelector('.accordion-icon');

        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== currentItem) {
                item.querySelector('.accordion-content').classList.add('hidden');
                item.querySelector('.accordion-icon').classList.remove('rotate-180');
            }
        });

        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});

function updateClock() {
    const now = new Date();

    // --- Time Formatting (12-Hour with AM/PM) ---
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const hoursStr = hours.toString().padStart(2, '0');

    const timeString = `${hoursStr}:${minutes}:${seconds} ${ampm}`;

    // --- Update the DOM ---
    // Find the element by its ID and update its content
    document.getElementById('time').textContent = timeString;
}

// --- Initial Call & Interval ---
// Call the function immediately to show the time without a 1-second delay
updateClock();

// Set an interval to call the updateClock function every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);