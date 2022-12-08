import { useEffect, useState } from "react";
import { percentage } from "../../helpers/math";
/*
* Min value
* Current value
* Max value
*/


export default function Progress({ minValue, maxValue, currentValue, type = "success"}) {

    /*
    * /!!!!\ les hooks doivent TOUJOURS être execute avec les conditions (et les returns)
     */
    const [ style, setStyle] = useState({width: "25%"});

    /*
    * Execute le code a chaque changement de currentValue 
    */
    useEffect(() => {
        // calcul et met a jour le style sur base du pourcentage
        const percantage = percentage(currentValue, maxValue);

        setStyle({width: `${percantage}%`});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue]);

    // verification des props
    if(minValue === null || minValue === undefined){
        return null;
    }
    if(maxValue === null || maxValue === undefined){
        return null;
    }
    if(currentValue === null || currentValue === undefined){
        return null;
    }

    const getClass = () => {
        switch (type) {
            case 'success': return 'progress-bar bg-success';
            case 'error': return 'progress-bar bg-error';
            default: return "progress-bar";
        }
    }

    return (<div className="progress">
    <div className={getClass()} role="progressbar" aria-label="Success example" style={style} aria-valuenow={currentValue} aria-valuemin={minValue} aria-valuemax={maxValue}></div>
  </div>)
}