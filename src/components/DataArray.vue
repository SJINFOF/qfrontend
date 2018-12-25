<template>
    <div>
        <!--<v-card>-->
            <!--<v-card-title class="subheading font-weight-bold">-->
                <!--{{ title }}-->
            <!--</v-card-title>-->
            <!--<v-divider></v-divider>-->
            <!--<v-list>-->
                <!--<template-->
                        <!--v-for="d in data"-->
                <!--&gt;-->
                    <!--<v-list-tile>-->
                        <!--<v-list-tile-content>{{ d.name }}</v-list-tile-content>-->
                        <!--<v-list-tile-content class="align-end">{{ d.value }}</v-list-tile-content>-->
                    <!--</v-list-tile>-->
                <!--</template>-->
            <!--</v-list>-->
        <!--</v-card>-->

        <template>
        <v-data-table
                :headers="headers"
                :items="items"
                class="elevation-1">
            <template slot="items" slot-scope="props">
                <!--{{props.item}}-->
                    <td v-for="item in props.item">{{item}}</td>
                <!--<td class="text-xs-right">{{ props.item.fat }}</td>-->
                <!--<td class="text-xs-right">{{ props.item.carbs }}</td>-->
                <!--<td class="text-xs-right">{{ props.item.protein }}</td>-->
                <!--<td class="text-xs-right">{{ props.item.iron }}</td>-->
            </template>
        </v-data-table>
        </template>
    </div>
</template>

<style></style>

<script>
    // Data Example
    // [
    //      {
    //          "name": ["line_showname"], or simply shows #1, #2,... ##DEPRECATED
    //          "col_name": "",
    //          "data": [val1, val2, ...]
    //      }
    // ]
    //
    export default {
        data: () => ({
            colList:[]
        }),
        props:[
            'title', 'data'
        ],
        computed: {
            showName: function () {

            },
            headers: function () {
                // this.$data['colList'] = ['linename']
                let headerList=[{
                    text: '#',
                    align: 'left',
                    sortable: false,
                    value: 'linename'
                }]
                this.$props['data'].forEach((col,idx)=>{
                    headerList.push({
                        text: col['col_name'] || 'Value_' + (idx+1).toString(),
                        value: 'val_' + idx.toString(),
                        sortable: false
                    })
                    // this.$data['colList'].push('val_' + idx.toString())
                })
                console.warn('Header list')
                console.log(headerList)
                return headerList
            },
            items: function () {
                let lineName = []
                // if(this.$props["data"].hasOwnProperty("name") && this.$props["data"]["name"].length === this.$props["data"]["value"].length){
                //     lineName = this.$props["data"]["name"].slice()
                // } else {
                    console.log(this.$props["data"])
                    for(let i = 0;i<this.$props["data"][0]["data"].length;i++){
                        lineName.push("#"+i.toString())
                    }
                // }
                let showData = []
                // Init showData List with name property
                lineName.forEach((ln)=>{
                    let newdata = {
                        // value: false,
                        linename: ln
                    }
                    showData.push(newdata)
                })

                // Add data to showData list, order by each column
                this.$props['data'].forEach((dataItem, col_idx)=>{
                    showData.forEach((sdata, d_idx)=>{
                        showData[d_idx]['val_'+col_idx.toString()]=dataItem['data'][d_idx]
                    })
                })
                console.log(showData)
                return showData
            }
        }
    }
</script>
