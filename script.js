function makeSingleMessageHTML(usernameTxt, emailTxt, messageTxt) {

    // Create parent div
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("single-message");

    // Username
    let userPTag = document.createElement("p");
    userPTag.innerHTML = "<strong>Username:</strong> " + usernameTxt;

    // Email
    let emailPTag = document.createElement("p");
    emailPTag.innerHTML = "<strong>Email:</strong> " + emailTxt;

    // Message
    let messagePTag = document.createElement("p");
    messagePTag.innerHTML = "<strong>Message:</strong> " + messageTxt;

    // Add everything to the parent div
    parentDiv.appendChild(userPTag);
    parentDiv.appendChild(emailPTag);
    parentDiv.appendChild(messagePTag);

    // Return the completed message
    return parentDiv;
}
const sendBtn = document.getElementById("send-btn");
const allMessagesContainer = document.getElementById("all-messages");





sendBtn.onclick = function () {
    let usernameVal = document.getElementById("username").value;
    let emailVal = document.getElementById("email").value;
    let messageVal = document.getElementById("message").value;

    if (usernameVal !== "" && messageVal !== "") {
        let messageElement = makeSingleMessageHTML(usernameVal, emailVal, messageVal);
        allMessagesContainer.appendChild(messageElement);
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
};