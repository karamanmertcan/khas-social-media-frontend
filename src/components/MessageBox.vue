<template>
    <li v-if="props.msg.from === user._id" class="flex justify-end">
        <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
            <span class="block">{{ props.msg.text }}</span>
        </div>
    </li>
    <li v-else class="flex justify-start">
        <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
            <span class="block">{{ props.msg.text }}</span>
        </div>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';

const { user } = useStore().state;

const props = defineProps({
    msg: {
        type: Object,
    },
});

</script>
