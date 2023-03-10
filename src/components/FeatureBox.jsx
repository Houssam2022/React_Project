import React from 'react';

function FeatureBox(props) {
    return (
        <div id='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>

            </div>
            <div className='s-b-text'>
                <h2> {props.title} </h2>
                <p>Become indispensable to any company with the hottest IT skills. Find the right instructor for you. Choose from many topics, skill levels, and languages</p>
            </div>
        </div>
    )
}
export default FeatureBox;