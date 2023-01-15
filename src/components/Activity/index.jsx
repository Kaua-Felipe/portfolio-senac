import { Container, Date, Content } from "./styles"

export default function Activity({ reverse, borderLeft, borderRight }) {
    return (
        <Container reverse={reverse}>
            <Date>
                20/12/2022
            </Date>
            <div />
            <Content reverse={reverse} borderLeft={borderLeft} borderRight={borderRight}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse id est velit voluptates amet pariatur quos repellendus tenetur natus, quia illum dolore corrupti provident aperiam debitis laborum tempore, dolor ex.
            </Content>
        </Container>
    )
}
