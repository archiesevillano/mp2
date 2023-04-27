import { contentChecker, noWhiteSpace } from "./form.js";

export class Post {
    static totalPost = 0;

    #editCount = 0; // times when the user edited the post
    #edited = false;

    //private variables
    #contentText = new Array; //the last object will be the latest change
    #imageBanner = new Array; //the source path for the image file
    #actionUrl = new Array; //href for post button
    #postID = "";

    #userID = "null";
    #accountName = ""; // account name who created the post
    #profileID = ""; // use to locate the user profile
    #datePosted = "";
    #profilePicture = "";
    #postType = "";


    constructor(
        userID, //userID to access the user's information who created the post
        contentText, //any text content in the post
        imageBanner, // image content
        actionUrl, // link for the post button
        postType, //job, tips, training
    ) {

        Post.totalPost++; // increase the count each time a post is created

        this.#userID = userID;
        this.#contentText.push(contentText);
        this.#imageBanner.push(imageBanner);
        this.#actionUrl.push(actionUrl);
        this.#postType = postType;
        this.#postID = "samplePostID";

    }
    create() {
        const PARENT = document.createElement('div');



    }
    set update(dataObject) {

        try {

            const dateEdit = "sampleDate";

            this.#contentText.push(
                {
                    content: dataObject.contentText,
                    dateEdited: dateEdit,
                }
            )
            this.#imageBanner.push(
                {
                    content: dataObject.imageBanner,
                    dateEdited: dateEdit,
                }
            )
            this.#actionUrl.push(
                {
                    content: dataObject.actionUrl,
                    dateEdited: dateEdit,
                }
            )
            this.#edited = true;
            this.#editCount++;

        } catch (e) {
            console.log(e);
        }

        /*
            SAMPLE ARGUMENT FOR UPDATE
            {
                contentText: value,
                imageBanner: value,
                actionUrl: value,
            }
        */
    }

    get getContent() {
        return {
            contentText: this.#contentText[this.#contentText.length - 1],
            imageBanner: this.#imageBanner[this.#imageBanner.length - 1],
            actionUrl: this.#actionUrl[this.#actionUrl.length - 1],
        }
    }
}

const a = new Post("sampleID", "SampleContent", "SamplePath", "SampleLink");
a.update = {
    contentText: "Update Content",
    imageBanner: "Update Image",
    actionUrl: "Update Action",
}

