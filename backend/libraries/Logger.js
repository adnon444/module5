//Exercise 7 pt.1 - pt. 2

class Logger {
    constructor(Referrer, id) {
        this.referrer = referrer
        this.id = id

    }

    log = (value) => {
        console.log(`[${this.referrer}:${this.id}] : ${value}`)
    }

}

module.exports = Logger