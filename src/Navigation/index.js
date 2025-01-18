import { StyledNavLink } from "../styled";
import { StyledNavigation } from "./styled";

const Navigation = () => {
  return (
    <div>

      <nav>
        <StyledNavigation>
          <div>
            <StyledNavLink activeClass="active" to="/zadania">Zadania</StyledNavLink>
          </div>
          <div>
            <StyledNavLink activeClass="active" to="/autor">O autorze</StyledNavLink>
          </div>
        </StyledNavigation>
      </nav>

    </div>

  );
};

export default Navigation;