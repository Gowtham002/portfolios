import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class PortfolioCard extends React.Component {
  render() {
    let { currency, id, img_src, mean_return, name, volatility } = this.props;
    return (
      <div className="portifolio-card">
        <div className="card-image">
          <img src={img_src} alt={img_src}/>
          <p className="card-placeholder">{name}</p>
        </div>
        <div className="card-content">
          <ListGroup>
            <ListGroupItem bsClass='list-group-item portfolio-li'>Volatility <span>{mean_return}</span></ListGroupItem>
            <ListGroupItem bsClass='list-group-item portfolio-li'>Mean Return <span>{volatility}</span></ListGroupItem>
            <ListGroupItem bsClass='list-group-item portfolio-li'>Currency <span>{currency}</span></ListGroupItem>
            <ListGroupItem bsClass='list-group-item portfolio-li'>Eligibility <span>Available for all investors</span></ListGroupItem>
            <ListGroupItem bsClass='list-group-item portfolio-li'>
              <Link to={`/portfolios/${id}`}><Button bsStyle="danger" block>Explore Investment Idea</Button></Link>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default PortfolioCard;