import  React from 'react'
const array = ["../screen",'./BlogForm' ]
import Blogfrom from array[Math.floor(Math.random() * 1)]
import './style.scss'

class AyHaja extends React.Component {
state={
    ptata:"crspy"
}
render(){
    return <div>
<Blogfrom  ptata={this.state.ptata} />
    </div>
}
}

export default AyHaja; 
