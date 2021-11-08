const { GET_LINKS } = require('./utils/linkQueries')
const formattedResponse = require('./utils/formattedResponse');
const sendQuery = require('./utils/sendQuery');

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_LINKS);
        const data = res.data.allLinks.data;
        return formattedResponse(200, data);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Oh nooooooooooo'});
    }
}

