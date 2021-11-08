const { UPDATE_LINK } = require('./utils/linkQueries')
const formattedResponse = require('./utils/formattedResponse');
const sendQuery = require('./utils/sendQuery');

exports.handler = async (event) => {
    const {name, url, description, _id:id, archived} = JSON.parse(event.body);
    const variables = { name, url, description, archived, id };
    try {
        const {updateLink: updatedLink} = await sendQuery(UPDATE_LINK, variables);
        return formattedResponse(200, updatedLink);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Oh nooooooooooo'});
    }
}

