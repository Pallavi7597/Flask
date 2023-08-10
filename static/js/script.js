const currencySymbols = {
    'USA': '$',
    'India': '₹',
    'Canada': 'CAD',
    // Add more country codes and currency symbols here
  };

function calculateShipmentCost() {
    const country = document.getElementById('country').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const pickupPincode = document.getElementById('pickup').value;
    const deliveryPincode = document.getElementById('delivery').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const shipmentValue = parseFloat(document.getElementById('shipmentValue').value);
  
  
    const baseCostPerKm = 0.1;
    const baseCostPerKg = 1;
    const baseCost = 10;
  
    const shipmentCost = baseCost + (distance * baseCostPerKm) + (weight * baseCostPerKg) + (shipmentValue * 0.05);
  
    const modal = document.getElementById('modal');
    const resultElement = document.getElementById('result');
      // Get the currency symbol based on the selected country
    const currencySymbol = currencySymbols[country] || '';
    const result = `Calculated Shipment Cost: ${currencySymbol}${shipmentCost.toFixed(2)}`;;
  
    resultElement.textContent = result;
    modal.style.display = 'flex';
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("country").selectedIndex = 0;
    document.getElementById("pickup").value = "";
    document.getElementById("delivery").value = "";
    document.getElementById("distance").value = "";
    document.getElementById("shipmentValue").value = "";
    document.getElementById("result").textContent = "";
} 

