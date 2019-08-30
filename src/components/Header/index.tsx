import React from 'react';
import { StyledHeader, StyledLink, StyledList, StyledTitle } from './style';

export default function Header() {
    return (
        <StyledHeader>
            <StyledTitle> Markdown-editor using React with Typescript </StyledTitle>
            <StyledList>
                <li>
                    <StyledLink href="https://github.com/wglugla"> My Github Account </StyledLink>
                    <StyledLink href="https://github.com/wglugla/markdown-editor"> Repository </StyledLink>
                </li>
            </StyledList>
        </StyledHeader>
    );
}
