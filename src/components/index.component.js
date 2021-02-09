import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = {business:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/business')
            .then(Response=>{
                this.setState({business :Response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }
    TableRow (){
        return this.state.business.map(function(object,i){
            return<TableRow obj ={object} key={i}/>;
         });
    }


    render() {
        return(
            <div>
                <h3 align ="center">Business List</h3>
                <table className ="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Business</th>
                            <th>NIC</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
               
                    <tbody>
                     
                         {this.TableRow() }
                    </tbody>
                </table>
            </div>
        );

    }
    
}
//     {this.tabRow()}