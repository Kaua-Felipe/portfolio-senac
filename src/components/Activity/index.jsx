import { Container, Date, Content, ContainerButton } from "./styles"

export default function Activity({ reverse, borderLeft, borderRight }) {
    return (
        <Container reverse={reverse}>
            <Date>
                20/12/2022
            </Date>
            {/* <div /> */}
            <Content reverse={reverse} borderLeft={borderLeft} borderRight={borderRight}>
                <ContainerButton>
                    <button>Abrir</button>
                </ContainerButton>
            </Content>
        </Container>
    )
}
