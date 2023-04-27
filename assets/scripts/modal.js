export class ModalBox {
    #type =
        {
            warning: {
                icon: "fa-circle-exclamation",
                headText: "Logging In",
                subText: "Just a moment..",
            },
            information: {
                icon: "fa-user-check",
                headText: "Logging In",
                subText: "Just a moment..",
            },
        }
    #headText = "";
    #subText = "";
    #returnValue = null;

    #parentDiv = null;
    #promptDiv = null;
    #upperDiv = null;
    #icon = null;
    #messageHeading = null;
    #subMessage = null;
    #lowerDiv = null;
    #trueButton = null;
    #falseButton = null;


    constructor(primaryMessage, _type, secondaryMessage, buttonCount = 1) {

        const promise = new Promise(resolve => {
            let style = _type == "warning" ? this.#type.warning : this.#type.information;

            // create parent div element
            const parentDiv = document.createElement('div');
            parentDiv.classList.add('prompt-parent', _type);

            // create prompt div element
            const promptDiv = document.createElement('div');
            promptDiv.classList.add('prompt');

            // create upper div element
            const upperDiv = document.createElement('div');
            upperDiv.classList.add('upper');

            // create icon element
            const icon = document.createElement('i');
            icon.classList.add('fa-solid', style.icon);

            // create message heading element
            const messageHeading = document.createElement('h1');
            messageHeading.classList.add('prompt-message');
            messageHeading.textContent = primaryMessage;
            messageHeading.style.textTransform = "uppercase";

            // create sub-message paragraph element
            const subMessage = document.createElement('p');
            subMessage.classList.add('prompt-sub-message');
            subMessage.textContent = secondaryMessage;

            // append icon, message heading, and sub-message to upper div
            upperDiv.appendChild(icon);
            upperDiv.appendChild(messageHeading);
            upperDiv.appendChild(subMessage);

            // create lower div element
            const lowerDiv = document.createElement('div');
            lowerDiv.classList.add('lower');

            // create 'OK, Close' button element
            const trueButton = document.createElement('button');
            trueButton.type = 'button';
            trueButton.classList.add('modal-true-btn', 'btn-primary');
            trueButton.textContent = 'OK, Close';
            trueButton.addEventListener('click', () => {
                this.close();
                resolve(true);
            });

            if (buttonCount == 2) {
                // create 'Cancel' button element
                const falseButton = document.createElement('button');
                falseButton.type = 'button';
                falseButton.classList.add('modal-false-btn', 'btn-plain');
                falseButton.textContent = 'Cancel';
                falseButton.addEventListener('click', () => {
                    this.close();
                    resolve(false);
                })
                lowerDiv.appendChild(falseButton);
            }

            // append 'OK, Close' and 'Cancel' button to lower div
            lowerDiv.appendChild(trueButton);

            // append upper and lower div to prompt div
            promptDiv.appendChild(upperDiv);
            promptDiv.appendChild(lowerDiv);

            // append prompt div to parent div
            parentDiv.appendChild(promptDiv);

            // add parent div to the DOM
            this.#parentDiv = parentDiv;
            this.#headText = primaryMessage;
            this.#subText = secondaryMessage;
        });
        this.#returnValue = promise;
    }

    show() {
        document.body.appendChild(this.#parentDiv);

        return this.#returnValue;
    };

    close() {
        document.body.removeChild(this.#parentDiv);
        return this.#returnValue;
    };
}