import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import '../../styles/app.css'

const Stats = () => {

    const details = useSelector(store => store)

    const { str, dex, con, wis, int, cha } = details.abilityScores
    const { race, class: job, hitDie } = details

    console.log(details)

    return <div id='stats'>
        <p className='stats-main'>{race}</p>
        <p className='stats-main'>{job}</p>
        <p className='ability'>str: </p><p className='stat-score'>{str}</p>
        <p className='ability'>dex: </p><p className='stat-score'>{dex}</p>
        <p className='ability'>con: </p><p className='stat-score'>{con}</p>
        <p className='ability'>wis: </p><p className='stat-score'>{wis}</p>
        <p className='ability'>int: </p><p className='stat-score'>{int}</p>
        <p className='ability'>cha: </p><p className='stat-score'>{cha}</p>
        <p className='ability'>hit die:</p> <p className='stat-score'>1d{hitDie}</p>
        <p className='ability'>hp:</p> <p className='stat-score'>{isNaN(con) ? hitDie : hitDie + con}</p>
    </div>;
};

export default Stats;
