import { Box } from '@mui/material'
import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Footer from '../Footer/Footer'
import CustomNavbar from '../Navbar/Navbar'

function Profile() {
    const { user, userOrder } = useContext(AppContext);
  return (
    <>  <CustomNavbar/>
    <Box>
      
        <div className="container text-center my-3">
        <h1>Welcome , {user?.name}</h1>
        <h3>{user?.email}</h3>
        <h1>Total Order :- {userOrder?.length}</h1>
      </div>

      <div className="container my-5">
        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">
                OrderItems
              </th>

              <th scope="col" className="bg-dark text-light text-center">
                OrderDetails & ShippingAddress
              </th>
            </tr>
          </thead>
          </table>
         
      </div>
    </Box>
    <Box
        sx={{
          backgroundColor: "#173334",
          mt:10,
          pb: 10,
          color: "#febd2f",
        }}
      >
        <Footer/>

      </Box>
      
    </>
  )
}

export default Profile
