import { useCallback, useEffect, useState } from "react";
import { getRandomJoke } from "../api";
import useIsMounted from "../hooks/useIsMounted";
import Joke from "../components/Joke";
import Loader from "../components/Loader";

export default function RandomJoke() {
  const [joke, setJoke] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const isMounted = useIsMounted()

  const getJoke =  useCallback(async ()=> {
    console.log('called')
    setIsLoading(true)
    const randomJoke = await getRandomJoke()
        if(isMounted.current){
            setIsLoading(false)
            if(randomJoke){
                setJoke({
                    text: randomJoke.value,
                    image: randomJoke.icon_url
                })
            }
        }
  }, [isMounted])

  useEffect(()=>{
    getJoke()
  }, [getJoke])

  return <>
   <Loader isLoading={isLoading}>
       {joke ? <Joke image={joke.image} text={joke.text} /> : 'No results'}
   </Loader>
   <button onClick={getJoke}>GENERATE NEW JOKE</button>
  </>

 
}
