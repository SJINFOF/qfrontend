<template>
    <div>
        <v-card>
            <v-card-title class="subheading font-weight-bold">
                <!--<v-layout row>-->
                    <!--<p>昨收价：{{ PreClosePx || 0.00 }}</p>-->
                <!--</v-layout>-->
                <!--<v-layout row>-->
                    <!--<p>开盘价：{{ OpenPx || 0.00 }}</p>-->
                <!--</v-layout>-->
                <!--<v-layout row>-->
                    <!--<p>最高价：{{ HighPx || 0.00 }}</p>-->
                <!--</v-layout>-->
                <!--<v-layout row>-->
                    <!--<p>最低价：{{ LowPx || 0.00 }}</p>-->
                <!--</v-layout>-->
                <!--<v-layout row>-->
                    <!--<p>最新价：{{ LastPx || 0.00 }}</p>-->
                <!--</v-layout>-->
                价格信息


            </v-card-title>
            <v-divider></v-divider>
            <v-list>
                <template
                    v-for="(value, key) in priceInfos"
                >
                    <v-list-tile>
                        <v-list-tile-content>{{ key }}</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ value }}</v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-card>
    </div>
</template>

<style></style>

<script>
    export default {
        data: () => ({

        }),
        props:[
            'PreClosePx', 'OpenPx', 'HighPx', 'LowPx', 'LastPx'
        ],
        computed: {
            priceInfos: function () {
                return {
                    "昨收价": this.$props['PreClosePx'],
                    "开盘价": this.$props['OpenPx'],
                    "最高价":this.$props['HighPx'],
                    "最低价":this.$props['LowPx'],
                    "最新价":this.$props['LastPx']
                }
            }
        }
    }
</script>
