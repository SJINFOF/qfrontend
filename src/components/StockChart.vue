<template>
    <div>
        <v-card id="price-chart-container">
            <!--<v-layout row wrap>-->
                <!--<v-flex sm12 fill-width>-->
                    <div id="price-chart" style="width: 100%; height: 400px"></div>
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

    // StockLineConfig['series'][0]['data'] = DemoData


    export default {
        data: () => ({
        }),
        props: [
            'title'
        ],
        methods: {
            drawChart: function () {
                // initialize echarts instance with prepared DOM
                let myChart = echarts.init(document.getElementById('price-chart'));
                // draw chart
                StockLineConfig['title']['text'] = this.$props['title']
                myChart.setOption(StockLineConfig);
            },
            resizeChart: function () {
                let wrapperSize = document.getElementById('price-chart-container').getBoundingClientRect()
                echarts.getInstanceByDom(document.getElementById('price-chart')).resize({width: Math.floor(wrapperSize.width) + 'px', height: Math.floor(wrapperSize.height) + 'px'})

            },
            setData: function (data) {
                let myChart = echarts.getInstanceByDom(document.getElementById('price-chart'))
                let newOption = StockLineConfig
                newOption['title']['text'] = this.$props['title']
                newOption['series'][0]['data'] = data
                console.log('resetting data')
                myChart.setOption(newOption)

                this.resizeChart()
            }
        },
        mounted: function () {
            this.drawChart()
            let app = this
            setTimeout(function (){
                window.onresize = function () {
                    app.resizeChart()
                }
            },200)

        }

    }


</script>
