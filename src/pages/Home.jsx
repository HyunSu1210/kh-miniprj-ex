import { useNavigate } from "react-router-dom";
import { ButtonContainer, TransBtn } from "../component/ButtonContainer";
import imgButton from "../images/nedbank_s.png";
const Home = () => {
  const navigate = useNavigate();

  const onClickbtn = (num) => {
    switch (num) {
      case 1:
        navigate("/memberlist");
        break;
      case 2:
        break;
      case 3:
        navigate("/profile");
        break;
      case 4:
        navigate("/setting");
        break;
      default:
    }
  };

  return (
    <>
      <div>
        <ButtonContainer>
          <TransBtn onClick={() => onClickbtn(1)}>회원리스트</TransBtn>
          <TransBtn onClick={() => onClickbtn(2)}>뉴스 보기</TransBtn>
          <TransBtn onClick={() => onClickbtn(3)}>사진 업로드</TransBtn>
          <TransBtn onClick={() => onClickbtn(4)}>테마 변경</TransBtn>
        </ButtonContainer>
      </div>
      <div className="bdlogo">
        <img src={imgButton} alt="buttonimg" />
      </div>
    </>
  );
};
export default Home;
