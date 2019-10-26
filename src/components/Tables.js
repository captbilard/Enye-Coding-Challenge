import React from 'react';
import {Table} from 'antd';
import {connect} from 'react-redux';

//Let's redux become aware of the changes in your code 
const mapStateToProps = state => {
    return {users: state.users};
};

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


const ConnectedTable = ({users}) => (
    <Table columns={columns} dataSource={users}/>
);

//Connects the table component defined above to the redux store
const UsersTable = connect(mapStateToProps)(ConnectedTable);

export default UsersTable;
