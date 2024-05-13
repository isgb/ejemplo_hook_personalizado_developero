import React, { useEffect, useState } from 'react'

const useFetch = (url: string) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(second);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [url]);

    return{
        data,
        loading
    };
    
}

export const TodoItem = () => {
  return (
    <div>TodoItem</div>
  )
}

export const TodoitemWitCustomHook = () => {

    const {data} = useFetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <div>
            <p>Title {data?.title}</p>
        </div>
    );

};