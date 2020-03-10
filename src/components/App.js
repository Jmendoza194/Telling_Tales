import React from 'react';
import CardList from './CardList';
import '../css/home-styles.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name:['Achilles', 'Hector', 'Agamemnon', 'Paris','Odysseus', 'Athena', 'Apollo', 'Zeus', 'Aphrodite', 'Hera'],
            description:[
                {
                    Background_info:'The son of Thetis the water nymph and Peleus the king of the Myrmidons. According to Greek History, he is one of the greatest greek heroes containing immense strength, courage  and loyalty. His armor, sword and shield is forged by the god Hephaistos himself, and his only weakness is his heel.',
                    meme:'https://i.imgflip.com/3s2t5u.jpg'
                },
                {
                    Background_info:'Hektor',
                    meme:'https://pics.awwmemes.com/spoilers-for-the-iliad-i-guess-68948616.png'
                },
                {
                    Background_info:'Agamemnon',
                    meme:'https://i.imgflip.com/3s2v6h.jpg'
                },
                {
                    Background_info:'Paris',
                    meme:'https://i.imgflip.com/3s2w9y.jpg'
                },
                {
                    Background_info:'Odysseus',
                    meme:'https://i.imgflip.com/3s2u05.jpg'
                },
                {
                    Background_info:'Athena',
                    meme:'https://i.imgflip.com/3s2vq2.jpg'
                },
                {
                    Background_info:'Apollo',
                    meme:'https://i.imgflip.com/3s2ysh.jpg'
                },
                {
                    Background_info:'Zeus',
                    meme:'https://i.imgflip.com/3s2tr4.jpg'
                },
                {
                    Background_info:'Aphrodite',
                    meme:'https://sites.google.com/site/siddleoperiod1/_/rsrc/1468750001156/home/greek-hero-essay/iliad%20meme.jpg?height=200&width=191'
                },
                {
                    Background_info:'Hera',
                    meme:'https://i.imgflip.com/3s2s0x.jpg'
                }
            ],
            factions:['Trojans', 'Greeks'],
            faction_description:[
                {
                    Background_info:'Trojans',
                    meme:'https://i.imgflip.com/3s2uu8.jpg'
                },
                {
                    Background_info:'Greeks',
                    meme:'https://i.imgflip.com/3s2so6.jpg'
                }
            ]
        }
    }
    render(){
        return(
            <div className=' main_container'>
                <div className=' margin-up title_container'>
                    <h1 className='title'>The 5 Heroes and 5 gods</h1>
                </div>
                <CardList name={this.state.name} description={this.state.description} container={'characters'}/>
                <div className='title_container'>
                    <h1 className='title'> Factions </h1>
                </div>
                <CardList name={this.state.factions} description={this.state.faction_description} container={'factions'}/>
                
            </div>
        )
    }
}

export default App;