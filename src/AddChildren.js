import { useState } from "react"
import './App.css'

const AddChildren = (props) => {
    const [name, setName] = useState("");
    const { handleCheck, handleSubmit } = props;

    return (
        !!props.node ?
            <div>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="name" > Name: </label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <label htmlFor="link"> Link </label>
                    <input type="checkbox" onChange={handleCheck} />
                    <button type="button" onClick={() => handleSubmit(name)}> SUBMIT </button>
                </form>
            </div>

            : null
    );
}

export default AddChildren