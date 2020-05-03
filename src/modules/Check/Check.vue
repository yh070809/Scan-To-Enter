<style scoped src="./style.css"></style>
<template>
  <div>
    <a-row>
      <button class="check-box"  @click="onCheckin">
      <a-icon type="arrow-left" id="check-in"/>     
        {{check_in}}&nbsp;&nbsp;
      </button>
    </a-row>
    <a-row>
    <button class="check-box" @click="onCheckOut">
     <a-icon type="arrow-right" id="check-out"/>     
      {{check_out}}
    </button>
    </a-row>
  </div>
</template>

<script>
import Vue from "vue";
import {Button,Icon,Row} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Button);
Vue.use(Icon);
Vue.use(Row);
export default {
  name: 'Check',
  data () {
    return {
      check_in:'Check   In ',
      check_out:'Check Out',
      size: 'large'
    }
  },
    methods: {
    onCheckin: function() {
        console.log('Check in')
        // window.location.href = "/form";
        this.$router.push({path:'/form',query: { check:'Check in'}})
      },
    onCheckOut: function(){
      console.log('Check Out !')
     // window.location.href = "/form";
     this.$router.push({path:'/form',query: { check:'Check out'}})
    }
  },
}
</script>