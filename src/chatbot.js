document.getElementById('chatbotButton').addEventListener('click', function() {
    // Assuming there is a function to toggle chatbot UI
    toggleChatbot();
});

function toggleChatbot() {
    // Toggle the visibility of the chatbot dialog (simplified example)
    const chat = document.getElementById('chatbotDialog');
    chat.style.display = chat.style.display === 'block' ? 'none' : 'block';
}