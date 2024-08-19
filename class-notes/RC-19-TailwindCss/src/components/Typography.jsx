import React from 'react'

const Typography = () => {
  return (
    <div>
      <h3 className='text-2xl'>Typography</h3>
      <p className='text-sm'>Typography</p>
      <p className='text-lg'>Typography</p>
      <p className='text-xl'>Typography</p>
      <p className='text-3xl'>Typography</p>
      <p className='text-4xl'>Typography</p>
      <p className='text-6xl'>Typography</p>
      <p className='text-[75px]'>Typography</p> 
      <p className='text-[10rem]'>Typography</p> 

      <article>
        <p className='line-clamp-4 hover:line-clamp-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sapiente eaque repudiandae unde voluptatum nobis nam vero temporibus. Tempora, reprehenderit quos, earum voluptates, veritatis aut voluptatem necessitatibus aspernatur dignissimos accusamus cupiditate ad perspiciatis ut similique! Perspiciatis officiis quidem sit placeat quasi non quisquam necessitatibus ipsa esse velit excepturi ab sed incidunt beatae animi veritatis, recusandae sequi? Accusantium ad minus magni porro eum reiciendis corporis aperiam provident alias quis sint impedit aut culpa iusto praesentium quisquam quo quod assumenda sunt tempore doloribus, est, tempora dolorem laborum? Cumque hic architecto nostrum adipisci eligendi aut beatae. Magni facilis, natus ipsam beatae officiis vitae pariatur cumque nesciunt distinctio laudantium officia dolorem. Nobis porro cupiditate ipsam eius suscipit! Quidem quis nisi ipsam nihil eius ex ipsa, voluptatem animi, aperiam deleniti cum totam illum distinctio dolore porro eos excepturi quod iste debitis autem quam quas facilis accusantium? Expedita, pariatur autem! Sed nesciunt laboriosam ullam soluta ad.</p>
      </article>
      
      <p className='text-center'>Typography</p>
      <p className='underline'>Typography</p>
      <p className='line-through'>Typography</p>
      <p className='text-red-900'>Typography</p>
      <p className='text-green-600'>Typography</p>
      <p className='text-6xl text-[rgb(154,200,5)]'>Typography</p> 
      {/* bosluk birakmadan yazilmali. */}

      <p className='text-[#6e22bb]'>Typography</p> 
      <p className='bg-[#22b6bb] text-white'>Typography</p> 
    </div>
  )
}

export default Typography