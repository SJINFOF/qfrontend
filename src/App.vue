<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>行情数据查询</span>
        <!--<span class="font-weight-light">MATERIAL DESIGN</span>-->
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container grid-list-lg>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      //
    }
  }
}
</script>
