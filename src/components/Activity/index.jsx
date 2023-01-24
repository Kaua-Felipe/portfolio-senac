import Link from "next/link"
import { Container, Date, Content, Infos, Description, ContainerButton } from "./styles"

export default function Activity({ reverse, borderLeft, borderRight, pdf, theme, date }) {
    // var themeArray = pdf.split("-")
    // // var lastIndex = themeArray[themeArray.length - 1]
    // // var lastIndexArray = lastIndex.split(".")
    // // lastIndex = lastIndexArray[0] + " "
    // // themeArray[themeArray.length - 1] = lastIndex
    
    // var theme = ""

    // console.log(themeArray)

    // for (let i = 0; i < themeArray.length; i++) {
    //     theme += themeArray[i]
    // }

    // theme = theme.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())

    return (
        <Container reverse={reverse}>
            <Date>
                <p>{date}</p>
            </Date>
            <Content reverse={reverse} borderLeft={borderLeft} borderRight={borderRight}>
                <Infos>
                    <h2>Tema: {theme}</h2>

                    <Description>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta non hic illo perspiciatis ipsam sint deserunt laudantium, commodi autem officiis nostrum, animi harum officia similique consectetur provident, ipsum corrupti doloremque.</p>
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
