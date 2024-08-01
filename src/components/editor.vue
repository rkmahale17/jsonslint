<template>
  <div class="editor"> 
   

    <div
      v-if="error"
      class="alert alert-danger d-flex align-items-center m-0 br-0"
      role="alert"
    >
      <div>
        {{ error }}
      </div>
    </div>
    <div
      v-if="isShowAlert"
      class="alert alert-success d-flex align-items-center m-0 br-0"
      role="alert"
    >
      <div>
        {{ alertMsg }}
      </div>
    </div>
    <div
      v-if="success"
      class="alert alert-success d-flex align-items-center m-0 br-0"
      role="alert"
    >
      <div>Valid JSON structure</div>
    </div>
    <section class="row">
      <div  class="col-lg-12 col-xl-12 col-sm-12 col-md-12 col-xs-12 col-sm-12 pos-relative" >
        <div class="floating-right mt-2">
          <div class="d-block">
              <button
            type="button"
            class="btn d-block  btn-primary  rounded" data-bs-toggle="copy" data-bs-placement="top"
            data-toggle="tooltip" data-placement="left" title="Copy"
            @click="copyTextArea"
          >
          <i class="bi bi-copy"></i>
          </button> 
          <button
            type="button"
            class="btn d-block btn-primary mt-1 rounded" data-bs-toggle="search" data-bs-placement="top"
            data-toggle="tooltip" data-placement="left" title="Find"
            @click="triggerFind"
          >
          <i class="bi bi-search"></i>
          </button> 
          <JsonFileUploader @file-uploaded="updateFile" class="mt-1"
          data-toggle="tooltip" data-placement="left" title="Choose File"
          />

          
          </div>
       
        </div>
        
        <codemirror
        ref="editor"
        id="codeMirrorLinter"
      v-model="code"
      placeholder="Insert JSON Here"
      :style="{ height: '80vh' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
    />   

      </div>
      <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 ">
        <div class="d-flex justify-content ">
          
          <button @click="formatJson" class="btn   mt-2  btn-primary btn-sm m-2" type="button">
            Format 
          </button> 
          <button @click="lintJson" class="btn   mt-2  btn-primary btn-sm m-2" type="button">
            Validate 
          </button> 
           
          <button @click="copyJsonSample" class="btn  btn-sm  mt-2  btn-primary m-2" style="white-space:nowrap" type="button">
            Try Sample 
          </button> 
          <button 
          @click="clearInput"
          
          class="btn   mt-2 btn btn-outline-primary btn-sm m-2" type="button">
            Clear 
          </button>


        </div>
        
          
        
        
      </div>
      
    </section>

   
  </div>
</template>

<script>
  import { Codemirror } from 'vue-codemirror'
  import { openSearchPanel } from "@codemirror/search"
  import {json, jsonParseLinter} from '@codemirror/lang-json'
  import { oneDark } from '@codemirror/theme-one-dark'
  import { EditorView } from '@codemirror/view'
import { lintGutter, linter } from "@codemirror/lint";
import {jsonSample} from '../const';
import JsonFileUploader from "./UploadFile.vue"
import Linter from "eslint4b-prebuilt";
  export default {
      components:{Codemirror, JsonFileUploader},
  data(){
  return {
    code: "{\n\t\n}",
    editorView: EditorView,
    openSearchPanel:openSearchPanel,
    jsonSample:jsonSample,
   
    isShowAlert:false,
    extensions:[json(),oneDark,  linter(jsonParseLinter(new Linter())),
      lintGutter()],
    success: false,
    error: '',
    log:console.log
  };
},
mounted() {
  this.$nextTick(() => {

  });
},
methods: {
  updateFile(fileData){

      this.code = JSON.stringify(fileData, null, 2);
 
  },
  handleReady(payload) {
    this.view = payload.view;
  },

  formatJson() {
    try {
      const parsedJson = JSON.parse(this.code);
      this.code = JSON.stringify(parsedJson, null, 2);
      this.success = true;
      setTimeout(()=>{
        this.success = false
      },10000)
      this.error = '';
    } catch (err) {
      console.error('Error:', err);
      this.success = false;
      this.error = err.message;
    }
  },
  lintJson() {
    this.formatJson();
    try {
      JSON.parse(this.code);
      this.error = ""; // Clear error if JSON is valid
      this.success = true;
      setTimeout(()=>{
        this.success = false
      },7000)
    } catch (error) {
      this.success = false;
      this.error = error.message; // Display error message
    }
  },
  async copyTextArea() {

  try{
    await navigator.clipboard.writeText(this.code);
  this.alertMsg = "Copied data successfully !"
    this.isShowAlert = true;
   
  setTimeout(() => this.isShowAlert = false, 7000)
    
    }
    catch (err) {
      console.error('Error:', err);
      this.success = false;
      this.error = err.message;
    }

  },
  clearInput() {
    this.code = "";
    this.success = false;
    this.error = "";
  },
  triggerFind(){
    this.openSearchPanel(this.view)
  },
  copyJsonSample(){
    this.clearInput();
    this.code = JSON.stringify( jsonSample);
    const parsedJson = JSON.parse(this.code);
      this.code = JSON.stringify(parsedJson, null, 2);

 
  }


}
}
</script>

