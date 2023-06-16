import React from 'react'
import Button from '../../components/Button'
import ModalContainer from '../../components/ModalContainer'
import useModalStore from '../../utils/helpers/useModalStore'
import ModalOpen from './components/ModalOpen'




// const Project = ({ project: { images } }) => {
function Project({ project: { images } }){
    const openModal = useModalStore((state) => state.openModal);

  return (
    <>
        <ModalContainer/>
        <div className='relative my-16 md:mb-7 bg-gray-100 py-10'>
            <div className='my-container px-36 flex items-center justify-center gap-16 xl:gap-9 lg:flex-col-reverse'>
                <div>
                    <h2 className="text-4xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg uppercase">Project</h2>
                </div>
            </div>
            
            <div className='flex-row px-36 py-2 col-auto'>
                <div className='grid grid-cols-3 gap-10'>
                        {images?.map((val, i) => (
                            <div key={i} className="flex items-center gap-5 sm:gap-3 rounded-lg">
                                <div className='flex items-center'>
                                    
                                    <Button
                                        onClick={() => 
                                            openModal(
                                                <ModalOpen
                                                    image={val.img}
                                                    project={val.name}
                                                    link={val.links}
                                                    about={val.about}
                                                />
                                            )
                                        }
                                    >
                                        <img src={val.img} alt={val.location} className="max-w-full max-h-full sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 mr-52" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Project
