import styled from "@emotion/styled";

export const Container = styled.section`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ImgLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Image = styled.img`
  position: relative;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const BoxLine = styled.div`
  position: absolute;
  left: 0;
  top: 214px;
  width: 320px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const FollowButton = styled.button`
  display: block;
  cursor: pointer;
  width: 196px;
  height: 50px;
  margin: 0 auto;
  color: #373737;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  border: none;
  background: ${({ isFollowing }) => (isFollowing ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;