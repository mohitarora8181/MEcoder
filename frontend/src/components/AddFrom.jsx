import React, { useEffect, useState } from 'react'
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import axios from 'axios';

const AddFrom = ({ visible, setVisible, isEditable }) => {
    const [value, setValue] = useState('');
    const [level, setlevel] = useState({ name: "Easy" });
    const [showLabel, setShowLabel] = useState("Add");

    const levels = [
        { name: 'Easy' },
        { name: 'Medium' },
        { name: 'Hard' }
    ];

    useEffect(() => {
        if (isEditable) {
            setValue(isEditable.content);
            setlevel({ name: isEditable.level });
            setShowLabel("Update");
        } else {
            setValue("");
            setlevel({ name: "Easy" });
            setShowLabel("Add");
        }
    }, [isEditable])

    const handleAdd = async () => {
        try {
            await axios.post("https://mecoderbackend.vercel.app/new", {
                content: value,
                level: level.name
            }).then(() => {
                setVisible(false);
                window.location.href = window.location.pathname;
            })

        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    const handleEdit = async (props) => {
        try {
            await axios.patch("https://mecoderbackend.vercel.app/", {
                _id :props._id,
                content: value,
                level: level.name
            }).then(() => {
                setVisible(false);
                window.location.href = window.location.pathname;
            })

        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="card flex justify-content-center" style={{ display: "flex", flexDirection: "column", }}>
            <Dialog position='bottom' header="Add a Question" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <FloatLabel style={{ margin: "20px" }}>
                    <InputTextarea id="question" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                    <label htmlFor="question">Type question here.....</label>
                </FloatLabel>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
                    <Dropdown value={level} onChange={(e) => setlevel(e.value)} options={levels} optionLabel="name"
                        placeholder="Select a Level" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
                    <Button label={showLabel} color='white' style={{ background: "black" }} severity='secondary' onClick={isEditable ? () => handleEdit(isEditable) : () => handleAdd()} />
                </div>
            </Dialog>
        </div>
    )
}

export default AddFrom
