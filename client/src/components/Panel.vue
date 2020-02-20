<template>
    <div class="panel">
        <slot>
            The content is undefined.
        </slot>
    </div>
</template>

<script>
export default {
  name: 'Panel'
  // props: [
  //   'title'
  // ]
}
</script>

<style scoped>
    .panel {
        min-height: 200px;
        margin-bottom: 20px;
    }
</style>
