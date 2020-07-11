import React from 'react';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    EditButton,
    LocationIcon,
    CakeIcon,
    Followage
} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Heron Rodrigues</h1>
                <h2>@heronsousa</h2>

                <p>
                    Software Engineering Student at Universidade de Brasilia (UnB)
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Brasília, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 24 de outubro de 1998
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>50</strong>
                    </span>
                    <span>
                        <strong>100 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
        </Container>
    );
}

export default ProfilePage;