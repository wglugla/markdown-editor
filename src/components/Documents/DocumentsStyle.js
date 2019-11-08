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
    padding: 2rem 4rem;
    box-sizing: border-box;
`;

export const StyledLi = styled.li`
    width: 200px;
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
