import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component{
  constructor(props){
      super(props);
      this.onChangePersonName = this.onChangePersonName.bind(this);
      this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
      this.onChangeNIC = this.onChangeNIC.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          person_name :'',
          business_name :'',
          NIC_number :''
      }
  }
  componentDidMount(){
      axios.get('http://localhost:4000/business/edit'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                person_name: response.data.person_name,
                business_name: response.data.business_name,
                NIC_number: response.data.NIC_number
            });
        })
        .catch(function(error){
            console.log(error);
        })
  }
  onChangePersonName(e){
      this.setState({
          person_name: e.target.value
      });
  }
  onChangeBusinessName(e){
    this.setState({
        business_name: e.target.value
    });
    }

    onChangeNIC(e){
        this.setState({
            NIC_number: e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();
        const obj ={
            person_name : this.state.person_name,
            business_name : this.state.business_name,
            NIC_number : this.state.NIC_numbe,
        };
        
        axios.post('http://localhost:4000/business/update'+this.props.match.params.id,obj)
            .then(res=>console.log(res.data));

        this.props.history.push('/index');
    }


}
