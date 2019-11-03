import React from 'react';
import FirebaseLogin from '../FirebaseLogin/FirebaseLogin';
import { StyledHeader, StyledTitle, StyledLogo, LogoContainer } from './HeaderStyle';
import Logo from '../../assets/images/markdown.png';

interface Props {
    setLoginStatus: (value: boolean, id: string) => void;
}

export default function Header(props: Props) {
    return (
        <StyledHeader>
            <LogoContainer>
                <StyledLogo src={Logo} alt="" />
                <StyledTitle> Markdown editor </StyledTitle>
            </LogoContainer>
            <FirebaseLogin setLoginStatus={props.setLoginStatus} />
        </StyledHeader>
    );
}
