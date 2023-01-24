import Link from "next/link"
import { Container, Date, Content, ContainerButton } from "./styles"

export default function Activity({ reverse, borderLeft, borderRight, pdf, date }) {
    return (
        <Container reverse={reverse}>
            <Date>{date}</Date>
            <Content reverse={reverse} borderLeft={borderLeft} borderRight={borderRight}>
                <ContainerButton>
                    <Link href={`/files/${pdf}`} target="_blank">Abrir</Link>
                </ContainerButton>
            </Content>
        </Container>
    )
}
