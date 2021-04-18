<template>
   <header>
      <img src="~@/assets/green-logo-2048x427.png" alt="">
      <div class="user-info">
         <div class="add-employee">
            <router-link to="/add-employee">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.125 10H16.875" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 3.125V16.875" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               <span>Add employee</span>
            </router-link>
         </div>
         <img src="~@/assets/profile-picture.jpeg" alt="">
         <span>John Doe</span>
      </div>
   </header>
</template>
<style lang="scss" scoped>
   
   header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 12px 40px;
      position: sticky;
      top: 0;
      > img {
         max-width: 180px;
      }
      .user-info {
         display: flex;
         flex-direction: row;
         align-items: center;
         .add-employee {
            margin-right: 50px;
            background-color: #29b474;
            height: 45px;
            padding: 0 20px;
            line-height: 44px;
            border-radius: 6px;
            box-sizing: border-box;
            font-weight: 600;
            a {
               color: #fff;
            }
            svg {
               margin-right: 12px;
            }
         }
         img {
            width: 50px;
            border-radius: 50%;
            margin-right: 12px;
         }
         img, span, svg {
            display: inline-block;
            vertical-align: middle;
         }
      }
   }
</style>