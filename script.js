
        // let score = 0; // Initialize score
        // let attempts = 0; // Initialize attempt count
        // const maxAttempts = 10; // Maximum attempts allowed

        // // Function to generate random integer between min and max
        // function getRandomInt(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }

        // // Function to generate a new quiz
        // function generateQuiz() {
        //     if (attempts >= maxAttempts) {
        //         document.getElementById('question').innerText = "Time's up!";
        //         document.getElementById('options').innerHTML = '';
        //         document.getElementById('message').innerText = '';
        //         document.getElementById('try-again').style.display = 'block'; // Show Try Again button
        //         return;
        //     }

        //     const a = getRandomInt(1, 20); // First random number
        //     const b = getRandomInt(1, 20); // Second random number
        //     const operations = ['+', '-', '*', '/']; // Array of operations
        //     const selectedOperation = operations[getRandomInt(0, 3)]; // Randomly select an operation

        //     // Calculate correct answer based on the selected operation
        //     let correctAnswer;
        //     switch (selectedOperation) {
        //         case '+':
        //             correctAnswer = a + b;
        //             break;
        //         case '-':
        //             correctAnswer = a - b;
        //             break;
        //         case '*':
        //             correctAnswer = a * b;
        //             break;
        //         case '/':
        //             correctAnswer = parseFloat((a / b).toFixed(2)); // Round off to 2 decimal places
        //             break;
        //     }

        //     const options = new Set(); // Set to store unique options
        //     options.add(correctAnswer); // Add the correct answer

        //     // Add 3 wrong options
        //     while (options.size < 4) {
        //         let wrongAnswer;
        //         switch (selectedOperation) {
        //             case '+':
        //             case '-':
        //             case '*':
        //                 wrongAnswer = getRandomInt(correctAnswer - 10, correctAnswer + 10);
        //                 break;
        //             case '/':
        //                 wrongAnswer = parseFloat((getRandomInt(correctAnswer - 10, correctAnswer + 10) / b).toFixed(2));
        //                 break;
        //         }
        //         options.add(wrongAnswer);
        //     }

        //     // Convert Set to Array and shuffle options
        //     const optionArray = Array.from(options);
        //     optionArray.sort(() => Math.random() - 0.5);

        //     // Display the question and options
        //     document.getElementById('question').innerText = `What is ${a} ${selectedOperation} ${b} = ?`;
        //     document.getElementById('options').innerHTML = '';
        //     document.getElementById('message').innerText = '';

        //     // Display options
        //     optionArray.forEach((option) => {
        //         const btn = document.createElement('button');
        //         btn.innerText = option;
        //         btn.className = 'option';
        //         btn.onclick = () => checkAnswer(option, correctAnswer);
        //         document.getElementById('options').appendChild(btn);
        //     });

        //     document.getElementById('try-again').style.display = 'none'; // Hide Try Again button
        // }

        // // Function to check the answer
        // function checkAnswer(selected, correct) {
        //     attempts++;
        //     const messageElement = document.getElementById('message');
        //     if (selected === correct) {
        //         score += 10;
        //         messageElement.innerText = 'You win';
        //         messageElement.className = 'message win'; // Set win styles
        //     } else {
        //         score -= 5;
        //         messageElement.innerText = 'You lose';
        //         messageElement.className = 'message lose'; // Set lose styles
        //     }
        //     document.getElementById('score').innerText = score;

        //     // Reset message background after 2 seconds
        //     setTimeout(() => {
        //         messageElement.className = 'message';
        //         messageElement.innerText = '';
        //     }, 2000);

        //     setTimeout(generateQuiz, 2000); // Generate new quiz after 2 seconds
        // }

        // // Function to reset the game
        // function resetGame() {
        //     score = 0;
        //     attempts = 0;
        //     document.getElementById('score').innerText = score;
        //     generateQuiz();
        // }

        // // Add click event listener to Try Again button
        // document.getElementById('try-again').onclick = resetGame;

        // // Generate the first quiz on page load
        // generateQuiz();
    

        let score = 0; // Initialize score
        let attempts = 0; // Initialize attempt count
        const maxAttempts = 10; // Maximum attempts allowed

        // Function to generate random integer between min and max
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Function to generate a new quiz
        function generateQuiz() {
            if (attempts >= maxAttempts) {
                document.getElementById('question').innerText = "Time's up!";
                document.getElementById('options').innerHTML = '';
                document.getElementById('message').innerText = '';
                document.getElementById('try-again').style.display = 'block'; // Show Try Again button
                document.getElementById('timeup-sound').play(); // Play time up sound
                return;
            }

            const a = getRandomInt(1, 20); // First random number
            const b = getRandomInt(1, 20); // Second random number
            const operations = ['+', '-', '*', '/']; // Array of operations
            const selectedOperation = operations[getRandomInt(0, 3)]; // Randomly select an operation

            // Calculate correct answer based on the selected operation
            let correctAnswer;
            switch (selectedOperation) {
                case '+':
                    correctAnswer = a + b;
                    break;
                case '-':
                    correctAnswer = a - b;
                    break;
                case '*':
                    correctAnswer = a * b;
                    break;
                case '/':
                    correctAnswer = parseFloat((a / b).toFixed(2)); // Round off to 2 decimal places
                    break;
            }

            const options = new Set(); // Set to store unique options
            options.add(correctAnswer); // Add the correct answer

            // Add 3 wrong options
            while (options.size < 4) {
                let wrongAnswer;
                switch (selectedOperation) {
                    case '+':
                    case '-':
                    case '*':
                        wrongAnswer = getRandomInt(correctAnswer - 10, correctAnswer + 10);
                        break;
                    case '/':
                        wrongAnswer = parseFloat((getRandomInt(correctAnswer - 10, correctAnswer + 10) / b).toFixed(2));
                        break;
                }
                options.add(wrongAnswer);
            }

            // Convert Set to Array and shuffle options
            const optionArray = Array.from(options);
            optionArray.sort(() => Math.random() - 0.5);

            // Display the question and options
            document.getElementById('question').innerText = `What is ${a} ${selectedOperation} ${b} = ?`;
            document.getElementById('options').innerHTML = '';
            document.getElementById('message').innerText = '';

            // Display options
            optionArray.forEach((option) => {
                const btn = document.createElement('button');
                btn.innerText = option;
                btn.className = 'option';
                btn.onclick = () => checkAnswer(option, correctAnswer);
                document.getElementById('options').appendChild(btn);
            });

            document.getElementById('try-again').style.display = 'none'; // Hide Try Again button
        }

        // Function to check the answer
        function checkAnswer(selected, correct) {
            attempts++;
            const messageElement = document.getElementById('message');
            if (selected === correct) {
                score += 10;
                messageElement.innerText = 'You win';
                messageElement.className = 'message win'; // Set win styles
                document.getElementById('win-sound').play(); // Play win sound
            } else {
                score -= 5;
                messageElement.innerText = 'You lose';
                messageElement.className = 'message lose'; // Set lose styles
                document.getElementById('lose-sound').play(); // Play lose sound
            }
            document.getElementById('score').innerText = score;

            // Reset message background after 2 seconds
            setTimeout(() => {
                messageElement.className = 'message';
                messageElement.innerText = '';
            }, 1000);

            setTimeout(generateQuiz, 1000); // Generate new quiz after 2 seconds
        }

        // Function to reset the game
        function resetGame() {
            score = 0;
            attempts = 0;
            document.getElementById('score').innerText = score;
            generateQuiz();
        }

        // Add click event listener to Try Again button
        document.getElementById('try-again').onclick = resetGame;

        // Generate the first quiz on page load
        generateQuiz();