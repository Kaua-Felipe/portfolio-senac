import Link from "next/link"

import Activity from "../../../components/Activity"

import { Container } from "./styles"

export default function Uc1() {
    return (
        <Container>
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
                />
                <Activity 
                    reverse={true} 
                    borderLeft={true}
                    borderRight={false} 
                />
                <Activity 
                    borderLeft={true}
                    borderRight={false} 
                />
                <Activity 
                    reverse={true} 
                    borderLeft={true}
                    borderRight={false} 
                />
                <Activity 
                    borderLeft={true} 
                    borderRight={false} 
                />
                <Activity 
                    reverse={true} 
                    borderLeft={true}
                    borderRight={false} 
                />
                <Activity 
                    borderLeft={true}
                    borderRight={false} 
                />
                <Activity 
                    reverse={true} 
                    borderLeft={true}
                    borderRight={false} 
                />
            </main>
        </Container>
    )
}
