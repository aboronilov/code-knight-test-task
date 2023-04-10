import React from 'react'

type Props = {}

const HalfCircle = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-10 font-semibold text-3xl text-slate-700">
        Half Circle
      </div>
      <div className="h-[90px] w-[180px] bg-[#3F8EF7] rounded-tl-full rounded-tr-full" />
    </div>
  );
}

export default HalfCircle