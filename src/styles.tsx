import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const LeftArea = styled.div`
    padding: 10px 30px;
    width: 400px;
`;

export const Title = styled.h1`
    font-size: 50px;
    color: #0b0a55;
    margin: 0;
    margin-bottom: 40px;
`;

export const P = styled.div`
    margin-top: 20px;
    font-size: 18px;
    color: #999;
`;

export const InputArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 40px 0;

    ::placeholder {
        color: #999
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 10px;
    padding: 20px 10px;
    margin: 10px 0;
    border: 0;
    border-bottom: 1px solid#999;
    font-size: 15px;
    outline: 0;
`;
export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Button = styled.button`
    background-color: #1c1c9b;
    color: #FFF;
    font-size: 18px;
    width: 100%;
    padding: 20px;
    margin-top: 40px;
    border-radius: 8px;
    border: 0;
    outline: 0;
    cursor: pointer;

    &:hover {
        background-color: #3232bb;
    }
`;

export const RightArea = styled.div`
    width: 400px;
    height: 400px;
    margin-left: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;

export const ResIcon = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF;
    width: 400px;
    height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 7px;
`;
export const Prev = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px;
    width: 50px;
    height: 50px;
    background-color: #2e88d6;
    border-radius: 50%;
    position: absolute;
    margin-right: 440px;
    cursor: pointer;

    &:hover {
        background-color: #66a3d8;
    }
`;
export const ImageArea = styled.div`
    background-color: black;
    opacity: .3;
    padding: 20px;
    border-radius: 50%;
`;

export const Image = styled.img`
    width: 50px;
`;

export const Name = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0;
`;

export const ResImc = styled.div`
    font-size: 18px;
    margin-bottom: 30px;
`;

export const TextImc = styled.div`
    font-size: 14px;
`;


