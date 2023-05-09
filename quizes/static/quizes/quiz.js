const url = window.location.href; // get the current URL of the page
console.log(url); // output the URL to the console
const quizBox = document.getElementById ( 'quiz-box' )



$.ajax({
    type: 'GET',
    url: `${url}data`,
    success: function(response) {
        // console.log(response)
        const data = response.data;
        data.forEach(el => {
            for (const [question, answers] of Object.entries(el)) {
                quizBox.innerHTML +=
                    `<hr>
                    <div class="mb-2">
                        <b>${question}</b>
                    </div>`;
                answers.forEach(answer => {
                    quizBox.innerHTML +=
                        `<div>
                            <input type="radio" class="ans" id="${question}-${answer}" name ="${question} value="${ answer }">
                            <label for="${question}">${answer}</label>
                        </div>`;
                });
            }
        });
    },
    error: function(error) {
        console.log(error)
    }
});
