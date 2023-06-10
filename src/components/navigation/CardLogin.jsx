import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../services/login';
;

export default function CardLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const Auth = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        // window.location.reload()
    };

    return (
        <form action="" onSubmit={Auth}>
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
