document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const destination = document.getElementById('destination').value;

    fetch('/calculate_shipping', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `weight=${encodeURIComponent(weight)}&destination=${encodeURIComponent(destination)}`
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Shipping rate to ${destination}: $${data.shipping_rate.toFixed(2)}`;
    })
    .catch(error => console.error('Error:', error));
});
