import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const handleSignOut = () =>{
        signOut(auth);
    }
    const menu = <>
    
   <li>  <Link to='/'>Home</Link></li>
   {
    user
    ?
     <li>  <Link to='/login' onClick={handleSignOut}>Signout <img className='w-10 rounded-full' src={user?.photoURL} alt="" />  {user.displayName} </Link></li>
    :
    <li>  <Link to='/login'>Login</Link></li>
   }
  

    </>
    return (
        <div>
            

 <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menu}
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl">Assessment 5.0</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
     {menu}
    </ul>
  </div>
  
</div>



        </div>
    );
};

export default Navbar;