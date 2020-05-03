new Chart(document.getElementById("canvasCasosCovid"), {
  type: 'line',
  data: {
    labels: ['30/03/2020', '31/03/2020', '01/04/2020', '02/04/2020',
       '03/04/2020', '04/04/2020', '05/04/2020', '06/04/2020',
       '07/04/2020', '08/04/2020', '09/04/2020', '10/04/2020',
       '11/04/2020', '12/04/2020', '13/04/2020', '14/04/2020',
       '15/04/2020', '16/04/2020', '17/04/2020', '18/04/2020',
       '19/04/2020', '20/04/2020', '21/04/2020', '22/04/2020',
       '23/04/2020', '24/04/2020', '25/04/2020', '26/04/2020',
       '27/04/2020', '28/04/2020'],
    datasets: [{ 
      // Casos acumulados
        data: [1,  1,  1,  1,  1,  1,  1,  2,  2,  4,  6,  9, 10, 10, 10, 10, 12,
       13, 14, 14, 14, 14, 18, 20, 24, 26, 27, 27, 27,28],
        label: "Casos acumulados",
        borderColor: "#311b92",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Panorama da COVID-19 em Mogi Guacu'
    },
    pointHitRadius: 30,

    scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: 
            {
                display:false
            },
            scaleLabel: 
            {
                display: true,
                labelString: 'Numero de pessoas',
                fontSize: 14
            } 
        }]
    }

  }
});