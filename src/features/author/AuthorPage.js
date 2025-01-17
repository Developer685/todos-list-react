import React from "react";
import { Main } from '../../GlobalStyle';
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../tasks/TaskPage/styled";


export const AuthorPage = () => {

    return (
        <Main>
            <Header title="Lista zadań" />
            <Section
                title="Jakub Kulik"
                body={
                    <>
                        <Container>
                            22-letni pasjonat sportu i muzyki 🎸, obecnie student automatyki i robotyki 🤖. Od 10 lat gra na gitarze, doskonaląc swoje umiejętności w różnych stylach muzycznych. W wolnym czasie oddaje się aktywnościom fizycznym, szczególnie treningom siłowym 🏋️‍♂️ oraz wspinaczce 🧗‍♂️. Ukończył technikum na kierunku mechatronika, zdobywając solidne podstawy wykształcenia technicznego. Posiada także komunikatywną znajomość trzech języków obcych: angielskiego, niemieckiego i hiszpańskiego 🌍, co świadczy o jego wszechstronności i ambicji.
                        </Container>
                    </>
                }
            />
        </Main>
    );
}