     
        var options = {
          series: [
          {
          name: "Casos totais",
          data: [1,  1,  1,  1,  1,  1,  1,  2,  2,  4,  6,  9, 10, 10, 10, 10, 12,
       13, 14, 14, 14, 14, 18, 20, 24, 26, 27, 27, 27, 28, 30, 32],
          },

          {
            name: "Casos ativos",
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,
       NaN, NaN, NaN, NaN,  4.,  5.,  3.,  3.,  3.,  4.,  3.,  5.,  7.,
        8.,  8.,  4.,  3.,  5.,  4.]
          },

          {
            name: "Mortes",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
       1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          }

        ],
          chart: {
          type: 'line',
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
          text: 'Casos de COVID-19 em Mogi Guaçu',
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
          horizontalAlign: 'left'
        },
        colors: ['#311b92', '#C0392B', '#000000'],
        };
      
        var chart = new ApexCharts(document.getElementById("canvasCasos"), options);
        chart.render();