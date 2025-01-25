const greeting = document.createElement('p');
const currentHour = new Date().getHours();

if (currentHour < 12) {
    greeting.textContent = 'Good Morning! Welcome to Pantheon.';
} else if (currentHour < 18) {
    greeting.textContent = 'Good Afternoon! Welcome to Pantheon.';
} else {
    greeting.textContent = 'Good Evening! Welcome to Pantheon.';
}

document.querySelector('.top header').appendChild(greeting);
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    });
});
document.querySelector('.lastbtn').addEventListener('click', () => {
    const email = document.querySelector('.kat').value;
    if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        document.querySelector('.kat').value = ''; // Clear the input
    } else {
        alert('Please enter a valid email address.');
    }
});


