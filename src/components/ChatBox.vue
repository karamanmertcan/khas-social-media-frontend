<template>
    <button @click="props.activeChatUser(props.user)">
        <div
            class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
            <img class="object-cover w-10 h-10 rounded-full" :src="props.user.photoURL" alt="username" />
            <div class="w-full pb-2">
                <div class="flex justify-between">
                    <span class="block ml-2 font-semibold text-gray-600">{{ props.user.username }}</span>
                </div>
                <span class="block ml-2 text-sm text-gray-600">bye</span>
            </div>
        </div>
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    user: {
        type: Object,
    },
    activeChatUser: {
        type: Function,
    },
});

</script>
