import { Text, TypographyWrapper } from "./Typography.styled.jsx";

export const Typography = ({
  tweetsValue,
  tweetsText,
  followersValue,
  followersText,
}) => {
  return (
    <TypographyWrapper>
      <Text>
        {tweetsValue.toLocaleString()} {tweetsText}
      </Text>
      <Text>
        {followersValue.toLocaleString()} {followersText}
      </Text>
    </TypographyWrapper>
  );
};
