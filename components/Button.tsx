interface ButtonType {
  title: string;
  icon?: any;
  iconPosition?: "prev" | "next";
  buttonWidth?: number;
  bgBtn: boolean;
  onClick?:() => void;
}

export const Button: React.FC<ButtonType> = ({
  title,
  icon,
  iconPosition,
  buttonWidth,
  bgBtn,
  onClick
}) => {
  return (
    <button
    onClick={onClick}
      style={{ width: `${buttonWidth}px` }}
      className={`${title == "Login with Google" ? " border-[#EAEAEA] border-[1px] bg-[white]" : ""}
      ${bgBtn ? "bg-transparent" : "bg-gradient-to-t from-[#4EA75F] to-[#95cda0]" } ${
        icon && iconPosition ? "py-[8px]" : "py-[10px]"
      } hover:opacity-75 duration-300 rounded-[6px] flex items-center justify-center space-x-[4px] ${title == "Login with Facebook" ? " border-[#EAEAEA] border-[1px] text-[#727272] bg-[white] " : ""}`}
    >
      {icon && iconPosition == "prev" && icon}
      <span
        className={`text-[16px] ${
          bgBtn
            ? "text-[#46A358] font-bold leading-[14px] "
            : "text-white font-medium leading-[20px]"
        }`}
      >
       <span className={`${title == "Login with Google" ? "text-[#727272]": "" }
        ${title == "Login with Facebook" ? "text-[#727272]  " : ""}
       ${title == "Read More" ? "text-[#3D3D3D] text-[14px] leading-[16px] pl-[15px] pt-[9px]" : ""}`}>
        {title} 
        </span> 
      </span>
      {icon && iconPosition == "next" && icon}
    </button>
  );
};
