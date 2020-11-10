import axios from 'axios'

export default axios.create({
    //we need to cahnge that evrey 8h ot pay 
    baseURL:"http://c750613af94a.ngrok.io"
})