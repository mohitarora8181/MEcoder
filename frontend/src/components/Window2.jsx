import React from 'react'

const Window2 = ({frameworking}) => {
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: "100%", width: "100%" }}>
            <iframe
                title='Coding Environment'
                src="https://onecompiler.com/embed/"
                width={"100%"}
                height={"100%"}
                frameBorder={0}
                draggable={false}
                style={frameworking?{ pointerEvents: "auto" }:{pointerEvents:"none"}}
            ></iframe>
        </div>
    )
}

export default Window2
