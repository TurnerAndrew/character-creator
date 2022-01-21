import React from 'react';

const Class = (props) => {

    const { img, name, description } = props.details

    return (
        <div id='class-overview'>
            <h3 id='class-name'>{name}</h3>
            <img src={img} alt='' id='class-img'/>
            <p id='race-description'>{description}</p>
            <div id='btn-container'>
                <Link to={`/classes/${name}`}>
                    <button className='class-button'>More</button>
                </Link>
                <button className='class-button'>Select</button>
            </div>
        </div>
    )

  return <div></div>;
};

export default Class;