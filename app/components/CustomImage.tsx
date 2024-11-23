import Image from 'next/image';
import React from 'react'

type Props = {
  src: string,
  alt: string,
  priority?: string,
}

export default  function CustomImage({src, alt, priority}: Props) {
  const prty = !!priority;
  return (
    <div className='w-fll h-full'>
      <Image 
        className="rounded-lg mx-auto" 
        src={src} alt={alt} width={650} height={650} priority={prty}
      />
    </div>
  )
}

