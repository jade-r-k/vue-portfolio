<template>
<div>
    <p>
        Hello, {{ personName }}
    </p>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    personName: String,
  },
};
</script>
<style>
</style>