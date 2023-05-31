import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from "react-icons/ai"

const Myorders = () => {
    const arr=[1,2,3,4]
  return (
    <section  className="tableClass">
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i=>(
                            <tr key={i}>
                        
                            <td>#927496247</td>
                            <td>Processing</td>
                            <td>23</td>
                            <td>₹{3252}</td>
                            <td>COD</td>
                            <td><Link to="/order/927496247"><AiOutlineEye/></Link></td>
                        
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>

        
    </section>
  )
}

export default Myorders