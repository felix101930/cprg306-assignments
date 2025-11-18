import { db } from "../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  try {
    // Reference the 'items' subcollection under the specific user document
    const itemsRef = collection(db, "users", userId, "items");
    
    // Get all documents from that collection
    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);

    // Loop through the snapshot and push data to the array
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }
  return items;
}

export async function addItem(userId, item) {
  try {
    // Reference the 'items' subcollection
    const itemsRef = collection(db, "users", userId, "items");
    
    // Add the new document
    const docRef = await addDoc(itemsRef, item);
    
    // Return the new document ID
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
  }
}