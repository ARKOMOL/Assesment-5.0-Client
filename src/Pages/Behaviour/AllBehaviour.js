import React, { useEffect, useState } from 'react';
import Behaviour from './Behaviour';

const AllBehaviour = () => {
    const [behaviours,setBehaviours] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/allbehaviours')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setBehaviours(data)
        })
    },[])
    return (
        
        <div>
   <h1>Total Behaviours : {behaviours.length}</h1>
   <div class="Lg:mx-32  md:mx-32 container  card bg-base-100 shadow-xl  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5 ">
             {
                    behaviours.map((behaviour)=><Behaviour key={behaviour._id} behaviour={behaviour} ></Behaviour>)
                }
            

        </div>
        </div>
    );
};

export default AllBehaviour;