import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import '../../styles/app.css'

const Stats = () => {

    const details = useSelector(store => store)

    const { str, dex, con, wis, int, cha } = details.abilityScores
    const { race, class: job, hitDie } = details

    console.log(details)

    return <div id='stats'>
        <h2>Your Character</h2>
        <p className='stats-main'>{race}</p>
        <p className='stats-main'>{job}</p>
        <span className='stat-line'>
            <h3 className='ability'>dex:   </h3> <p className='stat-score'>{dex}</p>
        </span>
        <span className='stat-line'>
            <p className='ability'>con:   </p> <p className='stat-score'>{con}</p>
        </span>
        <span className='stat-line'>
            <p className='ability'>wis:   </p> <p className='stat-score'>{wis}</p>
        </span>
        <span className='stat-line'>
            <p className='ability'>int:   </p> <p className='stat-score'>{int}</p>
        </span>
        <span className='stat-line'>
            <p className='ability'>cha:   </p ><p className='stat-score'>{cha}</p>
        </span>
        <span className='stat-line'>
            <p className='ability'>hit die:  </p> <p className='stat-score'>1d{hitDie}</p>
        </span>
        <span className='stat-line'>
            <p className='ability'>hp:  </p> <p className='stat-score'>{isNaN(con) ? hitDie : hitDie + con}</p>
        </span>
    </div>;
};

export default Stats;
