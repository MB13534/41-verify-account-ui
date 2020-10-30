const codes = document.querySelectorAll('.code');

codes[0].focus()

codes.forEach((code, index) => {
    code.addEventListener('keydown', e => {
        codes[index].value = ''
        if(e.key >= 0 && e.key < 10) {
            setTimeout(() => code.nextElementSibling.focus(), 10);
        } else if(e.key === "Backspace"){
            setTimeout(() => code.previousElementSibling.focus(), 10);
            
        }
        
        
        
        
        // if(code.nextElementSibling){
        //     code.nextElementSibling.focus()
        // }
        // if(e.inputType === "deleteContentBackward"){
        //     console.log('test')
        //     code.previousElementSibling.focus()
        // }
        
        
        
    })
})