import  { Container, Profile } from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
                <img 
                    src="https://github.com/GilvaniaMoreira.png"
                    alt="Foto do uauário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Gilvânia Moreira</strong>
                </div>
            </Profile>
        </Container>
    );
}