let allData;
var passBar="";
jQuery(init);
function init($) {
    passBar = document.getElementById('menuBar')
   console.log(passBar);
   
    getDataFromUrl("https://pomber.github.io/covid19/timeseries.json", handleRequest)
    // getDataFromUrl("https://restcountries.eu/rest/v2/all?fields=name;flag", storeData2)


    function handleRequest(data) {

        allData = data;
        storeData(data);

        const all = Object.keys(data);


        let options = "";
        for (let i = 0; i < all.length; i++) {

            const op = "<option value=" + all[i] + "></option>"
            options += op;

        }

        document.querySelector("#allCountries").innerHTML = options;



    }


}
function handleform() {
    event.preventDefault();
    var selectedName = document.querySelector('#country-choice').value;

    getDataFromUrl('https://restcountries.eu/rest/v2/name/' + selectedName + '?fullText=true', getFlagPop)
    const input = document.querySelector("#country-choice");
    const countryName = allData[input.value];
    const countryDataL = countryName.length;
    const seeLast = countryName[countryDataL - 1];

    document.querySelector("#confirmed").innerHTML = seeLast["confirmed"];
    document.querySelector("#deaths").innerHTML = seeLast["deaths"];
    document.querySelector("#recovered").innerHTML = seeLast["recovered"];
    document.querySelector("#country").innerHTML = input.value;
    getCountryDataFromLocalStorage(selectedName);
}

function storeData(varName) {
    if (localStorage.getItem('data1')) {
        localStorage.removeItem('data1')
    }
    localStorage.setItem('data1', JSON.stringify(varName))

}
function getDataFromUrl(URL, method1) {

    var options = {
        url: URL,
        success: method1
    };
    $.ajax(options);

}
function getFlagPop(countrySel) {
    document.querySelector("#population").innerHTML = countrySel[0].population
    document.querySelector("#ofPopCon").innerHTML = ((document.querySelector("#confirmed").textContent) * 100 / (document.querySelector("#population").textContent)).toFixed(4)
    document.querySelector("#deathPerMil").innerHTML = ((document.querySelector("#deaths").textContent) * 1000000 / (document.querySelector("#population").textContent)).toFixed(2)
    document.querySelector("#indexFlag").setAttribute('src', countrySel[0].flag)
}
// function storeData2(varName) {
//     if (localStorage.getItem('data2')) {
//         localStorage.removeItem('data2')
//     }
//     localStorage.setItem('data2', JSON.stringify(varName))

// }
function getCountryDataFromLocalStorage(nameOfCountry) {

    var cn = JSON.parse(localStorage.getItem('data1'))
    var datatoShow = cn[nameOfCountry];
    console.log(datatoShow);

    var op = "";
    
    document.querySelector('#show').innerHTML = op;
    for (let i = 0; i < datatoShow.length; i++) {
           
        op += '<div id="par" class="bg-primary text-white ml-1 mb-1 col-2">'+
        datatoShow[i].date+
        '<div class="bg-light text-dark"> Confirmed : '+datatoShow[i].confirmed+'</div>'+
        '<div class="bg-danger text-white"> Deaths : '+datatoShow[i].deaths+'</div>'+
        '<div class="bg-success text-white"> Recovered : '+datatoShow[i].recovered+'</div>'+
  '</div>'
  
 
    }
    document.querySelector('#show').innerHTML += op;
}