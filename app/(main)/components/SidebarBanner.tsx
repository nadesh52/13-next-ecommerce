import React from 'react'

const SidebarBanner = ({imageUrl}:any) => {
  return (
    <div className='max-w-[198px] w-[198px]'>
        <img src={imageUrl} alt="sidebanner" />
    </div>
  )
}

export default SidebarBanner