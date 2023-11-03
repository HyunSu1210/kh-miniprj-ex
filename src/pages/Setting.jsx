// 설정화면
import { ButtonContainer, TransBtn } from "../component/ButtonContainer";
import { useContext } from "react";
import { UserContext } from "../context/UserStore";

// 이벤트 핸들러 사용할 때 함수 형태의 객체를 만들어서 전달해야 함.
// onClick 내에서 화살표 함수를 사용하는 이유는 this 컨텍스트를 유지하고, 파라미터를 전달하기 위해서 사용한다.
// 만약 파라미터를 전달하지 않는다면 화살표 함수를 사용하지 않아도 된다.
// 초기 설정한 orange가 아닌 엉뚱한 값이 들어오게 될 수도 있음
const Setting = () => {
  const context = useContext(UserContext);
  const { setColor } = context;
  const themeColorChange = (color) => {
    setColor(color);
  };

  return (
    <>
      <ButtonContainer>
        <TransBtn>테마 설정</TransBtn>
      </ButtonContainer>
      <ButtonContainer>
        <TransBtn color="orange" onClick={() => themeColorChange("orange")}>
          오렌지
        </TransBtn>
        <TransBtn color="green" onClick={() => themeColorChange("green")}>
          그린
        </TransBtn>
        <TransBtn color="darkgray" onClick={() => themeColorChange("darkgrey")}>
          다크그레이
        </TransBtn>
        <TransBtn
          color="royalblue"
          onClick={() => themeColorChange("royalblue")}
        >
          로얄블루
        </TransBtn>
      </ButtonContainer>
    </>
  );
};
export default Setting;
