import React from 'react';

const Behaviour = ({behaviour}) => {
    const {name}= behaviour;
    return (
        <div >
           
   
           <div class="card w-96 mb-10 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    
    <div class="card-actions justify-end">
      <button  class="btn btn-primary">View</button>
     
    </div>
  </div>
</div>

          
        </div>
    );
};

export default Behaviour;