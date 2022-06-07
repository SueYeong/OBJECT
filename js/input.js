(function(){
    const formEl = document.querySelector('form')
    const inputEl = document.querySelector('input')
    const btnEl = document.querySelector('button')
    const commentWrapEl = document.querySelector('.comment_wrap')

    const handleClick = (e) => {
        e.preventDefault();

        const inputValue = inputEl.value
        inputEl.value = ""

        const hEl = document.createElement('h5')

        hEl.innerHTML = inputValue

        commentWrapEl.appendChild(hEl)
    }

    const con_wrapEl = document.querySelector('.con_wrap')
    const closebtn = document.querySelector('.close_btn')

    const handleClick_1 = () => {
        con_wrapEl.classList.toggle('none')
    }
    closebtn.addEventListener('click', handleClick_1)
    formEl.addEventListener('submit', handleClick)
})()