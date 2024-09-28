var qty;
    var price;
    var ep1 = ep2 = ep3 = ep4 = ep5 = 0;

    function getUpdate(symbol, number){
        price = document.getElementById("price" + number).value;
        qty = document.getElementById("qty" + number).value;
        if(qty > 0){
            qty = (symbol == '+') ? parseInt(qty)+1: parseInt(qty) -1;
            document.getElementById("qty"+number).value = qty;
            document.getElementById("ep"+number).value (price * qty).toFixed(2);
            getExtendedPrice();
        }
    } 

    function qtyfun(num) {
        price = document.getElementById("price"+num).value;
        qty = document.getElementById("qty"+num).value;

        if(price > 0 && qty > 0){
            document.getElementById("incqty" + num).disabled = false;
            document.getElementById("decqty" + num).disabled = false;
            document.getElementById("ep" + num).value = (price * qty).toFixed(2);
            getExtendedPrice();
        } else {
            document.getElementById("incqty" + num).disabled = true;
            document.getElementById("decqty"+num).disabled = true;
            document.getElementById("ep" + num).value = 0;
        }
    }

    function getExtendedPrice(){
        ep1 = document.getElementById("ep1").value;
        ep2 = document.getElementById("ep2").value;
        ep3 = document.getElementById("ep3").value;
        ep4 = document.getElementById("ep4").value;
        ep5 = document.getElementById("ep5").value;

        var total = parseFloat(ep1) + parseFloat(ep2) + parseFloat(ep3) + parseFloat(ep4) + parseFloat(ep5);
        var tax = total * 0.05;
        var overAllTotal = total + tax;
        document.getElementById("subTotal").value = total.toFixed(2);
        document.getElementById("tax").value = tax.toFixed(2);
        document.getElementById("overAllTotal").value = overAllTotal.toFixed(2);
    }
    document.getElementById("cash").onkeyup = function() {
        if(this.value > 0){
            var overAllTotal = document.getElementById("overAllTotal").value;
            var change = parseFloat(this.value) - parseFloat(overAllTotal);
            document.getElementById("change").value = change.toFixed(2);
        }

    }