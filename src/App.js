import React from 'react';
import {Table} from 'antd'
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Form from './Form'


const columns = [{
  title:'First Name',
  dataIndex: 'firstName',
  key: 'firstName',
},
{
  title: 'Last Name',
  dataIndex: 'lastName',
  key:'lastName'
},
{
  title:'Birthday',
  dataIndex:'birthday',
  key: 'birthday'
},
{
  title:'Age',
  dataIndex: 'age',
  key: 'age'
},
{
  title:'Hobby',
  dataIndex: 'hobby',
  key:'hobby'
}
]





class App extends React.Component{
  state = {
    users:[]
  }

  handleSubmit = user => {
    this.setState({users: [...this.state.users, user]})
  }
  

  render(){
    const {users} = this.state;
    return(
      <div className="Container">
        <h1>Coding Challenge 1</h1>
        <Form handleSubmit={this.handleSubmit} />
        <Table columns={columns} dataSource={users}/>
      </div>
    )
  }

}






export default App;
