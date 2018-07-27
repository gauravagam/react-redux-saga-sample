import React, { Component } from 'react';
import { Grid, Row, FormGroup, FormControl, Form, Col, Button,Alert } from 'react-bootstrap'
import {authenticationRequest,clearLoginError} from '../redux/action/loginActions';
import { connect } from "react-redux";
import { Redirect } from 'react-router'

const styles = {
    formRow: {
        marginTop: 150
    }
}
class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:''
        }
       
    }

    handleChange=(e)=>{
        if(this.props.errorMessage){
            this.props.clearError();
        }
        this.setState({[e.target.id]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.login({userName:this.state.userName,password:this.state.password})
    }

    
    render() {
        if(this.props.user){
            console.log('this.props.user ',this.props.user);
            localStorage.setItem('user',JSON.stringify(this.props.user))
            console.log('localstorage.user ',localStorage.getItem('user'));
            return <Redirect to="/home" push={true}/>
        }
        return (
            <Grid>
                <Row style={styles.formRow}>
                    <Col md={4} mdOffset={4}>
                        {this.props.errorMessage?<Alert bsStyle="danger" >{this.props.errorMessage}</Alert>:null}
                        <Form horizontal>
                            <FormGroup controlId="userName">
                                <Col md={10} style={{ marginLeft: 30 }}>
                                    <FormControl 
                                        type="text" 
                                        placeholder="Username" 
                                        value={this.state.username} 
                                        onChange={this.handleChange}
                                        name="userName"/>
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="password">
                                <Col md={10} style={{ marginLeft: 30 }}>
                                    <FormControl 
                                        type="password" 
                                        placeholder="Password" 
                                        value={this.state.password} 
                                        onChange={this.handleChange} 
                                        name="password"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={10} style={{ marginLeft: 30 }}>
                                    <Button type="button" 
                                        bsStyle="success" 
                                        block 
                                        onClick={this.handleSubmit} 
                                        disabled={this.state.userName==="" ||  this.state.password===""}>Login</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </Grid>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        errorMessage:state.loginReducer.loggingError,
        user:state.loginReducer.user
    }
}
const mapDispatchToProps=(dispatch)=>({
        login: loginInfo =>dispatch(authenticationRequest(loginInfo)),
        clearError:()=>dispatch(clearLoginError())
  })
  export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);