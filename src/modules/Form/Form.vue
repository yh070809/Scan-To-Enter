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
            "
            @change="onICChange"
            >
                <a-icon slot="prefix" type="idcard" />
            </a-input>
        </a-form-model-item>

        <a-form-model-item ref="fullname" prop="fullname" label="Full Name (as in ID Document) ">
            <a-input v-model="form.fullname"
            @blur="
            () => {
                $refs.fullname.onFieldBlur();
            }
            "
            @change="onNameChange"
            >
                <a-icon slot="prefix" type="user" />
            </a-input>
        </a-form-model-item>

        <a-form-model-item ref="mobile_number" prop="mobile_number" label="Mobile Number">
            <a-input v-model="form.mobile_number"
            @blur="
            () => {
                $refs.mobile_number.onFieldBlur();
            }
            "
            @change="onMobileChange"
            >
                <a-icon slot="prefix" type="mobile" />
            </a-input>
        </a-form-model-item>
        <a-form-model-item>
            <a-checkbox class="remember-box" @change="onCheckChange" :checked="checked">
              Remember me
            </a-checkbox>
        </a-form-model-item>
        <a-form-model-item>
            <p> Disclosure </p>
            <p> Disclosure: By submitting your information, you agree to our terms and consent to the collection and use of your infomation by the building management for the purpose of COVID-19 contact tracing </p>
        </a-form-model-item>

        <a-form-model-item>
            <a-button type="primary" @click="onSubmit"> {{submit}} </a-button>
        </a-form-model-item>

    </a-form-model>


  </div>
</template>

<script>
import Vue from "vue";
import {FormModel,Input,Button,Checkbox} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueCookie from 'vue-cookie';
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(VueCookie);
export default {
  name: 'Form',
  data () {
    return {
      checked:true,
      submit:this.$route.query.check +' submit',
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
    onICChange(e){
      this.form.ic = e.target.value
    },
    onNameChange(e){
      this.form.fullname = e.target.value
    },
    onMobileChange(e){
      this.form.mobile_number = e.target.value
    },
    onCheckChange(e){
      console.log(`checked = ${e.target.checked}`);
      this.checked = e.target.checked
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if( this.checked){
            this.$cookie.set('ic', this.form.ic, 7);
            this.$cookie.set('fullname', this.form.fullname, 7);
            this.$cookie.set('mobile', this.form.mobile_number, 7);
          }else{
            this.$cookie.delete('ic');
             this.$cookie.delete('fullname');
            this.$cookie.delete('mobile');
          }
          this.$router.push({path:'/qr-code',query: { ic:this.ic}})
          console.log('submit!!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
     mounted(){
     this.form.ic = this.$cookie.get('ic') ? this.$cookie.get('ic') :'';
     this.form.fullname = this.$cookie.get('fullname') ? this.$cookie.get('fullname') :'' ;
     this.form.mobile_number = this.$cookie.get('mobile')? this.$cookie.get('mobile'):'';

   }
}
</script>