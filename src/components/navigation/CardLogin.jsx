import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../services/login'; import { getUserById } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/20/solid';


export default function CardLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    // const userId = userData?.[1]?.access;

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(login({ email, password }));
            if (response.type === 'auth/login/fulfilled') {
                const userRole = response.payload.user.userRole;

                await dispatch(getUserById(response.payload.user.userId)); // Menggunakan response.payload.user.userId
                if (userRole === 'admin') {
                    navigate('/admin/katalog');
                    window.location.reload()
                } else if (userRole === 'pembeli') {
                    navigate('/pembeli/katalog');
                    window.location.reload()
                } else if (userRole === 'pelapak') {
                    navigate('/pelapak/product-saya');
                    window.location.reload()
                }

            } else {
                setError(true);
                // console.log("respons", response.payload);
                setMessage(response.payload)
            }
        } catch (error) {
            // console.log(error);
        }
    };





    return (
        <form action="" onSubmit={Auth}>
            {/* error response */}
            {error ? <div className='h-20 w-[344px] flex flex-row justify-between items-center text-black text-opacity-70 text-[24px] font-normal'>
                <p>{message}</p>
                <button
                    type="button"
                    className=""
                    onClick={() => setError(false)}
                >
                    <XMarkIcon className='h-10 w-10 text-red-500' />
                </button>
            </div> : ''}

            <div className='h-[471px] w-[344px] border-2 border-[#8181813D] '>
                <div className='h-[82px] bg-[#E9E9E9] flex items-center pl-7'>
                    <p className='text-2xl text-[#000000]'>Masuk</p>
                </div>
                <div className='flex flex-col gap-3 pl-[26px] mt-6'>
                    <p className='text-2xl text-[#000000]'>Email</p>
                    <div>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-[#E8F0FD] outline-none rounded-md h-[50px] w-[292px] px-2 border border-[#00000040]'
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-3 pl-[26px] mt-9'>
                    <p className='text-2xl text-[#000000]'>Kata Sandi</p>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-[#E8F0FD] outline-none rounded-md h-[50px] w-[292px] px-2 border border-[#00000040]'
                            required
                        />
                    </div>
                </div>
                <div className='pl-[26px] mt-[27px]'>
                    <button type='submit' className='w-[292px] h-[52px] bg-[#2D9CDB] border border-[#2D9CDB] rounded-md text-2xl text-[#FFFFFF]'>
                        Login
                    </button>
                </div>
            </div>
        </form>
    )
}
