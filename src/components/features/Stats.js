import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'


const Stats = () => {

    // const [stats, setStats] = useState()

    const stats = useSelector(store => store.abilityScores)
    const hitDie = useSelector(store => store.hitDie)

    const { str, dex, con, wis, int, cha } = stats

    return <div>
        str: {str}
        dex: {dex}
        con: {con}
        wis: {wis}
        int: {wis}
        cha: {cha}
        hit die: {hitDie}
        hp: {hitDie + con}
    </div>;
};

export default Stats;
