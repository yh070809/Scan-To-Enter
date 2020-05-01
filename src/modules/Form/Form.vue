<style scoped src="./style.css"></style>
<template>
  <div class="formbox">
    <a-form-model :layout="form.layout" :model="form" ref="ruleForm" :rules="rules">
        <a-form-model-item ref="ic" prop="ic" label="NRIC/FIN:">
            <a-input v-model="form.ic"
            @blur="
            () => {
                $refs.ic.onFieldBlur();
            }
            ">
                <a-icon slot="prefix" type="idcard" />
            </a-input>
        </a-form-model-item>

        <a-form-model-item ref="fullname" prop="fullname" label="Full Name (as in ID Document) ">
            <a-input v-model="form.fullname"
            @blur="
            () => {
                $refs.fullname.onFieldBlur();
            }
            ">
                <a-icon slot="prefix" type="user" />
            </a-input>
        </a-form-model-item>

        <a-form-model-item ref="mobile_number" prop="mobile_number" label="Mobile Number">
            <a-input v-model="form.mobile_number"
            @blur="
            () => {
                $refs.mobile_number.onFieldBlur();
            }
            ">
                <a-icon slot="prefix" type="mobile" />
            </a-input>
        </a-form-model-item>

        <a-form-model-item>
            <p> Disclosure </p>
            <p> Disclosure: By submitting your information, you agree to our terms and consent to the collection and use of your infomation by the building management for the purpose of COVID-19 contact tracing </p>
        </a-form-model-item>

        <a-form-model-item>
            <a-button type="primary" @click="onSubmit"> Submit </a-button>
        </a-form-model-item>

    </a-form-model>


  </div>
</template>

<script>
import Vue from "vue";
import {FormModel,Input,Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Button);
export default {
  name: 'Form',
  data () {
    return {
      form: {
        layout: 'vertical',
        ic: '',
        fullname: '',
        mobile_number:''
      },
      rules:{
          ic: [
            { required: true, message: 'Please input your NRIC/FIN No.', trigger: 'blur' },
          ],
          fullname:[
              { required: true, message: 'Please input your full name as in ID document', trigger: 'blur' },
          ],
          mobile_number:[
              { required: true, message: 'Please input mobile number', trigger: 'blur' },
          ]
      }
   
    }
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        // if (valid) {
        //   console.log('submit!!');
        // } else {
        //   console.log('error submit!!');
        //   return false;
        // }
        console.log('submit!!')
        window.location.href = "/qr-code";
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
}
</script>