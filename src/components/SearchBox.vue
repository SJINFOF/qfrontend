<template>
    <div>
        <v-card>
            <v-card-title>
                <v-layout row wrap>
                    <v-flex sm3>
                        <v-text-field
                            :counter="10"
                            label="Stock Code"
                            v-model="stockCode"
                            required
                            prepend-icon="local_offer"
                        ></v-text-field>

                    </v-flex>

                    <v-flex sm3>
                        <v-menu
                            ref="menu_startdatetime"
                            :close-on-content-click="false"
                            v-model="menuStartDateTime"
                            :nudge-right="40"
                            :return-value.sync="start_datetime"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <v-text-field
                                slot="activator"
                                v-model="computedStartDatetime"
                                label="开始时间"
                                prepend-icon="event"
                                readonly
                            ></v-text-field>
                            <template v-if="startDatetimeShowPhase == 0">
                                <v-date-picker v-model="start_date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menuStartDateTime = false">取消</v-btn>
                                    <v-btn flat color="primary" @click="startDatetimeShowPhase = 1">选择时间</v-btn>
                                </v-date-picker>
                            </template>
                            <template v-else>
                                <v-time-picker
                                    v-model="start_time"
                                    format="24hr"
                                    @change="SaveStartTime">
                                </v-time-picker>
                            </template>


                        </v-menu>
                    </v-flex>

                    <v-flex sm3>
                        <v-menu
                                ref="menu_startdatetime"
                                :close-on-content-click="false"
                                v-model="menuEndDateTime"
                                :nudge-right="40"
                                :return-value.sync="end_datetime"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                        >
                            <v-text-field
                                    slot="activator"
                                    v-model="computedEndDatetime"
                                    label="结束时间"
                                    prepend-icon="forward"
                                    readonly
                            ></v-text-field>
                            <template v-if="endDatetimeShowPhase == 0">
                                <v-date-picker v-model="end_date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menuEndDateTime = false">取消</v-btn>
                                    <v-btn flat color="primary" @click="endDatetimeShowPhase = 1">选择时间</v-btn>
                                </v-date-picker>
                            </template>
                            <template v-else>
                                <v-time-picker
                                        v-model="end_time"
                                        format="24hr"
                                        @change="SaveEndTime">
                                </v-time-picker>
                            </template>


                        </v-menu>
                    </v-flex>

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
            <v-card-actions>
                <v-container fluid>
                    <v-layout row wrap>
                        {{ returnMessage }}
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
                searchEngine: "",
                stockCode: "",
                curDate: new Date().toISOString().substr(0, 10),
                start_date: new Date().toISOString().substr(0, 10),
                start_time: "00:00",
                start_datetime: "",
                startDatetimeShowPhase: false, // false: datepick true:timepick
                end_date: new Date().toISOString().substr(0, 10),
                end_time: "00:00",
                end_datetime: "",
                endDatetimeShowPhase: false, // false: datepick true:timepick
                menuStartDateTime: false,
                menuEndDateTime: false,

                loader: null,
                searchLoading: false,

                searchMessage: ""
            }
        },
        props: [
            'returnMessage'
        ],
        computed: {
            computedStartDatetime: function () {
                return this.$data.start_date + " " + this.$data.start_time
            },
            computedEndDatetime: function () {
                return this.$data.end_date + " " + this.$data.end_time
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
            EndLoader: function () {
                this.loader = null
            },
            RunSearch: function () {
                this.$data.loader = 'searchLoading'
                this.$emit('StartSearch')

            },
            getPostData: function () {
                let data = {
                    code: this.$data.stockCode,
                    start: this.$data.start_date.replace(new RegExp("-", 'g'),"") + "-" + this.$data.start_time + ":00",
                    end: this.$data.end_date.replace(new RegExp("-", 'g'),"") + "-" + this.$data.end_time + ":00",
                    engine: this.$data.searchEngine
                }
                return data
            }
        },
        watch: {
            loader () {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            }
        }
    }
</script>

