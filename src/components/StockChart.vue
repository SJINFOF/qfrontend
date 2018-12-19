<template>
    <div>
        <v-card id="priceChartContainer">
            <!--<v-layout row wrap>-->
                <!--<v-flex sm12 fill-width>-->
                    <div id="pricechart" style="width: 100%; height: 400px"></div>
                <!--</v-flex>-->
            <!--</v-layout>-->
        </v-card>

    </div>
</template>

<style></style>

<script>
    let echarts = require('echarts/lib/echarts');

    // include bar chart
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/line');
    // include tooltip and title component
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    require('echarts/lib/component/dataZoom')


    import StockLineConfig from '@/components/StockLineConfig.js'

    import DemoData from '@/components/ChartMockData.json'

    StockLineConfig['series'][0]['data'] = DemoData


    export default {
        data: () => ({
        }),
        methods: {
            drawChart: function () {
                // initialize echarts instance with prepared DOM
                var myChart = echarts.init(document.getElementById('pricechart'));
                // draw chart
                myChart.setOption(StockLineConfig);
            },
            resizeChart: function () {

            }
        },
        mounted: function () {
            this.drawChart()
        }

    }


</script>
