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
    var state = d3.select("#state").property("value")
    var newData = data
    if (date){
    newData = newData.filter(row => row.datetime === date)    
    }
    if (state){
        newData = newData.filter(row => row.state === state)    
        }
    buildTable(newData)
}

buildTable(tableData)
d3.select("#filter-btn").on("click", filterData)


