
📜 Random Quote Generator
=========================

A clean and dynamic Random Quote Generator web app that fetches inspirational quotes from a live API. Built using HTML, CSS, and JavaScript, this project showcases how to work with APIs, user interaction, text-to-speech, clipboard copying, and social sharing.

🚀 Live Preview
---------------
Click here to view it live: https://billalwp.github.io/dynamicquotegenerator/

🔧 Features
-----------
- ✅ Fetches real quotes from a live API
- ✅ Built-in Text-to-Speech
- ✅ Copy quote to clipboard with feedback
- ✅ Tweet the current quote
- ✅ Responsive & minimalist UI
- ✅ Error handling included

📡 API Used
-----------
API Ninjas - Quotes API (https://api-ninjas.com/api/quotes)

Endpoint:
GET https://api.api-ninjas.com/v1/quotes

Headers:
X-Api-Key: YOUR_API_KEY

Example response:
[
  {
    "quote": "The will of man is his happiness.",
    "author": "Friedrich Schiller",
    "category": "happiness"
  }
]

You can get your API key for free by signing up at https://api-ninjas.com/register

🧪 How It Works
---------------
1. When the page loads or the "New Quote" button is clicked, a GET request is sent to the API.
2. The API returns a JSON array containing a quote, author, and category.
3. The quote and author are dynamically displayed in the HTML.
4. Optional actions:
   - 🔊 Speak the quote with SpeechSynthesis
   - 📋 Copy it to your clipboard
   - 🐦 Tweet it instantly

🖥️ Technologies Used
---------------------
- HTML5
- CSS3
- JavaScript (Vanilla)
- FontAwesome
- API Ninjas

📁 Folder Structure
-------------------
/random-quote-generator/
├── index.html
├── style.css
├── app.js
└── README.txt

📌 Setup Instructions
---------------------
1. Clone the repository:
   git clone https://github.com/billalwp/dynamicquotegenerator.git

2. Get your free API key from API Ninjas: https://api-ninjas.com/api/quotes

3. Replace YOUR_API_KEY in app.js with your actual key:
   const apiKey = "YOUR_API_KEY";

4. Open index.html in your browser or host it online.

💡 Future Improvements
----------------------
- Add category filter (e.g., "happiness", "success", "love")
- Dark mode toggle
- Save favorite quotes to local storage

📄 License
----------
This project is licensed under the MIT License.

