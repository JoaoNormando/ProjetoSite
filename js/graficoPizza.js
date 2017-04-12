Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Gráfico da área de biomas brasileiro'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Amazônia',
            y: 49.29
        }, {
            name: 'Cerrado',
            y: 23.92
        }, {
            name: 'Mata Atlântica',
            y: 13.04
        }, {
            name: 'Caatinga',
            y: 9.92
        }, {
            name: 'Pampa',
            y: 2.07
        }, {
            name: 'Pantanal',
            y: 1.76
        }]
    }]
});
