<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  owner: {
    type: Object,
  },
});
</script>

<template>
  <div class="flex items-center">
    <img src="https://picsum.photos/200/200" class="rounded-full w-12 h-12" alt="deneme" />
    <div class="flex flex-col pl-3">
      <span class="font-medium"> {{ props.owner.firstName }} {{ props.owner.lastName }} </span>
      <span class="font-extralight text-sm"> @{{ props.owner.username }} </span>
      <span class="font-light"> {{ props.owner.title && props.owner.title }} </span>
    </div>
  </div>
</template>
