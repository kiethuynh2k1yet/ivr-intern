import styled from "styled-components";

export const Container = styled.div`
   width:100%;
   display:flex;
   justify-content:center;
   align-items:center;
`;

export const Wrapper = styled.div`
    width: 960px;
    height: 532px;
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

export const TitleDes = styled.p`
    margin-top: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`;


export const ListMenuUl = styled.ul`
    margin-top: 8px;
    margin-left: 15px;
    list-style: numeric;

    @media (max-width: 768px) {
        margin-left: 0px;
    }
`;

export const ListItemLi = styled.li`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`;

export const Description = styled.div`
    width: 960px;
    height: 500px;
    margin-top: 24px;
`;

export const ColorDesHighLight = styled.span`
    color: #F68B1F;
`;

export const StyleTitle = styled.span`
    font-style: italic;
`;

export const TitleContact = styled.div`
    display: flex;
`;

export const TitleContactLink = styled.p`
    color:#F68B1F;
    font-style: italic;
    text-decoration: underline;
    margin-top: 15px;
    margin-left:16px;
    cursor: pointer;
`;

export const DesContact = styled.p`
    color: #212529;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`;
