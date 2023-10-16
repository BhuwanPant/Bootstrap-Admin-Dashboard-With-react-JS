import React from 'react'
import Image from '../image.jpeg';
const Transaction = [
  { id:"1",
    summary:"lorem ipsum dolor sit ", 
    name:"Abstract 3D",
    stock:"10",
    price:"100",
    totalSales:"1000"
  },
  { id:"1",
    summary:"lorem ipsum dolor sit ",
    name:"Sarphens illustration",
    stock:"20",
    price:"200",
    totalSales:"2000"
  }
  // ,{ id:"1",
  //   name:"3",
  //   stock:"30",
  //   price:"300",
  //   totalSales:"3000"
  // },
  // { id:"1",
  //   name:"1",
  //   stock:"10",
  //   price:"100",
  //   totalSales:"1000"
  // },
  // { id:"1",
  //   name:"1",
  //   stock:"10",
  //   price:"100",
  //   totalSales:"1000"
  // }
];
function items() {
  return (
    <>
      <div className='mx-3'>
        <table>
          <thead>
            <tr className='text-grey-900 p-3'>
              <td>Product Name </td>
              <td> stock </td>
              <td> Price </td>
              <td> Total Sales</td>
            </tr>
          </thead>
          <tbody className='table'>
            {Transaction.map(transaction => (
              <tr key = {transaction.id}>
                <td >
                  <div className='d-flex w-50 h-25'>
                    <img className="rounded w-25 h-25 py-2 mx-2" src={Image} alt="Product_icon" />
                      <div>
                      <h6 className='text-dark' >{transaction.name} </h6>
                      <p >{transaction.summary}</p>
                      </div>
                  </div>
                </td>
                <td >{transaction.stock }</td>
                <td >{ transaction.price }</td>
                <td >{ transaction.totalSales }</td>
              </tr>))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default items