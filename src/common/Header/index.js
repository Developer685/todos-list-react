import StyledHeader from "./styled";

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  );

};

export default Header;