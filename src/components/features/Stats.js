import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'


const Stats = () => {

    // const [stats, setStats] = useState()

    const stats = useSelector(store => store.abilityScores)
    const hitDie = useSelector(store => store.hitDie)

    return <div>
        str: {stats.str}
        dex: {stats.dex}
        con: {stats.dex}
        wis: {stats.wis}
        int: {stats.wis}
        cha: {stats.cha}
        hit die: {hitDie}
    </div>;
};

export default Stats;
