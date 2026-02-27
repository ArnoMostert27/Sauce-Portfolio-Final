

// When the "Place Order" button is clicked, execute the placeOrder function
document.getElementById("placeOrder").addEventListener("click", placeOrder);

// When the selected car model changes, update engine type and mod availability
document.getElementById("carModel").addEventListener("change", updateEngineAndMods);


// Update Engine Type & Mod Availability
function updateEngineAndMods() {
    var carModel = document.getElementById("carModel").value;

    // Update the displayed engine type based on the selected model
    document.getElementById("engineType").innerHTML = getEngineType(carModel);

    var mods = document.getElementsByClassName("mod");
    var notice = document.getElementById("modNotice");

    // Disable mods for Limited or Prototype cars
    if (carModel.startsWith("LTD")) {
        for (var i = 0; i < mods.length; i++) {
            mods[i].checked = false;    // Uncheck any selected mods
            mods[i].disabled = true;    // Disable the checkbox
        }
        notice.textContent = "Limited Edition car – mods are disabled.";
    } else if (carModel.startsWith("PROTO")) {
        for (var i = 0; i < mods.length; i++) {
            mods[i].checked = false;
            mods[i].disabled = true;
        }
        notice.textContent = "Prototype car – no customization allowed.";
    } else {
        // Enable mods for standard or M models
        for (var i = 0; i < mods.length; i++) {
            mods[i].disabled = false;
        }
        notice.textContent = "";
    }
}


// Place Order Function
function placeOrder() {

    // Read user inputs
    var numCars = Number(document.getElementById("numCars").value);
    var carModel = document.getElementById("carModel").value;
    var buyerType = document.getElementById("buyerType").value;
    var carColor = document.getElementById("carColor").value;

    // Calculate prices
    var basePrice = calculateCarPrice(carModel);
    var modsPrice = calculateMods();
    var subtotal = (basePrice + modsPrice) * numCars;

    // Calculate VAT based on buyer type
    var vat = calculateVAT(subtotal, buyerType);

    // Total cost including VAT
    var total = subtotal + vat;

    // Estimate resale value in 3 years
    var resaleValue = calculateResaleValue(basePrice, carModel);

    // Build order summary output
    var output = "<h2>Order Summary</h2>";
    output += "<p>Cars ordered: " + numCars + "</p>";
    output += "<p>Color: " + carColor + "</p>";
    output += "<p>Engine: " + getEngineType(carModel) + "</p>";
    output += "<p>Base price per car: R" + basePrice.toLocaleString() + "</p>";
    output += "<p>Estimated resale value (3 yrs): R" + resaleValue.toLocaleString() + "</p>";
    output += "<p>Subtotal: R" + subtotal.toLocaleString() + "</p>";
    output += "<p>VAT: R" + vat.toLocaleString() + "</p>";
    output += "<p><strong>Total: R" + total.toLocaleString() + "</strong></p>";

    // Display the output in the page
    document.getElementById("displayTotal").innerHTML = output;
}


// Calculate Base Price for Each Car Model
function calculateCarPrice(carModel) {
    var prices = {
        // Standard BMW models
        "320d_2024": 700000, "320d_2025": 730000, "330i_2026": 800000,
        "X3_30e_2026": 1080000,
        // BMW M models
        "M2_2025": 1400000, "M3_2026": 1650000, "M4_2026": 1700000, "M5_2026": 2350000,
        // Prototype models
        "PROTO_NEUE": 3000000, "PROTO_MNEXT": 3500000, "PROTO_DEE": 2800000,
        "PROTO_CIRCULAR": 2600000, "PROTO_XM": 4000000,
        // Limited Editions
        "LTD_30CSL": 5500000, "LTD_M4CSL": 3200000, "LTD_M5CS": 3600000,
        "LTD_M3GTS": 3400000, "LTD_M4GTS": 3300000, "LTD_Z4SB": 3800000,
        "LTD_I8": 2900000, "LTD_M8FE": 4100000, "LTD_M760": 3900000, "LTD_ALPINA": 4200000
    };
    return prices[carModel];
}



// Get Engine Type Based on Model
function getEngineType(carModel) {
    if (carModel.includes("20d")) return "2.0L Diesel";
    if (carModel.includes("30d")) return "3.0L Diesel";
    if (carModel.includes("30e")) return "Plug-in Hybrid";
    if (carModel.includes("40i")) return "3.0L Petrol Turbo";
    if (carModel.includes("320d")) return "2.0L Diesel";
    if (carModel.includes("330i")) return "2.0L Petrol Turbo";
    if (carModel.includes("540i")) return "3.0L Petrol Turbo";
    if (carModel.startsWith("M")) return "High-Performance M Engine";
    if (carModel.startsWith("PROTO")) return "Experimental Prototype Powertrain";
    if (carModel.startsWith("LTD")) return "Hand-built Limited Edition Engine";
    return "Standard BMW Engine";
}



// Calculate Mods Price
function calculateMods() {
    var mods = document.getElementsByClassName("mod");
    var total = 0;
    for (var i = 0; i < mods.length; i++) {
        // Only include mods that are enabled and checked
        if (!mods[i].disabled && mods[i].checked) {
            if (mods[i].value === "sport") total += 80000;
            if (mods[i].value === "wheels") total += 45000;
            if (mods[i].value === "exhaust") total += 60000;
            if (mods[i].value === "interior") total += 50000;
        }
    }
    return total;
}



// Calculate VAT (15% for private buyers)

function calculateVAT(subtotal, buyerType) {
    if (buyerType === "business") return 0;
    return subtotal * 0.15;
}


// Calculate Estimated Resale Value (3 years)
function calculateResaleValue(basePrice, carModel) {
    if (carModel.startsWith("PROTO")) return basePrice * 1.25; // Prototype may increase in value
    if (carModel.startsWith("LTD")) return basePrice * 1.15;   // Limited editions retain value
    if (carModel.includes("2026")) return basePrice * 0.75;
    if (carModel.includes("2025")) return basePrice * 0.65;
    return basePrice * 0.55; // Older models depreciate more
}
