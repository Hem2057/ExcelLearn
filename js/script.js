// Quiz functionality
let currentQuiz = null;
let currentQuestion = 0;
let score = 0;

console.log('Script loaded');
const quizButtons = document.querySelectorAll('.quiz-btn');
console.log('Quiz buttons found:', quizButtons.length);

quizButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Quiz button clicked');
        try {
            const questions = JSON.parse(button.getAttribute('data-questions'));
            const course = button.getAttribute('data-course');
            console.log('Quiz data:', { course, questions });
            startQuiz(questions, course);
        } catch (error) {
            console.error('Error starting quiz:', error);
        }
    });
});

function startQuiz(questions, course) {
    console.log('Starting quiz for course:', course);
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
    console.log('Quiz modal element:', modal);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
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
        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-4">${question.q}</h4>
            <div class="space-y-3">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <label class="flex items-center p-4 rounded-xl border border-gray-200 hover:border-primary cursor-pointer transition-colors">
                <input type="radio" name="answer" value="${index}" class="mr-3">
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
        document.getElementById('quiz-content').innerHTML = `
            <div class="text-center">
                <div class="text-6xl font-bold mb-4 ${percentage >= 70 ? 'text-green-500' : 'text-red-500'}">${percentage}%</div>
                <p class="text-xl mb-6">You got ${score} out of ${currentQuiz.length} questions correct!</p>
                ${percentage >= 70 ? 
                    `<div class="text-green-500 mb-6"><i class="fas fa-check-circle text-4xl"></i><p class="mt-2">Congratulations! You passed the quiz!</p></div>` :
                    `<div class="text-red-500 mb-6"><i class="fas fa-times-circle text-4xl"></i><p class="mt-2">Keep learning and try again!</p></div>`
                }
            </div>
        `;
        document.getElementById('quiz-next-btn').textContent = 'Close Quiz';
        document.getElementById('quiz-next-btn').addEventListener('click', closeQuizModal, { once: true });
    }
});

function closeQuizModal() {
    const modal = document.getElementById('quiz-modal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
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
        container.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('bg-primary/10', 'text-primary'));
        container.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('bg-primary/10', 'text-primary');
        container.querySelector(`#${tabId}`).classList.remove('hidden');
    });
});

// Course filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        
        // Update active button
        filterBtns.forEach(b => {
            b.classList.remove('bg-primary', 'text-white');
            b.classList.add('bg-white', 'text-dark');
        });
        btn.classList.remove('bg-white', 'text-dark');
        btn.classList.add('bg-primary', 'text-white');
        
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
        videoModal.classList.remove('hidden');
        videoModal.classList.add('flex');
    });
});

closeVideoBtn.addEventListener('click', () => {
    videoModal.classList.remove('flex');
    videoModal.classList.add('hidden');
    videoFrame.src = '';
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('flex');
        videoModal.classList.add('hidden');
        videoFrame.src = '';
    }
});
