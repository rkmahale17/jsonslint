<template>
    <div class="messagebox" v-if="show">
        <div class="d-flex just-content-space-between">
            
            <div><i>{{ message }}</i></div>
        <div>
            
        <!-- <i class="bi bi-dash-circle"></i> -->
  
        </div>
        </div>
    </div>
    
</template>
<script>
export default {
   props: {
    message: String
   },

   data(){
    return{
        show: true
    }
   },
   created(){
      setTimeout(() =>{this.show = false;}, 6000)
   }
}
</script>
<style scoped>
.messagebox {
    padding: 10px;
    background: #95f38e;
    border-left: 3px solid #0fd900;
    margin-bottom: 10px;
    font-size:12px;

}
</style>