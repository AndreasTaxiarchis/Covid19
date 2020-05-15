var newChartObject;
var countryData;
countryData = JSON.parse(localStorage.getItem('data1'))

window.onload = function () {
    newChartObject = new insertDataToChart();  
}

function addLabelChart() {
    var pin = [];
    for (let i = 0; i < countryData['Greece'].length; i++) {
        pin.push(countryData['Greece'][i].date)
    }
    return pin;
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addData(countryName, dataSet) {
    console.log(4);
    var data12 =
    {
        label: '' + countryName + '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(225,0,0,0.4)",
        borderColor: randomColor(), // The main line color
        borderCapStyle: 'square',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "black",
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "yellow",
        pointHoverBorderColor: "brown",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: dataSet,
        spanGaps: true,
    }
    data1.datasets.push(data12)
    myChart.update()
}

