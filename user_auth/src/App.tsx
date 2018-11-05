import * as React from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import styled from "styled-components";

const ContainerPadding = styled.div`
  padding: 15px;
`;

class App extends React.Component {
  public render() {
    return (
      <div>
        <Container>
          <Grid columns={1} padded={true}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2">USER LOGIN</Header>
                <Header as="h2">USER REGISTRATION</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
