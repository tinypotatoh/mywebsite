
import styled from 'styled-components'

const Container = styled.div`
  font-family: Montserrat;
  letter-spacing : 0.1em;
  text-align: center;
  color: #9F3931;
  margin-left: 20%;
  margin-right: 20%;

`;

const Image = styled.img`
    max-height: 300px;
    width: auto;
`;

const Text = styled.h1`
    margin-top: 3%;
    font-size: 1.5em;
`;

const Skillset = styled. ul`
    margin-top: 5%;
    list-style: none;
`;




const Skills = () => {
    return ( <Container>
      <Image src="./images/img4.png">
      </Image>
      <Text> I am at the beginning of my career journey and I am having fun with learning and practising continually about web technologies and concepts. Through this journey I gained many frontend skills which you may find below: </Text>
      <Skillset>
        <li>HTML5</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>SQL</li>
      </Skillset>
    </Container>

  )
}

export default Skills;