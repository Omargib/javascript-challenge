// from data.js
var tableData = data;
function buildTable(tableData){
    var tbody = d3.select("tbody")
tbody.html("")
tableData.forEach(row => {
    let trow = tbody.append("tr")
    Object.values(row).forEach(x => {
        let cell = trow.append("td")
        cell.text(x)
    })
})
}
function filterData(){
    var date = d3.select("#datetime").property("value")
    var city = d3.select("#city").property("value")
    var state = d3.select("#state").property("value")
    var country = d3.select("#country").property("value")
    var shape = d3.select("#shape").property("value")
    var newData = data
    if (date){
    newData = newData.filter(row => row.datetime === date)    
    }
    if (city){
        newData = newData.filter(row => row.city === city)    
        }
    if (state){
        newData = newData.filter(row => row.state === state)    
        }
    if (country){
        newData = newData.filter(row => row.country === country)    
        }
    if (shape){
        newData = newData.filter(row => row.shape === shape)
        }
    buildTable(newData)
}

buildTable(tableData)
d3.select("#filter-btn").on("click", filterData)


