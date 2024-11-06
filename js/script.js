$(document).ready(function () {
  Highcharts.chart("container", {
    title: {
      text: "2024 SEASON LG TWINS 순위추이",
    },

    accessibility: {
      point: {
        valueDescriptionFormat: "{xDescription}{separator}{value} million(s)",
      },
    },

    xAxis: {
      title: {
        text: "MONTH",
      },
      categories: [3, 4, 5, 6, 7, 8, 9],
      labels: {
        format: "{value}월",
      },
    },

    yAxis: {
      type: "logarithmic",
      reversed: true,
      title: {
        text: "RANKS",
      },
      labels: {
        format: "{value}위",
      },
    },

    tooltip: {
      headerFormat: "<b>{series.name}</b><br />",
      pointFormat: "{point.y} 위",
    },

    series: [
      {
        name: "LG TWINS 순위",
        keys: ["y", "color"],
        data: [
          [5, "#0000ff"],
          [5, "#8d0073"],
          [3, "#ba0046"],
          [2, "#d60028"],
          [2, "#eb0014"],
          [2, "#fb0004"],
          [3, "#ff0000"],
        ],
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 1,
            y2: 0,
          },
          stops: [
            [0, "#0000ff"],
            [1, "#ff0000"],
          ],
        },
      },
    ],
  });

  Highcharts.chart('pitch-value-chart', {
    chart: {
        polar: true,
        type: 'line',
        backgroundColor: 'transparent' 
    },
    title: {
        text: '임찬규 구종가치',
        align: 'center',
        verticalAlign: 'bottom', 
        y: 30, 
        style: {
            color: '#C2C2C2'
        }
    },
    pane: {
        size: '80%'
    },
    xAxis: {
        categories: [
            '포심', '슬라이더', '커브', '체인지업', '커터', '포크'
        ],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {
            style: {
                color: 'white'
            }
        }
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: {
            style: {
                color: 'white'
            }
        }
    },
    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        itemStyle: {
            color: 'white' 
        }
    },
    series: [{
        name: '우타자',
        data: [90, 60, 99, 97, 74, 55],
        pointPlacement: 'on',
        color: '#1E90FF' 
    }, {
        name: '좌타자',
        data: [90, 55, 96, 99, 54, 33],
        pointPlacement: 'on',
        color: '#FF6347' 
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }
});
});
