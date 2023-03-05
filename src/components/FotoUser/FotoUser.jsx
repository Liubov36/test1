import {
    Ring,
    RingContent,
    Stick,
    UserAvatar,
    UserIconWrapper,
  } from "./FotoUser.styled";
  import User from "../../assets/User-1x.png";

  export const FotoUser = ({ avatar, name }) => {
    const imageAlt = `${name} avatar`;
  
    return (
      <UserIconWrapper>
        <Ring>
          <RingContent>
            <UserAvatar src={User} alt={imageAlt} />
          </RingContent>
        </Ring>
        <Stick />
      </UserIconWrapper>
    );
  };