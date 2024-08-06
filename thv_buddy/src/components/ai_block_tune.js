export default class AiBlockTune {
    constructor({ api }){
        this.api = api;
    } 

    static get isTune() {
        return true;
    }



    render(){

        this.elem = document.createElement('div');
        this.elem.classList.add('ce-popover-item');
        this.elem.innerHTML = '<div class="ce-popover-item__icon ce-popover-item__icon--tool"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"></path></svg></div><div class="ce-popover-item__title">Convert To AI Block</div>';
        this.elem.addEventListener('click', () => {
            this.replaceBlock();
        });
        return this.elem;
    }


    replaceBlock() {

        // get the contents of the block
        const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();
        const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
        const currentBlockContent = currentBlock.holder.querySelector('.ce-paragraph').textContent;
        console.log(currentBlockContent);

        // remove the block and insert a new AI block with the same content 
        this.api.blocks.delete(currentBlockIndex);
        this.api.blocks.insert('aiText', {text: currentBlockContent}, null, currentBlockIndex);





    }
}

