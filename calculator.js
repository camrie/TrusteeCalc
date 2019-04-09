var calc = function() {
    let amount = document.getElementById("amount").value;
    console.log(amount);
     if(amount.trim() == '') {
         document.getElementById("value").innerHTML = "Please input a number"
         return "Please input a number"
     }
     else {
        let total = 0;
        if(amount >= 0 && amount <= 5000) { //25% of initial 5,000
            total += .25 * amount;
        }
        else if(amount > 5000 && amount <= 50000) { //10% between 5001 & 50000 
            let amount2 = amount - 5000;
            total += .25 * 5000;
            total += .10 * amount2;
        } else if (amount > 50000 && amount <= 1000000) { //5% between 50001 and 1000000
            let amount2 = amount - 50000;
            total += .25 * 5000;
            total += .10 * (50000-5000);
            total += .05 * amount2;
        } else if (amount > 1000000) { //3% over 1,000,000
            let amount2 = amount - 1000000;
            total += .25 * 5000;
            total += .10 * (50000-5000);
            total += .05 * (1000000-50000);
            total += .03 * amount2;
        }

        console.log(total);
        document.getElementById("value").innerHTML = total;
        return total;
     }
}
