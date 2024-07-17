const LLM_END_POINT = "http://localhost:8000/query"

export default class inlineAI {
    constructor({config, api}) {
        this.api = api;
        this.button = null;
        this.selected_text = null; 
        this.range = null; 
    }

    generateResponse = async (text) => {
        const response = await fetch(LLM_END_POINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: text, priority: 1})
        });

        const data = await response.json();
        console.log(data);
        return data.response.content;
    }


    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = `
      <svg class="icon" height="24" viewBox="0 0 24 24" width="24">
      <style> 
      .icon:hover { background: #eff2f5;}
      </style>
        <path class="fill" d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"/>
      </svg>
    `;
        return this.button;
    }

    surround(range){

        this.selected_text = range.cloneContents();
        this.range = range;
    }

    renderActions() {
        const actionContainer = document.createElement('div');
        actionContainer.style = "max-width: 100%; overflow-x: hidden; height: auto; background-color: #f8f9fa; display: flex; flex-direction: column; align-items: left; padding: 10px 10px 10px 10px; box-sizing: border-box; ";

        const textBox = document.createElement('input');
        textBox.type = 'text';
        textBox.placeholder = 'Query here...';
        textBox.style = "flex-grow: 1; margin-right: 10px; height: 40px; padding: 0 10px; box-sizing: border-box; padding: 10px 10px 10px 10px; display: block;";


        const submitButton = document.createElement('button');
        submitButton.innerHTML = 'Submit';
        submitButton.style = "width: 80px; height: 40px; border-radius: 20px; background-color: #007bff; color: white; border: none; cursor: pointer; box-sizing: border-box; margin-top: 10px;";

        const loadingSpinner = document.createElement('div');
        loadingSpinner.style = "display: none; border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 30px; height: 30px; animation: spin 2s linear infinite; margin-top: 10px;";
        loadingSpinner.setAttribute('id', 'loading-spinner');


        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;


        document.head.appendChild(style);

        submitButton.onclick = async () => {
            // make the drop down window to be a spinning wheeel 
            loadingSpinner.style.display = 'block';
            submitButton.style.display = 'none';
            console.log(this.selected_text.textContent, typeof(this.selected_text.textContent));
            let response = await this.generateResponse(textBox.value + ": " + this.selected_text.textContent);
            loadingSpinner.style.display = 'none';

            textBox.style.display = 'none';

            const responseDev = document.createElement('div');
            responseDev.textContent = response;
            responseDev.style.marginTop = '10px';
            actionContainer.appendChild(responseDev);

            const acceptButton = document.createElement('button');
            acceptButton.innerHTML = 'Accept';
            acceptButton.style = "width: 80px; height: 40px; border-radius: 20px; background-color: #007bff; color: white; border: none; cursor: pointer; box-sizing: border-box; margin-top: 10px;";

            const declineButton = document.createElement('button');
            declineButton.innerHTML = 'Decline';
            declineButton.style = "width: 80px; height: 40px; border-radius: 20px; background-color: #007bff; color: white; border: none; cursor: pointer; box-sizing: border-box; margin-top: 10px;";

            // const retryButton = document.createElement('button');
            // retryButton.innerHTML = "Retry";
            // retryButton.style = "width: 80px; height: 40px; border-radius: 20px; background-color: #007bff; color: white; border: none; cursor: pointer; box-sizing: border-box; margin-top: 10px;";

            actionContainer.appendChild(acceptButton);
            actionContainer.appendChild(declineButton);
            // actionContainer.appendChild(retryButton);


            declineButton.addEventListener('click', () => {
                // Show the input text box and the submit button
                textBox.style.display = 'block';
                submitButton.style.display = 'block';

                // remove the response and the buttons
                responseDev.remove();
                acceptButton.remove();
                declineButton.remove();
            });

            acceptButton.addEventListener('click', () => {
                // Replace the selected text 
                this.range.deleteContents();
                this.range.insertNode(document.createTextNode(response));
                this.api.inlineToolbar.close();
            }); 




        };
    
    

        actionContainer.appendChild(textBox);
        actionContainer.appendChild(submitButton);
        actionContainer.appendChild(loadingSpinner);

        return actionContainer;
    }

    static get isInline(){
        return true;
    }
}