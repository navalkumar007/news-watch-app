export function CleanImgSrcLink(string) {
    //Get the http part
    var matches = string.match(/\bhttps?:\/\/\S+/gi);
    //Remove quotes and return value
    return matches[0].replace(/["]/g, '') ? matches : string;
}