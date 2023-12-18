import React, { useEffect, useState } from 'react'
import { FinalBooking, getStoreLocation} from '@/services'
function Form(car:any) {
  console.log(car)
  const [formValue,setFormValue]= useState<any>({
    address:'',
    pickupTime:'',
    dropupTime:'',
    contactType:'',
    dropofDate:'',
    pickupDate:'',
    userName:'Rahul',
    id:''
    
})
  const [storeLocation,setStoreLocation]=useState<any>([]);
    useEffect(() => {
        getStoreLocation_();
    },[])
    const getStoreLocation_= async() =>{
        const res:any= await  getStoreLocation(); 
        console.log(res)
         setStoreLocation(res?.storeLocations);

    } 
    const handleChange =(event:any)=>{
      setFormValue({
        ...formValue,
        [event.target.name]:event.target.value
      })
     
    }
    const handleSubmit= async()=>{
      console.log(formValue)
         const res = await FinalBooking(formValue);
          console.log(res)
    }
    useEffect(() => {
      if (car) {
         // ... perform your actions here with the form values and car.id
         setFormValue({
          ...formValue,
           id:car?.car?.id
          }
        );
    
        // ... do something with updatedFormValues
      }
    }, [car]);
    
    
  return (
    <div className='mx-5'>
       < div className="label">
    <span className="label-text">Pickup Location</span>
  </div>
        <select  className="select select-bordered w-full max-w-lg" onChange={handleChange} name="address"  >
  <option disabled selected>Pickup Location?</option>
  {storeLocation && storeLocation.map((loc:any,index:number)=>(
    <option    key={index}>{loc.address} </option>
  ))}
</select>
<div className='flex justify-between gap-4'>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pickup Date</span>
  </div>
  <input type="date" placeholder="mm/dd/yyyy" onChange={handleChange} className="input input-bordered w-full max-w-xs" name='pickupDate' />
 
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Drop of Date</span>
  </div>
  <input type="date" onChange={handleChange} placeholder="mm/dd/yyyy" className="input input-bordered w-full max-w-xs" name='dropofDate' />
 
</label>
</div>
<div className='flex justify-between gap-4'>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pickup time</span>
  </div>
  <input type="time" onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" name='pickupTime' />
 
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Dropup time</span>
  </div>
  <input type="time" onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" name='dropupTime'/>
 
</label>
</div>

<label className="form-control w-full">
  <div className="label w-full">
    <span className="label-text">Contact Type</span>
  </div>
  <input type="text" onChange={handleChange} placeholder="Contact type" className="input input-bordered w-full" name='contactType' />
 
</label>

<div className='mb-3 mt-5 gap-5 flex justify-end'>
          <button className="btn">Close</button>
          <button onClick={handleSubmit} className="btn bg-blue-500 hover:bg-blue-800 text-white">Save</button>
        </div>
    </div>
  )
}

export default Form