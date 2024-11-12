function messageCardTemplate(author, message) {
    return `
        <div class="message">
            <div class="message-content">${message}</div>
            <div class="message-author">${author}</div>
        </div>
    `;
}

function makeMessageCards() {
    let messageContainer = document.querySelector('.messages');
    for (let author in data) {
        let messageData = data[author];
        let messageCard = messageCardTemplate(
            messageData.author,
            messageData.message
        );

        messageContainer.innerHTML += messageCard;
    }
}

makeMessageCards();