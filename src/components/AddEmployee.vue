<template>
   <div class="add-employee__section">
      <h1>Add employee</h1>
       <ValidationObserver v-slot="{ handleSubmit }">
         <div class="form">
            <ValidationProvider name="title" rules="required" v-slot="{ errors }">
               <input type="text" v-model="title" name="title" id="title" placeholder="Title" :class="{'error': errors.length > 0 }">
            </ValidationProvider>
            <div class="add-employee__name">
               <ValidationProvider name="first_name" rules="required" v-slot="{ errors }">
                  <input type="text" v-model="firstName" name="first_name" id="first_name" placeholder="First name" :class="{'error': errors.length > 0 }">
               </ValidationProvider>
               <ValidationProvider name="last_name" rules="required" v-slot="{ errors }">
                  <input type="text" v-model="lastName" name="last_name" id="last_name" placeholder="Last name" :class="{'error': errors.length > 0 }">
               </ValidationProvider>
            </div>
            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
               <input type="email" v-model="emailAddress" name="email_address" id="country" placeholder="Email" :class="{'error': errors.length > 0 }">
            </ValidationProvider>
            <ValidationProvider name="address1" rules="required" v-slot="{ errors }">
               <input type="text" v-model="address1" name="address1" id="address1" placeholder="Address 1" :class="{'error': errors.length > 0 }">
            </ValidationProvider>
            <input type="text" v-model="address2" name="address2" id="address2" placeholder="Address 2">
            <ValidationProvider name="selectedCountry" rules="required_country" v-slot="{ errors }">
               <v-select :options="countries" label="country_name" v-model="selectedCountry" :clearable=false :multiple=false @input="changedCountry" :class="{'error': errors.length > 0 }"></v-select>
            </ValidationProvider>
            <v-select :options="states" label="name" v-model="selectedState" :clearable=false :multiple=false :disabled="isStateDisabled"></v-select>
            <input type="text" v-model="province" name="province" id="province" placeholder="Province">
            <ValidationProvider name="city" rules="required" v-slot="{ errors }">
               <input type="text" v-model="city" name="city" id="city" placeholder="City" :class="{'error': errors.length > 0 }">
            </ValidationProvider>
            <button @click="handleSubmit(createEmployee)" :class="{'loading': isLoading}">Create employee</button>
         </div>
      </ValidationObserver>
   </div>
</template>

<script>

import axios from 'axios'
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('email', email)
extend('required', {
  ...required,
  message: 'This field is required'
})
extend('required_country', {
  validate(value) {
    return {
      required: true,
      valid: value !== 'Choose country'
    };
  },
  computesRequired: true
})

Vue.component('v-select', vSelect)

export default {
   components: {
      ValidationProvider,
      ValidationObserver
   },
   mounted() {
      axios.get('https://devapi.wurkzen.com/v1/countries')
         .then( (response) => {
            this.countries = response.data
         })
      axios.get('https://devapi.wurkzen.com/v1/states')
         .then( (response) => {
            this.states = response.data
         })
   },
   data() {
      return {
         countries: [],
         selectedCountry: 'Choose country',
         states: [],
         selectedState: 'Choose state',
         isStateDisabled: true,
         emailAddress: null,
         firstName: null,
         lastName: null,
         address1: null,
         address2: null,
         province: null,
         city: null,
         title: null,
         isLoading: false
      }
   },
   methods: {
      changedCountry() {
         if (this.selectedCountry.country_name === 'United States') {
            this.isStateDisabled = false
         }
      },
      createEmployee() {
         axios.post('https://devapi.wurkzen.com/v1/employee', {
            address1: this.address1,
            address2: this.address2,
            city: this.city,
            client_id: 3,
            country_id: this.selectedCountry.id,
            email_address: this.emailAddress,
            first_name: this.firstName,
            last_name: this.lastName,
            province: this.province,
            role_id: 4,
            state_id: this.selectedState.id,
            title: this.title
         })
         .then( () => {
            this.$router.push({ path: '/' })
         })
      }
   }
}
</script>

<style lang="scss" scoped>
   .add-employee__section {
      background-color: #fff;
      border-radius: 6px;
      max-width: 600px;
      margin: 32px auto;
      padding: 20px 32px;
   }
   .form {
      input {
         display: block;
         appearance: none;
         background-color: #fff;
         border: 1px solid #d0dde4;
         height: 45px;
         width: 100%;
         margin-top: 16px;
         border-radius: 4px;
         padding: 0 16px;
         box-sizing: border-box;
         font-family: 'Roboto';
         font-size: 16px;

         &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #8d9ea7;
         }
         &::-moz-placeholder { /* Firefox 19+ */
            color: #8d9ea7;
         }
         &:-ms-input-placeholder { /* IE 10+ */
            color: #8d9ea7;
         }
         &:-moz-placeholder { /* Firefox 18- */
            color: #8d9ea7;
         }
         &.error {
            border-color: #e48686;
            &:focus {
               box-shadow: none;
            }
         }
         &:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(20, 137, 232, 0.75);
         }
      }
      > div {
         &.add-employee__name {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            > span {
               
               width: 48%;
            }
         }
      }
      button {
         appearance: none;
         border: none;
         font-size: 16px;
         margin-top: 50px;
         margin-bottom: 32px;
         background-color: #29b474;
         color: #fff;
         height: 54px;
         padding: 0 20px;
         line-height: 44px;
         border-radius: 6px;
         box-sizing: border-box;
         font-weight: 600;
         width: 100%;
         cursor: pointer;
         &:hover {
            background-color: #249e66;
         }
      }
      .v-select {
         display: block;
         margin-top: 16px;
         
         &::v-deep .vs__dropdown-toggle {
            height: 45px !important;
            border-color: #d0dde4;
            padding: 0 16px;
            width: 100%;
            box-sizing: border-box;
            .vs__selected-options {
               .vs__selected {
                  padding: 0;
                  margin: 0;
               }
            }
            .vs__actions {
               padding: 3px 0 0;
            }
         }
         &::v-deep {
            &.error {
               .vs__dropdown-toggle {
                  border-color: #e48686;
               }
            }
            &.vs--single.vs--open {
               .vs__selected {
                  position: static !important;
               }
            }
            .vs__dropdown-menu {
               padding-top: 0;
               .vs__dropdown-option {
                  font-family: "Roboto", sans-serif;
                  padding: 12px 16px;
                  &.vs__dropdown-option--highlight {
                     background: #29b474;
                  }
               }
            }
            &.vs--disabled {
               .vs__selected {
                  color: #9e9fa7;
               }
               .vs__dropdown-toggle {
                  border-color: #e8e8e8;
               }
            }
         }
        
      }
      
   }
</style>
