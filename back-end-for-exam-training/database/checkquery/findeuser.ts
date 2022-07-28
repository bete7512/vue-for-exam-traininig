// import { queryById } from "./query/querybyid";
// import fetch from "node-fetch";
// const user = async (variables: any) => {
//     const result = await fetch(
//         "http://localhost:8080/v1/graphql",
//         {
//             method: 'POST',
//             headers: {
//                 'x-hasura-admin-secret': 'myadminsecretkey'
//             },
//             body: JSON.stringify({
//                 query: `query MyQuery($username: String!) {
//                     Employers(where: {username: {_eq: $username}}) {
//                       email
//                     }
//                   }
//                   `,
//                 variables: variables
//             })
//         }
//     )
//     const resultfromquery = await result.json();
//     return resultfromquery;
// };
const trying = async (username: any) => {
    const user = await fetch(
        "http://localhost:8080/v1/graphql",
        {
            method: 'POST',
            headers: {
            //     'x-hasura-admin-secret': 'myadminsecretkey'
            },
            body: JSON.stringify({
                query: `query MyQuery($username: String!) {
                    Employers(where: {username: {_eq: $username}}) {
                      email
                    }
                  }`,username
            })
        }
        )
        console.log(await user.json())

    return "jhfacugoia"
}


export default trying