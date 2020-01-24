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

    // Filter data based on inputs
    var filteredData = tableData.filter(tableData => tableData.datetime === dateValue &&
                                                    tableData.city === cityValue.toLowerCase() &&
                                                    tableData.state === stateValue.toLowerCase() &&
                                                    tableData.country === countryValue.toLowerCase() &&
                                                    tableData.shape === shapeValue.toLowerCase()
        );
  
    console.log(filteredData);

    var table = '<tbody>'

    // Loop through filtered table and add it to html table
    for(i = 0;i < filteredData.length; i++){
        table+= '<tr>';
        table+= '<td>' + filteredData[i].datetime + '</td>';
        table+= '<td>' + filteredData[i].city + '</td>';
        table+= '<td>' + filteredData[i].state + '</td>';
        table+= '<td>' + filteredData[i].country + '</td>';
        table+= '<td>' + filteredData[i].shape + '</td>';
        table+= '<td>' + filteredData[i].duration + '</td>';
        table+= '<td>' + filteredData[i].comments + '</td>';
        table+= '</tr>';
    }
    table+='</tbody>';
    document.getElementById('table-body').innerHTML = table;



})
