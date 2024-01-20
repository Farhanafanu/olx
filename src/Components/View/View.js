import React,{useEffect,useState,useContext} from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext.';
import { Firebasecontext } from '../../store/Context';

function View() {
 const [UserDetails,setUserDetails]=useState()
 const{postDetails}=useContext(PostContext)
 const {firebase}=useContext(Firebasecontext)

 useEffect(()=>{
  if (postDetails) {
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  }
},[postDetails])

 return (
  <div className="viewParentDiv">
    <div className="imageShowDiv">
      {postDetails && <img src={postDetails.url} alt="" />}
    </div>
    <div className="rightSection">
      {postDetails && (
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
      )}
      {UserDetails &&
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{UserDetails.username}</p>
          <p>{UserDetails.phone}</p>
        </div>
      }
    </div>
  </div>
 );

}

export default View;
