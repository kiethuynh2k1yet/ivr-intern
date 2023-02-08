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
    margin: 60px 240px 137px 240px;

    @media (max-width: 768px) {
        margin: 47px 24px 16px 24px;
        width: 338px;
        height: 240px;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    line-height: 48px;
    color: #F68B1F;
`;

export const Info = styled.div`
    display: flex;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const InfoTitle = styled.p`
    margin-top: 24px;
    width: 253px;
    height: 48px;
    color: #212529;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: 768px) {
        width:100%;
        margin-bottom: 0px;
        margin-top: 0px;
    }
`;

export const InputInfoTitle = styled.input`
    padding-left: 16px; 
    width: 250px;
    height: 48px;
    margin-top: 24px;
    margin-left: 32px;
    background: #fff;
    border: 1px solid #CED4DA;
    border-radius: 4px; 
    color: #495057;
    
    @media (max-width: 768px) {
        Width: 100%;
        margin:0px;
    }
`;

export const Demo = styled.h6`
    font-style: normal;
    color: #808080;
    margin-left: 32px;
    margin-top: 36px;

    @media (max-width: 768px) {
        Width: 100%;
        margin-top:4px;
        margin-left:0px;
        margin-bottom: 16px;
    }
`;

export const Description = styled.div`
    width: 960px;
    height: 192px;
    margin-top: 24px;
`;

export const DesTitle = styled.p`
    color: #212529;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
`;

export const DesCheck = styled.div`
    margin-top: 24px;
    align-items: center;
    display: flex;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const DesCheckBox = styled.input`
    border-radius: 2px;
    accent-color: #F68B1F;
`;


export const StyleBtn = styled.button`
    width: 200px;
    height: 50px;
    align-items: center;
    padding: 13px 32px;
    background: #FF7043;
    border-radius: 4px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 32px;
    margin-bottom: 107px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
`;

export const ColorDesHighLight = styled.span`
    color: #F68B1F;
`;