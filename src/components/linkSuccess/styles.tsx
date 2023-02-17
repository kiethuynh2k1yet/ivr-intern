import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Wapper = styled.div`
    width: 960px;
    height: 532px;
    margin: 60px 240px 0px 240px;

    @media (max-width: 768px) {
        margin: 47px 24px 16px 24px;
    }
`;

export const ColorDesHighLight = styled.span`
    color: #F68B1F;
`;

export const Title = styled.h5`
    color: #212529;
    margin-bottom:16px;
`;