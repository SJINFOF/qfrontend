<template>
    <div>
        <v-card>
            <v-tabs
                v-model="queryType">

                <v-tab
                    :key="0"
                    @click="queryType=0"
                    ripple>
                    GET
                </v-tab>
                <v-tab-item
                    :key="0">

                    <v-card-title>

                    <v-layout row wrap>
                        <!-- Stock ID -->
                        <v-flex sm4>
                            <v-text-field
                                :counter="6"
                                label="Stock Code"
                                v-model="stockCode"
                                required
                                prepend-icon="local_offer"
                            ></v-text-field>

                        </v-flex>

                        <!--ts Time-->
                        <v-flex sm4>
                            <!--<v-menu-->
                                <!--ref="menu_tsdatetime"-->
                                <!--:close-on-content-click="false"-->
                                <!--v-model="menuTsDateTime"-->
                                <!--:nudge-right="40"-->
                                <!--:return-value.sync="ts_datetime"-->
                                <!--lazy-->
                                <!--transition="scale-transition"-->
                                <!--offset-y-->
                                <!--full-width-->
                                <!--min-width="290px">-->

                                <!--<v-text-field-->
                                    <!--slot="activator"-->
                                    <!--v-model="computedTsDatetime"-->
                                    <!--label="Timestamp"-->
                                    <!--prepend-icon="event"-->
                                    <!--readonly-->
                                <!--&gt;</v-text-field>-->

                                <!--<template v-if="tsDatetimeShowPhase == 0">-->
                                    <!--<v-date-picker v-model="ts_date" no-title scrollable>-->
                                        <!--<v-spacer></v-spacer>-->
                                        <!--<v-btn flat color="primary" @click="menuTsDateTime = false">取消</v-btn>-->
                                        <!--<v-btn flat color="primary" @click="tsDatetimeShowPhase = 1">选择时间</v-btn>-->
                                    <!--</v-date-picker>-->
                                <!--</template>-->

                                <!--<template v-else>-->
                                    <!--<v-time-picker-->
                                            <!--v-model="ts_time"-->
                                            <!--format="24hr"-->
                                            <!--@change="SaveTsTime">-->
                                    <!--</v-time-picker>-->
                                <!--</template>-->

                            <!--</v-menu>-->
                            <v-text-field
                                    :counter="14"
                                    label="Query Time"
                                    v-model="ts_datetime"
                                    required
                                    prepend-icon="event"
                            ></v-text-field>
                        </v-flex>

                        <!-- Engine Selection -->
                        <v-flex sm4>
                            <v-select
                                    :items="engine_items"
                                    v-model="searchEngine"
                                    item-text="label"
                                    item-value="value"
                                    label="Backend Engine"
                                    prepend-icon="dns"
                            ></v-select>
                        </v-flex>


                    </v-layout>
                    </v-card-title>

                </v-tab-item>

                <v-tab
                    :key="1"
                    @click="queryType=1"
                    ripple>
                    Scan
                </v-tab>
                <v-tab-item
                    :key="1">
                    <v-card-title>
                        <v-layout row wrap>

                            <!-- Stock ID -->
                            <v-flex sm3>
                                <v-text-field
                                        :counter="10"
                                        label="Stock Code"
                                        v-model="stockCode"
                                        required
                                        prepend-icon="local_offer"
                                ></v-text-field>
                            </v-flex>

                            <!--Start Time-->
                            <v-flex sm3>
                                <!--<v-menu-->
                                        <!--ref="menu_startdatetime"-->
                                        <!--:close-on-content-click="false"-->
                                        <!--v-model="menuStartDateTime"-->
                                        <!--:nudge-right="40"-->
                                        <!--:return-value.sync="start_datetime"-->
                                        <!--lazy-->
                                        <!--transition="scale-transition"-->
                                        <!--offset-y-->
                                        <!--full-width-->
                                        <!--min-width="290px"-->
                                <!--&gt;-->
                                    <!--<v-text-field-->
                                            <!--slot="activator"-->
                                            <!--v-model="computedStartDatetime"-->
                                            <!--label="开始时间"-->
                                            <!--prepend-icon="event"-->
                                            <!--readonly-->
                                    <!--&gt;</v-text-field>-->
                                    <!--<template v-if="startDatetimeShowPhase == 0">-->
                                        <!--<v-date-picker v-model="start_date" no-title scrollable>-->
                                            <!--<v-spacer></v-spacer>-->
                                            <!--<v-btn flat color="primary" @click="menuStartDateTime = false">取消</v-btn>-->
                                            <!--<v-btn flat color="primary" @click="startDatetimeShowPhase = 1">选择时间</v-btn>-->
                                        <!--</v-date-picker>-->
                                    <!--</template>-->
                                    <!--<template v-else>-->
                                        <!--<v-time-picker-->
                                                <!--v-model="start_time"-->
                                                <!--format="24hr"-->
                                                <!--@change="SaveStartTime">-->
                                        <!--</v-time-picker>-->
                                    <!--</template>-->
                                <!--</v-menu>-->
                                <v-text-field
                                        :counter="14"
                                        label="Start Time"
                                        v-model="start_datetime"
                                        required
                                        prepend-icon="event"
                                ></v-text-field>
                            </v-flex>

                            <!-- End Time -->
                            <v-flex sm3>
                                <!--<v-menu-->
                                        <!--ref="menu_startdatetime"-->
                                        <!--:close-on-content-click="false"-->
                                        <!--v-model="menuEndDateTime"-->
                                        <!--:nudge-right="40"-->
                                        <!--:return-value.sync="end_datetime"-->
                                        <!--lazy-->
                                        <!--transition="scale-transition"-->
                                        <!--offset-y-->
                                        <!--full-width-->
                                        <!--min-width="290px" >-->
                                    <!--<v-text-field-->
                                            <!--slot="activator"-->
                                            <!--v-model="computedEndDatetime"-->
                                            <!--label="结束时间"-->
                                            <!--prepend-icon="forward"-->
                                            <!--readonly-->
                                    <!--&gt;</v-text-field>-->
                                    <!--<template v-if="endDatetimeShowPhase == 0">-->
                                        <!--<v-date-picker v-model="end_date" no-title scrollable>-->
                                            <!--<v-spacer></v-spacer>-->
                                            <!--<v-btn flat color="primary" @click="menuEndDateTime = false">取消</v-btn>-->
                                            <!--<v-btn flat color="primary" @click="endDatetimeShowPhase = 1">选择时间</v-btn>-->
                                        <!--</v-date-picker>-->
                                    <!--</template>-->
                                    <!--<template v-else>-->
                                        <!--<v-time-picker-->
                                                <!--v-model="end_time"-->
                                                <!--format="24hr"-->
                                                <!--@change="SaveEndTime">-->
                                        <!--</v-time-picker>-->
                                    <!--</template>-->
                                <!--</v-menu>-->
                                <v-text-field
                                        :counter="14"
                                        label="End Time"
                                        v-model="end_datetime"
                                        required
                                        prepend-icon="event"
                                ></v-text-field>
                            </v-flex>


                            <!-- Engine Selection -->
                            <v-flex sm3>
                                <v-select
                                        :items="engine_items"
                                        v-model="searchEngine"
                                        item-text="label"
                                        item-value="value"
                                        label="Backend Engine"
                                        prepend-icon="dns"
                                ></v-select>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                </v-tab-item>
            </v-tabs>

            <v-card-actions>
                <v-container fluid>
                    <v-layout row wrap>
                        {{ serverMsg }}
                        <v-spacer></v-spacer>
                        <v-btn
                                :loading="searchLoading"
                                :disabled="searchLoading"
                                color="primary"
                                @click="RunSearch"
                        >
                            Run Search
                        </v-btn>
                    </v-layout>

                </v-container>

            </v-card-actions>
        </v-card>
    </div>
