import React from 'react'
import useModalStore from '../../../utils/helpers/useModalStore'

const ModalOpen = ({image, project, link, about}) => {
    const closeModal = useModalStore((state) => state.closeModal)
  return (
    <>
        <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            >
               <div className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity"></div>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-2 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-center justify-center p-5 border-b border-solid border-gray-300 rounded-t ">
                                <h1 className="text-xl font-bold">
                                   {project}
                                </h1>
                            </div>
                            <div className="relative p-6 flex-auto">
                                <div className="sm:flex sm:items-start">
                                    <img src={image} alt="" className='max-w-full max-h-full'/>
                                </div>
                                <div className="mt-10">
                                    <div className="grid items-center">
                                        <div className="items-start">
                                            <h1 className='text-lg text-center'>About This Project</h1>
                                            <h1 className='text-lg'>{about}</h1>
                                        </div>
                                        <div className="flex justify-center mt-8 hover:text-blue-600">
                                           <a href={link} className='text-lg '>Website Links</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-x-4 mt-8">
                                    <button
                                        type="submit"
                                        onClick={closeModal}
                                        className='py-2 px-6 mr-2 text-lg font-medium text-white bg-gradient-to-b from-emerald-400 to-blue-500 rounded-full transition-all duration-200 active:scale-90 right-0 shadow-lg shadow-emerald-400'
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h6>Bukti Pelaporan</h6>
                                <div className="sm:flex sm:items-start">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    onClick={closeModal}
                                    type="button"
                                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
    </>
  )
}

export default ModalOpen
