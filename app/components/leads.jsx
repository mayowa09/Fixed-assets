import React from 'react'
import { Leads } from './icondata'

export default function Lead() {
    const Active = () => (        
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.82 3.00001C13.82 2.79956 13.7003 2.61849 13.5159 2.53997C13.3314 2.46145 13.1179 2.50066 12.9734 2.6396L11.1955 4.34917C8.54827 6.89458 6.31144 9.83479 4.56461 13.0651C4.52348 13.1378 4.5 13.2217 4.5 13.3112C4.5 13.5873 4.72386 13.8112 5 13.8112H9.31V21C9.31 21.198 9.42684 21.3774 9.60795 21.4574C9.78907 21.5374 10.0003 21.503 10.1467 21.3696L10.9422 20.645C13.7269 18.1083 16.0902 15.1446 17.9432 11.865L18.4353 10.9942C18.5228 10.8394 18.5215 10.6498 18.4318 10.4962C18.3422 10.3426 18.1778 10.2482 18 10.2482H13.82V3.00001Z" fill="black"/>
      </svg>
);

  return (
    <>
        <div className="flex gap-6 pt-3">
            {Leads.map((lead, index) => (
              <div key={index} className="rounded-3xl h-[12.5rem] w-[21rem] bg-white pt-8 px-8 flex flex-col gap-10 hover:translate-y-2 transition-transform duration-200 ease-out-in">
                <div className=" flex justify-between">
                <p className="text-xl font-medium">{lead.name}</p>
                <Active/>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="text-3xl font-medium">{lead.number}</p>
                  {lead.icon}
                </div>
              </div>
            ))}
          </div>
    </>
  )
}
