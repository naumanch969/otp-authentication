import { useStateContext } from '../context/ContextProvider'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()
    const { user, setPage, setUserFormData, initialUserState, initialErrorObj, setErrorObj } = useStateContext()

    const navigateToRegister = () => {
        setPage('register')
        setUserFormData(initialUserState)
        setErrorObj(initialErrorObj)
    }

    const navigateToLogin = () => {
        setPage('login')
        setUserFormData(initialUserState)
        setErrorObj(initialErrorObj)
    }

    return (
        <div className="w-full h-[4rem] flex flex-row justify-between items-center px-[24px]  " >
            <div className="text-white " >
                <h4 onClick={() => navigate('/')} className="text-[24px] text-bold cursor-pointer " >Auth</h4>
            </div>
            <div className="" >
                {
                    user
                        ?
                        <div className="flex items-center gap-[1rem] " >
                            <p className="text-[24px] capitalize " >{user?.name}</p>
                            <span onClick={() => navigate('/auth')} className="flex justify-center items-center bg-orange rounded-[50%] w-[40px] h-[40px] text-[24px] capitalize cursor-pointer " >{user?.name?.charAt(0)}</span>
                        </div>
                        :
                        <div className="flex gap-[8px] " >
                            <Link to="/auth" onClick={navigateToRegister} className="capitalize text-[20px] px-[20px] py-[4px] rounded-[8px] text-orange border-[1px] border-orange " >register</Link>
                            <Link to="/auth" onClick={navigateToLogin} className="capitalize text-[20px] px-[20px] py-[4px] rounded-[8px] bg-orange " >login</Link>
                        </div>
                }
            </div>
        </div>
    )

}

export default Navbar