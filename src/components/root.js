import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import LoadingBar from 'react-redux-loading-bar'
import AppNav from "./common/appNav/AppNav";
import routes from "./routes";
import "./main.sass";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav/>
        <LoadingBar/>
        <div className="main-container" id="mainRoot">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                {routes}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
