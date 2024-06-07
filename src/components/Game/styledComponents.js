import styled from 'styled-components'

export const MainContainer = styled.div`
background-color:#23a5f#,
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:30px;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

export const ItemsContainer = styled.div``
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
`

export const ScoreCardContainer = styled.div`
background-color:#ffffff,
margin:15px;
padding:5px;
border-radius:10px;
`
export const ParagraphScore = styled.p`
color:#0000000,
font-family:"Roboto";
font-size:20px;
margin:0;
`

export const ScoreSpan = styled.p`
color:#0000000,
font-family:"Roboto";
font-size:20px;
margin:0;
text-align:center;
`

export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: apce-around;
  padding: 0;
  width: 100;
`

export const PlayAgainButton = styled.button`
  border: 0;
  color: #000000;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #ffffff;
  padding: 10px;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const PopupButton = styled(PlayAgainButton)`
  width: 100px;
`

export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseLineButton = styled.button`
  border: 0;
  cursor: pointer;
`

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
