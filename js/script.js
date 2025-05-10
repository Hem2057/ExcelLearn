// Quiz functionality
let currentQuiz = null;
let currentQuestion = 0;
let score = 0;

const quizButtons = document.querySelectorAll('.quiz-btn');

quizButtons.forEach(button => {
    button.addEventListener('click', () => {
        try {
            const questions = JSON.parse(button.getAttribute('data-questions'));
            const course = button.getAttribute('data-course');
            startQuiz(questions, course);
        } catch (error) {
            console.error('Error starting quiz:', error);
        }
    });
});

function startQuiz(questions, course) {
    currentQuiz = questions;
    currentQuestion = 0;
    score = 0;
    
    // Update quiz title based on course
    const titles = {
        fullstack: 'Full Stack Development Quiz',
        ai: 'AI & Machine Learning Quiz',
        datascience: 'Data Science Quiz'
    };
    document.getElementById('quiz-title').textContent = titles[course];
    
    showQuestion();
    const modal = document.getElementById('quiz-modal');
    modal.classList.add('active');
}

function showQuestion() {
    const question = currentQuiz[currentQuestion];
    const quizContent = document.getElementById('quiz-content');
    const progress = document.getElementById('quiz-progress');
    const nextBtn = document.getElementById('quiz-next-btn');
    
    // Update progress
    progress.textContent = `Question ${currentQuestion + 1} of ${currentQuiz.length}`;
    
    // Update next button text for last question
    nextBtn.textContent = currentQuestion === currentQuiz.length - 1 ? 'Finish Quiz' : 'Next Question';
    
    // Create question HTML
    let html = `
        <div class="quiz-question">
            <h4 class="quiz-question__title">${question.q}</h4>
            <div class="quiz-options">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <label class="quiz-option">
                <input type="radio" name="answer" value="${index}">
                <span>${option}</span>
            </label>
        `;
    });
    
    html += `</div></div>`;
    quizContent.innerHTML = html;
}

document.getElementById('quiz-next-btn').addEventListener('click', () => {
    // Get selected answer
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert('Please select an answer');
        return;
    }
    
    // Check if answer is correct
    if (parseInt(selected.value) === currentQuiz[currentQuestion].correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < currentQuiz.length) {
        showQuestion();
    } else {
        // Show results
        const percentage = Math.round((score / currentQuiz.length) * 100);
        const isPassing = percentage >= 70;
        
        document.getElementById('quiz-content').innerHTML = `
            <div class="quiz-results">
                <div class="quiz-results__score ${isPassing ? 'quiz-results__score--pass' : 'quiz-results__score--fail'}">
                    ${percentage}%
                </div>
                <p class="quiz-results__message">
                    You got ${score} out of ${currentQuiz.length} questions correct!
                </p>
                <div class="quiz-results__icon ${isPassing ? 'quiz-results__icon--pass' : 'quiz-results__icon--fail'}">
                    <i class="fas ${isPassing ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                </div>
                <p class="quiz-results__message">
                    ${isPassing ? 'Congratulations! You passed the quiz!' : 'Keep learning and try again!'}
                </p>
            </div>
        `;
        document.getElementById('quiz-next-btn').textContent = 'Close Quiz';
        document.getElementById('quiz-next-btn').addEventListener('click', closeQuizModal, { once: true });
    }
});

function closeQuizModal() {
    const modal = document.getElementById('quiz-modal');
    modal.classList.remove('active');
}

document.getElementById('close-quiz-modal').addEventListener('click', closeQuizModal);

// Close modal when clicking outside
document.getElementById('quiz-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('quiz-modal')) {
        closeQuizModal();
    }
});

// Tab functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        const container = button.closest('div').parentElement;
        
        // Remove active class from all buttons and contents
        container.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        container.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        container.querySelector(`#${tabId}`).classList.add('active');
    });
});

// Course filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter courses
        courseCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Video modal
const videoModal = document.getElementById('video-modal');
const videoFrame = videoModal.querySelector('iframe');
const closeVideoBtn = document.getElementById('close-modal');

document.querySelectorAll('[data-video]').forEach(button => {
    button.addEventListener('click', () => {
        const videoUrl = button.getAttribute('data-video');
        videoFrame.src = videoUrl;
        videoModal.classList.add('active');
    });
});

closeVideoBtn.addEventListener('click', () => {
    videoModal.classList.remove('active');
    videoFrame.src = '';
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        videoFrame.src = '';
    }
});
