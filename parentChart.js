var myChart;
var data1;
var options;
class insertDataToChart {
    constructor() {

      
        this.addChart()

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











