// script.js
document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll('.seat:not(.occupied)');
    const confirmButton = document.getElementById('confirm-button');
    const selectionInfo = document.getElementById('selection-info');


    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
        });
    });

    confirmButton.addEventListener('click', () => {
        open('payments.html');
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const selectedCount = selectedSeats.length;
         selectionInfo.textContent = `You have selected ${selectedCount} seat(s).`;
    });
});
