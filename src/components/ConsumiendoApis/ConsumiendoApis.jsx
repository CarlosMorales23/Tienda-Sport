import React, { useEffect, useState } from "react";

const ConsumiendoApis = () => {
    // const [ post, setPosts] = useState ([])

    //GET

    // useEffect ( ()=>{
    //     const getData= fetch("https://jsonplaceholder.typicode.com/posts")

    //     getData
    //     .then(res => res.json())
    //     .then(res => setPosts(res))
    //     .catch( (err) => console.log("catch: ", err))
    // }  , [] )

    //POST

    // useEffect ( ()=>{
    //         const getData= fetch("https://jsonplaceholder.typicode.com/posts/2")

    //         getData
    //         .then(res => res.json())
    //         .then(res => setPosts(res))
    //         .catch( (err) => console.log("catch: ", err))
    // } , [])

    //CREATE

    const [isCreated, setIsCreated] = useState(false);

    const crearPosts = () => {
        const createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "aplication/json",
            },
            body: JSON.stringify({
                title: "esta es una prueba",
                userId: "2",
                body: "aca estamos haciendo una prueba desde el front-end",
            }),
        });

        createPost.then((res) => setIsCreated(true));

        console.log(isCreated);
    };

    return <div>
        <button onClick={crearPosts}> Crear Post</button>
    </div>;
};

export default ConsumiendoApis;
