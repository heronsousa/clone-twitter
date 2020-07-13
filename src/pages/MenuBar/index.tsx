import React from 'react';

import {
    Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BottomSide,
    Avatar,
    ProfileData,
    ExitIcon
} from './styles';
import Button from '../../components/Button';

const MenuBar: React.FC = () => {
    return (
        <Container>
            <TopSide>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>
            </TopSide>

            <BottomSide>
                <Avatar />

                <ProfileData>
                    <strong>Heron Rodrigues</strong>
                    <span>@heronsousa</span>
                </ProfileData>

                <ExitIcon />
            </BottomSide>
        </Container>
    );
};

export default MenuBar;
