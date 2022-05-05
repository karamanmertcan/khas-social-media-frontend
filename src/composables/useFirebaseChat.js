import { onSnapshot, collection as col } from 'firebase/firestore';
import { ref, watchEffect } from 'vue';
import { db } from '../firebase';

// eslint-disable-next-line import/no-mutable-exports

const useChat = (collection, senderId, receiverId) => {
  const messages = ref([]);

  const roomId = senderId < receiverId ? `${senderId}-${receiverId}` : `${receiverId}-${senderId}`;
  const query = col(db, collection, `${roomId}`, 'messages');

  const unsub = onSnapshot(query, (snapshot) => {
    snapshot.docs.forEach((document) => {
      messages.value.push({
        ...document.data(),
        id: document.id,
      });
    });
  });

  watchEffect((onInvalidate) => {
    // unsub from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub());
  });

  return {
    messages,
  };
};

export default useChat;
// const useCreateChat = async (collection, senderId, receiverId) => {
//   const roomId = senderId < receiverId ? `${senderId}-${receiverId}` : `${receiverId}-${senderId}`;

//   const query = col(db, collection, `${roomId}`, 'messages');

//   const a = await addDoc(query, {
//     name: 'Los Angeles',
//     state: 'CA',
//     country: 'USA',
//   });

//   console.log(a);
// };

// const useSendChat = async (collection, senderId, receiverId, message) => {
//   const roomId = senderId < receiverId ? `${senderId}-${receiverId}` : `${receiverId}-${senderId}`;

//   const query = col(db, collection, `${roomId}`, 'messages');

//   console.log(query);

//   const doc = await addDoc(query, {
//     text: message,
//     from: senderId,
//     to: receiverId,
//     created_at: Timestamp.now(),
//   });

//   console.log(doc);

//   return doc;
// };

// export { useGetChat, useCreateChat, useSendChat };
