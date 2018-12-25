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
                <stock-chart
                    ref="priceChart"
                    :title="'最新价格'"
                    ></stock-chart>
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
            <v-flex sm4>
                <template
                        v-if="showType===0"
                    v-for="g in getInfoShowcase">
                    <data-list
                        v-if="g.type==='group'"
                        :title="g.title"
                        :data="g.data"
                    ></data-list>
                    <data-array
                        v-if="g.type==='array'"
                        :title="g.title"
                        :data="g.data"></data-array>
                </template>
                <!--<data-list-->
                        <!--v-if="showType===0"-->
                    <!--:title="PxInfoTitle"-->
                    <!--:data="PxInfoShowcase"></data-list>-->
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
    import DataArray from '@/components/DataArray.vue'
    import axios from 'axios'

    import sh2Data from '@/components/DataFieldLabel.js'

    import serializeData from '@/components/serializeData.js'

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
                serverMsg: "",
                dataStore: [sh2Data['dataStore']],
                searchType: 0,
                showType: -1,
                queryType: 0,
                dataRow: []
            }
        },
        computed: {
            PxInfoTitle: function () {
                return sh2Data['keyGroup']['PriceInfo']['label']
            },
            PxInfoShowcase: function () {
                // return {
                //     "昨收价": this.$data['PxInfo']['PreClosePx'],
                //     "开盘价": this.$data['PxInfo']['OpenPx'],
                //     "最高价": this.$data['PxInfo']['HighPx'],
                //     "最低价": this.$data['PxInfo']['LowPx'],
                //     "最新价": this.$data['PxInfo']['LastPx']
                // }
                let datas = {}
                // Fetch keylist
                let keys = sh2Data['keyGroup']['PriceInfo']['item']
                console.log(keys)
                keys.forEach((item)=>{
                    datas[sh2Data['keyLabel'][item]] = this.$data['dataStore'][0][item]
                    console.log(item)
                })
                console.log(datas)
                return datas

            },
            getInfoShowcase: function () {
                let dataList = []
                let keyGroup = sh2Data['keyGroup']
                keyGroup.forEach((group)=>{
                    let gtype = group['type']
                    if(group['type']==="group"){
                        // Normal key group
                        let keylist = group['item']
                        let newdata = {type:"group",title:group["label"],data:[]}
                        keylist.forEach((key)=>{
                            let item = {
                                name: sh2Data['keyLabel'][key],
                                value: this.$data['dataStore'][0][key]
                            }
                            newdata.data.push(item)
                        })
                        dataList.push(newdata)
                    } else {
                        // Array List
                        let keylist = group['item']
                        let newdata = {type:"array",title:group["label"],data:[]}
                        keylist.forEach((key)=>{
                            let d_item = {
                                'col_name': sh2Data['keyLabel'][key],
                                data: null
                            }
                            d_item['data'] = this.$data['dataStore'][0][key].slice()
                            newdata['data'].push(d_item)
                        })
                        dataList.push(newdata)
                    }
                })
                console.warn(dataList)
                return dataList
            }
        },
        components: {
            SearchBox, StockChart, PriceInfo, DataList, DataArray
        },
        methods: {
            fetchData: function () {
                this.$data['showType'] = -1

                let postData = {}
                let rawReq = this.$refs['searchBox'].getPostData()
                postData['engine']= rawReq['engine']
                postData['code'] = rawReq['code']


                let url = '/query/'
                if(rawReq['queryType']===0){
                    this.$data['queryType']=0
                    url = url + 'get'
                    postData['timestamp'] = rawReq['timestamp']
                } else if(rawReq['queryType']===1){
                    this.$data['queryType']=1
                    url = url + 'scan'
                    postData['start'] = rawReq['start']
                    postData['end'] = rawReq['end']
                }

                // console.log(postData)
                axios({
                    url: url,
                    method: 'get',
                    params: postData
                }).then((response)=>{
                    let respMeta = {
                        "errcode": response.data.errcode,
                        "msg": response.data.msg,
                        "queryTime": response.data.queryTime,
                    }
                    this.updateMeta(respMeta)
                    if(response.data.errcode === 0){
                        console.log('No Error happened.')
                        if(this.$data['queryType']===0){
                            this.updateData(response.data.data)
                        } else {
                            this.updateSeriesData(response.data.data)
                        }
                    } else {
                        console.warn('Backend returns an error.')
                        console.warn(respMeta)
                        this.backendError()
                    }
                }).catch(()=>(
                    this.fetchError()
                ))
            },
            saveToDataStore: function(data){
                for(let i =0; i < len(sh2Data['keyList']); i++){
                    let keyName = sh2Data['keyList'][i]
                    this.$data['dataStore'][keyName] = data[keyNames]
                }
            },
            updateData: function(rawdata){
                this.$data['dataStore'] = []
                // let newdata = sh2Data['dataStore']
                let newdata = {}
                let keyList = sh2Data['keyList']
                console.log(rawdata)
                rawdata.forEach((data)=>{
                    // keyList.forEach((key)=> {
                    //     // judge from raw data field, not ui.
                    //
                    //
                    //     if (Array.isArray(data['ui' + key])) {
                    //         //if key is a array
                    //         newdata[key] = data['ui' + key].slice()
                    //     } else {
                    //         // if key is a value
                    //         newdata[key] = data['ui' + key]
                    //     }
                    //
                    // })
                    for(let i in data){
                        let formalName = i.replace(new RegExp("arr|ui|str"),"")
                        if(keyList.includes(formalName)){
                            if(Array.isArray(data[i])){
                                newdata[formalName] = data[i].slice()
                            } else {
                                newdata[formalName] = data[i]
                            }
                        }
                        // console.log(formalName)
                    }
                })
                this.$data['dataStore'].push(newdata)

                this.$data['showType'] = 0

                // console.log(Array.isArray(rawdata[0]['arrBidNumOrders']))
                // console.log(newdata)

            },
            fetchError: function () {

            },
            backendError: function (responseMeta) {
                this.updateMeta(responseMeta)

            },
            updateMeta: function (responseMeta) {
                if(responseMeta.errcode===0) {
                    this.$data.serverMsg = '查询完成，耗时' + responseMeta.queryTime + '.'
                } else {
                    this.$data.serverMsg = '查询失败，耗时' + responseMeta.queryTime + '，错误'+responseMeta.errcode + '，服务返回消息：'+responseMeta.msg
                }
                this.$refs.searchBox.setServerMsg(this.$data.serverMsg)
            },
            updateSeriesData: function (rawData) {
                this.$data['showType'] = 1
                // Serialize:
                let data = serializeData(rawData)
                this.$refs.priceChart.setData(data)
                console.log(data)
            }
        }
    }
</script>
