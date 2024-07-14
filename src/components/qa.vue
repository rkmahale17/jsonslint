<template>
    <div class="qa-wrapper" v-if="load">
<div class="card p-2 bg-black qa">
    <h4> <span class=" ">  {{ getQuestion(id).question + "?"}}</span></h4>
<hr>
<h6> <span class=" txt-green">{{ getQuestion(id).answer}}</span></h6>
</div>


<br>

   <h3> 


    More questions and answer
   </h3>
   <div class="accordion my-3" id="accordionExample">
  <div class="accordion-item" v-for="(item, index) in qaMapping" :key="item.id">
    <h2 class="accordion-header" :id="'heading' + index">
      <button class="accordion-button" type="button" :class="{ 'collapsed': index !== 0 }" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse' + index">
        {{ item.question + " ?"}}
      </button>
    </h2>
    <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ 'show': index === 0 }" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>{{ item.answer }}</strong>
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
    this.id = (this.$route.params.id).split("_").join(" ");
  }
  };
  </script>
  
  <style scoped>
  .qa-wrapper{
    margin:auto;
    max-width: 800px;
    .qa{
      max-width:600px;
    }
   
  }
  .bg-black{
    background: black;
    color:white;
  }
  .txt-green {
    color:#18e718;
  }
 
  </style>
  