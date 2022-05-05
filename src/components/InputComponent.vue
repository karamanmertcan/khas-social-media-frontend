<!-- eslint-disable-next-line object-curly-newline-->
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  id: {
    type: String,
  },
  label: {
    type: String,
    default: '',
  },
  for: {
    type: String,
    default: '',
  },
});

// eslint-disable-next-line object-curly-newline
// eslint-disable-next-line vue/no-setup-props-destructure
const { modelValue, type, id, label, for: _for } = props;

console.log(modelValue);
</script>

<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <label :for="_for" class="block mb-2 text-lg font-medium text-black">{{ label }}</label>
  <input @change="$emit('update:modelValue', $event.target.value)" :value="modelValue" :type="type" :id="id" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
</template>
