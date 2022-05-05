// import { collection as col, addDoc, Timestamp } from 'firebase/firestore';
// import { db } from '../firebase';

// // eslint-disable-next-line import/no-mutable-exports

// const useSendMessage = (collection, senderId, receiverId, message) => {

//   return {
//     sendMessage,
//   };
// };

// export default useSendMessage;
// // const useCreateChat = async (collection, senderId, receiverId) => {
// //   const roomId = senderId < receiverId ? `${senderId}-${receiverId}` : `${receiverId}-${senderId}`;

// //   const query = col(db, collection, `${roomId}`, 'messages');

// //   const a = await addDoc(query, {
// //     name: 'Los Angeles',
// //     state: 'CA',
// //     country: 'USA',
// //   });

// //   console.log(a);
// // };

// // const useSendChat = async (collection, senderId, receiverId, message) => {
// //   const roomId = senderId < receiverId ? `${senderId}-${receiverId}` : `${receiverId}-${senderId}`;

// //   const query = col(db, collection, `${roomId}`, 'messages');

// //   console.log(query);

// //   const doc = await addDoc(query, {
// //     text: message,
// //     from: senderId,
// //     to: receiverId,
// //     created_at: Timestamp.now(),
// //   });

// //   console.log(doc);

// //   return doc;
// // };

// // export { useGetChat, useCreateChat, useSendChat };
