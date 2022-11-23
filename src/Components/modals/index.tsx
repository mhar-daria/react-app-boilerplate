import React, { FunctionComponent } from 'react'
import type { ReactNode, ReactChild, ChangeEvent } from 'react'
import ReactDom from 'react-dom'
import type { PortalProps, KeyboardEvent } from 'types/react'
import _ from 'lodash'
import { CgCloseO } from 'react-icons/cg'

function ModalPortal({ children }: PortalProps) {
  const modalElem: HTMLElement = document.getElementById(
    'modal-root'
  ) as HTMLElement

  React.useEffect(() => {
    const element = document.createElement('div')

    modalElem?.appendChild(element)

    return () => {
      modalElem?.removeChild(element)
    }
  }, [modalElem])

  return ReactDom.createPortal(children, modalElem)
}

type ModalProps = {
  children: ReactNode | ReactChild
  show?: boolean
  onHide?: Function
  title?: string
  closeButton?: boolean
}

function Modal({
  children,
  show: showModal = false,
  onHide,
  title,
  closeButton = true,
}: ModalProps) {
  const [show, setShow] = React.useState(showModal)

  const handleClose = () => {
    setShow(false)

    if (_.isFunction(onHide)) {
      onHide()
    }
  }

  const eventCallback = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && document.activeElement === document.body) {
      handleClose()
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', eventCallback, false)
    return () => {
      document.removeEventListener('keydown', eventCallback, false)
    }
  }, [])

  return (
    <>
      {show && (
        <ModalPortal>
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                {/*<!--
              Modal panel, show/hide based on modal state.

              Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            -->*/}
                <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  {(closeButton || title) && (
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900 relative"
                        id="modal-title"
                      >
                        {title}
                        {closeButton && (
                          <button
                            className="absolute right-0 top-0 bottom-0 my-auto"
                            onClick={handleClose}
                          >
                            <CgCloseO
                              size="1.2em"
                              className="text-gray-500"
                              style={{
                                color: 'auto',
                              }}
                            />
                          </button>
                        )}
                      </h3>
                    </div>
                  )}
                  {children}
                </div>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  )
}

type ModalFooterProps = {
  children: ReactNode | ReactChild
  className?: string
}

export function Footer(props: ModalFooterProps) {
  const className = React.useMemo(() => {
    let classes = `bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse`

    if (props?.className) {
      classes = classes.concat(' ', props.className)
    }

    return classes
  }, [props.className])
  return <div className={className}>{props.children}</div>
}

export default Modal
