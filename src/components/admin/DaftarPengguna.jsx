import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, searchUser } from '../../services/user';
import { Link } from 'react-router-dom';
import ModalDeleteDataUser from './ModalDeleteDataUser';

export default function DaftarPengguna() {
    const [value,] = useState(5);
    const [count, setCount] = useState(1);
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();
    const [tempSearchValue, setTempSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const searchResults = useSelector((state) => state?.user?.searchUser)
    const User = useSelector((state) => state?.user?.users)
    const selectedData = (item) => {
        setCount(item)
    }

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const tHead = [
        { name: 'Name', span: 1 },
        { name: 'Email', span: 2 },
        { name: 'Role', span: 1 },
        { name: 'Aksi', span: 1 },
    ]

    const length = Math.ceil(User?.length / value);
    let pages = [];

    for (var z = 0; z <= length; z++) {
        pages.push(z);
    }

    const btnRight = () => {
        if (number + 1 > length) {
            setNumber(length);
        } else {
            setNumber(number + 1);
        }
    };

    const btnLeft = () => {
        if (number - 1 < 1) {
            setNumber(1);
        } else {
            setNumber(number - 1);
        }
    };
    // const filteredData = searchResults.length != 0 ? searchResults : User;

    const filteredData1 = searchValue !== '' ? searchResults : User;
    const dataToShow = filteredData1.length !== 0 ? filteredData1 : [];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValue(tempSearchValue);
        dispatch(searchUser(tempSearchValue));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <>
            <div className='w-full h-auto border border-[#00000040] px-[35px]'>
                <div className='mt-7 flex xxl:flex-row xl:flex-row lg:flex-row xs:flex-col md:flex-col s:flex-col justify-between'>
                    <p className='text-[28px] font-normal text-[#000000BF]'>Daftar Pengguna</p>
                    <div className='flex flex-row'>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder='Cari Pengguna...'
                            className='h-[49px] w-[149.51px] border-y border-l border-[#00000040] rounded-none outline-none px-2'
                            value={tempSearchValue}
                            onChange={(e) => setTempSearchValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={handleSubmit} className='h-[49px] w-[60px] text-[21px] text-[#535353] border border-[#00000040] rounded-r-md'>
                            Cari
                        </button>
                    </div>
                </div>
                {User?.length === 0 ? <div>
                    <p>Tidak ada data</p>
                </div> : <div className=''>
                    <div className='w-full h-full pt-6'>
                        <section className="container mx-auto">
                            <div className="w-full overflow-hidden ">
                                <div className="w-full overflow-auto">
                                    <table className=" xxl:w-full xl:w-full lg:w-[800px] md:w-[800px] xs:w-[800px] s:w-[800px]">
                                        <thead>
                                            <tr className="grid grid-cols-5 text-left h-[57px] text-[#000000BF] text-[20px] ">
                                                {tHead.map((item, idx) => (
                                                    <th key={idx} className={`col-span-${item?.span} border pl-4 border-[#00000040] flex items-center`}>
                                                        <p>{item?.name}</p>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {dataToShow.length === 0 ? <p>Tidak ada data dengan nama {searchValue}</p> : <>
                                                {dataToShow?.slice((count - 1) * value, count * value)?.map((item, idx) => (
                                                    <tr key={idx} className="grid grid-cols-5 text-gray-700 h-[48px]">
                                                        <td className="col-span-1 px-4 border border-[#00000040] flex items-center">
                                                            <p>{item?.name}</p>
                                                        </td>
                                                        <td className="col-span-2 px-4 border border-[#00000040] flex items-center">
                                                            <p>{item?.email}</p>
                                                        </td>
                                                        <td className="col-span-1 px-4 border border-[#00000040] flex items-center">
                                                            <p>{item?.role}</p>
                                                        </td>
                                                        <td className="col-span-1 flex items-center justify-center px-4  border border-[#00000040]">
                                                            <div className='flex flex-row justify-center items-center gap-4'>
                                                                <Link to={`/admin/sunting-pengguna/${item?.id}`} state={{ id: item?.id }} >
                                                                    <button
                                                                        className="grid place-items-center rounded text-[21px] text-[#2D9CDB] border border-[#2D9CDB] px-3"
                                                                    >

                                                                        <p>Edit</p>
                                                                    </button>
                                                                </Link>
                                                                <ModalDeleteDataUser userId={item?.id} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                    {filteredData1.length > 5 ? <div className='w-full flex justify-center mt-6'>
                        <nav className={`${number + 1 <= length ? 'grid grid-cols-4 w-[214px]' : 'grid grid-cols-3 w-[150px]'}  place-items-center h-[46px] border-2 border-[#348FDD40] text-[24px]`} aria-label="Pagination">
                            <div className='col-span-1 w-full h-full grid place-items-center' onClick={() => btnLeft()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                            {number <= length ? (
                                <div onClick={() => {
                                    selectedData(number)
                                }} className={`col-span-1 h-full w-full border-l-2 border-[#348FDD40] grid place-items-center ${count === number ? 'bg-[#2D9CDBAB] text-[#FFFFFF]' : ''}`}>
                                    <button>{number}</button>
                                </div>
                            ) : null}

                            {number + 1 <= length ? (
                                <div onClick={() => {
                                    selectedData(number + 1)
                                }} className={`col-span-1 h-full w-full border-l-2 border-[#348FDD40] grid place-items-center ${count === number + 1 ? 'bg-[#2D9CDBAB] text-[#FFFFFF]' : ''}`}>
                                    <button>{number + 1}</button>
                                </div>
                            ) : null}
                            <div className='col-span-1 border-l-2 border-[#348FDD40] w-full h-full grid place-items-center ' onClick={() => btnRight()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </nav>
                    </div> : ''}
                </div >}
            </div >
        </>
    )
}
