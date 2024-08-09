document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        {
            question: "Which protocol is used for reliable communication over the internet?",
            options: ["a) TCP", "b) UDP", "c) SMS", "d) Email"],
            correct: "a"
        },
        {
            question: "What is the main difference between HTTP and HTTPS?",
            options: ["a) HTTPS is slower than HTTP", "b) HTTPS is more secure than HTTP", "c) HTTPS is used only for email", "d) There is no difference"],
            correct: "b"
        },
        {
            question: "Which of the following is NOT a data type in Python?",
            options: ["a) Number", "b) Text", "c) Car", "d) List"],
            correct: "c"
        },
        {
            question: "What is the default port number for websites using HTTP?",
            options: ["a) 22", "b) 80", "c) 443", "d) 8080"],
            correct: "b"
        },
        {
            question: "In Python, how can you change a string to all lowercase letters?",
            options: ["a) lowercase()", "b) toLower()", "c) lower()", "d) str.lowercase()"],
            correct: "c"
        },
        {
            question: "Which protocol is used for fast communication but might lose some data?",
            options: ["a) TCP", "b) UDP", "c) HTTPS", "d) DNS"],
            correct: "b"
        },
        {
            question: "How do you write a simple if-else statement in Python to check if a number is greater than 10?",
            options: ["a) if number = 10 print(\"Greater than 10\")", "b) if number > 10: print(\"Greater than 10\")", "c) if (number > 10) {print(\"Greater than 10\")}", "d) if number > 10 then print(\"Greater than 10\")"],
            correct: "b"
        },
        {
            question: "Which port is usually used by secure websites with HTTPS?",
            options: ["a) 22", "b) 80", "c) 443", "d) 110"],
            correct: "c"
        },
        {
            question: "What will str[1:4] return if str = \"Hello\"?",
            options: ["a) Hel", "b) ell", "c) lo", "d) He"],
            correct: "b"
        },
        {
            question: "Which of these Python data types can you change after creating it?",
            options: ["a) Number", "b) Text", "c) List", "d) Tuple"],
            correct: "c"
        },
        {
            question: "How do you find out how many items are in a list in Python?",
            options: ["a) length()", "b) count()", "c) len()", "d) size()"],
            correct: "c"
        },
        {
            question: "Which port is commonly used by websites that need to be secure (HTTPS)?",
            options: ["a) 80", "b) 22", "c) 443", "d) 110"],
            correct: "c"
        },
        {
            question: "How do you check what type a variable is in Python?",
            options: ["a) typeof()", "b) type()", "c) vartype()", "d) variabletype()"],
            correct: "b"
        },
        {
            question: "Which protocol is good for watching videos online?",
            options: ["a) TCP", "b) UDP", "c) Email", "d) FTP"],
            correct: "b"
        },
        {
            question: "What is the correct way to get part of a list in Python?",
            options: ["a) list[1-3]", "b) list[1:3]", "c) list(1:3)", "d) list[1;3]"],
            correct: "b"
        },
        {
            question: "Which of the following is a function you can use with a string in Python?",
            options: ["a) add()", "b) split()", "c) insert()", "d) pop()"],
            correct: "b"
        },
        {
            question: "What is a well-known port number?",
            options: ["a) 65535", "b) 1024", "c) 80", "d) 7"],
            correct: "c"
        },
        {
            question: "What does elif do in Python?",
            options: ["a) Runs code if the if condition is True", "b) Runs code if the if condition is False and the elif condition is True", "c) Stops the program", "d) Repeats a block of code"],
            correct: "b"
        },
        {
            question: "What is the result of print(2 + 3) in Python?",
            options: ["a) 5", "b) 6", "c) 4", "d) 23"],
            correct: "a"
        },
        {
            question: "Which port is used by email services (SMTP)?",
            options: ["a) 110", "b) 25", "c) 21", "d) 53"],
            correct: "b"
        },
        // Descriptive Questions
        {
            question: "Explain in simple terms what TCP and UDP are and when you might use each one.",
            options: [],
            correct: ""
        },
        {
            question: "What is a port in networking, and why are certain numbers used for specific services like HTTP and HTTPS?",
            options: [],
            correct: ""
        },
        {
            question: "Write a simple Python program to add two numbers and display the result.",
            options: [],
            correct: ""
        },
        {
            question: "What is slicing in Python? Show how you would slice the first three letters from the word \"Python\".",
            options: [],
            correct: ""
        },
        {
            question: "Describe what a list is in Python and how it's different from a tuple.",
            options: [],
            correct: ""
        },
        {
            question: "How do you use if-else statements in Python? Write a small example to check if a number is positive, negative, or zero.",
            options: [],
            correct: ""
        },
        {
            question: "What are some common string functions in Python, like split() and replace()? Provide examples.",
            options: [],
            correct: ""
        },
        {
            question: "Why is HTTPS important for secure websites? How does it help protect information?",
            options: [],
            correct: ""
        },
        {
            question: "Write a Python program that tells you whether a number is even or odd.",
            options: [],
            correct: ""
        },
        {
            question: "Describe the different data types in Python, such as numbers, text (strings), and lists. Give examples of how each is used.",
            options: [],
            correct: ""
        }
    ];

    let currentQuestionIndex = 0;
    let timer;
    const questionContainer = document.getElementById('questionContainer');
    const timerDisplay = document.getElementById('timer');
    const nextButton = document.getElementById('nextButton');

    function showQuestion(index) {
        if (index >= questions.length) {
            showResults();
            return;
        }
        
        const q = questions[index];
        if (q.options.length > 0) {
            questionContainer.innerHTML = `
                <div class="question">
                    <p>${index + 1}. ${q.question}</p>
                    ${q.options.map((option, i) => `<label><input type="radio" name="q${index + 1}" value="${q.options[i][0]}"> ${option}</label>`).join('<br>')}
                </div>
            `;
        } else {
            questionContainer.innerHTML = `
                <div class="question">
                    <p>${index + 1}. ${q.question}</p>
                    <textarea id="answer${index + 1}" rows="4" cols="50"></textarea>
                </div>
            `;
        }

        startTimer();
    }

    function startTimer() {
        let timeLeft = 15;
        timerDisplay.textContent = timeLeft;

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                nextButton.click(); // Automatically move to the next question
            }
        }, 1000);
    }

    function showResults() {
        let score = 0;
        let totalQuestions = questions.length;
        const correctAnswers = questions.map(q => q.correct);

        for (let i = 0; i < totalQuestions; i++) {
            if (questions[i].options.length > 0) {
                const selectedOption = document.querySelector(`input[name="q${i + 1}"]:checked`);
                if (selectedOption && selectedOption.value === correctAnswers[i]) {
                    score++;
                }
            } else {
                const answer = document.getElementById(`answer${i + 1}`).value.trim();
                // Handle descriptive answers (e.g., checking for non-empty responses)
                if (answer.length > 0) {
