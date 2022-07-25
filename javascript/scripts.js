function changeText(){
    var textsArray = ["Text 1","Text 2", "Text 3", "Text 4", "Text 5"]
    var number = getRandomNumberBetween(0,textsArray.length - 1);
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


function vehicle(){
    var vehicle={
        Hilux :"$5000.00",
        Supra:"$50000",
        Mx5:"$23000",
        S3: "$40000"
    };    
    

let txt = "<table><tr><th>Vehicle Name</th><th>Price</th></tr>";
    for(var key in vehicle) {
       txt += "<tr><td>" + key + "</td><td>" + vehicle[key] + "</td></tr>";
    };
    document.getElementById('arraytable').innerHTML = txt;

}