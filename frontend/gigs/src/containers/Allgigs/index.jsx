import React, { useState, useEffect } from 'react';
import But from '../../components/Button/index';
import './style.css';
import axios from 'axios';

const gigCount = [
    {"gigtype": "All gigs", "count": 3500},
    {"gigtype": "My gigs", "count": 3500},
    {"gigtype": "Rejected gigs", "count": 3500},
]
const Allgigs = () => {
    const [data, setData] = useState({gigs: []});
    const apiUrl = "http://127.0.0.1:8000/api/";
    
    useEffect(() => {
        axios.get(apiUrl)
        .then((gigs) => setData({gigs: gigs.data}));
    }, []);


    console.log(data.gigs.payload);
    return (
        <div className="all-gigs">
            <div className="title d-flex justify-content-between">
                <h1>Gigs</h1>
                <But>New gig <span>+</span> </But>
            </div>

            <div className="gig-types d-flex justify-content-between">
                {gigCount.map((gig, index) => <div key={index} className="gig-type-link">
                        <p>
                        <span>{gig.gigtype}</span>
                        <span>{gig.count}</span>
                        </p>
                    </div>
                )}
            </div>
            <hr/>


            <div className="gig-content">
                {
                    data.gigs.length === 0 ?
                    (<div>Loading...</div>):
                    <div className="table-responsive">
                    <table class="table table-borderless tb">
                    <thead>
                        <tr>
                            <td></td>
                            <td>Role</td>
                            <td>Company</td>
                            <td>Date</td>
                            <td>Salary</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.gigs.payload.map((val,index) => {
                              return (
                                <tr  className="" key={index}>
                                    <td>
                                        <label class="checkbox">
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>                                        
                                    {/* <input type="checkbox" name="" id=""/> */}
                                        {/* <span className="checkbox-custom"></span> */}
                                    </td>
                                    <td>{val.role}</td>
                                    <td>{val.company}</td>
                                    <td>{val.created_at}</td>
                              <td>{val.salary.minimum}-{val.salary.maximum}</td>
                                    <td> <button>Delete</button> </td>
                                </tr>
                              )  
                            })
                        }
                        
                    </tbody>
                    </table>
                    </div>
                }

            </div>
        </div>
    )
}

export default Allgigs
