// label 
// action

export default function Action({action, label }) {
    return <button className="btn btn-primary p-5 m-5" onClick={() => action()}>{label}</button>
}