let cities = ["Faisalabad", "Lahore","Karachi","Islamabad","Burewala"]


function clearOutput(){
    document.getElementById("inputbox").value = null
}

function simpleAlert(){
    document.getElementById("output").innerHTML = ""
    let a = document.getElementById("inputbox").value
    alert(a)
}

function printName(){
    document.getElementById("output").innerHTML = ""
    let a =  document.getElementById("inputbox").value
    document.getElementById("output").innerHTML = a
}

function printAllCities()
{
 
    

    for(let i = 0; i < cities.length ; i++)
    {
        document.getElementById("output").innerHTML += i+1 +") "+ cities[i] +"<br>"
    }
  
}


function addCity(){
    document.getElementById("output").innerHTML = ""
     cities [cities.length + 1] = document.getElementById("inputbox").value
}

function generateTable(){
    let a = document.getElementById("inputbox").value
    document.getElementById("output").innerHTML = ""
    for(let i= 1 ; i < 11 ;i++ )
    {
        document.getElementById("output").innerHTML += a +" * "+ i + " = " + a*i +"<br>"
    }
}