
import React from 'react'

const Header = () => {
  return (
  
<div className='flex  h-[50px] mt-[0] justify-between border-b-2 rounded '>
<h1 className=' font-black text-3xl flex items-center  ml-[250px]'>Blog Web</h1>
<div className='flex items-center gap-1 mr-[200px]'>
<input className='flex rounded-full bg-zinc-200 w-[40px] h-[40px] hover:opacity-80' type="button" value="1" />
<input className='flex rounded-full bg-zinc-200 w-[40px] h-[40px] hover:opacity-80' type="button" value="2" />
<input className='flex rounded-full bg-zinc-200 w-[40px] h-[40px] hover:opacity-80' type="button" value="3" />
<input className='flex rounded-full bg-zinc-200 w-[40px] h-[40px] hover:opacity-80' type="button" value="4" />
</div>
</div>

  )
}

export default Header