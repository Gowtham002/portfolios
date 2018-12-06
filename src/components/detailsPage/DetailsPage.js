import React from "react";
import { Table, PageHeader, Button } from "react-bootstrap";
import { connect } from "react-redux";
import TableHeader from "./../common/tableHeader/TableHeader";
import ConstitentRow from "./ConstitentRow";
import { fetchContituent, deleteConstituent, adjustConstituentWeight, rebalanceConstituent, toggleLockConstituent } from "ACTIONS/constituent";
import "./detailsPage.sass";

const tableHeaders = ["Category/Stock", "Model Weight(%)", "Weight(100%)"];

class DetailsPage extends React.Component {

  componentDidMount() {
    let { match } = this.props;
    this.props.fetchContituent(match.params.id);
  }

  render() {
    let { constituent, rebalanceConstituent, adjustConstituentWeight, deleteConstituent, toggleLockConstituent } = this.props;
    let constituentKeys = Object.keys(constituent);
    return (
      <div className="details-page">
        <PageHeader bsClass="page-header details-page--header">
          <small>Portfolio Constituents</small>
          <Button bsStyle="info" bsSize="small" onClick={() => rebalanceConstituent()}>Rebalance</Button>
        </PageHeader>
        <Table responsive>
          <TableHeader headers={tableHeaders}/>
          <tbody>
            {
              constituentKeys.map((key, index) => 
                <ConstitentRow
                  key={index}
                  keyVal={key}
                  value={constituent[key]}
                  adjustConstituentWeight={adjustConstituentWeight}
                  deleteConstituent={deleteConstituent}
                  toggleLockConstituent={toggleLockConstituent}
                />
              )
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = ({constituents}) => ({
  constituent: {...constituents.constituent}
})

const mapDispatchToProps = dispatch => ({
  fetchContituent: (protfolio_id) => dispatch(fetchContituent(protfolio_id)),
  deleteConstituent: (key, index) => dispatch(deleteConstituent(key, index)),
  adjustConstituentWeight: (key, index, type) => dispatch(adjustConstituentWeight(key, index, type)),
  rebalanceConstituent: () => dispatch(rebalanceConstituent()),
  toggleLockConstituent: (key) => dispatch(toggleLockConstituent(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);