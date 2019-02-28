"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Khalel Abaquin
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/

// This section of code has 2 variables, the first one, 'orderTotal', is set to the number 0. The second variable, 'cartHTML', is set to the text string, '<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>'.
var orderTotal = 0;
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// This block of code is a for loop. In this loop, the 'cartHTML' variable will have a various amount of HTML code added onto it & the sum of the variables 'itemCost' & 'orderTotal'. Also in the loop, the variable 'itemCost' is set the the variables 'itemPrice' * 'itemQty' current item.
for (var i = 0; i < item.length; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal += itemCost;
}

// This line of code added yet another table row to the 'cartHTML' variable
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";

// This line of code grabs the element, div, with the id of 'cart' & replaces its tags & text with the value(s) of 'cartHTML.'
document.getElementById("cart").innerHTML = cartHTML;