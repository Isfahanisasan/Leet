import AIText from '@alkhipce/editorjs-aitext';
import { SupportRounded } from '@mui/icons-material';


class CustomAITextWrapper extends AIText {
    constructor({ api, block, config, data }) {
        super({ api, block, config, data });

        this.queryAIButton = null;
    
        this.onInput = ((e) => {

        if (
            this._element?.querySelector('#ai-suggestions') ||
            e.inputType === 'deleteContentBackward' ||
            e.inputType === 'deleteContentForward' ||
            e.inputType === 'insertParagraph' ||
            e.inputType === 'insertFromPaste' ||
            e.inputType === 'insertFromDrop' ||
            !e.target.innerHTML
        ) {
            return
        }
    
        // this.getAIComp[letion(e.target.innerHTML)
        })

    }    

    // onKeyUp(e) {
    //     if (this._element && this._element.querySelector('#ai-suggestions')) {
    //         // focus on the suggestion and not the input query 
    //         if (e.code === 'Escape'){
    //             this._element.querySelector('#ai-suggestions').remove();
    //         }
    //     }
    // }

    drawView(){
        const elem = super.drawView();
        elem.id = 'ai-text-element'; // Add an id to the elem for easy selection

        // Create a query button
        let queryButton = document.createElement('button');
        queryButton.innerText = 'Query AI';
        // queryButton.style.position = 'absolute';
        // queryButton.style.top = '10px';
        // queryButton.style.right = '10px';
        // queryButton.style.border = '1px solid black';
        // queryButton.style.backgroundColor = 'blue';
        // queryButton.style.padding = '5px';
        // queryButton.style.zIndex = '1000'; // Ensure it stays on top
        elem.style.position = 'relative'; // Ensure the parent element is positioned relatively

        queryButton.style = `
            width: 80px; 
            height: 40px; 
            border-radius: 20px; 
            background-color: #007bff; 
            color: white; 
            border: none; 
            cursor: pointer; 
            box-sizing: border-box; 
            margin-top: 10px;
            margin-right: 10px;
            margin-left: 10px;
            margin-bottom: 10px;
            top: 10px; 
            right: 10px;
        `;


    //     queryButton.style = `
    //     position: absolute; 
    //     top: 10px; 
    //     right: 10px; 
    //     width: 80px; 
    //     height: 40px; 
    //     border-radius: 20px; 
    //     background-color: #007bff; 
    //     color: white; 
    //     border: none; 
    //     cursor: pointer; 
    //     box-sizing: border-box;
    // `;
    

        queryButton.tabIndex = -1; 

        queryButton.addEventListener('click', (e) => {
            const text = document.getElementById('ai-text-element').innerText;
            this.getAICompletion(text);
            // focus on the suggestion and not the input query
            if (this._element.querySelector('#ai-suggestions')) {
                this._element.querySelector('#ai-suggestions').focus();
            }
        }); 

        // insert the button into the element 

        this.queryAIButton = queryButton;

        const parentElem = document.createElement('div');

        parentElem.appendChild(queryButton);

        parentElem.appendChild(elem);
        // parentElem.appendChild(queryInput);

        // parentElem.style.display = 'flex';
        parentElem.style.flexDirection = 'column'; // Stack elements vertically
        parentElem.style.alignItems = 'flex-start'; // Align items to the start
        // parentElem.style.padding = '10px'; // Add some padding        
        console.log(parentElem);
        return parentElem;
    }

