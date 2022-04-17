<script setup>
import MdHeartEmptyIcon from 'vue-ionicons/dist/md-heart-empty.vue';
import MdChatboxesIcon from 'vue-ionicons/dist/md-chatboxes.vue';
import MdBookmarkIcon from 'vue-ionicons/dist/md-bookmark.vue';
import { defineProps } from 'vue';
import { useStore } from 'vuex';
// eslint-disable-next-line object-curly-newline
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import PostOrCommentOwner from './PostOrCommentOwner.vue';

const store = useStore();

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  deletePost: {
    type: Object,
  },
});

const deletePostPress = () => {
  // eslint-disable-next-line no-underscore-dangle
  props.deletePost.mutate(props.post._id);
};
</script>

<template>
  <div class="w-full flex flex-col justify-between shadow-md rounded h-auto p-4 mb-5 border-2">
    <div class="flex flex-col">
      <div class="flex justify-between items-center">
        <PostOrCommentOwner :owner="props.post.owner" />
        <div v-if="props.post.owner._id === store.state.user._id">
          <Menu as="div" class="relative inline-block text-center bg-blue-500 rounded-xl">
            <div>
              <MenuButton class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"> Options </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
              <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full px-2 py-2 text-sm']">Edit</button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1"></div>

                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full px-2 py-2 text-sm']" @click="deletePostPress">Delete</button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
      <div>{{ props.post.content }}</div>
    </div>
    <div class="flex mt-5">
      <div class="cursor-pointer">
        <MdHeartEmptyIcon w="30px" h="30px" />
      </div>
      <div class="cursor-pointer pl-5">
        <MdChatboxesIcon w="30px" h="30px" />
      </div>
      <div class="cursor-pointer pl-5">
        <MdBookmarkIcon w="30px" h="30px" />
      </div>
    </div>
    <div id="comment" class="p-5 w-full">
      <!--eslint-disable vuejs-accessibility/form-control-has-label */ /* eslint-disable vuejs-accessibility/label-has-for */-->
      <textarea type="textarea" rows="5" cols="10" wrap="soft" name="comment" class="w-full rounded-lg h-24" placeholder="Write Your Comment" />
    </div>
    <div>
      <h2 class="font-bold text-xl pb-3">Comments</h2>
      <div v-if="props.post.comments.length > 0" class="flex flex-col">
        <div class="flex justify-between items-center">
          <PostOrCommentOwner :owner="props.post.owner" />
        </div>
        <div v-for="comment in props.post.comments" :key="comment._id">
          {{ comment.comment }}
        </div>
      </div>
      <div v-else class="flex justify-center">
        <h2>There is no comment</h2>
      </div>
    </div>
  </div>
</template>
