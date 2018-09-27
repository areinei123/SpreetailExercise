import React from 'react'
import Modal from 'react-modal'
import AddToCartButton from '../containers/AddToCartButton.jsx'
import SelectOption from '../containers/SelectOption.jsx'

Modal.setAppElement('#app')

const ItemDialog = ({item, closeModal}) => {
  let style = {
    content: {
      overflow: 'scroll', height: '90%'
    }
  }

  if(item && !item.selectedOption){
    item.selectedOption = item.options[0]
  }
  return(
    // item 
    <Modal
      isOpen={item ? true : false}
      onRequestClose={closeModal}
      className="modal-dialog"
      style={style}
      >
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{item.name}</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {item &&
            <img className='img-fluid' src={item.selectedOption.image}/>
          }
          <p>{item.description}</p>
          {item && item.options.map((option, key) =>
            <SelectOption option={option}/>
          )}
        </div>
        <div className="modal-footer">
          <AddToCartButton item={item}/>
          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
        </div>
      </div>
    </Modal>
  )
}

export default ItemDialog
