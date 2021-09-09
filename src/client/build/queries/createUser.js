var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql, GraphQLClient } from 'graphql-request';
var endpoint = 'http://localhost:3001/graphql';
var client = new GraphQLClient(endpoint, { headers: {} });
export function createUser(login, password) {
    console.log('FROM REQUEST');
    return client.request(gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      mutation registration($login: String!, $password: String!) {\n        createUser(userInput: { login: $login, password: $password }) {\n          _id\n          login\n          password\n        }\n      }\n    "], ["\n      mutation registration($login: String!, $password: String!) {\n        createUser(userInput: { login: $login, password: $password }) {\n          _id\n          login\n          password\n        }\n      }\n    "]))));
}
var templateObject_1;
