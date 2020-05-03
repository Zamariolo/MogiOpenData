     
        var options = {
          series: [
          {
          name: "Testes (total)",
          data: [3,   4,   5,   8,  10,  10,  10,  18,  19,  26,  31,  34,  36,
        36,  40,  44,  53,  62,  71,  71,  71,  79,  85,  99, 113, 117,
       122, 122, 132, 134, 137, 139],
          },

          {
            name: "Testes positivos",
            data: [1,  1,  1,  1,  1,  1,  1,  2,  2,  4,  6,  9, 10, 10, 10, 10, 12,
       13, 14, 14, 14, 14, 18, 20, 24, 26, 27, 27, 27, 28, 30, 32]
          },

          {
            name: "Testes negativos",
            data: [ 2,   3,   4,   7,   9,   9,   9,  16,  17,  22,  25,  25,  26,
        26,  30,  34,  41,  49,  57,  57,  57,  65,  67,  79,  89,  91,
        95,  95, 105, 106, 107, 107]
          }

        ],
          chart: {
          type: 'area',
          height: 520,
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
          text: 'Testes de COVID-19 realizados em Mogi Guaçu',
          align: 'center'
        },
        labels: ['30/03/2020', '31/03/2020', '01/04/2020', '02/04/2020',
       '03/04/2020', '04/04/2020', '05/04/2020', '06/04/2020',
       '07/04/2020', '08/04/2020', '09/04/2020', '10/04/2020',
       '11/04/2020', '12/04/2020', '13/04/2020', '14/04/2020',
       '15/04/2020', '16/04/2020', '17/04/2020', '18/04/2020',
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
          show: true,
          floating: true,
          position: 'top'
        },
        colors: ['#311b92', '#C0392B', '#2ECC71'],
        };
      
        var chart = new ApexCharts(document.getElementById("canvasTestes"), options);
        chart.render();