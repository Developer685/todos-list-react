import { StyledBar, StyledNavLink } from "../styled";

const Navigation = () => {
    return (
        <div>

            <nav>
                <StyledBar>
                    <div>
                        <StyledNavLink activeClass="active" to="/zadania">Zadania</StyledNavLink>
                    </div>
                    <div>
                        <StyledNavLink activeClass="active" to="/autor">O autorze</StyledNavLink>
                    </div>
                </StyledBar>
            </nav>

        </div>

    );
};

export default Navigation;