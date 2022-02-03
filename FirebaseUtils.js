import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { get, set, ref, getDatabase} from 'firebase/database';
import { getStorage, getDownloadURL, uploadBytes, ref as sRef } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyDdJFphODy4z1hbLYl85FPx5RqKPxMLpNg",
    authDomain: "balance-c1406.firebaseapp.com",
    databaseURL: "https://balance-c1406-default-rtdb.firebaseio.com",
    projectId: "balance-c1406",
    storageBucket: "balance-c1406.appspot.com",
    messagingSenderId: "562531929426",
    appId: "1:562531929426:web:690340530ea35544393e8b",
    measurementId: "G-9YLGBQLCXQ"
  };

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const FirebaseBucket = getStorage(app)


export async function GetMessages() {
    const val = await get(ref(database, "/LFG/Convo"))
                    .catch(err => console.log(err))

    const padawans = await val.val()
    return padawans
}


  

export async function AddPadawan(meta, rand) {
    
    const dbref = ref(database, `/LFG/Convo/${rand}`)
    const result = await set(dbref, meta)
    // console.log("blank")
}




// export async function GetPadawansTest() {
//     const val = await get(ref(database, "/test_padawan"))
//                     .catch(err => console.log(err))

//     const padawans = await val.val()
//     return padawans
// }

// export async function AddPadawan(padawan) {
//     const dbref = ref(database, `test_padawan/${padawan.address}`)

//     const result = await set(dbref, padawan)
// }

// export async function GetPFP() {
//     const picture = "https://xpgcvlzgtrybnonxvfam.supabase.in/storage/v1/object/public/bucket/pfp/"
//     return picture    
// }

// export async function uploadFile(file) {

//     // dis function uploads files dawg
//     const storageRef = sRef(FirebaseBucket, `testing/${file.name}`);

//     await uploadBytes(storageRef, file).then( async (snapshot) => {
//         console.log(snapshot)
//     });

//     const URL = await getDownloadURL(storageRef, `testing/${file.name}`)

//     return URL 
// }