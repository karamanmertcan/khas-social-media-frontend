<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" @close="props.closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>

          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <div class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"> Create Post </DialogTitle>
              <div class="mt-2">
                <!--eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                <textarea v-model="content" class="w-full rounded-lg" name="post" id="" cols="30" rows="10"></textarea>
              </div>

              <div class="mt-4">
                <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" @click="onPress">Done</button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
// eslint-disable-next-line object-curly-newline
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay, DialogTitle } from '@headlessui/vue';
import { defineProps, ref } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  closeModal: {
    type: Function,
  },
  createPost: {
    type: Object,
  },
});

const content = ref('');

const onPress = () => {
  props.createPost.mutate({
    content: content.value,
  });
};
</script>
