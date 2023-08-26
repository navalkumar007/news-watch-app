export function CleanImgSrcLink(string) {
    if(string !== undefined){
        //Get the http part
        var matches = string.match(/\bhttps?:\/\/\S+/gi);
        //Remove quotes and return value
        return matches[0].replace(/["]/g, '') ? matches[0] : string;
    }
    return string;
}

export function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}