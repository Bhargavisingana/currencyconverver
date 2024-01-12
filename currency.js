function convert(){
    var amt = document.getElementById("from").value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    
    if(amt==false || fromCurrency==false || toCurrency==false){
        document.getElementById("btn").disabled="true";
        document.getElementById("result").innerHTML ="please enter a valid amount";
    }
    else{
        var url = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var rate = data.rates[toCurrency];
            var convertAmt = amt * rate;
            document.getElementById("result").innerHTML = amt + " " + fromCurrency + " = " + convertAmt + " " + toCurrency;
        })
        .catch(function(error){
            console.log("Error"+error);
        });
    }

}
