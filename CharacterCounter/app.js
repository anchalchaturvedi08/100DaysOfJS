const textArea = document.getElementById('textArea');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

// Function to count words
function countWords(str) {
    // Split the text by spaces, filter out empty strings, and count
    const wordsArray = str.trim().split(/\s+/);
    return wordsArray.filter(word => word.length > 0).length;
}

textArea.addEventListener('input', function() {
    const text = textArea.value;
    
    // Update character count
    charCount.textContent = text.length;

    // Update word count
    wordCount.textContent = countWords(text);
});
