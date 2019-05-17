import React, { Component, Fragment } from "react";
import { getPostalCode } from "../../../store/actions/postalcodeActions";
import { connect } from "react-redux";

export class PostalCode extends Component {
  state = {};

  componentDidMount() {
    this.props.getPostalCode();
  }

  render() {
    const { postalcode } = this.props;
    let options;
    if (postalcode) {
      options = postalcode.map(pc => (
        <option key={pc.postalCode}>{pc.postalCode}</option>
      ));
    }
    return (
      <div>
        <label htmlFor="postalcode"> Select your zipcode</label>{" "}
        <div className="zip-select">
          <select
            className="select-button"
            ref="postalcode"
            id="postalcode"
            onChange={this.props.handleChange}
          >
            {options}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  postalcode: state.postalcode.postalcode,
  currentDate: state.postalcode.contentDateSrting
});

export default connect(
  mapStateToProps,
  { getPostalCode }
)(PostalCode);
