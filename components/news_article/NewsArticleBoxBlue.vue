<template>
  <div
    class="d-flex justify-center flex-column align-center article__box--blue"
  >
    <div class="circle">
      <div
        class="text-center white--text"
        style="vertical-align: middle; display: table-cell"
      >
        {{ order }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsArticleBoxBlue',
  props: {
    order: {
      type: Number,
      required: true,
      default: 1,
    },
  },
}
</script>

<style scoped>
.article__box--blue {
  background-color: #1ba6e2;
  font-weight: 600;
  font-size: 48px;
}

.circle {
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: table;
}
</style>
