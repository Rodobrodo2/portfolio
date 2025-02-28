const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event => {
    const current = event.target;

    // Controlla se l'elemento cliccato è il pulsante "Read More"
    const isReadMoreBtn = current.classList.contains('read-more-btn');
    if (!isReadMoreBtn) return;

    // Seleziona il testo associato
    const currentText = current.previousElementSibling; // Prendi l'elemento precedente al pulsante
    currentText.style.display = currentText.style.display === 'none' || currentText.style.display === '' 
        ? 'inline' 
        : 'none';

    // Aggiorna il testo del pulsante
    current.textContent = current.textContent.includes('Read more') ? "Read less..." : "Read more...";
});
