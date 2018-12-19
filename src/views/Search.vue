<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <!--<v-card>-->
                    <!--aaac-->
                <!--</v-card>-->
                <search-box
                    ref="searchBox"
                    v-on:StartSearch="fetchData"
                    :returnMessage="serverMsg"></search-box>
            </v-flex>

        <!--</v-layout>-->
        <!--<v-spacer></v-spacer>-->
        <!--<v-layout row wrap>-->
            <v-flex xs12>
                <!--<v-card>-->
                    <!--bbba-->
                <!--</v-card>-->
                <stock-chart></stock-chart>
            </v-flex>

            <!--<v-flex-->
                    <!--v-for="i in 6"-->
                    <!--:key="i"-->
                    <!--xs4>-->
                <!--<v-card>-->
                    <!--<v-container fluid>-->
                        <!--<v-layout row wrap></v-layout>-->
                        <!--aaa-->
                    <!--</v-container>-->
                <!--</v-card>-->
            <!--</v-flex>-->
            <v-flex sm3>
                <data-list
                    :title="'价格信息'"
                    :data="PxInfoShowcase"></data-list>
                <!--<price-info-->
                <!--:PreClosePx="0.0"-->
                <!--:OpenPx="0.0"-->
                <!--:HighPx="0.0"-->
                <!--:LowPx="0.0"-->
                <!--:LastPx="0.0"></price-info>-->
            </v-flex>


        </v-layout>
    </div>
</template>

<style>

</style>

<script>
    import SearchBox from '@/components/SearchBox.vue'
    import StockChart from '@/components/StockChart.vue'
    import PriceInfo from '@/components/PriceInfo.vue'
    import DataList from '@/components/DataList.vue'
    import axios from 'axios'

    export default {
        data () {
            return {
                PxInfo: {
                    PreClosePx: 0.0,
                    OpenPx: 0.0,
                    HighPx: 0.0,
                    LowPx: 0.0,
                    LastPx: 0.0
                },
                serverMsg: ""
            }
        },
        computed: {
            PxInfoShowcase: function () {
                return {
                    "昨收价": this.$data['PxInfo']['PreClosePx'],
                    "开盘价": this.$data['PxInfo']['OpenPx'],
                    "最高价": this.$data['PxInfo']['HighPx'],
                    "最低价": this.$data['PxInfo']['LowPx'],
                    "最新价": this.$data['PxInfo']['LastPx']
                }
            }
        },
        components: {
            SearchBox, StockChart, PriceInfo, DataList
        },
        methods: {
            fetchData: function () {
                let postData = this.$refs['searchBox'].getPostData()
                // console.log(postData)

                axios({
                    url: '/aaa',
                    method: 'post',
                    data: postData
                }).then((response)=>{
                    let respMeta = {
                        "errcode": response.data.errcode,
                        "msg": response.data.msg,
                        "queryTime": response.data.queryTime,
                    }
                    if(response.data.errcode === 0){
                        this.updateData()
                    } else {
                        this.backendError()
                    }
                }).catch(()=>(
                    this.fetchError()
                ))
            },
            updateData: function(){

            },
            fetchError: function () {

            },
            backendError: function (responseMeta) {

            },
            updateMeta: function (responseMeta) {
                if(responseMeta.errcode===0) {
                    this.$data.serverMsg = '查询完成，耗时' + responseMeta.queryTime + '.'
                } else {
                    this.$data.serverMsg = '查询失败，耗时' + responseMeta.queryTime + '，错误'+responseMeta.errcode + '，服务返回消息：'+responseMeta.msg
                }
            }
        }
    }
</script>
