import Head from "next/head"
import Link from "next/link"

import Activity from "../../../components/Activity"

import { Container } from "../../../styles/pages/1"

export default function Uc1() {
    return (
        <Container>
            <Head>
                <title>Portfolio Senac - Unidade Curricular 1</title>
            </Head>

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
                />
                <Activity 
                    reverse={true} 
                    borderLeft={true}
                    borderRight={false} 
                    pdf="documentos-e-cidadania-historico-escolar.pdf" 
                    theme="Documentos e Cidadânia - Histórico Escolar" 
                    date="28/11/2022" 
                />
                <Activity 
                    borderLeft={true}
                    borderRight={false} 
                    pdf="saude-e-autocuidado-saude-fisica-e-mental.pdf" 
                    theme="Saúde e Autocuidado - Saúde Física e Mental" 
                    date="05/12/2022" 
                />
                <Activity 
                    reverse={true} 
                    borderLeft={true}
                    borderRight={false} 
                    pdf="biografia-jose-carlos-semenzato.pdf" 
                    theme="Biografia José Carlos Semenzato" 
                    date="09/12/2022" 
                />
            </main>
        </Container>
    )
}
