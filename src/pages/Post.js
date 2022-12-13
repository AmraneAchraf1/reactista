
import React, { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { NavLink, useParams } from 'react-router-dom';
import { getPost } from '../store/postSlice';
const Post = () => {

  const {id} = useParams();

  const dispatch = useDispatch();
  const {data, err, isLoading} = useSelector((state)=> state.post)
  //------- Post Data --------------------------------
  const postsData = err.isRejected ?
  <div className="alert alert-danger w-100">
    {err.msg}
  </div>
   :data.map((e) => {

    return (
      <div  className="card p-3 mb-2 w-100 userCard" key={e.id}>
      
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div className="icon">
            <i className="bx bxl-mailchimp"></i>
          </div>
          <div className="ms-2 c-details">
            <h6 className="mb-0"> UserId : {e.userId}</h6> <span>Post id : {e.id}</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <span className="heading">{e.title}</span>
        <div className="mt-5">
          <div className="mt-3">
            <span className="text1">{e.body}</span>
          </div>
        </div>
      </div>
    
    </div>
      )
});
      
  useEffect(()=>{
    dispatch(getPost(id))
  },[dispatch,id])

  const isLogin = useSelector((state)=>state.auth.login)
  
  return (
    <div  className="container py-5">
    
      {
        isLogin ? 
          id ?
         (postsData):
          "please select a user":
          <div className='alert alert-dark text-center my-5'> {"Pleas Login !"} </div>
      }

    </div>
  )
}

export default Post