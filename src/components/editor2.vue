

<template>
    <div class="editor-2"> 
     
  
      <div
        v-if="error"
        class="alert alert-danger d-flex align-items-center mt-4 w-80"
        role="alert"
      >
        <div>
          {{ error }}
        </div>
      </div>
      <div
        v-if="isShowAlert"
        class="alert alert-success d-flex align-items-center mt-4 w-80"
        role="alert"
      >
        <div>
          {{ alertMsg }}
        </div>
      </div>
      <div
        v-if="success"
        class="alert alert-success d-flex align-items-center mt-4 w-80"
        role="alert"
      >
        <div>Valid JSON structure</div>
      </div>
      <section class="row">
        <div  class="col-lg-10 col-xl-10 col-sm-12 col-md-12 col-xs-12 col-sm-12">
      <!-- <codemirror
        v-model="code"
        ref="editor"
        :options="codeMirrorOptions"
        placeholder="Insert JSON Here"
        :style="{ height: '80vh' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        @ready="handleReady"
      />    -->
      <textarea name="" id="jsonEditor" ref="codeTextarea" ></textarea>
      
        </div>
        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
          <div class="col-md-12 col-sm-12 col-xs-12  m-2  d-lg-flex flex-lg-column justify-content-lg-between h-lg-80">
          <div class="column   d-lg-flex flex-lg-column">
            <button @click="formatJson" type="button"
              class="btn btn-success col-md-5 col-sm-12 col-12 col-lg-12 m-2">Format </button>
            <button
              type="button"
              class="btn btn-success  col-md-5 col-sm-12 col-lg-12  col-12 m-2"
              @click="copyTextArea"
            >
            Copy 
            </button>
            <button
              type="button"
              class="btn btn-success  col-md-5 col-sm-12 col-lg-12  col-12 m-2"
              @click="sampleJsons"
            >
            Sample Json 
            </button>
          </div>
            <div class="column  d-lg-flex flex-lg-column">
            <button
              @click="clearInput"
              class="btn btn-outline-primary col-12  col-md-5 col-sm-12 col-lg-12 m-2"
              type="button"
            >
              Clear
            </button>
            <button @click="lintJson" class="btn col-12  mt-2 btn-primary col-md-5 col-sm-12 col-lg-12 m-2" type="button">
              Validate 
            </button>
          </div>
          
          
        </div>
        </div>
        
      </section>
  
     
    </div>
  </template>
  
  <script>
  
// import CodeMirror from 'codemirror/lib/codemirror';
// import 'codemirror/mode/javascript/javascript';

// Fold
// import 'codemirror/addon/fold/foldcode';
// import 'codemirror/addon/fold/foldgutter';
// import 'codemirror/addon/fold/brace-fold';
// import 'codemirror/addon/fold/foldgutter.css';
// import 'codemirror/addon/dialog/dialog.css';
// import 'codemirror/addon/search/matchesonscrollbar.css';
// import 'codemirror/addon/dialog/dialog';
// import 'codemirror/addon/search/searchcursor';
// import 'codemirror/addon/search/search';
// import 'codemirror/addon/scroll/annotatescrollbar';
// import 'codemirror/addon/search/matchesonscrollbar';
// import 'codemirror/addon/search/jump-to-line';
// import 'codemirror/lib/codemirror.css';
    export default {
        components:{},
    data(){
    return {
      isShowAlert:false,
      success: false,
      error: '',
      editor:null,
      log:console.log
    };
  },
  mounted() {
    this.initEditor();
    
  },
  computed:{
    editorCode:{
      // `this` points to the vm instance
      get:function(){ return  this.editor?.getValue()},
      set:function(value){ return this.editor.setValue(value)}
    },
   
  },
  methods: {
    setEditorVal(val){
      this.editor.getDoc().setValue(val);
    },
    initEditor(){
        this.$nextTick(() => {
      this.editor = CodeMirror.fromTextArea(this.$refs.codeTextarea, {
        lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            indentWithTabs: true,
            autofocus: true,
            mode: 'javascript',
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
        });
    })

    },
    sampleJsons(){
      const val = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
};
this.setEditorVal(val)
    },
    
    handleReady(payload) {
      this.view = payload.view;
    },

    formatJson() {
        this.$nextTick(() => {
            console.log(this.$refs.editor.codemirror);
        })
      try {
        console.log(this.datCode)
        const parsedJson = JSON.parse(this.editorCode);
        this.editorCode = JSON.stringify(parsedJson, null, 2);
        this.success = true;

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
        JSON.parse(this.editorCode);
        this.error = ""; // Clear error if JSON is valid
        this.success = true;
      } catch (error) {
        this.success = false;
        this.error = error.message; // Display error message
      }
    },
    async copyTextArea() {

	  try{
      await navigator.clipboard.writeText(this.editorCode);
	  this.alertMsg = "Copied data successfully !"
      this.isShowAlert = true;
     
	  setTimeout(() => this.isShowAlert = false, 10000)
      
      }
      catch (err) {
        console.error('Error:', err);
        this.success = false;
        this.error = err.message;
      }
 
    },
    clearInput() {
      this.editorCode = "";
      this.success = false;
      this.error = "";
    },


  }
}
</script>

<style >
@media only screen and (min-width : 991px) {
   .h-lg-80{
    height:80vh;
   }
}
.editor-2{
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  background: #fff;
}
#heading {
  text-align: center;
  font-size: 26px;
  font-family: arial, sans-serif;
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

  font-family: arial;

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
textarea {
  width: 100%;
  height: 200px;
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
