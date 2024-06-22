import React from 'react'

const Container = () => {
  return (
  <div className='flex flex-row justify-center mt-[3rem] gap-3'>
    <div className='flex flex-col'>
       <h1 className='flex font-bold text-1xl border-t-2'>Blok Sayfası</h1>
       <h1 className='font-black text-3xl border-t-2'>Açıklama</h1>
       <h1 className='flex'>Blog Sitemize Hoşgeldiniz!</h1>
    </div>
    <div className='gap-2 flex flex-row'>
<img className='w-[200px] h-[250px] rounded' src="https://imgly-blog-prod.storage.googleapis.com/2023/05/partnership---getty.jpg" alt="" />
<img className='w-[200px] h-[250px] rounded' src="https://imgly-blog-prod.storage.googleapis.com/2023/09/ce-sdk_1-14-2.jpg" alt="" />

    </div>
  </div>
  )
}

export default Container