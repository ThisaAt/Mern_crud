import React, {Component} from 'react';

import axios from 'axios';

export default class Create extends Component {

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBisName = this.onChangeBisName.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            person_name:'',
            bis_name:'',
            nic:'',
        }
    }

    onChangeName(e){
        this.setState({
            person_name: e.target.value
        });   
    }

    onChangeBisName(e){
        this.setState({
            bis_name: e.target.value
        });   
    }

    onChangeNIC(e){
        this.setState({
            nic: e.target.value
        });   
    }

    onSubmit(e) {
        console.log("called")
     // e.preventDefult();
        const obj ={
            person_name : this.state.person_name,
            business_name : this.state.bis_name,
            NIC_number : this.state.nic
        };

        console.log(obj)

        axios.post('http://localhost:4000/business/add',obj).then(res=>console.log(res.data));

        this.setState({
            person_name :'',
            business_name:'',
            NIC_number:''
        })
    }



    render() {
        return(
            <div style={{marginTop: 10}}>
                <h3>Add new business</h3>
                {/* <form onSubmit={this.onSubmit}> */}
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.person_name}
                               onChange={this.onChangeName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Business Name:</label>
                        <input  type="text" 
                                className="form-control"
                                value={this.state.bis_name}
                                onChange={this.onChangeBisName}
                        />
                    </div>

                    <div className="form-group">
                        <label>NIC:</label>
                        <input   type="text"
                                 className="form-control"
                                 value={this.state.nic}
                                 onChange={this.onChangeNIC}
                       />
                    </div>

                    <div className="form-group">
                        <button onClick={this.onSubmit}  type="submit" className="btn btn-primary"> Register</button>
                    </div>

                {/* </form> */}
            </div>
        )

    }
    
}
