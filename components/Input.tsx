
interface InputType{
    placeholder:string,
    type:string,
    name?:string,
    value?:string,
    onChange?:(e:any) => void;
    onBlur?:any,
}


export const InputCustom:React.FC<InputType> = ({placeholder, type, name, value, onChange, onBlur}) => {



    return (
        <div className="flex justify-center items-center pr-[]">
            <input className="  pl-[14px]  mt-[17px] outline-none w-[300px] h-[40px] border-[#EAEAEA] border rounded-[5px]" placeholder={placeholder} type={type} name={name} onChange={onChange} />
        </div>
    )
}