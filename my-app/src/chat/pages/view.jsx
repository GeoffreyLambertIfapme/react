import { useState, useEffect } from "react"
import { initMoral, initPoids, minMoral, maxMoral, minPoids, maxPoids} from "../../constantes";

import Eat from "../components/eat";
import Progress from "../components/progress";
import Action from './../components/action';

export default function ViewCat() {

    // defini nos valeurs
    const [moral, setMoral] = useState(initMoral);
    const [poids, setPoids] = useState(initPoids);

    // definir l'identifiant du timeout
    const [timeOutId, setTimeOutId] = useState('');

    // mise a jour du moral sur base des conditions
    const updateMoral = (newMoral) => {
        // si min atteint
        if(newMoral < minMoral){
            // assigne la value minimum
            setMoral(minMoral);
            return;
        }
        // si max atteint
        if(newMoral > maxMoral){
            // assigne la value maximum
            setMoral(maxMoral);
            return;
        }

        // entre 0 et 100
        // assigne la value
        setMoral(newMoral);
    }

     // mise a jour du poid sur base des conditions
    const updatePoids = (newPoids) => {
        // si min atteint
        if(newPoids < minPoids){
            // assigne la value minimum
            setPoids(minPoids);
            return;
        }
        // si max atteint
        if(newPoids > maxPoids){
             // assigne la value maximum
            setPoids(maxPoids);
            return;
        }

        // entre minPoids et maxPoids
        // assigne la value
        setPoids(newPoids);
    }

    // gestion de notre timeout
    // excecuter notre timeout à chaque fois que la valeur de "moral" change
    useEffect(() => {
         // a chaque changement 2ieme information a etre executée
        // time = attent 2sec pour executer le code
        const newTimeOutId = setTimeout(() => {
            // fonction executée apres 2 sec
            updateMoral(moral - 1);
        }, 2000);
        setTimeOutId(newTimeOutId);

        return () => {
            // a chaque changement 1er information a etre executée
            // clean le time out (le stop)
            clearTimeout(timeOutId)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [moral]);
    

    return (
        <>
            <div>Mon chat a un moral de {moral} et un poids de {poids}kg</div>

            <div>
                { /* display la progress bar moral */}
                <div>
                    <Progress minValue={minMoral} currentValue={moral} maxValue={maxMoral}></Progress>
                </div>
                { /* display la progress bar poids */}
                <div className="mt-5">
                    <Progress  minValue={minPoids} currentValue={poids} maxValue={maxPoids} type="error"></Progress>
                </div>

            </div>
            { /* action */}
            <div>
                <Action label="caliner" action={() => { updateMoral(moral + 1)} }/>

                <Eat poids={poids} updatePoids={updatePoids}></Eat>
            </div>


        </>
 
    );
}