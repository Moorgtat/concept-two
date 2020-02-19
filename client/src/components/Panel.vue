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
        min-width: 80%;
        min-height: 200px;
        border: 2px black solid;
        margin-bottom: 20px;
    }
</style>
