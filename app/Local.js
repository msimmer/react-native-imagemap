import fs from 'react-native-fs'

class Local {
    static __STORAGE_DATA__ = (function(name) {
        return { name, path: `${fs.MainBundlePath}/${name}`, state: {} }
    })('ImageMapDataStore.json')

    constructor() {
        this.storage = { ...Local.__STORAGE_DATA__ }
    }

    writeState() {
        const { path, state } = this.storage
        return fs.writeFile(path, JSON.stringify(state), 'utf8')
        .catch(err => console.log('Err: ', err)) // TODO: handle
    }

    setState(state) {
        this.storage.state = { ...this.storage.state, ...state }
    }

    getState() {
        return fs.readFile(this.storage.path, 'utf8')
        .then((resp) => {
            const state = JSON.parse(resp)
            this.setState(state)
            return state
        })
        .catch(err => console.log('Err: ', err))
    }

    update(state) {
        this.setState(state)
        return this.writeState()
        .catch(err => console.log('Err: ', err))
    }

    loadState() {
        return fs.stat(this.storage.path)
        .then(() => this.getState())
        .catch((err) => {
            if ({}.hasOwnProperty.call(err, 'userInfo') &&
                {}.hasOwnProperty.call(err.userInfo, 'NSUnderlyingError') &&
                err.userInfo.NSUnderlyingError.domain === 'NSPOSIXErrorDomain' &&
                err.userInfo.NSUnderlyingError.code === '2') { // ENOENT

                return this.update({})
                .catch(err => console.log('Err: ', err)) // TODO: handle
            }

            console.log('Err: ', err) // TODO: handle
        })
    }
}

const local = new Local()
export default local
