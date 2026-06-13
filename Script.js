const quotes = {
  happy:{
    text:"Keep smiling — your joy is a light to others!",
    color:"#FFF9C4"
  },
  sad:{
    text:"It's okay to feel sad. Let it out, then let it go. 🌧️➡️☀️",
    color:"#E1F5FE"
  },
  angry:{
    text:"Pause and respond with clarity, not fire.",
    color:"#FFCDD2"
  },
  calm:{
    text:"You radiate peace. Stay centered, you're doing great.",
    color:"#C8E6C9"
  },
  excited:{
    text:"Your passion is your power. Share it boldly!",
    color:"#FFE082"
  },
  tired:{
    text:"Rest is productive too. Recharge and return stronger.",
    color:"#D7CCC8"
  },
  anxious:{
    text:"You’ve handled hard days before — one step at a time.",
    color:"#B3E5FC"
  },
  confident:{
    text:"Own your day. You’re sharp, bold, and unstoppable.",
    color:"#D1C4E9"
  },
  bored:{
    text:"Time to spark curiosity — try something new today!",
    color:"#EEEEEE"
  },
  "in-love":{
    text:"Love is beautiful. Spread it wide and let it lift you.",
    color:"#F8BBD0"
  }
};

document.querySelectorAll('.emoji').forEach(emoji => {
  emoji.addEventListener('click', () => {

    const mood = emoji.getAttribute('data-mood');
    const quote = quotes[mood];

    if(quote){
      document.body.style.background = quote.color;

      document.getElementById('quote').innerHTML =
      `<span class="highlight">
      ${mood.replace('-', ' ')}
      </span>: ${quote.text}`;
    }
  });
});

// Live Date
const today = new Date();

const options = {
  weekday:'long',
  year:'numeric',
  month:'long',
  day:'numeric'
};

document.getElementById('date').innerText =
today.toLocaleDateString('en-US', options);
