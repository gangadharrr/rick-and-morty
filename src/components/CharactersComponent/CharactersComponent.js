import axios, {isCancel, AxiosError} from 'axios';
import React,{useState,useEffect} from 'react'
import {useQuery} from 'react-query'
import '../CardComponent/CardComponent.css';
import CardComponent from '../CardComponent/CardComponent';
function CharactersComponent() {
    var BaseURL='https://rickandmortyapi.com/api'
    const [page,setPage]=useState(`${BaseURL}/character/?page=1`);
    const [nextPage,setNextPage]=useState(null);
    const [prevPage,setPrevPage]=useState(null);
    async function getDataFromApi({queryKey})
    {
        let response =await axios.get(queryKey[1]);
        setPrevPage(response.data.info.prev);
        setNextPage(response.data.info.next);
        return response.data.results
    }
  const {data, status, isPreviousData}=useQuery(['characters',page],getDataFromApi,{keepPreviousData:true})
  if(status==='loading')
  {
    return <div><p>Loading...</p></div>
  }if(status==='error')
  {
    return <div><p>Error!!</p></div>
  }
  var cards=[]
  data.map((val)=>{cards.push(<CardComponent data={val}/>)})
  return (
   <React.Fragment>
    <button disabled={prevPage==null?true:false} onClick={()=>{setPage(prevPage)}}>Prev</button>
    <button disabled={isPreviousData && nextPage?true:false} onClick={()=>{setPage(nextPage)}}>Next</button>
    {cards}
   </React.Fragment>
  )
}

export default CharactersComponent