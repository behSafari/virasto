document.getElementById('check-btn').addEventListener('click', async () => {
    const text = document.getElementById('text-input').value;
    const response = await fetch('http://localhost:5000/check_spelling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    const data = await response.json();
    document.getElementById('output').innerText = `Corrected: ${data.corrected_text}`;
});
