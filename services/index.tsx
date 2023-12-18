import {request,gql} from "graphql-request";

export const getCarsList= async()=>{
    const query = gql`
    query CarLists {
        carLists {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          
          updatedAt
          image {
            url
          }
         carType
        }
      }
    `
    const result = await request('https://api-ap-south-1.hygraph.com/v2/clq575eao4ypw01t83enk3u27/master',query)
    return result;
}

export const getStoreLocation= async()=>{
  const query = gql`
  query storeLocation {
    storeLocations {
      address
    }
  }
  
  
  `
  const result = await request('https://api-ap-south-1.hygraph.com/v2/clq575eao4ypw01t83enk3u27/master',query)
  return result;
}

export const FinalBooking= async(formValue:any)=>{
  console.log(formValue.dropofDate)
  const mautationQuery= gql`
  mutation MyMutation {
    createBooking(
      data: {name: "Ansh", dropupDate: "4553", dropupTime: "90rw", pickupDate: "34783907", pickupTime: "73407482"}
    ) {
      id
    }
  }
  
  
  `
  const result = await request('https://api-ap-south-1.hygraph.com/v2/clq575eao4ypw01t83enk3u27/master',mautationQuery)
  return result;
}