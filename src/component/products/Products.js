import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPostalCode } from "../../../store/actions/postalcodeActions";
import { getAllProducts } from "../../../store/actions/productAction";

import Zipcodes from "./Zipcodes";
import Product from "./Product";

export class Products extends Component {
  state = {
    selectOption: null
  };

  componentDidMount() {
    this.props.getPostalCode();
    this.props.getAllProducts(60804);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectOption !== this.state.selectOption) {
      this.props.getAllProducts(this.state.selectOption);
    }
  }

  //set state to selected zipcode
  handleChange = e => {
    this.setState({ selectOption: e.target.value });
  };

  render() {
    const { products } = this.props;

    let productList;
    if (products) {
      productList = products.map(product => (
        <Product key={product.id} product={product} />
      ));
    }

    return (
      <Fragment>
        <section className="products">
          <div className="products__header">
            <h1 className="products__header--title">Products Sales</h1>
            <Zipcodes handleChange={this.handleChange} />
          </div>

          <div className="products__list">{productList}</div>
        </section>
      </Fragment>
    );
  }
}

Products.propTypes = {
  postalcode: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  postalcode: state.postalcode.postalcode,
  products: state.products.results
});

export default connect(
  mapStateToProps,
  { getPostalCode, getAllProducts }
)(Products);
