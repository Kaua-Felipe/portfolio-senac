import Link from "next/link"
import { Header, Circle, Container, CRow, Footer } from "./styles"

export default function UC({ id }) {
    return (
        <Container>
            <Link href={`/uc/${id + 1}`} >
                <Header>
                    <h3>Unidade Curricular {id + 1}</h3>
                    <CRow>
                        <hr />
                        <Circle />
                    </CRow>
                </Header>
                <Footer>
                    Vizualizar
                </Footer>
            </Link>
        </Container>
    )
}
