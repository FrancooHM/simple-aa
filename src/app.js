import fetch from 'node-fetch'
import cowsay from 'cowsay'
//Old school Promise
var getUsers = (n) => {
    return fetch('https://api.github.com/users?since=' + n, {
        method: 'get'
    })
}

var say = (text) => {
    console.log(cowsay.say({
        text: text,
        e: "o o",
        T: "U"
    }))
}

/* Using async context for enable await keyword */
(async() => {
    try {
        const response1 = await getUsers(10)
        const data1 = await response1.json()

        const response2 = await getUsers(20)
        const data2 = await response2.json()

        if (Array.isArray(data1) && Array.isArray(data2)) {
            if (data1.length > data2.length) {
                say("data1 is larger that data2 and i notice in a very synchronous way!")
            } else {
                say("data2 is larger that data1 and i notice in a very synchronous way!")
            }
        } else {
            say("There is data response that is not an Array.")
        }
    } catch (e) {
        say("We have an error Houston...")
    } finally {
        say("Everything gone fine... Stage 0 is't like they said...")
    }
})()
