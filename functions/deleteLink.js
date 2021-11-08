const { DELETE_LINK } = require('./utils/linkQueries')
const formattedResponse = require('./utils/formattedResponse');
const sendQuery = require('./utils/sendQuery');

exports.handler = async (event) => {
    const {id } = JSON.parse(event.body);
    const variables = { id };
    try {
        const {deleteLink: deletedLink} = await sendQuery(DELETE_LINK, variables);
        return formattedResponse(200, deletedLink);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Oh nooooooooooo'});
    }
}

