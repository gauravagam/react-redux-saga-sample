import React, { Component } from 'react';
import {Input} from 'mdbreact';

class EditComponent extends Component{
    render(){
        return(
            <div className="container" >
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <p className="h5 text-center mb-4">Product details </p>
                            <Input label="Name" group type="text" icon="user"/>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

export default EditComponent
