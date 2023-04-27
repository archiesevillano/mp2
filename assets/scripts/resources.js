const configuration = {
    image: "assets/images/",
    json: "assets/db/",
}

const errorHandler = new Array; // Collects all the error data in this module

export const loadOnlineSource = async (url, apiKey = false) => {
    //replace api key slot to '{key}' e.g => https://catfact.ninja/fact/API_KEY={key}

    if (apiKey) {
        //WITH API KEY
        const data = await fetch(url.replace("{key}", apiKey));

        if (data.status == 200) {
            return data; // return if the data has loaded successfully
        }
        else {
            const ERROR_OBJECT = { status: data.status, ok: data.ok, url: data.url, statusText: data.statusText };
            errorHandler.push(ERROR_OBJECT); //collect the error and push it to error handler
            console.log(ERROR_OBJECT);
            return "Error";
        }
    }
    else {
        //WITHOUT API KEY
        const data = await fetch(url);

        if (data.status == 200) {
            return await data.json(); // return if the data has loaded successfully
        }
        else {
            const ERROR_OBJECT = { status: data.status, ok: data.ok, url: data.url, statusText: data.statusText };
            errorHandler.push(ERROR_OBJECT); //collect the error and push it to error handler
            console.log(ERROR_OBJECT);
            return "Error";
        }
    }
}

export const loadLocalSource = async (fileType, fileName) => {
    const data = await fetch(`${configuration[fileType]}${fileName}`);

    if (data.status == 200) {
        return await data.json(); // return if the data has loaded successfully
    }
    else {
        const ERROR_OBJECT = { status: data.status, ok: data.ok, url: data.url, statusText: data.statusText };
        errorHandler.push(ERROR_OBJECT); //collect the error and push it to error handler
        console.log(ERROR_OBJECT);
        return "Error";
    }

}

export const sourceLoad = async (...loadObjects) => {
    for (const item of loadObjects) {
        console.log(item.source);
        let loadedItem = await item.source;
        item.object.src = item.source.url; //set the source of the current object
    }
};