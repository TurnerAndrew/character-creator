import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const RaceDetails = () => {
    let {name} = useParams()
    let [details, setDetails] = useState({})
    let [img, setImg] = useState({})
    
    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/races/${name.toLowerCase()}`).then(res => setDetails(res.data))
        axios.get(`/api/races`).then(res => setImg(res.data.races.filter(race => race.name.toLowerCase() === name.toLowerCase())))
    }, [])

    const { ability_bonuses : bonuses,
            starting_proficiencies : proficiencies,
            languages,
            traits } = details

    
    let bonusesMapped
    let proficienciesMapped
    let languagesMapped
    let traitsMapped
    
    if (bonuses) bonusesMapped = bonuses.map(ability => {
        return <div key={ability.ability_score.index}>
                 <p>{ability.ability_score.name}: +{ability.bonus}</p>
               </div>
    })

    if (proficiencies && proficiencies.length > 0) proficienciesMapped = proficiencies.map(skill => {
        return <div key={skill.index}>
            <p>{skill.name}</p>
        </div>
    })

    // if (languages) languagesMapped = languages.map(language => {
    //     return <div key={language.index}>
    //         <p>{language.name}</p>
    //     </div>
    // })

    if (traits) traitsMapped = traits.map(trait => {
        return <div key={trait.index}>
            <p>{trait.name}</p>
        </div>
    })


    return (
        <div>
            <h1>{details.name}</h1>
            <p>Movement Speed: {details.speed}</p>
            {bonusesMapped}
            <p>{details.age}</p>
            <p>{details.alignment}</p>
            <p>{details.size_description}</p>
            {proficienciesMapped}
            {/* {languagesMapped} */}
            <p>{details.language_desc}</p>
            {traitsMapped}
            <img src={img[0].img}/>
            <button>Select {name}</button>

        </div>
    )
}

export default RaceDetails
