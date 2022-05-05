<template>
    <div class="relative flex items-center p-3 border-b border-gray-300">
        <img class="object-cover w-10 h-10 rounded-full" :src="props.user.photoURL" alt="username" />
        <span class="block ml-2 font-bold text-gray-600">{{ props.user.username }}</span>
        <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
        </span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    user: {
        type: Object,
    },
});

</script>
