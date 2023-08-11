from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Object to map country codes to currency symbols
currency_symbols = {
    'USA': '$',
    # Add more country codes and currency symbols here
}

# Placeholder shipment cost calculation function
# Replace this with your actual shipping cost calculation logic
def calculate_shipment_cost(country, weight, distance, shipment_value):
    base_cost_per_km = 0.1
    base_cost_per_kg = 1
    base_cost = 10

    shipment_cost = base_cost + (distance * base_cost_per_km) + (weight * base_cost_per_kg) + (shipment_value * 0.05)
    return shipment_cost

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/calculate_shipment_cost', methods=['POST'])
def calculate_shipment_cost_api():
    data = request.get_json()

    country = data.get('country', 'USA')
    weight = data.get('weight', 0)
    distance = data.get('distance', 0)
    shipment_value = data.get('shipmentValue', 0)

    currency_symbol = currency_symbols.get(country, '')

    shipment_cost = calculate_shipment_cost(country, weight, distance, shipment_value)

    result = {
        'country': country,
        'weight': weight,
        'distance': distance,
        'shipmentValue': shipment_value,
        'currencySymbol': currency_symbol,
        'shipmentCost': shipment_cost
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
