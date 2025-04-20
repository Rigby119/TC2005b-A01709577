const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const strengthBar = document.getElementById("strengthLevel");
const feedbackText = document.getElementById("feedbackText");
const matchStatus = document.getElementById("matchStatus");
const title = document.querySelector("h2");
let currentStrengthColor = "grey";

function checkStrength(password) {
    let score = 0;
    const regexes = [     // Each regex adds a level of security {0-5}
        /.{8,}/,            // Length
        /[a-z]/,            // Lowercase
        /[A-Z]/,            // Uppercase
        /[0-9]/,            // Number
        /[^A-Za-z0-9]/      // Symbol
    ];

    regexes.forEach(regex => {
        if (regex.test(password)) score++; //Sums to the level of strength
    });

    return score;
}

function updateStrengthDisplay(score) {
    const percent = (score / 5) * 100;
    strengthBar.style.width = `${percent}%`;
    strengthBar.className = 'strength-level';

    if (score <= 2 && score != 0) {
        strengthBar.classList.add('strength-weak');
        feedbackText.textContent = 'Weak (use uppercase, numbers and symbols)';
        currentStrengthColor = 'red';
    } else if (score === 3 || score === 4) {
        strengthBar.classList.add('strength-medium');
        feedbackText.textContent = 'Medium (you can improve it)';
        currentStrengthColor = 'orange';
    } else if (score === 5) {
        strengthBar.classList.add('strength-strong');
        feedbackText.textContent = 'Strong';
        currentStrengthColor = 'green';
    } else {
        feedbackText.textContent = '';
        currentStrengthColor = 'grey';
    }
}

function checkMatch() {
    const password = passwordInput.value;
    const confirm = confirmInput.value;
    if (!confirm) {
        matchStatus.textContent = '';
        return;
    }
    if (password === confirm) {
        matchStatus.textContent = 'The passwords match';
        matchStatus.className = 'match good';
    } else {
        matchStatus.textContent = "The passwords don't match";
        matchStatus.className = 'match bad';
    }
}

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const score = checkStrength(password);
    updateStrengthDisplay(score);
    checkMatch();
});

confirmInput.addEventListener('input', checkMatch);

title.addEventListener("mouseover", () => {
    title.style.color = currentStrengthColor;
    title.style.transition = "0.3s ease";
});

title.addEventListener("mouseout", () => {
    title.style.color = "black";
    title.style.transition = "0.3s ease";
});