import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/boards")}>π LIVE</InnerLogo>
        <div>
          <InnerButton onClick={onClickMoveToPage("/login")}>
            λ‘κ·ΈμΈ
          </InnerButton>
          <InnerButton>νμκ°μ</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
