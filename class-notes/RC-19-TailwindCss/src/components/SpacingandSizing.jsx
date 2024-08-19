import React from 'react'

const SpacingandSizing = () => {
  return (
    //Frgment
    // <> </>

    // <React.Fragment key=""> 

    <div>
      <h3>SpacingandSizing</h3>
      <div>
        <button className='bg-blue-500 text-red-900 m-1 p-4'>TIKLA</button>
        <button className='bg-blue-500 text-red-900 ml-1 p-4'>TIKLA</button>
        <button className='bg-blue-500 text-red-900 mr-1 p-4'>TIKLA</button>
        <button className='bg-blue-500 text-red-900 mx-1 my-2 px-4 py-2'>TIKLA</button>

      </div>

      <div>
        <button className='bg-blue-500 text-red-900 m-1 p-4 border border-red-700 rounded-md'>TIKLA</button>
        <button className='bg-blue-500 text-red-900 ml-1 p-4 border-[4px] border-red-700 rounded-[1rem]'>TIKLA</button>
        <button className='bg-blue-500 text-red-900 m-1 mr-5 p-4 h-20 w-20 rounded-[50%]'>TIKLA</button>
       <button className='bg-blue-500 text-red-900 mx-1 my-2 px-4 py-2 hover:bg-slate-500'>TIKLA</button>

      </div>

    </div>


    // </React.Fragment> 
  )
}

export default SpacingandSizing


//React.Fragment yazarsak key="" yazabiliyoruz. Ama sadece <> </> bu sekilde yaparsak key yazamayiz.