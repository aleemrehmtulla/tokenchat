import { initializeApp } from 'firebase/app';
import { get, set, ref, getDatabase} from 'firebase/database';

// yes this is intentional ;)
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

export async function GetMessages() {
    const val = await get(ref(database, "/LFG/Convo"))
                    .catch(err => console.log(err))
    const padawans = await val.val()
    return padawans
}

export async function SendMsg(meta, rand, location) {
    
    const dbref = ref(database, `/${location}/Convo/${rand}`)
    const result = await set(dbref, meta)
}