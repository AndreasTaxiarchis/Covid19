var myChart;
var data1;
var options;
class insertDataToChart {
    constructor() {

        // this.addCountries()
        this.addChart()

    }

    // addCountries() {
    //     var countryData = JSON.parse(localStorage.getItem('data1'))
        
    //     var counName = Object.keys(countryData);
    //     var opt = "";
    //     for (let i = 0; i < counName.length; i++) {

            
    //         opt += '<div class="col-2">' + counName[i] + '  <input type="checkbox" value=' + counName[i] + ' name="country" onChange ="addSingleDataChart()"></div>'

    //     }
    //     document.querySelector("#showAll").innerHTML = opt

    }
    addValue() {
        console.log(2);
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











