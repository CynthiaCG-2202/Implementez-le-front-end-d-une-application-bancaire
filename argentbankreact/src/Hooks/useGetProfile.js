import { useDispatch, useSelector } from "react-redux";
import { usersuccess } from "../Redux/features/authSlice";

const useGetProfile=()=>{
      const { token } = useSelector((state) => state.auth);
        const dispatch = useDispatch();
    const getProfile=()=>{fetch("http://localhost:3001/api/v1/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then(async (res) => {
            if (!res.ok) throw new Error("Impossible de récupérer le profil");
            const data = await res.json();
            dispatch(usersuccess({ user: data.body }));
          })
          .catch((err) => console.error(err));}
          return{getProfile}
}


export default useGetProfile;