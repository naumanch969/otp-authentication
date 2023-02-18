import { useStateContext } from '../context/ContextProvider'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import {motion} from 'framer-motion'
import { VisibilityOff, RemoveRedEye } from '@mui/icons-material'

const Input = ({ type, placeholder, attribute, blurFunction, showEyeIcon }) => {      // attribute may either of 'email', 'name', 'password', 'confirmPassword'

    const { userFormData, setUserFormData, validationMessage, setValidationMessage } = useStateContext()
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setUserFormData({ ...userFormData, [attribute]: e.target.value })
    }

    return (
        <div className="flex flex-col gap-[4px]" >

            <div className="relative flex flex-col gap-[4px] " >
                <input
                    autoComplete='off'
                    type={showPassword ? 'text' : type}
                    placeholder={placeholder}
                    name={attribute}
                    value={userFormData[attribute]}
                    onChange={handleChange}
                    onBlur={blurFunction}
                    className='bg-inherit w-full text-textGray border-b-[1px] border-textGray p-[6px] outline-none pl-0  '
                    required
                />
                {
                    showEyeIcon &&
                    <button onClick={() => setShowPassword(pre => !pre)} className="absolute right-0 top-[50%] transform translate-y-[-50%] " > {showPassword ? <VisibilityOff /> : <RemoveRedEye />}  </button>
                }
            </div>
            {
                validationMessage[attribute] &&
                <p className="text-[12px] text-red " >{validationMessage[attribute]}</p>
            }

        </div>
    )

}

export default Input