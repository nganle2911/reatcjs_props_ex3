import React, { Component } from 'react'

export default class ModalDetail extends Component {
  // todo: render modal
  renderModal = () => {
    const { item } = this.props;

  }
  render() {
    const { item } = this.props; 
   
    return (
      <div className="modal fade" id="myStaticModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        {/* <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">{item.name}</h1>
            </div>
            <div className="modal-body">
            {item.description}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

