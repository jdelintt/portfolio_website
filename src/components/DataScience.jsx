import React from "react";
import '../App.css'


function DataScience () {
    return(
        <>
            <div style={{marginTop:'20px', marginBottom: '20px', border: 'solid', width: '60vw',
            display:'flex', flexDirection: 'column', alignItems: 'center'}} className='border_show fade_in_component'>
                <h1>
                    Data Visualizations
                </h1>
                <iframe style={{border: 0, frameborder: '0'}} width="375" height="283" src="https://datastudio.google.com/embed/reporting/1bd3abee-a342-4be7-a882-6fdc5d64f617/page/PfJSC" allowFullScreen={true}></iframe>
            </div>
        </>

    )
}

export default DataScience