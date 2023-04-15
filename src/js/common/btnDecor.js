document.querySelectorAll('.btn').forEach( btn => {

    if(!btn.classList.contains('btn_cat')) {
        const decL = document.createElement('span')
        decL.classList.add('btn__dec-left')
        btn.append(decL)
        const decR = document.createElement('span')
        decR.classList.add('btn__dec-right')
        btn.append(decR)
    }
    
})