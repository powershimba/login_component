document.getElementById('chatbotButton').addEventListener('click', function() {
    toggleChatbot();
});

function toggleChatbot() {
    const chat = document.getElementById('chatbotDialog');
    chat.style.display = chat.style.display === 'block' ? 'none' : 'block';
}