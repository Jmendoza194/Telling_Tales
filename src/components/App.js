import React from 'react';
import CardList from './CardList';
import '../css/home-styles.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name:['Achilles', 'Hector', 'Agamemnon', 'Paris','Odysseus', 'Athena', 'Apollo', 'Zeus', 'Aphrodite', 'Hera'],
            picture:['']
        }
    }
    render(){
        return(
            <div className='main_container'>
                <div className='title_container'>
                    <h1 className='title'>The 6 Heroes and 6 gods</h1>
                </div>
                <CardList name={this.state.name} pic={this.state.picture}/>
            </div>
        )
    }
}

export default App;