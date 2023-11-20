import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <header>
            <h2 className="section__headline">
                {title}
            </h2>
        </header>
        <div>
            {extraHeaderContent}
            {body}
        </div>

    </section>
);

export default Section;