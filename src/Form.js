import React, { Component } from 'react'
import {Input, InputNumber, DatePicker, Button} from 'antd'
const {TextArea} = Input;

class Form extends React.Component{
    constructor(props){
        super(props);
        this.initialState = {
            firstName:'',
            lastName: '',
            birthday: '',
            age: '',
            hobby: ''
        };
        this.state = this.initialState
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        })
    }
    onDateChange(date, dateString){
        this.setState({
            birthday: dateString
        })
      }
    
    onAgeChange(value){
        this.setState({
            age: value
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render(){

        return(
            <div className="FormContainer">
                <form>
                    <label >First Name: </label>
                    <Input placeholder="Enter your first name" value={this.state.firstName} onChange={this.handleInputChange} allowClear name="firstName"/>
                    <label>Last Name: </label>
                    <Input placeholder="Enter your last name" value={this.state.lastName} onChange={this.handleInputChange} allowClear name="lastName"/>
                    <label>Birthday: </label>
                    <DatePicker onChange={this.onDateChange}/><br/>
                    <label>Age: </label>
                    <InputNumber onChange={this.onAgeChange} name="age" value={this.state.age}/><br/>
                    <label>Hobby: </label>
                    <TextArea  value={this.state.hobby} name="hobby" onChange={this.handleInputChange}/>
                    <Button type="primary" onClick={this.submitForm}>Submit</Button>
                </form>
            </div>
        );
    }
}

export default Form;