import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, CardBody, CardImg, CardText, CardTitle, Button } from 'reactstrap'
import { connect } from "react-redux";
import { getProductList } from '../redux/action/homePageActions';

class HomeComponent extends Component {

    componentDidMount() {
        this.props.getProductList();
    }

    render() {
        return (

            <div className="container">
                <Navbar color="light" light expand="md">
                    <NavbarBrand>Home</NavbarBrand>
                </Navbar>
                
                <div className="row">
                {this.props.errorMessage?<div class="alert alert-danger">{this.props.errorMessage}</div>:null}
                    {this.props.productList ? this.props.productList.map((product, index) => {
                        return (
                        <div className="col-md-3" key={index}>
                            <Card > 
                                <CardImg top width="100%" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <CardText>&#x20B9;{product.price}</CardText>
                                    <Button color="success" href="#">Edit</Button>
                                    <Button color="danger" href="#">Delete</Button>
                                </CardBody>
                            </Card>
                        </div>
                    )
                    }) : null}

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productList: state.homePageReducer.productList,
        errorMessage:state.homePageReducer.errorMessage
    }
}
const mapDispatchToProps = dispatch => ({
    getProductList: () => dispatch(getProductList())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);