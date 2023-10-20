import React, { HTMLProps } from 'react'

interface ITextInputProps extends HTMLProps<HTMLInputElement>{
    label : string,
    inputID : string,
    className? : string
}

const TextInput = ({label, inputID, className, ...rest} : ITextInputProps) => {
  return (
    <div className={`w-full flex flex-col gap-y-4`}>
        <label htmlFor={inputID} className={`text-md font-thin`}>{label}</label>
        <div className={`bg-slate-50 rounded p-2`}>
            <input id={inputID} name={inputID} {...rest} className={`w-full outline-none bg-transparent text-md font-medium text-gray-950 placeholder:text-gray-400`}/>
        </div>
    </div> 
  )
}

export default TextInput