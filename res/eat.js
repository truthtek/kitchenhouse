// Function to slide in elements from the left with a delay for the button
function slideInElements() {
    const h2Element = document.querySelector('.content h2');
    const buttonElement = document.querySelector('.content button');

    h2Element.style.opacity = '1';
    h2Element.style.transform = 'translateX(0)';

    // Add a delay of 500 milliseconds before animating the button
    setTimeout(function () {
        buttonElement.style.opacity = '1';
        buttonElement.style.transform = 'translateX(0)';
    }, 500); // Adjust the delay as needed (in milliseconds)
}

// Attach the slideInElements function to a button click event
const slideInButton = document.getElementById('slideInButton');
slideInButton.addEventListener('click', slideInElements);

// Function to slide in menu items from the left
// Function to slide in menu items from the left
function slideInMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 * index); // Add a delay for each item (adjust as needed)
    });
}

// Call the slideInMenuItems function when the page loads
window.addEventListener('load', slideInMenuItems);


// Call the slideInMenuItems function when the page loads


let count = 1;
let counting = false;
let countInterval; // Variable to store the interval

const startCounting = () => {
    if (!counting) {
        counting = true;
        countInterval = setInterval(() => {
            document.getElementById('count').textContent = count;
            if (count === 5) {
                clearInterval(countInterval); // Stop counting when count reaches 5
                counting = false;
            } else {
                count++;
            }
        }, 1000);
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
        }
    });
});

observer.observe(document.getElementById('about'));


observer.observe(document.getElementById('about'));

// JavaScript for slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}

showSlide(currentSlide);

setInterval(() => {
    showSlide(currentSlide + 1);
}, 8000); // Adjust the interval (in milliseconds) as needed

// JavaScript for the chat box

// Get the chat box and its elements
const chatBox = document.querySelector('.chat-box');
const chatHeader = document.querySelector('.chat-header');
const closeChat = document.querySelector('.close-chat');
const chatMessages = document.querySelector('.chat-messages');
const userMessageInput = document.getElementById('user-message');
const sendMessageButton = document.getElementById('send-message');

// Toggle the chat box visibility
chatHeader.addEventListener('click', () => {
    chatBox.classList.toggle('open');
});

closeChat.addEventListener('click', () => {
    chatBox.classList.remove('open');
});

// Function to add a user message to the chat
function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('user-message');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to add a restaurant's response to the chat
function addRestaurantResponse(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('restaurant-message');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for sending a message
sendMessageButton.addEventListener('click', () => {
    const userMessage = userMessageInput.value.trim();
    if (userMessage !== '') {
        addUserMessage(userMessage);

        // Simulate a response from the restaurant (you can replace this with actual logic)
        setTimeout(() => {
            addRestaurantResponse('Thank you for your message! Our team will get back to you shortly.');
        }, 1000);

        // Clear the input field
        userMessageInput.value = '';
    }
});

// Show the chat box (you can customize this behavior)
setTimeout(() => {
    chatBox.style.display = 'block';
}, 5000); // Delayed chat box display for 5 seconds (adjust as needed)

