import React from 'react'

export const Card = ({ 
  image, 
  title, 
  price, 
  description, 
  orderText, 
  Icon,
  className = "",
  imageHeight = "h-48"
}) => {
  return (
     <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      {image && (
        <img 
          src={image} 
          alt={title} 
          className={`w-full ${imageHeight} object-cover`}
        />
      )}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          {title && <h3 className="font-bold text-lg">{title}</h3>}
          {price && <span className="text-primary font-medium">{price}</span>}
        </div>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {orderText && Icon && (
          <button className="flex items-center gap-2 font-semibold text-secondary hover:text-primary transition-colors">
            {orderText}
            <Icon className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}
