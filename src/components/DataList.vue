<template>
    <div>
        <v-card>
            <v-card-title class="subheading font-weight-bold">
                {{ title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-list>
                <template
                        v-for="d in data"
                >
                    <v-list-tile>
                        <v-list-tile-content>{{ d.name }}</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ d.value }}</v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-card>
    </div>
</template>

<style></style>

<script>
    // Data Example
    // [
    //      { "name": "showname",
    //         "value": val
    //      }
    //
    // ]
    export default {
        data: () => ({

        }),
        props:[
            'title', 'data'
        ]/*,
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
        }*/
    }
</script>
