import React, { Dispatch, SetStateAction, useState } from 'react';
import Logo from '../../assets/images/markdown.png';
import LoginMenu from '../LoginMenu/LoginMenu';
import { LogoContainer, StyledHeader, StyledLogo, StyledTitle, TogglerCase } from './HeaderStyle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import Create from '@material-ui/icons/Create';

interface Props {
    setLoginStatus: (value: boolean, id: string) => void;
    setPopupVisibility: Dispatch<SetStateAction<boolean>>;
    setMode: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header = (props: Props) => {
    const [menuVisibility, setMenuVisibility] = useState(true);
    const toggleMenu = () => {
        setMenuVisibility(prev => !prev);
    };
    return (
        <StyledHeader>
            <LogoContainer>
                <StyledLogo src={Logo} alt="" />
                <StyledTitle> Markdown editor </StyledTitle>
            </LogoContainer>
            <TogglerCase>
                <Button color="inherit" onClick={toggleMenu}>
                    <Menu />
                </Button>
                <Button color="inherit" onClick={props.setMode}>
                    <Create />
                </Button>
            </TogglerCase>
            <LoginMenu
                toggleMenu={toggleMenu}
                menuVisibility={menuVisibility}
                setLoginStatus={props.setLoginStatus}
                setPopupVisibility={props.setPopupVisibility}
            />
        </StyledHeader>
    );
};

export default Header;
