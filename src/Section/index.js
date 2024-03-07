import { StyledSection, StyledHeadlineSection } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <header>
            <StyledHeadlineSection>
                {title}
                {extraHeaderContent}
            </StyledHeadlineSection>
        </header>
        <div className="section__body">
            {body}
        </div>

    </StyledSection>
);

export default Section;