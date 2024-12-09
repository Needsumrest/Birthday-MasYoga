// Function to handle quiz validation
function checkQuiz() {
    const inputDate = document.getElementById('birthday-date').value;
    const correctDate = "17072019";
    const feedback = document.getElementById('quiz-feedback');

    if (inputDate === correctDate) {
        feedback.textContent = "Selamat Kamu berhasil kalau lupa aku cubit! 🎉";
        feedback.style.color = "green";

        // Show the main content after quiz
        document.getElementById('quiz-section').classList.remove('show');
        document.getElementById('main-content').style.display = "block";
    } else {
        feedback.textContent = "Coba lagi! Pastikan formatnya benar!";
        feedback.style.color = "red";
    }
}

// Show quiz section on page load
window.onload = function() {
    document.getElementById('quiz-section').classList.add('show');
};

// Function to handle quiz validation
function checkQuiz() {
    const inputDate = document.getElementById('birthday-date').value;
    const correctDate = "17072019";
    const feedback = document.getElementById('quiz-feedback');

    if (inputDate === correctDate) {
        feedback.textContent = "Selamat! Kamu berhasil! 🎉";
        feedback.style.color = "green";

        // Show the main content after quiz
        document.getElementById('quiz-section').classList.remove('show');
        document.getElementById('main-content').style.display = "block";
    } else {
        feedback.textContent = "Coba lagi! Pastikan formatnya benar!";
        feedback.style.color = "red";
    }
}

// Countdown to December 10, 2024
function startCountdown() {
    const countdownDate = new Date("Dec 10, 2024 00:00:00").getTime();
    const timerElement = document.getElementById("timer");

    // Update the countdown every 1 second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "Selamat Ulang Tahun Mas Yoga! 🎉";
        } else {
            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerElement.innerHTML = days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik";
        }
    }, 1000);
}

// Show quiz section on page load
window.onload = function() {
    document.getElementById('quiz-section').classList.add('show');
    startCountdown(); // Start the countdown on page load
};
