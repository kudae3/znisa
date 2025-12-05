import React from 'react'

const GradientButton = ({ 
  children, 
  width = 'w-[118px]', 
  height = 'h-[42px]', 
  rounded = 'rounded-[40px]',
  textColor = 'text-[#000000]',
  onClick 
}) => {
  return (
    <div className={`gradient-border-wrapper ${width} ${height} ${rounded}`}>
      <button 
        className={`gradient-bg w-full h-full ${rounded} flex items-center justify-center focus:right-0 focus:outline-none`}
        onClick={onClick}
      >
        {typeof children === 'string' ? (
          <p className={`font-medium text-[16px] leading-[100%] ${textColor}`}>
            {children}
          </p>
        ) : (
          children
        )}
      </button>
    </div>
  )
}

export default GradientButton