import React from 'react';
import StickyBox from 'react-sticky-box';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';
import List from '../../components/List';
import FollowSuggestion from '../../components/FollowSuggestion';
import News from '../../components/News';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List 
                        title='Talvez você curta'
                        elements={[
                            <FollowSuggestion name="Twitter" nickname="@twitter" />,
                            <FollowSuggestion name="Twitter" nickname="@twitter" />,
                            <FollowSuggestion name="Twitter" nickname="@twitter" />,
                        ]}
                    />
                    <List 
                        title='O que está acontecendo'
                        elements={[
                            <News />, <News />, <News />
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
};

export default SideBar;
