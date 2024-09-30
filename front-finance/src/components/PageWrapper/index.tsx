import SideMenu from "../SideMenu";
import { Container, ContainerMain } from "./styles";

export default function PageWrapper({children} : {children: React.ReactNode}) {
    return (
        <Container>
            <SideMenu />
            <ContainerMain>
                {children}
            </ContainerMain>
        </Container>
    )
}