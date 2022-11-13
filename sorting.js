let sort = (() => {
    //default chat_query
    let chatbox_query = `VfPpkd-fmcmS-wGMbrd`
    return function (...digits) {
        const sorted = digits.sort((a,b) => a - b)
        const chatbox = document.querySelector(`.${chatbox_query}`)
        chatbox.value = `${sorted.toString()} ​`
        chatbox.dispatchEvent(new KeyboardEvent('keydown', {
            bubbles: true, cancelable: true, keyCode: 13
        }))
        return {
            change_query(value) {
                chatbox_query = value
            }
        }
    }
})()
// sort(1,4,3,10,7,5,6)