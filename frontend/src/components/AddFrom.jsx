import React, { useState } from 'react'
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import axios from 'axios';

const AddFrom = ({ visible, setVisible }) => {
    const [value, setValue] = useState('');
    const [level, setlevel] = useState(null);
    const levels = [
        { name: 'Easy' },
        { name: 'Medium' },
        { name: 'Hard' }
    ];

    const handleAdd = async () => {
        try {
            await axios.post("http://localhost:4000/new/", {
                content: value,
                level:level.name
            }).then(() => {
                setVisible(false);
            })
        } catch (error) {
            alert(error.response.data.error)
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
                    <Button label="Add" color='white' style={{ background: "black" }} severity='secondary' onClick={handleAdd} />
                </div>
            </Dialog>
        </div>
    )
}

export default AddFrom
