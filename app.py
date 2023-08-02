from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate_shipping', methods=['POST'])
def calculate_shipping():
    weight = float(request.form['weight'])
    distance = float(request.form['distance'])
    shipment_value = float(request.form['shipmentValue'])

    # Calculate the shipping cost using the formula
    shipping_cost = (weight * 2) + (distance * 1) + (shipment_value * 0.01)

    return {
        'shipping_cost': shipping_cost
    }

if __name__ == '__main__':
    app.run(debug=True)
