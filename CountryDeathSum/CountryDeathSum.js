
function addLabelStringAttr(){
    return 'Deaths Cases'
   
   }
   function addSingleDataChart() {
      
    var pinakas = []
   
    var countryDataSet = name;
 
        pinakas = addConfirmed(countryDataSet);      
        addData(countryDataSet, pinakas);      
    
    myChart.update()
       
   }
   function addDeath(nameOfCou) {
       var adddataConf = [];
       var nameOfCountry = nameOfCou;
       var country1 = countryData;
       var countrySelect1 = country1[nameOfCountry]
   
   
       for (let q = 0; q < countrySelect1.length; q++) {
           adddataConf.push(countrySelect1[q].deaths)
       }
   
       return adddataConf;
   }
   
