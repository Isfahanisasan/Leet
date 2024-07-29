import AIText from '@alkhipce/editorjs-aitext';
import { SupportRounded } from '@mui/icons-material';


class CustomAITextWrapper extends AIText {
    constructor({ api, block, config, data }) {
        super({ api, block, config, data });
    
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
    
        // this.getAICompletion(e.target.innerHTML)
        })

    }    
    onKeyUp(e) {

        console.log('enter pressed: ' + e.code);
        if(e.code == 'Enter'){
            console.log('enter pressed');
        }

        super.onKeyUp(e);
    }

}; 

export default CustomAITextWrapper;

