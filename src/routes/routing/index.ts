/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

enum USER_ROUTE {
    HOME = '/',
    USERS = '/users',
    USER_PROFILE = '/user/:userId'
}

enum INVESTOR_ROUTE {
    HOME = '/',
    USERS = '/investor',
    USER_PROFILE = '/investor/:investorId'
}

enum ADVISOR_ROUTE {
    HOME = '/',
    USERS = '/advisor',
    USER_PROFILE = '/advisor/:advisorId'
}

export { USER_ROUTE, INVESTOR_ROUTE, ADVISOR_ROUTE };