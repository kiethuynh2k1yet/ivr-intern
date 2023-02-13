import styled from "styled-components";

export const Container = styled.div`
    width:100%;
`;

export const Wrapper = styled.form`
    margin: 60px 240px 137px 240px;

    @media (max-width: 768px) {
        margin: 47px 24px 16px 24px;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    line-height: 48px;
    color: #F68B1F;
`;

export const InfoTitle = styled.label`
    width: 382px;
    height: 48px;
    color: #212529;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    
    
    @media (max-width: 768px) {
        margin-top: 12px;
    }
`;

export const InputInfoTitle = styled.div`
    padding-left: 16px; 
    width: 250px;
    height: 48px;
    background: #E9ECEF;
    border: 1px solid #CED4DA;
    border-radius: 4px; 
    color: #495057;
    item-align: center;
    display: flex;

    input:focus:invalid {
        border: 1px solid red;
        outline: none;
      }
    
    @media (max-width: 768px) {
        Width: 100%;
        margin-top:12px;
    }
`;

export const Info = styled.div`
    display: flex;
    margin-top:32px;

    @media (max-width: 768px) {
        display: block;
        margin-top: 12px;
    }
`;

export const InputOtp = styled.div`
    padding-left: 16px; 
    width: 250px;
    height: 48px;
    background: #fff;
    border: 1px solid #CED4DA;
    border-radius: 4px; 
    color: #495057;
    item-align: center;
    display: flex;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 12px;
        margin-left:0px;
    }

    &.errorOtp{
        border:1px solid red;
    }
`;

export const InputInfoOtp = styled.div`
`;

export const DesOtp = styled.label`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 12px;
    margin-left: 24px;

    @media (max-width: 768px) {
        display: block;
        margin-top: 12px;
    }
`;

export const DesOptminus = styled.p`
    font-style: italic;
    line-height: 24px;
    color: #212529;
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
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-top: 64px;
    cursor: pointer;
`;

export const TitleContactLink = styled.p`
    color:#F68B1F;
    font-style: italic;
    text-decoration: underline;
    margin-top: 15px;
    margin-left:16px;
`;

export const DesOtpError = styled.label`
    color:#E65100;
    font-style: italic;
    text-decoration: underline;
    margin-top: 12px;
    margin-left: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
`;
