import './styleSheet.css';
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');


function Update({user}) {
   
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const dispatch = useDispatch()


    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        const editedUser= {
            x:user._id,
            name,
            email,
            phone
        }
        dispatch(editUser(editedUser))
        closeModal()
    }
  
  return (
    <div className='App'>
    <button className='buttonstyle ' onClick={openModal}> Edit </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        >
          <div className='App'>
          <form   onSubmit={handleSubmit} >
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
         <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
         <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
         <br />
         <button className='buttonstyle'> Confirm please </button>
                               
      </form>   
      </div>  
      </Modal>

    </div>
  )
}

export default Update
