import UC from "../UC"
import { Container, ContainerUC } from "./styles"

export default function UnidadeCurricular() {
    const qtdsUniCurriculares = [0, 1, 2, 3]

    return (
        <Container>
            <h2>Unidade Curricular</h2>
            
            <ContainerUC>
                {qtdsUniCurriculares.map(uniCurricular => (
                    <UC 
                        key={uniCurricular} 
                        id={uniCurricular} 
                    />
                ))}
            </ContainerUC>
        </Container>
    )
}
