const axios = require('axios');
require('dotenv').config();

module.exports = async (query, variables) => {
    const {data, errors } = await axios({
       url: 'https://graphql.us.fauna.com/graphql',
       method: 'POST',
       headers: {
           Authorization: `Bearer ${process.env.FAUNADB_SECRET}`
       },
       data: {
           query,
           variables
       }
   });
   if (errors) {
       console.error(errors);
       throw new Error("Uh oh");
   }
   return data;
}