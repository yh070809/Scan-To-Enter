<style scoped src="./style.css"></style>
<template>
  <div>
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
  </div>
</template>

<script>
import Vue from "vue";
import QrcodeVue from 'qrcode.vue'
import {Button,Icon,Row} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import moment from 'moment'
export default {
  name: 'QRCode',
  data () {
    return {
      //value:this.$route.params.form,
      value: this.$route.params.form.ic + ' ' + moment().format() + ' '+ this.$route.params.form.mobile_number ,
      size: 290
    }
  },
  components: {
      QrcodeVue,
    },
  // mounted(){
  //   console.log(this.$route.params.form)
  //   console.log('hahaha')
  // }
}
</script>