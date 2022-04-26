<template>
    <p>{{ answerString }}</p>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  answerString: {
    type: String,
    required: true,
  }
})
</script>
