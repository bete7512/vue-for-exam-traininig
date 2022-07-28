const mutate = `mutation MyMutation($username: String, $password: String) {
  signin(username: $username, password: $password) {
    token
  }
}
  `
const queryById = `query MyQuery($username: String!) {
    Employers(where: {username: {_eq: $username}}) {
      email
    }
  }
  `
export {queryById,mutate}