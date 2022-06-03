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

    formEl.addEventListener('submit', handleClick)
})()