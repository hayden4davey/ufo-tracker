// from data.js
var tableData = data;

// Select the button
var button = d3.select("button")

button.on("click", function(){

    // Define input elements
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");

    // Define input values
    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var countryValue = countryElement.property("value");
    var shapeValue = shapeElement.property("value");

    // Filter data based on optional inputs
    if (dateValue != ""){
        var filteredData1 = tableData.filter(tableData => tableData.datetime === dateValue)
    } else{
        var filteredData1 = tableData;
    }
    if (cityValue != ""){
        var filteredData2 = filteredData1.filter(filteredData1 => filteredData1.city === cityValue.toLowerCase())
    } else{
        var filteredData2 = filteredData1;
    }
    if (stateValue != ""){
        var filteredData3 = filteredData2.filter(filteredData2 => filteredData2.state === stateValue.toLowerCase())
    } else{
        var filteredData3 = filteredData2;
    }
    if (countryValue != ""){
        var filteredData4 = filteredData3.filter(filteredData3 => filteredData3.country === countryValue.toLowerCase())
    } else{
        var filteredData4 = filteredData3;
    }
    if (shapeValue != ""){
        var filteredData5 = filteredData4.filter(filteredData4 => filteredData4.shape === shapeValue.toLowerCase())
    } else{
        var filteredData5 = filteredData4;
    }
        
    console.log(filteredData5);

    var table = '<tbody>'

    // Loop through filtered table and add it to html table
    for(i = 0;i < filteredData5.length; i++){
        table+= '<tr>';
        table+= '<td>' + filteredData5[i].datetime + '</td>';
        table+= '<td>' + filteredData5[i].city + '</td>';
        table+= '<td>' + filteredData5[i].state + '</td>';
        table+= '<td>' + filteredData5[i].country + '</td>';
        table+= '<td>' + filteredData5[i].shape + '</td>';
        table+= '<td>' + filteredData5[i].duration + '</td>';
        table+= '<td>' + filteredData5[i].comments + '</td>';
        table+= '</tr>';
        }
        table+='</tbody>';
        document.getElementById('table-body').innerHTML = table;
})
