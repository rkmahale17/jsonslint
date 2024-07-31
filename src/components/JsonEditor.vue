<template>
  <div > 
   

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
      <div id="source-code" class="col-lg-10 col-xl-10 col-sm-12 col-md-12 col-xs-12 col-sm-12">
        <div id="line-numbers" ref="lineNumbers"><p>1</p></div>
        <textarea
          v-model="jsonData"
          @paste="init"
          @keyup.enter="init"
          placeholder="Enter JSON data here"
          id="codeblock"
          ref="codeblock"
        ></textarea>
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
export default {
  data() {
    return {
      jsonData: "",
      error: "",
      success: false,
      linenumbers: document.getElementById("line-numbers"),
      editor: this.$refs.codeblock,
	  isShowAlert:false,
    };
  },

  methods: {
    formatJson(){
      try{
const parsedJson = JSON.parse(this.jsonData);
this.jsonData = JSON.stringify(parsedJson, null, 2);
this.init();

      }
      catch(error){
        this.success = false;
        this.error = error.message;
      }
    },
    copyTextArea() {
	  this.isShowAlert = true;
	  this.alertMsg = "Copied data successfully !"
      this.$refs.codeblock.select();
      document.execCommand("copy");
	  setTimeout(() => this.isShowAlert = false, 10000)
    },
    getWidth(elem) {
      return (
        elem.scrollWidth -
        (parseFloat(
          window.getComputedStyle(elem, null).getPropertyValue("padding-left")
        ) +
          parseFloat(
            window
              .getComputedStyle(elem, null)
              .getPropertyValue("padding-right")
          ))
      );
    },

    getFontSize(elem) {
      return parseFloat(
        window.getComputedStyle(elem, null).getPropertyValue("font-size")
      );
    },

    cutLines(lines) {
      return lines.split(/\r?\n/);
    },
    clearInput() {
      this.jsonData = "";
      this.success = false;
      this.error = "";
    },

    getLineHeight(elem) {
      var computedStyle = window.getComputedStyle(elem);

      var lineHeight = computedStyle.getPropertyValue("line-height");

      var lineheight;

      if (lineHeight === "normal") {
        var fontSize = computedStyle.getPropertyValue("font-size");

        lineheight = parseFloat(fontSize) * 1.2;
      } else {
        lineheight = parseFloat(lineHeight);
      }

      return lineheight;
    },

    getTotalLineSize(size, line, options) {
      if (typeof options === "object") options = {};

      var p = document.createElement("span");

      p.style.setProperty("white-space", "pre");

      p.style.display = "inline-block";

      if (typeof options.fontSize !== "undefined")
        p.style.fontSize = options.fontSize;

      p.innerHTML = line;

      document.body.appendChild(p);

      var result = p.scrollWidth / size;

      p.remove();

      return Math.ceil(result);
    },

    getLineNumber() {
      var textLines = this.editor.value
        .substr(0, this.editor.selectionStart)
        .split("\n");

      var currentLineNumber = textLines.length;

      var currentColumnIndex = textLines[textLines.length - 1].length;

      return currentLineNumber;
    },

    init() {
      console.log("init called");
      this.editor = this.$refs.codeblock;
      this.linenumbers = this.$refs.lineNumbers;
      var totallines = this.cutLines(this.editor.value),
        linesize;

      this.linenumbers.innerHTML = "";

      for (var i = 1; i <= totallines.length; i++) {
        var num = document.createElement("p");

        num.innerHTML = i;

        this.linenumbers.appendChild(num);

        linesize = this.getTotalLineSize(
          this.getWidth(this.editor),
          totallines[i - 1],
          { fontSize: this.getFontSize(this.editor) }
        );

        if (linesize > 1) {
          num.style.height = linesize * this.getLineHeight(this.editor) + "px";
        }
      }

      linesize = this.getTotalLineSize(
        this.getWidth(this.editor),
        totallines[this.getLineNumber() - 1],
        { fontSize: this.getFontSize(this.editor) }
      );

      if (linesize > 1) {
        this.linenumbers.childNodes[this.getLineNumber() - 1].style.height =
          linesize * this.getLineHeight(this.editor) + "px";
      }

      this.editor.style.height = this.editor.scrollHeight;

      this.linenumbers.style.height = this.editor.scrollHeight;
    },

    lintJson() {
      this.formatJson();
      try {
        JSON.parse(this.jsonData);
        this.error = ""; // Clear error if JSON is valid
        this.success = true;
      } catch (error) {
        this.success = false;
        this.error = error.message; // Display error message
      }
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width : 991px) {
   .h-lg-80{
    height:80vh;
   }
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
