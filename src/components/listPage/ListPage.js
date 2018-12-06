import React from 'react';
import PortfolioCard from "./PortfolioCard";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchPortfolios } from "ACTIONS/portfolio";
import './listPage.sass';

class ListPage extends React.Component {

  componentDidMount() {
    this.props.fetchPortfolios();
  }
  
  render() {
    let { portfolios } = this.props;
    return (
      <Grid>
        <Row>
          {
            portfolios.map(portfolio => {
              return (
                <Col xs={12} md={4} key={portfolio.id}>
                  <PortfolioCard {...portfolio}/>
                </Col>
              )
            })
          }
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = ({portfolios}) => ({
  ...portfolios
})

const mapDispatchToProps = dispatch => ({
  fetchPortfolios: () => dispatch(fetchPortfolios)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);