import React from 'react';
import './Gear.scss';

const Gear = ({model, positionY, positionX}) => {

    let gearGif = model === 1 ? require("../../assets/gifs/1gear.gif") : require("../../assets/gifs/3gears.gif");

    return(
        <div className='arta-gear'>
            
        </div>
    )
}