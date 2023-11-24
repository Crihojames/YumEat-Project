import React from "react"
import {AiOutlineMenu, AiOutlineAlignRight, AiOutlineClose, AiFillTag} from "react-icons/ai"

const TopNav = () => {
  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
            <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  )
}

export default TopNav