    getAICompletion(content) {
        if (!content) return
    
        const loaderElement = document.createElement('div')
        loaderElement.innerHTML = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.99988V5.99988M12 20.9999V17.9999M4.20577 16.4999L6.80385 14.9999M21 11.9999H18M16.5 19.7941L15 17.196M3 11.9999H6M7.5 4.20565L9 6.80373M7.5 19.7941L9 17.196M19.7942 16.4999L17.1962 14.9999M4.20577 7.49988L6.80385 8.99988" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
        loaderElement.id = 'ai-suggestions-loader'
    
        loaderElement.style.display = 'inline-flex'
        loaderElement.style.alignItems = 'center'
        loaderElement.style.width = '24px'
        loaderElement.style.height = '24px'
        loaderElement.style.paddingLeft = '4px'
        loaderElement.style.color = 'gray'
        // loaderElement.style.position = 'absolute'
        // I want the loader to have its own space 
        // loaderElement.style.position = 'relative'; // Ensure it is positioned relative to its container
        // loaderElement.style.marginLeft = '10px'; // Add margin to the left to create space
        // loaderElement.style.marginRight = '10px'; // Add margin to the right to create space
        // loaderElement.style.display = 'inline-block'; // Ensure it is treated as an inline-block element

    
        loaderElement.animate(
          [
            {
              transform: 'rotate(0deg)'
            },
            {
              transform: 'rotate(360deg)'
            }
          ],
          {
            duration: 2000,
            iterations: Infinity
          }
        )

        // replace the query button with the loader
        this.queryAIButton.replaceWith(loaderElement);
        
        // this._element?.querySelector('button').remove();


    
        // this._element?.appendChild(loaderElement)
    
        this.callback?.(content)
          .then((response) => {
            const aiSuggestions = document.createElement('span')
            aiSuggestions.innerHTML = ''
            aiSuggestions.id = 'ai-suggestions'
            aiSuggestions.style.color = 'lightgray'
            aiSuggestions.innerHTML = response
    
            this._element?.appendChild(aiSuggestions)
    
            this._element?.querySelector('#ai-suggestions-loader')?.remove();

            //remove the query AI button 
            // this._element?.querySelector('button').remove();
            // add a button to accept and modify the text
            const acceptButton = document.createElement('button');
            acceptButton.innerText = 'Accept';
            acceptButton.style = `
                width: 80px; 
                height: 40px; 
                border-radius: 20px; 
                background-color: #007bff; 
                color: white; 
                border: none; 
                cursor: pointer; 
                box-sizing: border-box; 
                margin-top: 10px;
                margin-right: 10px;
                margin-left: 10px;
                margin-bottom: 10px;
                top: 10px; 
                right: 10px;
                display: block;
            `;

            // add a button decline that opens up a new Ai text block 
            const declineButton = document.createElement('button');
            declineButton.innerText = 'Decline';
            declineButton.style = `
                width: 80px; 
                height: 40px; 
                border-radius: 20px; 
                background-color: #007bff; 
                color: white; 
                border: none; 
                cursor: pointer; 
                box-sizing: border-box; 
                margin-top: 10px;
                margin-right: 10px;
                margin-left: 10px;
                margin-bottom: 10px;
                top: 10px; 
                right: 10px;
                display: block;
            `;
            // when accept button is clicked, replace the text with the AI generated text
            acceptButton.addEventListener('click', () => {
                const aiSuggestionElement = this._element?.querySelector('#ai-suggestions');
                const aiSuggestion = aiSuggestionElement?.innerText;

                if(!aiSuggestion) return;

                // const aiSuggestionTextNode = document.createTextNode(aiSuggestion);
                // this._element?.replaceChild(aiSuggestionTextNode, aiSuggestionElement);
                // // also remove the query and accept button 
                // acceptButton.remove();
                // // remove the decline button too 
                // declineButton.remove();
                // this._element?.querySelector('.ce-paragraph').remove();
                // return;

                // remove the ai text block and eplace it with a paragraph populated with the AI suggestion
                const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();
                this.api.blocks.delete(currentBlockIndex);
                this.api.blocks.insert('paragraph', {text: aiSuggestion}, null, currentBlockIndex);


            });

            declineButton.addEventListener('click', () => {
                // remove the suggestion from ai 
                this._element?.querySelector('#ai-suggestions').remove();

                // remove the accept and decline buttons
                acceptButton.remove();
                declineButton.remove();

                // add queryai button before .ce-paragraph
                this._element?.insertBefore(this.queryAIButton, this._element.querySelector('.ce-paragraph'));
                // focus on the .ce-paragraph to continue typing a query 
                this._element?.querySelector('.ce-paragraph').focus();

            });

            this._element?.appendChild(acceptButton);
            this._element?.appendChild(declineButton);
          })
          .catch((error) => {
            throw new Error(error)
          })
      }
    
}; 

export default CustomAITextWrapper;

