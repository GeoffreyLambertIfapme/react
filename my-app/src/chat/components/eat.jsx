import { useState } from 'react';
import Action from './action';

export default function Eat({ poids, updatePoids}) {

    /*
    * /!!!!\ les hooks doivent TOUJOURS être execute avec les conditions (et les returns)
     */
    const [value, setValue] = useState(0);

     // verification des props
    if(poids === null || poids === undefined){
        return null;
    }

    // mettre jour mon  imput au changement
    const handleChange = (value) => {
        setValue(value);
    }
    // envoyer l'information a la props
    const update = () => {
        if(updatePoids){
            const newPoids = value / 10;
            updatePoids(poids + newPoids);
        }
    }
    return <>
        <input 
            type='number' 
            onChange={(event) => handleChange(event?.target?.value)}
            value={value} />
        <Action label="Nourrir" action={update} />
    </>
}