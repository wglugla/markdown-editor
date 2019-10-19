import React from 'react';
import { StyledHeader, StyledLink, StyledList, StyledTitle } from './HeaderStyle';

export default function Header() {
    return (
        <StyledHeader>
            <StyledTitle> Markdown editor </StyledTitle>
            <StyledList>
                <li>
                    <StyledLink href="https://github.com/wglugla"> My Github Account </StyledLink>
                    <StyledLink href="https://github.com/wglugla/markdown-editor"> Repository </StyledLink>
                </li>
            </StyledList>
        </StyledHeader>
    );
}
