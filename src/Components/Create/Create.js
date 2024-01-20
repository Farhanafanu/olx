import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {Firebasecontext,AuthContext} from '../../store/Context'
const Create = () => {
  const {firebase}=useContext(Firebasecontext)
  const {user}=useContext(AuthContext)
  const history=useHistory()
  const [name,setName]=useState('');
  const[category,setCategory]=useState('');
  const[price,setPrice]=useState('');
  const[image,setImage]=useState(null);
  const date=new Date()
  const handleSubmit = () => {
    if (image && image instanceof File) {
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
        ref.getDownloadURL().then((url) => {
          console.log(url)
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            cretaedAt:date.toDateString()
            
          })
          history.push('/')
        })
      })
    } else {
      console.log('No image selected or image is not a file');
    }
   }
   
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname"  value={price}
              onChange={(e)=>setPrice(e.target.value)} name="Price" />
            <br />
          </form>
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
         
            <br />
            <input onChange={(e) => {
 setImage(e.target.files[0])
}} type="file" />

            <br />
            <button  onClick={handleSubmit}className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
