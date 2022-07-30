import gql from "graphql-tag";
const Taskqueries = gql`
query MyQuery {
    Task {
      Task_title
      Task_type
      created_at
      done_by
      end_date
      id
      status
    }
  }
`
const register = gql`
mutation signup($confirmpassword: String!, $email: String!, $password: String!, $username: String!,$name:String!) {
    register(objects: {confirmpassword: $confirmpassword, email: $email, password: $password, username: $username,name:$name}) {
      success
    }
  }
`
const  signin= gql`
mutation signin($password: String!, $username: String!) {
    signin(password: $password, username: $username) {
      token
    }
  }
`
const inserttask = gql`
mutation MyMutation($done_by: String = "", $created_at: date = "", $Task_type: String = "", $Task_title: String = "") {
    insert_Task_one(object: {Task_title: $Task_title, Task_type: $Task_type, created_at: $created_at, done_by: $done_by}) {
      status
    }
  } 
`
export {Taskqueries,register,signin,inserttask};