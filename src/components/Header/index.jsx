import { RiShutDownLine } from 'react-icons/ri';

import  { Container, Profile, Logout } from './styles';

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/GilvaniaMoreira.png"
                    alt="Foto do uauário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Gilvânia Moreira</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}