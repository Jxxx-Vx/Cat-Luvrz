import './Home.css';
import TinderCard from 'react-tinder-card';
import { useState,useRef } from 'react';
import ChatContainer from './Components/ChatContainer';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';



const Home = () => {
    const characters=[
        {
            name: 'Bruce',
            index: 0,
            url: 'https://i.imgur.com/qC0xM6M.png'
        },
        {
            name: 'Daisy',
            index: 1,
            url: 'https://i.imgur.com/wcc6Y3C.png'
        },
        {
            name: 'Cleo',
            index: 2,
            url: 'https://i.imgur.com/UK4N9yr.png'
        },
        {
            name: 'Mumu',
            index: 3,
            url: 'https://i.imgur.com/Q8sqMof.png'
        },
        {
            name: 'Tabby',
            index: 4,
            url: 'https://i.imgur.com/XRnjNpB.png'
        }

    ]
const [lastDirection, setLastDirection] = useState()
const [cardIndex,setCardIndex] = useState(characters.length -1);
const cardRef = useRef(null);


const swiped = (direction, nameToDelete) =>{
    console.log('removing:' + nameToDelete)
    setLastDirection(direction)
    console.log(cardIndex);
    if(cardIndex > 0)
        setCardIndex((prevState) => prevState - 1); // Update the card index state
}
const outOfFrame = (name) => {
    console.log(name + ' left the screen!')    
}

const handleClick = (dir)=> {
    console.log(dir);
    cardRef.current.swipe(dir);
}

    return(
        <div className='dashboard'>
            <ChatContainer/>
            <div className="swipe-container">
                <div>                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}</div>
                <div className="card-container">
                    {characters.map((character, index) =>
                    <TinderCard className='swipe' key={character.name} ref={index === cardIndex ? cardRef : null} 
                        cardswipeRequirementType = "position" preventSwipe = {[ 'up', 'down' ]} 
                        onSwipe={(dir) => swiped(dir, character.name)}onCardLeftScreen={() => outOfFrame(character.name)}>
                    
                        <div style={{backgroundImage: 'url(' + character.url + ')'}} className='card'>
                            <h3>{character.name}</h3>
                        </div>

                    </TinderCard>
                    )}
                    <div className='swipe-info'>
                    </div>
                </div>
                <div className = "swipeButtons">
                    <IconButton className = "swipeButtons__left" onClick={() => handleClick("left")}>
                        <CloseIcon fontSize = "large" />
                    </IconButton>

                    <IconButton className = "swipeButtons__right" onClick = {() => handleClick("right")}>
                        <FavoriteIcon fontSize = "large" />
                    </IconButton>
            </div>
        </div>
    </div>
    )
}

export default Home;