// don't use for malicious purposes :<
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  

let gmeet = (() => {

    let user_name = (() => {
        try {
            return `${document.querySelector(".Ue6DPb").children[0].getAttribute("title")}`
        }
        catch {
            return `You`
        }
    })()
    
    let people_query = `zWGUib`
    let text_query = `oIy2qc`
    let chatbox_query = `VfPpkd-fmcmS-wGMbrd`

    function init() {
        const texts = document.querySelectorAll(`.${text_query}`)

        const json_format = []
        for(let text of texts){

            json_format.push({
                author : text.parentElement.parentElement.children[0].children[0].textContent == `You` ? user_name : text.parentElement.parentElement.children[0].children[0].textContent,
                time : text.parentElement.parentElement.children[0].children[1].textContent,
                text : text.textContent
            })
        }
        return {
            json() {
                return json_format
            },
            chatbox() {
                return document.querySelector(`.${chatbox_query}`)
            }
        }
    }

    return {
        exist(find_text) {
            if(!find_text) find_text = ""

            const initialize_json = init().json()
            const initialize_chatbox = init().chatbox()

            const produce = initialize_json.filter(f => {
                return (f.author.toLowerCase().includes(find_text.toLowerCase()) || f.time.toLowerCase().includes(find_text.toLowerCase()) || f.text.toLowerCase().includes(find_text.toLowerCase())) && !f.text.toLowerCase().includes("ㅤ")
            })

            return {
                json() {
                    return produce
                },
                async copy_json() {
                    console.log("focusing...(click somewhere)")
                    await sleep(3000)
                    await navigator.clipboard.writeText(JSON.stringify(produce))
                    console.log("copied!!!")
                },
                json_author() {
                    return produce.filter((item) => {
                        return item.author.toLowerCase().includes(find_text.toLowerCase())
                    })
                },
                send_content() {
                    produce.forEach((p,i) => {
                        if(i == 0){
                            initialize_chatbox.value = `|____________RESULT____________|ㅤ`
                            initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                                bubbles: true, cancelable: true, keyCode: 13
                            }))
                        }
                        if(p.text.toLowerCase().includes(find_text.toLowerCase())){
                            initialize_chatbox.value = `${p.author} ${p.time}\n${p.text}ㅤ`
                            initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                                bubbles: true, cancelable: true, keyCode: 13
                            }))
                        }
                        if(i == produce.length - 1){
                            initialize_chatbox.value = `|_____________END_____________|ㅤ`
                            initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                                bubbles: true, cancelable: true, keyCode: 13
                            }))
                        }
                    })
                },
                send_author() {
                    produce.forEach((p,i) => {
                        if(i == 0){
                            initialize_chatbox.value = `|____________RESULT____________|ㅤ`
                            initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                                bubbles: true, cancelable: true, keyCode: 13
                            }))
                        }
                        if(p.author.toLowerCase().includes(find_text.toLowerCase())){
                            initialize_chatbox.value = `${p.author} ${p.time}\n${p.text}ㅤ`
                            initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                                bubbles: true, cancelable: true, keyCode: 13
                            }))
                        }
                        if(i == produce.length - 1){
                            initialize_chatbox.value = `|_____________END_____________|ㅤ`
                            initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                                bubbles: true, cancelable: true, keyCode: 13
                            }))
                        }
                    })
                }
            }
        },
        people() {
            const initialize_chatbox = init().chatbox()

            const peoples = document.querySelectorAll(`.${people_query}`)

            peoples.forEach((p,i) => {
                
                if(i == 0){
                    initialize_chatbox.value = `|___________PRESENT___________|ㅤ`
                    initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                        bubbles: true, cancelable: true, keyCode: 13
                    }))
                }
                
                initialize_chatbox.value = `${p.textContent}ㅤ`
                initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                    bubbles: true, cancelable: true, keyCode: 13
                }))

                if(i == peoples.length - 1){
                    initialize_chatbox.value = `|_____________END_____________|ㅤ`
                    initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                        bubbles: true, cancelable: true, keyCode: 13
                    }))
                }
            })
        },
        button(index) {
            if(!index) return

            const btn = document.querySelectorAll("[data-tooltip-id]")
            btn[index].click()
        },
        async send(text) {
            const initialize_chatbox = init().chatbox()

            initialize_chatbox.value = `${text}ㅤ`
            initialize_chatbox.dispatchEvent(new KeyboardEvent('keydown', {
                bubbles: true, cancelable: true, keyCode: 13
            }))
        },
        switch_chatbox_query(value) {
            chatbox_query = value
        },
        switch_text_query(value) {
            text_query = value
        }
    }
})()

// gmeet.exist("example").text()
// gmeet.people()
