import React from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'

function BookingModal({car}:any) {
  return (
<>
      <form method="dialog" className='modal-box   max-w-5xl'>
        {/* if there is a button, it will close the modal */}
        <div className='border-b-[1px] mx-10 pb-2'>
          <h3 className='text-[30px] font-light text-gray-400'>Rent A Car Now</h3>
        </div>
        
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
            <div className='w-10/12' >
                  <CarCard car={car}/>
            </div>
            <div className=''>
                   <Form car={car}/>   
            </div>
            </div> 
           

          
      </form>
          </>
  )
}

export default BookingModal