import Link from "next/link"
import { Container, Date, Content, Infos, Description, Shadow, ContainerButton } from "./styles"

export default function Activity({ reverse, borderLeft, borderRight, pdf, theme, date, description }) {
    return (
        <Container reverse={reverse}>
            <Date>
                <p>{date}</p>
            </Date>
            <Content reverse={reverse} borderLeft={borderLeft} borderRight={borderRight}>
                <Infos>
                    <h2>Tema: {theme}</h2>

                    <Description>
                        {/* <Shadow /> */}
                        <p>{description}</p>

                    </Description>
                    <ContainerButton>
                        <Link href={`/files/${pdf}`} target="_blank">Abrir</Link>
                        <Link href={`/files/${pdf}`} target="_blank">Pré Visualização</Link>
                    </ContainerButton>
                </Infos>
            </Content>
        </Container>
    )
}
