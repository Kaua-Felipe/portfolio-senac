import Head from "next/head"
import Link from "next/link"

import Activity from "../../../components/Activity"
import ActivityPreview from "../../../components/ActivityPreview"

import { Container } from "../../../styles/pages/1"

export default function Uc1() {
    return (
        <Container>
            <Head>
                <title>Portfolio Senac - Unidade Curricular 1</title>

                <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
            </Head>

            {/* <ActivityPreview /> */}

            <header>
                <nav>
                    <Link href="/">Voltar</Link>
                </nav>
            </header>
            <main>
                <h1>Unidade Curricular 1</h1>

                <Activity 
                    borderLeft={true} 
                    borderRight={false} 
                    pdf="comunicacao-formal-e-informal.pdf" 
                    theme="Comunicação Formal e Informal" 
                    date="24/11/2022" 
                    description="Atividade realizada para indentificar semelhanças e diferenças da comunicação formal e informal. Informando exemplos e imagens sobre os respectivos assuntos feito durante o bate papo da aula..." 
                />
                <Activity 
                    reverse={true} 
                    borderLeft={true}
                    borderRight={false} 
                    pdf="documentos-e-cidadania-historico-escolar.pdf" 
                    theme="Documentos e Cidadânia - Histórico Escolar" 
                    date="28/11/2022" 
                    description="Atividade realizada a fins de escolher a pesquisa sobre algum documento pessoal, que no meu caso foi sobre o Histórico escolar, demonstrando o que é, para que serve, onde retirar e entre outros..." 
                />
                <Activity 
                    borderLeft={true}
                    borderRight={false} 
                    pdf="saude-e-autocuidado-saude-fisica-e-mental.pdf" 
                    theme="Saúde e Autocuidado - Saúde Física e Mental" 
                    date="05/12/2022" 
                    description="Atividade realizada a fins de conhecimento da importância de ter uma boa saúde para uma boa convivência no mercado de trabalho, no seu dia a dia, em sua saúde e bem estar mental e físico, e a saúde no geral..." 
                />
                <Activity 
                    reverse={true} 
                    borderLeft={true}
                    borderRight={false} 
                    pdf="biografia-jose-carlos-semenzato.pdf" 
                    theme="Biografia José Carlos Semenzato" 
                    date="09/12/2022" 
                    description="Atividade finalizada e feita com o objetivo de ser realizada uma pesquisa sobre a biografia de alguém que eu goste como inspiração e com trajetória semelhante a minha, no caso foi sobre José Carlos Semenzato..." 
                />
            </main>
        </Container>
    )
}
