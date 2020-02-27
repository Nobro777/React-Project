import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardsContainer = Styled.div`
margin: 2% 15% 1% 15%;
@media (max-width: 600px){
    margin: 1% 5% 1% 5%;
}
`
const StyledHr = Styled.hr`
margin: 1%;
`
const StyledHeadingHr = Styled.hr`
margin: 1% 0 1.75% 0;
`
const CardsHeading = Styled.div`
display: flex;
justify-content: space-between;
margin: 0 0 2% 0;
@media (max-width: 600px){
    flex-direction: column;
    align-items: center;
}
`
const StyledSpan = Styled.span`
position: relative;
top: 5px;
`
const StyledHeaderSpan = Styled.span`
color: black;
font-weight: bold;
text-decoration: none;
&:hover {
    text-decoration: underline;
}
`

const ProjectsCards = (props) => {
  return (
    <CardsContainer>
        <CardsHeading>
        <h2>Projects</h2>
        <StyledSpan>Click <Link to="/projects"><StyledHeaderSpan>here</StyledHeaderSpan></Link> to view the Carousel Display</StyledSpan>
        </CardsHeading>
        <StyledHeadingHr></StyledHeadingHr>
    <Row>
      <Col sm="6">
        <Card body className="mb-1">
          <CardTitle>Rick and Morty Fan Site</CardTitle>
          <CardText>This App takes information from the Rick and Morty API, then displays it on the screen in cards. You can search for your favorite characters using a search bar.</CardText>
          <Button><a target="_blank" href="https://sprint-challenge-single-page-apps-zeta.now.sh/characters">Link to Github Repo</a></Button>
          <StyledHr></StyledHr>
          <Button><a target="_blank" href="https://github.com/Nobro777/Sprint-Challenge-Single-Page-Apps">Link to Github Repo</a></Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body className="mb-1">
          <CardTitle>Project Title</CardTitle>
          <CardText>This App takes water level information from an API and displays it as a graph as well as in various other charts, so that fishermen can easily check the tides.</CardText>
          <Button>Link to Github Repo</Button>
          <StyledHr></StyledHr>
          <Button>Link to Deployed App</Button>
        </Card>
      </Col>
    </Row>

    <Row>
    <Col sm="6">
      <Card body className="mb-1">
        <CardTitle>Project Title</CardTitle>
        <CardText>Project Description / What does the application do?</CardText>
        <Button>Link to Github Repo</Button>
        <StyledHr></StyledHr>
        <Button>Link to Deployed App</Button>
      </Card>
    </Col>
    <Col sm="6">
      <Card body className="mb-1">
        <CardTitle>Project Title</CardTitle>
        <CardText>Project Description / What does the application do?</CardText>
        <Button>Link to Github Repo</Button>
        <StyledHr></StyledHr>
        <Button>Link to Deployed App</Button>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col sm="6">
      <Card body>
        <CardTitle className="mb-1">Project Title</CardTitle>
        <CardText>Project Description / What does the application do?</CardText>
        <Button>Link to Github Repo</Button>
        <StyledHr></StyledHr>
        <Button>Link to Deployed App</Button>
      </Card>
    </Col>
    <Col sm="6">
      <Card body>
        <CardTitle className="mb-1">Project Title</CardTitle>
        <CardText>Project Description / What does the application do?</CardText>
        <Button>Link to Github Repo</Button>
        <StyledHr></StyledHr>
        <Button>Link to Deployed App</Button>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col sm="6">
      <Card body className="mt-1">
        <CardTitle>Project Title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Link to Github Repo</Button>
        <StyledHr></StyledHr>
        <Button>Link to Deployed App</Button>
      </Card>
    </Col>
    <Col sm="6">
      <Card body className="mt-1">
        <CardTitle>Project Title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Link to Github Repo</Button>
        <StyledHr></StyledHr>
        <Button>Link to Deployed App</Button>
      </Card>
    </Col>
  </Row>
  </CardsContainer>
  );
};

export default ProjectsCards;