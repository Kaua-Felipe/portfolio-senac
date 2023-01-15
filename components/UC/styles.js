import styled from "styled-components"

export const Container = styled.section`
    background-color: #0F0F0F;
    border-radius: 5px;
    width: 40%;
    height: 150px;
    border: 1px solid rgb(135, 66, 255, 0.3);
    padding: 20px 10px 0;
    cursor: pointer;
    transition: .3s;

    a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    h3 {
        width: 50%;
    }
    :hover {
        background-color: transparent;
    }
`
export const Header = styled.header`
    display: flex;
    width: 100%;
`
export const CRow = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    width: 50%;

    hr {
        width: 90%;
        background-color: white;
    }
`
export const Circle = styled.div`
    width: 5px;
    height: 5px;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid white;
`
export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-top: 1px solid rgb(135, 66, 255, 0.3);
    transition: .3s;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    :hover {
        background-color: rgb(135, 66, 255, 0.3);
    }
`
