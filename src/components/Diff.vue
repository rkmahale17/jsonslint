<template>
    <div>
      <div ref="mergeView" style="height:80vh"></div>
      <div style="height:7vh; background:white"></div>
    </div>
  </template>
  
  <script>
import {MergeView} from "@codemirror/merge"
import {basicSetup} from 'codemirror'
import { oneDark } from "@codemirror/theme-one-dark"
  export default {
    mounted() {
        let doc = `{
          attr1: "attr1Value",
          attr2: "attr2Value"
}`

      const leftEditor = this.$refs.mergeView.appendChild(document.createElement('div'));
      const rightEditor = this.$refs.mergeView.appendChild(document.createElement('div'));
      console.log(MergeView);
      // Initialize MergeView
      const mergeView =   new MergeView({
  a: {
    doc,
    extensions: [basicSetup,oneDark],
    lineNumbers: true,
    
  },
  b: {
    doc: `{
          attr1: "value1",
          attr2: "value2",
          attr3: "value3"
}`,
    extensions: [
      basicSetup,
      oneDark
    ]
  },
  parent: this.$refs.mergeView
})
  
      // Access the MergeView instance if needed
      // mergeView.editor() will give you the left-side editor
      // mergeView.rightOriginal() will give you the right-side editor
    }
  };
  </script>
  
  <style >

  
  .ͼ1 .cm-changeGutter{
    border:none;
  }
  .cm-mergeView .ͼ1 .cm-scroller{
    height : 80vh !important
  }
  /* Any custom styles you want to apply to your component */
  </style>
  