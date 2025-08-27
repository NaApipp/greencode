window.ChatWidgetConfig = {
    webhook: {
        // URL AI N8N
        url: 'http://localhost:5678/webhook/1a185d29-8cce-444a-9f0d-2d3c46f9c980/chat', 
        route: 'general'
    },
    style: {
        primaryColor: '#854fff',
        secondaryColor: '#6b3fd4',
        position: 'right',
        backgroundColor: '#ffffff',
        fontColor: '#333333'
    }
};

// Function to generate or retrieve a unique chat ID
function getChatId() {
    let chatId = sessionStorage.getItem("chatId");
    if (!chatId) {
        chatId = "chat_" + Math.random().toString(36).substr(2, 9); // Unique ID
        sessionStorage.setItem("chatId", chatId);
    }
    return chatId;
}

// Show chat widget and hide bubble
document.getElementById("chat-widget-button").addEventListener("click", function() {
    document.getElementById("chat-widget-container").style.display = "flex";
    document.getElementById("chat-widget-button").style.display = "none";
});

// Close chat widget and show bubble
function closeChatWidget() {
    document.getElementById("chat-widget-container").style.display = "none";
    document.getElementById("chat-widget-button").style.display = "flex";
}

// Send message to n8n webhook
document.getElementById("chat-widget-send").addEventListener("click", function() {
    let message = document.getElementById("chat-widget-input").value;
    if (message.trim() === "") return;

    let chatBody = document.getElementById("chat-widget-body"); // ✅ perbaikan id
    let newMessage = document.createElement("p");
    newMessage.textContent = message;
    newMessage.style.color = "#000";
    newMessage.style.background = "#f1f1f1";
    newMessage.style.padding = "5px 10px";
    newMessage.style.borderRadius = "10px";
    newMessage.style.margin = "5px";
    newMessage.style.marginTop = "20px";
    newMessage.style.marginBottom = "20px";
    newMessage.style.fontWeight = "bold";
    newMessage.style.textAlign = "right"; // pesan user di kanan
    chatBody.appendChild(newMessage);

    let chatId = getChatId(); // Retrieve the session chat ID

    fetch(window.ChatWidgetConfig.webhook.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chatId: chatId,  // Attach chat ID for memory tracking
            message: message,
            route: window.ChatWidgetConfig.webhook.route
        })
    })
    .then(response => response.json())
    .then(data => {
        let botMessage = document.createElement("p");
        botMessage.innerHTML = data.output || "Sorry, I couldn't understand that.";
        botMessage.style.color = "#fff";
        botMessage.style.background = "#08CB00";
        botMessage.style.padding = "5px 10px";
        botMessage.style.borderRadius = "10px";
        botMessage.style.margin = "5px";
        botMessage.style.textAlign = "left"; // bot di kiri
        chatBody.appendChild(botMessage);

        chatBody.scrollTop = chatBody.scrollHeight; // auto scroll ke bawah
    })
    .catch(error => console.error("Error:", error));

    document.getElementById("chat-widget-input").value = "";
});

// ✅ Enter untuk kirim pesan
document.getElementById("chat-widget-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("chat-widget-send").click();
    }
});
