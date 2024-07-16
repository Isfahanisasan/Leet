

export default class inlineAI {

    
    render() {
        const button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = '<div>AI</div>';
        return button;
    }

    surround(range){
        console.log(range)
    }

    static get isInline(){
        return true;
    }


}