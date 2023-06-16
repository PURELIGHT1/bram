import axios from "axios"
import database from './firebaseConfig'
import { onValue, push, ref } from "@firebase/database";

const useApi = () => {
    const postFeedback = async (data) => {
        try {
            const res =push(ref(database, "feedback"), {
                nama: data.name,
                email: data.email,
                pesan: data.message,
            });
            console.log(res);
            return res;
        } catch (error) {
            throw error;
        }
    };
    return { postFeedback };
}
export default useApi;