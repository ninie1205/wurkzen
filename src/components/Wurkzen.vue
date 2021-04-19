<template>
   <div class="employee-list">
      <ul>
         <li v-for="employee in employees" :key="employee.id" class="employee">
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M24.5 30.625C31.2655 30.625 36.75 25.1405 36.75 18.375C36.75 11.6095 31.2655 6.125 24.5 6.125C17.7345 6.125 12.25 11.6095 12.25 18.375C12.25 25.1405 17.7345 30.625 24.5 30.625Z" stroke="#202020" stroke-width="2" stroke-miterlimit="10"/>
               <path d="M5.93146 41.342C7.81405 38.0834 10.521 35.3776 13.7804 33.4964C17.0398 31.6153 20.7369 30.625 24.5002 30.625C28.2635 30.625 31.9605 31.6154 35.2199 33.4967C38.4793 35.3779 41.1862 38.0837 43.0687 41.3423" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="employee__info">
               <div class="employee__name">
                  {{ employee.first_name }}
                  {{ employee.last_name }}
                  ({{ employee.title }})
               </div>
               <div class="employee__address">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#A1B7C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="#A1B7C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{ employee.address1 }}
               </div>
            </div>
            <div class="employee__edit">
               <router-link :to="{ name: 'EditEmployee', params: {employeeID: employee.id } }" class="button">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V15.3107C3.75 15.2122 3.7694 15.1147 3.80709 15.0237C3.84478 14.9327 3.90003 14.85 3.96967 14.7803L15.2197 3.53034C15.3603 3.38969 15.5511 3.31067 15.75 3.31067C15.9489 3.31067 16.1397 3.38969 16.2803 3.53034L20.4697 7.71968C20.6103 7.86033 20.6893 8.0511 20.6893 8.25001C20.6893 8.44892 20.6103 8.63969 20.4697 8.78034L9 20.25Z" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M12.75 6L18 11.25" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </router-link>
               <button class="button" @click="removeEmployee(employee.id)">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20.7145 5.25L4.21448 5.25001" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M10.2148 9.75V15.75" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M14.7148 9.75V15.75" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M19.2148 5.25V19.5C19.2148 19.6989 19.1358 19.8897 18.9952 20.0303C18.8545 20.171 18.6638 20.25 18.4648 20.25H6.46484C6.26593 20.25 6.07517 20.171 5.93451 20.0303C5.79386 19.8897 5.71484 19.6989 5.71484 19.5V5.25" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M16.2148 5.25V3.75C16.2148 3.35218 16.0568 2.97064 15.7755 2.68934C15.4942 2.40804 15.1127 2.25 14.7148 2.25H10.2148C9.81702 2.25 9.43549 2.40804 9.15418 2.68934C8.87288 2.97064 8.71484 3.35218 8.71484 3.75V5.25" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </button>
            </div>
         </li>
      </ul>
   </div>
</template>

<script>

import axios from 'axios'

export default {
   data() {
      return {
         employees: null
      }
   },
   mounted() {
      axios.get('https://devapi.wurkzen.com/v1/client/1/employees')
         .then( (response) => {
            this.employees = response.data
         })
   },
   methods: {
      removeEmployee(employeeID) {
         axios.delete(`https://devapi.wurkzen.com/v1/client/1/employee/${employeeID}`)
         .then( () => {
            axios.get('https://devapi.wurkzen.com/v1/client/1/employees')
            .then( (response) => {
               this.employees = response.data
               this.nexTick(() => {
                  this.$forceUpdate()
               })
            })
            
         })
      }
   }
}

</script>

<style lang="scss" scoped>
   .employee-list {
      margin-top: 20px;
   }
   .employee {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      background-color: #fff;
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border-radius: 4px;
      > svg {
         width: 40px;
      }
      .employee__info {
         text-align: left;
         margin-left: 16px;
         .employee__name,
         .employee__address {
            text-transform: capitalize;
         }
         .employee__name {
            font-weight: 700;
         }
         .employee__address {
            color: #97b0bd;
            margin-top: 7px;
            svg {
               vertical-align: bottom;
            }
         }
      }
      .employee__edit {
         margin-left: auto;
         a {
            display: inline-block;
            border-radius: 3px;
            width: 40px;
            height: 40px;
            line-height: 40px;
            margin-right: 4px;
            vertical-align: middle;
            svg {
               display: inline-block;
               vertical-align: middle;
            }
            &:hover {
               background-color: #E9E9E9;
            }
         }
         button {
            appearance: none;
            background: none;
            border:none;
            cursor: pointer;
            border-radius: 3px;
            width: 40px;
            height: 40px;
            line-height: 1;
            vertical-align: middle;
            &:hover {
               background-color: #E9E9E9;
            }
         }
      }
   }
</style>