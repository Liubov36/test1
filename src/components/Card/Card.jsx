import { useEffect, useState } from "react";
import {
    Image,
    Container,
    ImgLogo,
    BoxLine,
    FollowButton,
  } from "./Card.styled";
import Logo from "../../assets/Logo.svg";
import Backgr1x from "../../assets/backgr-1x.png";
import Backgr2x from "../../assets/backgr-2x.png";
import { Typography } from "../Typography/Typography";
import { FotoUser } from "../FotoUser/FotoUser";

export const Card = ({ userData, update }) => {
    const { id, user, tweets, followers, avatar, isFollowing } = userData;
  
    const [userFollowers, setUserFollowers] = useState(followers);
    const [isFollow, setFollow] = useState(isFollowing);
  
    const buttonText = isFollow ? "Following" : "Follow";
  
    const handleFollow = () => {
      setUserFollowers((prevState) => (isFollow ? prevState - 1 : prevState + 1));
      setFollow((prevState) => !prevState);
    };
  
    useEffect(() => {
      update(id, isFollow, userFollowers);
    }, );
  
return (
    <Container>
      <ImgLogo src={Logo} alt="goit logo" />
      <Image srcSet={`${Backgr1x} 1x, ${Backgr2x} 2x`} alt="background image"/>
      <FotoUser avatar={avatar} name={user} />
      <BoxLine></BoxLine>
      <Typography
        followersText={"followers"}
        followersValue={userFollowers}
        tweetsValue={tweets}
        tweetsText={"tweets"}
      />
      <FollowButton isFollowing={isFollow} onClick={handleFollow} type="button">
        {buttonText}
      </FollowButton>
    </Container>
  );
};