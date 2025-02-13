const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const heartsContainer = document.getElementById("hearts-container");
const shareButton = document.getElementById("share-whatsapp");

// Save response to localStorage
function saveResponse(answer) {
    localStorage.setItem('response', answer);
    console.log(`Response saved: ${answer}`);
}

// Moves the 'No' button when hovered
noButton.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100); // X position within window bounds
    const y = Math.random() * (window.innerHeight - 50); // Y position within window bounds
    noButton.style.position = "absolute"; // Set position to absolute to move
    noButton.style.left = `${x}px`; // Random left position
    noButton.style.top = `${y}px`; // Random top position
});

// When 'Yes' is clicked, create hearts animation and save response
yesButton.addEventListener("click", () => {
    for (let i = 0; i < 25; i++) {
        createHeart();
    }
    saveResponse('Yes'); // Save the response as "Yes"
    showShareButton(); // Show the share button
});

// When 'No' is clicked, save response and show share button
noButton.addEventListener("click", () => {
    saveResponse('No'); // Save the response as "No"
    showShareButton(); // Show the share button
});

// Function to create heart animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart"); // Add heart style
    heart.style.left = `${Math.random() * 100}vw`; // Random position on screen
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random animation duration
    heartsContainer.appendChild(heart); // Append heart to the container
    setTimeout(() => {
        heart.remove(); // Remove heart after 5 seconds
    }, 5000);
}

// Show the Share on WhatsApp button
function showShareButton() {
    shareButton.style.display = 'block'; // Display the button
}

// Share the response on WhatsApp
shareButton.addEventListener("click", () => {
    const response = localStorage.getItem('response');
    const message = `I clicked "${response}" on the "Will You Be My Valentine?" website!`;

    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp to share the message
    window.open(whatsappLink, '_blank');
});
