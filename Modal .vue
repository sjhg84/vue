<template>
    <div>
      <h1>{{ header }}</h1>
      <h2>{{ defaultTextline }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        header: 'My header is here!' // Default header text
      };
    },
    props: {
      textline: {
        type: String,
        default: null // Explicitly define props with type and default
      }
    },
    computed: {
      defaultTextline() {
        // Compute defaultTextline, return prop textline or a default string
        return this.textline || 'My Textline is here!';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped CSS styles here */
  </style>