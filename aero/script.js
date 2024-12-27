document.getElementById('sendBtn').addEventListener('click', function() {
    var userMessage = document.getElementById('userMessage').value.trim();
    if (userMessage) {
      addMessage(userMessage, 'user');
      generateResponse(userMessage);
      document.getElementById('userMessage').value = ''; // Clear input field
    }
  });
  
  document.getElementById('userMessage').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('sendBtn').click();
    }
  });
  
  function addMessage(message, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    
    const messageContent = sender === 'user' 
      ? `<p><strong>You:</strong> ${message}</p>`
      : `<p><strong>Jarvis:</strong> ${message}</p>`;
    
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.innerHTML = messageContent;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }
  
  function generateResponse(userMessage) {
    let botMessage = 'I am sorry, I didn\'t understand that. Could you please rephrase?';
  
    // Predefined responses with Jarvis's information and subject matter
    const simpleResponses = {
      'hello': 'Hi there! I am Jarvis, your AI assistant. How can I assist you today?',
      'hi': 'Hello! I am Jarvis, here to assist you. What would you like to know?',
      'what is your name': 'My name is Jarvis. I am an AI assistant here to help you with all your questions!',
      'who are you': 'I am Jarvis, an AI assistant designed to assist with various topics, including computer science, programming, and cybersecurity.',
      
      // About the chatbot
      'what is a chat assistant': 'A chat assistant is a virtual assistant powered by artificial intelligence (AI) that can interact with users through text, offering help, answering questions, and automating tasks.',
      
      // Computer Science details
      'what is computer science': 'Computer Science is the study of computers and computational systems. It involves the theory, development, and application of software and systems. Topics include algorithms, programming, data structures, computer networks, databases, and artificial intelligence.',
      
      // Cybersecurity details
      'what is cybersecurity': 'Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. These attacks are typically aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes.',
      
      // C Programming lesson
      'teach me c programming': 'Sure! C programming is a high-level programming language. Let’s start with the basics:\n\n1. Variables: Store data (e.g., int, float).\n2. Functions: Blocks of code to perform tasks (e.g., main()).\n3. Loops: Repeat tasks (e.g., for, while).\n4. Conditionals: Make decisions (e.g., if, else).\n\nWould you like a code example?',
      'c programming basics': 'In C programming, we use variables, loops, functions, and conditionals. For example:\n\n```c\n#include <stdio.h>\nint main() {\n    printf("Hello, World!");\n    return 0;\n}```\nThis is a simple C program that prints "Hello, World!" to the screen.',
      
      // HTML and Website definitions
      'what is html': 'HTML (HyperText Markup Language) is the standard language for creating web pages. It structures the content on the web using elements like headings, paragraphs, links, images, and more.',
      'what is a website': 'A website is a collection of related web pages, multimedia content, and resources that are accessed through the internet. Websites are hosted on web servers and are made using HTML, CSS, JavaScript, and other technologies.'
    };
  
    // Check if the user's message matches any of the predefined responses
    userMessage = userMessage.toLowerCase(); // Normalize input to lowercase
    if (simpleResponses[userMessage]) {
      botMessage = simpleResponses[userMessage];
    } else {
      // If no match, simulate an AI response generation
      botMessage = 'I\'m thinking... Let me find an answer for you!';
      
      setTimeout(function() {
        botMessage = 'This is a simulated dynamic response from me, Jarvis, to your question.';
        addMessage(botMessage, 'bot');
      }, 2000); // Simulate delay for AI response
      return; // Early return to avoid immediately adding a response
    }
    
    setTimeout(function() {
      addMessage(botMessage, 'bot');
    }, 1000); // Simulate a small delay for the bot's response
  }
  