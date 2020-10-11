import axios from 'axios'

export default axios.create({
    //we need to cahnge that evrey 8h ot pay 
    baseURL:"http://97a7c6d99f01.ngrok.io"
})