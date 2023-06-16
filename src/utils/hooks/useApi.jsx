import axios from "axios";

const useApi = () => {
    const postFeedback = async (data) => {
        try {
            const res = await axios.post('https://portfolioapi.netlify.app/api/feedback', {
                nama: data.name,
                email: data.email,
                pesan: data.message,
            });
              if (res.data.status === 200 || res.data.status === 201 || res.data.status === 202) {
                return res.data.data;
            }
        } catch (error) {
            throw error;
        }
    };
    return { postFeedback };
}
export default useApi;