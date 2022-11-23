import React from 'react'
import Modal, { Footer as ModalFooter } from 'components/modals'

function ModalComponent() {
  console.log('[page modal]')
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button onClick={handleShow}>Show Modal</button> |{' '}
      <button onClick={handleClose}>Hide Modal</button>
      <br />
      {show && (
        <Modal show={show} onHide={handleClose} closeButton={false}>
          <div>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </p>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <ModalFooter className="bg-gray-100">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Deactivate
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleClose}
              >
                Cancel
              </button>
            </ModalFooter>
          </div>
        </Modal>
      )}
      {!show && 'Hidden Modal'}
      {show && 'Modal is Showing'}
    </>
  )
}

export default ModalComponent
