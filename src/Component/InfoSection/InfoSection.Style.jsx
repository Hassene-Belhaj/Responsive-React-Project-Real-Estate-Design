import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background: #fff;
display: flex;
justify-content: center;
`

export const InfoSectionDiv = styled.div`
width: 100%;
height: 100%;
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-rows:800px;
padding: 0 2rem;
@media screen and (max-width :768px){
grid-template-columns    :1fr;
}
`