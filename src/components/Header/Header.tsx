import React, { Dispatch, SetStateAction } from 'react';
import Logo from '../../assets/images/markdown.png';
import LoginMenu from '../LoginMenu/LoginMenu';
import { LogoContainer, StyledHeader, StyledLogo, StyledTitle } from './HeaderStyle';

interface Props {
    setLoginStatus: (value: boolean, id: string) => void;
    setPopupVisibility: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: Props) => {
    return (
        <StyledHeader>
            <LogoContainer>
                <StyledLogo src={Logo} alt="" />
                <StyledTitle> Markdown editor </StyledTitle>
            </LogoContainer>
            <LoginMenu setLoginStatus={props.setLoginStatus} setPopupVisibility={props.setPopupVisibility} />
        </StyledHeader>
    );
};

export default Header;
