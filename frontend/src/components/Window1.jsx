import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Window1 = ({ setVisible, adminUser,setisEditable }) => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQ = async () => {
            const resp = await axios.get("https://mecoderbackend.vercel.app/");

            if (resp.data.success) {
                setQuestions(resp.data.questions);
            }
        }
        fetchQ();
    }, []);

    const handleAdd = () => {
        setisEditable(null);
        setVisible(true);
    }

    return (
        <div style={{ userSelect: "none", overflowY: "scroll", height: "100%", backgroundColor: '#f0f0f0' }} onResize={() => console.log("resize")}>
            <div style={{ padding: '20px', borderRadius: '10px' }}>
                <div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
                    <h3 style={{ color: '#333' }}>Practical Coding Questions:</h3>

                    {adminUser && <button style={{ height: "3em", paddingInline: "1rem", paddingBlock: "0.5rem", borderRadius: "10%", cursor: "pointer", border: "none", backgroundColor: "black", color: "white" }} onClick={()=>handleAdd()}>Add</button>}
                </div>
                <ol style={{ paddingLeft: '20px', listStyle: 'none' }}>
                    {questions.map((q, index) => (
                        <CodingQuestion key={index} question={q} adminUser={adminUser} setisEditable={setisEditable} setVisible={setVisible}/>
                    ))}
                </ol>
            </div>
        </div>
    )
}


const CodingQuestion = ({ question,adminUser,setisEditable,setVisible }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this question ?") === true) {
            window.location.href = window.location.pathname;
        }
    }

    const handleEdit = (props) => {
        setisEditable(props);
        setVisible(true);
    }

    return (
        <li style={{ marginBottom: '10px', padding: "5px" }}>
            <label style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                {question.content}
            </label>
            <span style={{ display: "flex", height: "24px", alignItems: "center", justifyContent: "space-between" }}>
                <p style={{ fontWeight: "bold", fontSize: "15px" }}>{question.level}</p>
                {adminUser && <div style={{ display: "flex", gap: "10px" }}>
                    <button onClick={() => handleEdit(question)} style={{ display: "flex", alignSelf: "center", cursor: "pointer", borderRadius: "250%" }}>
                        <svg fill="#000000" width="15px" height="18px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>edit</title><path d="M320 112L368 64 448 144 400 192 320 112ZM128 304L288 144 368 224 208 384 128 304ZM96 336L176 416 64 448 96 336Z" /></svg>
                    </button>
                    <button onClick={() => handleDelete(question.id)} style={{ display: "flex", alignSelf: "center", cursor: "pointer", borderRadius: "250%" }}><svg style={{ alignSelf: "center" }} width="15px" height="18px" viewBox="0 0 25 25" fill="none" ><path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" fill="#0D0D0D" /></svg></button>
                </div>}
            </span>
        </li>
    );
};



export default Window1
