import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인 기능 객체 만듦
  memberLogin: async (id, pw) => {
    const login = {
      // key와 value 형식으로 만듦
      id: id,
      pwd: pw,
    };
    // post 방식으로 key와 value를 json 데이터로 만들어서 날려줌
    // axios는 json 데이터로 변환해주는 기능이 있음
    return await axios.post(KH_DOMAIN + "/users/login", login);
  },
  // 회원 정보 조회
  memberList: async (id) => {
    return await axios.get(KH_DOMAIN + `/users/member/?id=${id}`); // get방식
  },
};
export default AxiosApi;
