<template>
    <div>
      <div ref="mergeView" style="height:80vh"></div>
    </div>
  </template>
  
  <script>
import {MergeView} from "@codemirror/merge"
import {EditorView} from "@codemirror/view"
import {basicSetup} from 'codemirror'
import {EditorState} from "@codemirror/state"
import { oneDark } from "@codemirror/theme-one-dark"
  export default {
    mounted() {
        let doc = `one
two
three
four
five`

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
    doc: doc.replace(/t/g, "T") + "\nSix",
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
    height : 60vh !important
  }
  /* Any custom styles you want to apply to your component */
  </style>
  