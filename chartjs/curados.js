     
        var options = {
          series: [{
          name: "Curados",
          data: [8.,  8., 10., 10., 10., 13., 16., 18., 18.,
       18., 18., 22., 24., 24., 27.],
        },

        {
          name: "Infectados",
          data: [13, 14, 14, 14, 14, 18, 20, 24, 26, 27, 27, 27, 28, 30, 32],
        }


        ],
          chart: {
          type: 'area',
          height: 450,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        
        title: {
          text: 'Pessoas curadas da COVID-19 em Mogi Guaçu',
          align: 'center'
        },
        labels: ['16/04/2020', '17/04/2020', '18/04/2020',
       '19/04/2020', '20/04/2020', '21/04/2020', '22/04/2020',
       '23/04/2020', '24/04/2020', '25/04/2020', '26/04/2020',
       '27/04/2020', '28/04/2020', '29/04/2020', '30/04/2020'],
        xaxis: {
          type: 'string',
        },
        yaxis: {
          opposite: false
        },
        legend: {
          horizontalAlign: 'left'
        },
        colors: ['#6C3483', '#C0392B'],
        grid: {
    show: true,
    borderColor: '#90A4AE',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: false
        }
    },   
    yaxis: {
        lines: {
            show: false
        }
    },  
    row: {
        colors: undefined,
        opacity: 0.5
    },  
    column: {
        colors: undefined,
        opacity: 0.5
    },  
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },  
}

        
        };
      
        var chart = new ApexCharts(document.getElementById("canvasCurados"), options);
        console.log(chart);
        chart.render();