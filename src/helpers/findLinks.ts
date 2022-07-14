/* eslint-disable no-useless-escape */
export const findLinks = (post: string) => {
    const result = post.match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi);
    return result;
};

export const findLinksAndReplace = (post: string, aTag: any) => {
    const regExp = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    const result = post.replaceAll(regExp, aTag);
    return result;
};
