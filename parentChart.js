var myChart;
var data1;
var options;
class insertDataToChart {
    constructor() {

        this.addCountries()
        this.addChart()

    }

    addCountries() {
        var countryData = JSON.parse(localStorage.getItem('data1'))
        var countryFlagAndName = JSON.parse(localStorage.getItem('data2'))
        var counName = Object.keys(countryData);
        var opt = "";
        for (let i = 0; i < counName.length; i++) {

            for (let j = 0; j < countryFlagAndName.length; j++) {
                if (countryFlagAndName[j].name == counName[i]) {
                    var selectedName = countryFlagAndName[j].name
                    var selectedFlag = countryFlagAndName[j].flag
                }
            }
            opt += '<div class="col-2"><img src=' + selectedFlag + ' width=25 height=25>' + selectedName + '  <input type="checkbox" value=' + selectedName + ' name="country" onChange ="addSingleDataChart()"></div>'

        }
        document.querySelector("#showAll").innerHTML = opt

    }
    addValue() {

        var favorite = [];
        $.each($("input[name='country']:checked"), function () {
            favorite.push($(this).val());
        })
        return favorite
    }

    addChart() {
        var canvas = document.getElementById("myChart");
        var ctx = canvas.getContext('2d');
        // Global Options:
        Chart.defaults.global.defaultFontColor = 'black';
        Chart.defaults.global.defaultFontSize = 16;
        data1 = {
            labels: addLabelChart(),
            datasets: []
        }
        options = {
            animation: {
                duration: 2000,
                easing: 'linear'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: addLabelStringAttr() ,
                        fontSize: 20
                    }
                }]
            }
        };
        // Chart declaration:
        myChart = new Chart(ctx, {
            type: 'line',
            data: data1,
            options: options

        });

        document.querySelector('#myChart').innerHTML = myChart
        
        

    }

}











