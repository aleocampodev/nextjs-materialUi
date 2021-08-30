import Layout from "../components/Layout/index"
import Banner from "../components/Banner"
import Main from "../components/Main"
import Search from "../components/Banner/Search";
import axios from "axios"
import {apiUrl} from "../commons/api"

export default function Home({properties,apartments,transactions,cities}) {
  return (
    <Layout>
      <Banner><Search transactions={transactions} properties={properties} cities={cities} /></Banner>
      <Main properties={properties} apartments={apartments}/>
    </Layout>
  )
}

export async function getStaticProps() {
  try{
    const properties = await axios(`${apiUrl}propertyTypes`)
    const apartments = await axios(`${apiUrl}properties/?category=1`) 
    const transactions = await axios(`${apiUrl}transactions`) 
    const cities = await axios(`${apiUrl}cities`) 

    return {
      props:{
        properties:properties.data,
        apartments:apartments.data,
        transactions:transactions.data,
        cities:cities.data
      }
    }
  }catch(error){
    console.log(error)
  }


}
