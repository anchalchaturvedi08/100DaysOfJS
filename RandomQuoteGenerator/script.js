document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
        "The purpose of our lives is to be happy. - Dalai Lama",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "Get busy living or get busy dying. - Stephen King",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "Act as if what you do makes a difference. It does. - William James",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Never bend your head. Always hold it high. Look the world straight in the eye. - Helen Keller"
    ];

    const quoteDisplay = document.getElementById('quote');
    const quoteButton = document.getElementById('quoteButton');

    quoteButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    });
});
