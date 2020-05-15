function addLabelStringAttr(){
 return 'Confirmed Cases'

}
function addSingleDataChart() {
   
    console.log(1);
    
    var pinakas = []
    data1.datasets = []
    var countryDataSet = newChartObject.addValue();
    for (i = 0; i < countryDataSet.length; i++) {
        pinakas = addConfirmed(countryDataSet[i])      
        addData(countryDataSet[i], pinakas)      
    }
    myChart.update()
}
function addConfirmed(nameOfCou) {
    
    var adddataConf = [];
    var nameOfCountry = nameOfCou;
    var country1 = countryData;
    var countrySelect1 = country1[nameOfCountry]


    for (let q = 0; q < countrySelect1.length; q++) {
        adddataConf.push(countrySelect1[q].confirmed)
    }
console.log(3);
    return adddataConf;
}