<style >
.pos-relative{
  position:relative;
}
.editor{
  border: 1px solid #ccc;
  background: #fff;
}
.br-0{
  border-radius: 0px;

}
.floating-right{
  position: absolute;
  right:2rem;
  z-index:2;

}
.btn-round{
  border-radius: 50px;
  width:2rem;
  height: 2rem;
  border:1px solid slategray``
}
.copy-code {
	height: 32px;
	width: 32px;
	position: absolute;
	bottom: 0;
	right: 0;
	background: #339af0;
	border-radius: 50%;
	z-index: 10;
	transition: 0.2s;
}

.copy-code::after {
	font-family: "Font Awesome 5 Free";
	font-weight: 600;
	font-size: 16px;
	content: "\f328";
	color: #fff;
	position: absolute;
	top: 3px;
	left: 10px;
}
.copy-code-wrap:active .copy-code {
	transform: translate(0, 0) scale(0.9);
}
.animate {
	transform: translate(0, 0) scale(1.12);
}
.btn-menu{
  background:black;
  border-radius: 0px 0px 10px 10px;;
}
.toolbar-btn{
  margin:5px;
  background:blue;
  font-size: 10px;
}

.toolbar-btn:hover{
  margin:5px;
  background:blue;
  color: white;
  transform: translate(0, 0) scale(1.12);

}
.copy-code-wrap {
	height: 34px;
	width: 34px;
	position: absolute;
	bottom: -10px;
	right: -10px;
	z-index: 10;
	cursor: pointer;
}
@media only screen and (min-width : 991px) {
 .h-lg-80{
  height:80vh;
 }
}
.toolbar-btn{
  color:white;
}
#codeMirrorLinter .cm-gutters:first-child {
    display: none;
  }
   .cm-panels + .cm-panels  {
    display: none !important;
}
#heading {
text-align: center;
font-size: 26px;
font-weight: 300;
color: #00c1ff;
}
#source-code {

height: 80vh;

background-color: #2f2f2f;

display: flex;

justify-content: space-between;

overflow-y: scroll;

border-radius: 10px;
}

#source-code * {
box-sizing: border-box;
}
.validateBtn {
background: #ff5b4f;
padding: 8px;
border: none;
border-radius: 4px;
color: white;
font-size: 17px;
font-weight: 600;
margin: 10px 0px;
}

#codeblock {
white-space: pre-wrap;


float: right;

height: auto;


color: #fff;

background: transparent;

padding: 15px;

line-height: 30px;

overflow-y: auto;
overflow-x: auto;

min-height: 100%;

border: none;
}

#line-numbers {
min-width: 30px;

height: 100%;

padding: 15px 5px;

font-size: 14px;

vertical-align: middle;

text-align: right;

margin: 0;

color: #fff;

background: black;
}

#line-numbers p {
display: block;

height: 30px;

line-height: 30px;

margin: 0;
}

#codeblock:focus {
outline: none;
}
.error {
color: red;
margin-top: 10px;
}
.success {
color: green;
margin-top: 10px;
}
.w-80 {
max-width: 80%;
}
</style>