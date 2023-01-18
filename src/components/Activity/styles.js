import styled from "styled-components"

export const Container = styled.section`
    height: 300px;
    margin: 30px 0;
    /* background-color: gray; */
    display: flex;
    flex-direction: ${props => !props.reverse || "row-reverse"};
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    /* div {
        width: 1px;
        height: 100px;
        background-color: white;
    } */
`
export const Date = styled.div`

`
export const Content = styled.div`
    /* position: relative; */
    width: 90%;
    height: 100%;
    /* padding: 100px; */
    background-image: ${props => !props.reverse ? "linear-gradient(to left, rgb(135, 66, 255, 0.3), #050505)" : "linear-gradient(to right, rgb(135, 66, 255, 0.3), #050505)"};
    border-top-left-radius: ${props => !props.reverse || "10px"};
    border-bottom-left-radius: ${props => !props.reverse || "10px"};
    border-top-right-radius: ${props => props.reverse || "10px"};
    border-bottom-right-radius: ${props => props.reverse || "10px"};
    display: flex;
    justify-content: ${props => !props.reverse ? "flex-end" : "flex-start"};

`
export const ContainerButton = styled.div`
    display: flexbox;
    align-items: center;
    /* background-color: blueviolet; */
    padding: 0 20px;
    
    button {
        /* background-color: rgba(0, 0, 0, .98); */
        color: white;
        border: 1px solid white;
        padding: 10px 30px;
        transition: .3s;
        cursor: pointer;
        border-radius: 2px;

        :hover {
            background-color: rgb(135, 66, 255, .2);
        }
    }
`
