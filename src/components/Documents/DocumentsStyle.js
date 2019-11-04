import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 90vh;
    background: #333333;
    z-index: 100;
`;

export const StyledLi = styled.li`
    min-width: 200px;
    width: 30%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    background: #fff;
    box-sizing: border-box;
`;

export const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;
