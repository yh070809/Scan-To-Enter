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
      value:moment().format(),
      size: 290
    }
  },
  components: {
      QrcodeVue,
    },
}
</script>