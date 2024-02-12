const textarea = document.getElementById('text');


fetch('https://icanhazdadjoke.com/slack').then(response => response.json()).then(data => {
    const jokeText = data.attachments[0].text;
    textarea.innerHTML = jokeText;
})