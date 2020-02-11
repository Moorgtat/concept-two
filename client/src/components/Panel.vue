<template>
    <div class="panel">
        <h2>{{title}}</h2>
        <slot>
            The content is undefined.
        </slot>
    </div>
</template>

<script>
export default {
  name: 'Panel',
  props: [
    'title'
  ]
}
</script>

<style scoped>
    .panel {
        width: 80%;
        min-height: 300px;
        border: 2px black solid;
        margin-bottom: 20px;
    }
</style>
