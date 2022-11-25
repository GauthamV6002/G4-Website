// y = 2x + 3 +- 2.5

let currentX = 5;

let oldChart;

(async function() {
    const data = {
        labels: [0, 1, 2, 3, 4],
        datasets: [{ 
            data: [0, 2.3, 4.9, 6.1, 8.0],
            label: "Sattelite Albedo Data",
            borderColor: "#3e95cd",
            fill: false
          }
        ]
    };
  
    setInterval(() => {
        oldChart = new Chart(
            document.getElementById("graph"), {
                type: 'line',
                data: data,
                options: {
                    scales: {
                        y: {
                            stacked: true
                        }
                    }
                }
            });
            
        setTimeout(() => oldChart.destroy(), 1400);
        data.labels.push(currentX + 1);
        data.datasets[0].data.push(currentX * 2 + 3 + (Math.random() * 5 - 2.5));

        currentX++;
        console.log("wtf")
    }, 1500)   
  })();
