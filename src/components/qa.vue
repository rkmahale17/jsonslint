<template>
    <div class="qa-wrapper" v-if="load">
<div class="card p-2 bg-black-qa qa">
    <h4> <span class=" ">  {{ getQuestion(id).question + "?"}}</span></h4>
<hr>
<h6> <span >{{ getQuestion(id).answer}}</span></h6>
</div>


<br>

   <h5> 


    More questions and answer
   </h5>
   <div class="accordion my-3" id="accordionExample">
  <div class="accordion-item" v-for="(item, index) in qaMapping" :key="item.id">
    <h2 class="accordion-header" :id="'heading' + index">
      <button class="accordion-button" type="button" :class="{ 'collapsed': index !== 0 }" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse' + index">
        {{ item.question + " ?"}}
      </button>
    </h2>
    <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ 'show': index === 0 }" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <span>{{ item.answer }}</span>
      </div>
    </div>
  </div>
</div>


    </div>
  </template>
  
  <script>
  import { qaMapping } from '@/const';
  export default {
    name:"qa",
    data() {
      return {
        qaMapping: qaMapping,
        load:false

}
      
    },
  
    methods: {

        getQuestion(id){
            return this.qaMapping.find((question)=>{
                
                if(question.question == id){
                    return question;
                }
                });

        }
    },
    mounted() {
    // Access route parameter using this.$route.params
    this.load =true;
    this.id = (this.$route.params.id).split("-").join(" ");
  }
  };
  </script>
  
  <style scoped>
  .qa-wrapper{
    margin:auto;
  /* background: var(--background-color); */

    max-width: 800px;
    padding:20px;
  }
  .bg-black{
    /* background: var(--background-color);
    color:var(--text-color); */
  }
  .txt-green {
    color:#18e718;
  }
 
  </style>
  