<template>
   <aside>
      <nav>
         <router-link to="/">
            <span>View employees</span>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.42681 1.57178L5.5 6.07178L1.42681 10.5718" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </router-link>
      </nav>
   </aside>
</template>

<style lang="scss" scoped>
   aside {
      position: fixed;
      left: 0;
      top: 74px;
      height: 100%;
      background-color: #fff;
      padding: 40px;
      width: 200px;
      nav {
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         a {
            display: block;
            padding: 20px 0;
            color: #202020;
            text-decoration: none;
            width: 100%;
            text-align: left;
            position: relative;
            svg {
               position: absolute;
               right: 0;
               top: 50%;
               margin-top: -6px;
            }
         }
      }
   }
</style>