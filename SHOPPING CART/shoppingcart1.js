var nums = [1, 2, 3, 4];
var items = ["1L Coke", "50pack Kit Kat", "20 pack Bar One", "Fanta"];
var prices = [10.5, 29.5, 18.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];

// ADD BUTTON
function add_selection(x) {
    quantities[x] += 1;
    totals[x] = prices[x] * quantities[x];

    // Clear message because price is still valid until checkout
    document.getElementById("total").innerHTML = "";

        
    // Show reminder message
      document.getElementById("total").innerHTML =
        "<h3 style='color: orange;'>Press checkout for new price</h3>";

    display_all();
}

// REMOVE BUTTON
function remove_selection(x) {
    if (quantities[x] > 0) {
        quantities[x] -= 1;
        totals[x] = prices[x] * quantities[x];
    }

    // Show reminder message
    document.getElementById("total").innerHTML =
        "<h3 style='color: orange;'>Press checkout for new price</h3>";

    display_all();
}

// DISPLAY TABLE
function display_all() {
    var myTable = "<table>";
    myTable += "<tr>";
    myTable += "<th>Num</th>";
    myTable += "<th>Item</th>";
    myTable += "<th>Price</th>";
    myTable += "<th>Quantity</th>";
    myTable += "<th>Total</th>";
    myTable += "<th>Add</th>";
    myTable += "<th>Remove</th>";
    myTable += "</tr>";

    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + nums[i] + "</td>";
        myTable += "<td>" + items[i] + "</td>";
        myTable += "<td>R " + prices[i].toFixed(2) + "</td>";
        myTable += "<td>" + quantities[i] + "</td>";
        myTable += "<td>R " + totals[i].toFixed(2) + "</td>";
        myTable += "<td><button class='add-btn' onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button class='remove-btn' onclick='remove_selection(" + i + ")'>Remove</button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    document.getElementById("demo").innerHTML = myTable;
}

// CHECKOUT FUNCTION
function checkout() {
    var totalOrderAmt = totals.reduce((acc, val) => acc + val, 0);


    document.getElementById("total").innerHTML =
        "<h3>Total Amount: R " + totalOrderAmt.toFixed(2) + "</h3>";
}

// LOAD TABLE ON START
window.onload = function () {
    display_all();
};
