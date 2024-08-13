import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAllVisitor = () => {
    const [data, changeData] = useState( [] )
    const fetchData=()=>{
        axios.get("http://172.16.12.153:4000/getvistors").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch() 
    }//fetchdata function then install axios
    //api calling syntax get inside url in""" then response catch error
    useEffect(
        ()=>{fetchData()},[]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">purpose</th>
                                    <th scope="col">whom to meet</th>
                                    <th scope="col">date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                data.map(
                                    (value,index) => {
                                        return <tr>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.purpose}</td>
                                            <td>{value.whomToMeet}</td>
                                            <td>{value.date}</td>
                                        </tr>
                                    }
                                )

                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewAllVisitor