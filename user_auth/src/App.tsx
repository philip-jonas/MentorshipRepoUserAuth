import * as React from "react";
import {Link, Route} from 'react-router-dom';
import { Container, Grid, Button } from "semantic-ui-react";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Container>
          <Grid columns={1} padded={true}>
            <Grid.Row>
              <Grid.Column>

                {/* ROUTER SEGMENT */}
                <Button content='A LINK' as={Link} to={'/aaaaaa'} />
                <Route path='/aaaaaa' exact={true} />


              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
