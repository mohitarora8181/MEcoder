import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Window1 = ({ setVisible }) => {

    const [questions,setQuestions] = useState([]);

    useEffect(() => {
        const fetchQ = async () => {
            const resp = await axios.get("https://mecoderbackend.vercel.app/");
            console.log(resp.data);

            if (resp.data.success) {
                setQuestions(resp.data.questions);
            }
        }
        fetchQ();
    }, []);

    const handleAdd = () => {
        const resp = prompt("Enter Admin ID to add questions");
        if (resp == null) {
            return;
        }
        const today = new Date(Date.now());
        const matchString = today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString() + today.getHours() % 12 + today.getMinutes().toString();

        if (matchString === resp) {
            console.log("verified");
            setVisible(true);
        } else {
            alert("Invalid ID")
        }
    }

    return (
        <div style={{ userSelect: "none", overflowY: "scroll", height: "100%", backgroundColor: '#f0f0f0' }} onResize={() => console.log("resize")}>
            <div style={{ padding: '20px', borderRadius: '10px' }}>
                <div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
                    <h3 style={{ color: '#333' }}>Practical Coding Questions:</h3>
                    <button style={{ height: "3em", paddingInline: "1rem", paddingBlock: "0.5rem", borderRadius: "10%", cursor: "pointer", border: "none", backgroundColor: "black", color: "white" }} onClick={handleAdd}>Add</button>
                </div>
                <ol style={{ paddingLeft: '20px', listStyle: 'none' }}>
                    {questions.map((q, index) => (
                        <CodingQuestion key={index} question={q} />
                    ))}
                </ol>
            </div>
        </div>
    )
}


const CodingQuestion = ({ question }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
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
            <p style={{fontWeight:"bold",fontSize:"15px"}}>{question.level}</p>
        </li>
    );
};



export default Window1