</template>

<style>
    /*.custom-loader {*/
        /*animation: loader 1s infinite;*/
        /*display: flex;*/
    /*}*/
    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>

<script>
    export default {
        data () {
            return {
                engine_items: [
                    {
                        label: 'mongo',
                        value: 'mongo'
                    },
                    {
                        label: 'HBase',
                        value: 'hbase'
                    }
                ],
                queryType: 0,
                searchEngine: "",
                stockCode: "000011",
                curDate: new Date().toISOString().substr(0, 10),
                start_date: new Date().toISOString().substr(0, 10),
                start_time: "00:00",
                start_datetime: "20180103092501",
                startDatetimeShowPhase: false, // false: datepick true:timepick
                end_date: new Date().toISOString().substr(0, 10),
                end_time: "00:00",
                end_datetime: "20180103092502",
                endDatetimeShowPhase: false, // false: datepick true:timepick

                ts_date: new Date().toISOString().substr(0, 10),
                ts_time: "00:00",
                ts_datetime: "20180103092501",
                tsDatetimeShowPhase: false, // false: datepick true:timepick

                menuTsDateTime: false,
                menuStartDateTime: false,
                menuEndDateTime: false,

                loader: null,
                searchLoading: false,

                searchMessage: "",
                serverMsg: ""
            }
        },
        // props: [
        //     'returnMessage'
        // ],
        computed: {
            computedStartDatetime: function () {
                return this.$data.start_date + " " + this.$data.start_time
            },
            computedEndDatetime: function () {
                return this.$data.end_date + " " + this.$data.end_time
            },
            computedTsDatetime: function () {
                return this.$data.ts_date + " " + this.$data.ts_time
            }
        },
        methods: {
            SaveStartDate: function () {

            },
            SaveStartTime: function () {
                this.$data.startDatetimeShowPhase = 0
                this.$data.menuStartDateTime = false
            },
            SaveEndDate: function () {

            },
            SaveEndTime: function () {
                this.$data.endDatetimeShowPhase = 0
                this.$data.menuEndDateTime = false
            },
            SaveTsDate: function () {

            },
            SaveTsTime: function () {
                this.$data.tsDatetimeShowPhase = 0
                this.$data.menuTsDateTime = false
            },
            StartLoader: function() {
                this.$data.loader = 'searchLoading'
                const l = this.loader
                console.log(l)
                this[l] = !this[l]

                // setTimeout(() => (this[l] = false), 3000)
                //
                // this.loader = null


                // this.$data.loader = 'searchLoading'
            },
            EndLoader: function () {
                const l = this.loader
                // this[l] = !this[l]
                this[l] = false
                this.loader = null
            },
            RunSearch: function () {
                this.StartLoader()
                this.$emit('StartSearch')
            },
            getPostData: function () {
                let data = {
                    queryType: this.$data.queryType,
                    code: this.$data.stockCode,
                    // timestamp: this.$data.ts_date.replace(new RegExp("-", 'g'),"") + "" + this.$data.ts_time.replace(new RegExp(":", 'g'),"") + "00",
                    // start: this.$data.start_date.replace(new RegExp("-", 'g'),"") + "" + this.$data.start_time.replace(new RegExp(":", 'g'),"") + "00",
                    // end: this.$data.end_date.replace(new RegExp("-", 'g'),"") + "" + this.$data.end_time.replace(new RegExp(":", 'g'),"") + "00",
                    engine: this.$data.searchEngine
                }
                if(this.$data.queryType===0){
                    data['timestamp'] = this.$data.ts_datetime
                } else {
                    console.log('hit')
                    data['start'] = this.$data.start_datetime
                    data['end'] = this.$data.end_datetime
                }
                console.log(data)
                return data
            },
            setServerMsg: function (message) {
                this.$data.serverMsg = message
                console.log(message)
            }
        },
        // watch: {
        //     loader () {
        //         const l = this.loader
        //         this[l] = !this[l]
        //
        //         setTimeout(() => (this[l] = false), 3000)
        //
        //         this.loader = null
        //     }
        // }
    }
</script>

