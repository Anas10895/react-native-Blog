import axios from 'axios'

export default axios.create({
    //we need to cahnge that evrey 8h ot pay 
    baseURL:"http://7ba5df53001a.ngrok.io"
})