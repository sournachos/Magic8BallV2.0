import React, { useEffect, useState } from 'react';



function HistoryTable() {

    const [trigger, setTrigger] = useState(false)

    useEffect((Table) => {

        return { Table }

    }, [trigger])


    const handleClick = (x) => {
        localStorage.removeItem(x);
        (trigger) ? setTrigger(false) : setTrigger(true)
    }

    const Table = (Object.entries({ ...localStorage })).map((rawData, index) => {

        return (
            <tr key={index} >
                <td>{rawData[0]}</td>

                <td>{rawData[1]}
                    <span onClick={() => handleClick(rawData[0])} className="text-danger close pb-1" type="button" aria-hidden="true" aria-label="Close">&times;</span>
                </td>

            </tr>
        )
    })


    return (
        <div className="d-flex flex-column align-items-center w-75 h-100 mt-1 mt-sm-4 table-responsive">

            <div className="w-75 h-75" style={{ overflow: "auto", minHeight: "100px" }}>
                <table className="table table-striped table-dark rounded text-white" >

                    <thead>

                        <tr>
                            <th className="w-50" scope="col">Question</th>
                            <th className="w-50" scope="col">Response</th>
                        </tr>

                    </thead>

                    <tbody>

                        {(localStorage.length === 0) ?
                         <tr><td>No Data</td><td>No Data</td></tr> :
                          Table
                        }

                    </tbody>

                </table>
            </div>

            {/* Button that links to the history page */}
            <a href="/" className="btn mw-25 w-50 mt-1 mt-sm-4" role="button" aria-label="Button to go back to the homepage" style={{ fontSize: "20px", backgroundColor: "#25b8f2" }}>Home</a>

        </div>
    );
}

export default HistoryTable;