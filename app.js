const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".btn-quote");
const messageBox = document.querySelector(".message");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

// Your API key
const apiKey = "BT15ElZWxO7zuD7iOmXsPQ==AiWLeom5vfZ8kmzk";

// Fetch a new quote
async function getQuote() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": apiKey
      }
    });
    const data = await response.json();
    const quote = data[0].quote;
    const author = data[0].author;

    quoteText.textContent = quote;
    authorText.textContent = `– ${author}`;

    // Update Twitter share
    twitterBtn.onclick = () => {
      const tweetText = `"${quote}" – ${author}`;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
      window.open(twitterUrl, "_blank");
    };
  } catch (error) {
    quoteText.textContent = "Failed to fetch quote. Try again.";
    authorText.textContent = "";
    console.error("Fetch error:", error);
  }
}

// Text-to-Speech
speechBtn.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(
    `${quoteText.textContent} by ${authorText.textContent}`
  );
  speechSynthesis.speak(utterance);
});

// Copy to clipboard
copyBtn.addEventListener("click", () => {
  const textToCopy = `"${quoteText.textContent}" ${authorText.textContent}`;
  navigator.clipboard.writeText(textToCopy);
  messageBox.style.opacity = 1;
  setTimeout(() => (messageBox.style.opacity = 0), 1500);
});

// Load initial quote
window.addEventListener("DOMContentLoaded", getQuote);
newQuoteBtn.addEventListener("click", getQuote);
