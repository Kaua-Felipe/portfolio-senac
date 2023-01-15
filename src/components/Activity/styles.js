import styled from "styled-components"

export const Container = styled.section`
    margin: 30px 0;
    /* background-color: gray; */
    display: flex;
    flex-direction: ${props => !props.reverse || "row-reverse"};
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    div {
        width: 1px;
        height: 100px;
        background-color: white;
    }
`
export const Date = styled.section`

`
export const Content = styled.section`
    /* border: 2px solid white; */
    /* border-left: ;
    border-right: ${props => props.borderRight == false || "none"};
    border-left: ${props => props.borderLeft == false || "none"}; */
    /* padding: 50px; */
`
