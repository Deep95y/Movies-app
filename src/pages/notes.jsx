import {useState} from "react";

const Notes = () => {
    const[notes, setNotes] = useState(
        JSON.parse(window.localStorage.getItem("notes"))
    );
    const handleChange = (e) => {
        setNotes(e.target.value);
        window.localStorage.setItem("notes", JSON.stringify(e.target.value));
    };
    return(
        <div className="notes-area">
            <h1>Notes</h1>
            <textarea value = {notes} onChange = {handleChange}></textarea>
        </div>
    );
}

export default Notes