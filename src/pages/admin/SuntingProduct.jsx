import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editProductById, getProductById } from '../../services/product'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { getPelapak } from '../../services/user';
import { Carousel } from 'react-responsive-carousel';

const listPelapak = []

export default function SuntingProduct() {
    const [pelapak, setPelapak] = useState(listPelapak[0]);
    const param = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector((state) => state?.product?.selectedProduct)
    const productId = product?.id
    const Pelapak = useSelector((state) => state.user?.pelapak)
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [imagesGroup, setImagesGroup] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage1, setSelectedImage1] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [selectedImage3, setSelectedImage3] = useState(null);
    const [selectedImage4, setSelectedImage4] = useState(null);
    const [openImage, setOpenImage] = useState(false)
    const [openImage1, setOpenImage1] = useState(false)
    const [openImage2, setOpenImage2] = useState(false)
    const [openImage3, setOpenImage3] = useState(false)

    const handleFileUpload = (event, index) => {
        const file = event.target.files[0];

        // Setel gambar terpilih sesuai dengan indeks yang tersedia
        switch (index) {
            case 0:
                setSelectedImage(file);
                break;
            case 1:
                setSelectedImage1(file);
                break;
            case 2:
                setSelectedImage2(file);
                break;
            case 3:
                setSelectedImage3(file);
                break;
            case 4:
                setSelectedImage4(file);
                break;
            default:
                break;
        }
    };

    const handleImageRemove = (index) => {
        // Hapus gambar terpilih sesuai dengan indeks yang tersedia
        switch (index) {
            case 0:
                setSelectedImage(null);
                break;
            case 1:
                setSelectedImage1(null);
                break;
            case 2:
                setSelectedImage2(null);
                break;
            case 3:
                setSelectedImage3(null);
                break;
            case 4:
                setSelectedImage4(null);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const product = new FormData();
        product.append('name', productName);
        product.append('harga', price);
        product.append('stock', stock);
        product.append('deskripsi', description);
        product.append('pelapakId', pelapak?.id);
        product.append('visibility', isChecked)

        // Tambahkan gambar yang dipilih ke FormData
        if (selectedImage) {
            product.append('image', selectedImage);
        }
        if (selectedImage1) {
            product.append('image', selectedImage1);
        }
        if (selectedImage2) {
            product.append('image', selectedImage2);
        }
        if (selectedImage3) {
            product.append('image', selectedImage3);
        }
        if (selectedImage4) {
            product.append('image', selectedImage4);
        }
        try {
            dispatch(editProductById({ productId: productId, updatedProduct: product }))
                .then((response) => {
                    setProductName('');
                    setPrice('');
                    setStock('');
                    setDescription('');
                    setPelapak('');
                    setIsChecked(true)
                    setSelectedImage(null);
                    setSelectedImage1(null);
                    setSelectedImage2(null);
                    setSelectedImage3(null);
                    setSelectedImage4(null);

                    if (response?.payload?.message === 'Produk berhasil diubah') {
                        navigate('/admin/katalog');
                        window.location.reload()
                    } else {
                        // console.log('Gagal:', response);
                    }
                })
                .catch(() => {
                    // console.log('Error:', error.message);
                });
        } catch (error) {
            // console.log('Error:', error.message);
        }
    }

    useEffect(() => {
        dispatch(getProductById(param.id))
        dispatch(getPelapak())
    }, [])
    useEffect(() => {
        if (product) {
            setProductName(product.name);
            setPrice(product.harga);
            setStock(product.stock);
            setDescription(product.deskripsi);
            setImagesGroup(product.images)
            setIsChecked(product.visibility)
            if (Pelapak.length > 0) {
                const selectedPelapak = Pelapak.find((p) => p.id === product.pelapakId);
                if (selectedPelapak) {
                    setPelapak(selectedPelapak);
                }
            }
        }
    }, [product, Pelapak]);

    useEffect(() => {
        if (Pelapak.length > 0) {
            const updatedListPelapak = Pelapak.map((item) => ({
                name: item.name,
                id: item.id
            }));
            // setPelapak(updatedListPelapak[0]);
            setListVoucher(updatedListPelapak);
        }
    }, [Pelapak]);

    const setListVoucher = (vouchers) => {
        listPelapak.splice(0, listPelapak.length, ...vouchers);
    };

    return (
        <>
            <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-10 s:px-10'>
                <p className='text-[32px] font-bold mt-12'>Ubah Produk</p>
                <div className='mt-8'>
                    <form action="" onSubmit={handleSubmit} method="post">
                        <div className='h-auto xxl:w-[892px] xl:w-[892px] w-auto pb-5 border border-[#E9E9E9]'>
                            <div className='h-[84.55px] w-full bg-[#E9E9E9] text-[24px] font-normal flex items-center pl-[70px] text-[#000000B2]'>
                                <p>Data Produk</p>
                            </div>
                            <div className='pl-[70px] mt-6 flex flex-col gap-9 text-[24px] text-[#000000B2]'>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Nama</p>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Harga</p>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Stock</p>
                                    <input
                                        type="number"
                                        name="stock"
                                        id="stock"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Deskripsi</p>
                                    <textarea
                                        rows={4}
                                        name="deskripsi"
                                        id="deskripsi"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className='h-[127px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md p-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Pilih Pelapak</p>
                                    <Listbox value={pelapak} onChange={setPelapak}>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md text-left pl-4">
                                                <span className="block truncate ">{pelapak?.name}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-[#E8F0FD] rounded-md border border-[#00000040]">
                                                    {listPelapak.map((person, personIdx) => (
                                                        <Listbox.Option
                                                            key={personIdx}
                                                            className={({ active }) =>
                                                                `relative rounded-md cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#FFFFFF] text-[#54a7f0]' : 'text-[#000000]'
                                                                }`
                                                            }
                                                            value={person}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                                {imagesGroup != null ? <div className="flex flex-col items-start gap-3 pr-[70px]">
                                    <div className='h-[165px] w-[170px]'>
                                        <Carousel
                                            autoPlay={true}
                                            infiniteLoop={true}
                                            showThumbs={false}
                                            showStatus={false}
                                            interval={2000}>
                                            {imagesGroup?.map((url, idx) => (
                                                <img
                                                    key={idx}
                                                    src={url?.url}
                                                    alt={product?.filename}
                                                    className="h-[165px] w-[309px] xs object-cover object-center "
                                                />
                                            ))}
                                        </Carousel>
                                    </div>
                                    <button type='button' onClick={() => setImagesGroup(null)} className='text-[#DD3434] text-[18px] ml-4'>
                                        Hapus
                                    </button>
                                </div> : ''}

                                {imagesGroup === null ? <div>
                                    <div className='flex xxl:flex-row xl:flex-row flex-col'>
                                        <div className='flex xxl:flex-row  xl:flex-row flex-col' >
                                            <div className="flex flex-col gap-3 xxl:pr-[70px] xl:pr-[70px] w-[250px] ">
                                                <p>Upload Gambar</p>
                                                <label htmlFor="uploadInput" className="cursor-pointer h-[47px] w-[211px]">
                                                    <div className="h-[47px] w-[211px] outline-none border border-[#000000] bg-[#C2C2C2] rounded-md px-2 text-[20px] flex items-center justify-center">
                                                        <p>Pilih File</p>
                                                        <input
                                                            type="file"
                                                            id="uploadInput"
                                                            className="hidden"
                                                            name='image'
                                                            onChange={(event) => handleFileUpload(event, 0)}
                                                        />
                                                    </div>
                                                </label>
                                                <button
                                                    type="button"
                                                    className="text-[#DD3434] text-[18px] ml-4"
                                                    onClick={() => handleImageRemove(0)}
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                            <div className='h-40 w-40'>
                                                {selectedImage && (
                                                    <img
                                                        src={URL.createObjectURL(selectedImage)}
                                                        alt="Preview Gambar 1"
                                                        className="h-40 w-40"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className={`${openImage ? 'hidden' : ''} w-full flex justify-end pr-[70px] mt-20 text-[21px]`}>
                                            <button
                                                type="button"
                                                className="h-[47px] w-[211px] text-[#1D8B2F] border border-[#1D8B2F] rounded-md"
                                                onClick={() => setOpenImage(true)}
                                            >
                                                Tambah Gambar
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${openImage ? '' : 'hidden'} flex xxl:flex-row xl:flex-row flex-col mt-10`}>
                                        <div className='flex xxl:flex-row  xl:flex-row flex-col' >
                                            <div className="flex flex-col gap-3 xxl:pr-[70px] xl:pr-[70px] w-[250px] ">
                                                <p>Upload Gambar</p>
                                                <label htmlFor="uploadInput1" className="cursor-pointer h-[47px] w-[211px]">
                                                    <div className="h-[47px] w-[211px] outline-none border border-[#000000] bg-[#C2C2C2] rounded-md px-2 text-[20px] flex items-center justify-center">
                                                        <p>Pilih File</p>
                                                        <input
                                                            type="file"
                                                            id="uploadInput1"
                                                            className="hidden"
                                                            name='image1'
                                                            onChange={(event) => handleFileUpload(event, 1)}
                                                        />
                                                    </div>
                                                </label>
                                                <button
                                                    type="button"
                                                    className="text-[#DD3434] text-[18px] ml-4"
                                                    onClick={() => {
                                                        handleImageRemove(1)
                                                        setOpenImage(false)
                                                    }}
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                            <div className="h-40 w-40">
                                                {selectedImage1 && (
                                                    <img
                                                        src={URL.createObjectURL(selectedImage1)}
                                                        alt="Preview Gambar 1"
                                                        className="h-40 w-40"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className={`${openImage1 ? 'hidden' : ''} w-full flex justify-end pr-[70px] mt-20 text-[21px]`}>
                                            <button
                                                type="button"
                                                className="h-[47px] w-[211px] text-[#1D8B2F] border border-[#1D8B2F] rounded-md"
                                                onClick={() => setOpenImage1(true)}
                                            >
                                                Tambah Gambar
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${openImage1 ? '' : 'hidden'} flex xxl:flex-row xl:flex-row flex-col mt-10`}>
                                        <div className='flex xxl:flex-row  xl:flex-row flex-col' >
                                            <div className="flex flex-col gap-3 xxl:pr-[70px] xl:pr-[70px] w-[250px] ">
                                                <p>Upload Gambar</p>
                                                <label htmlFor="uploadInput2" className="cursor-pointer h-[47px] w-[211px]">
                                                    <div className="h-[47px] w-[211px] outline-none border border-[#000000] bg-[#C2C2C2] rounded-md px-2 text-[20px] flex items-center justify-center">
                                                        <p>Pilih File</p>
                                                        <input
                                                            type="file"
                                                            id="uploadInput2"
                                                            className="hidden"
                                                            name='image2'
                                                            onChange={(event) => handleFileUpload(event, 2)}
                                                        />
                                                    </div>
                                                </label>
                                                <button
                                                    type="button"
                                                    className="text-[#DD3434] text-[18px] ml-4"
                                                    onClick={() => {
                                                        handleImageRemove(2)
                                                        setOpenImage1(false)
                                                    }}
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                            <div className="h-40 w-40">
                                                {selectedImage2 && (
                                                    <img
                                                        src={URL.createObjectURL(selectedImage2)}
                                                        alt="Preview Gambar 1"
                                                        className="h-40 w-40"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className={`${openImage2 ? 'hidden' : ''} w-full flex justify-end pr-[70px] mt-20 text-[21px]`}>
                                            <button
                                                type="button"
                                                className="h-[47px] w-[211px] text-[#1D8B2F] border border-[#1D8B2F] rounded-md"
                                                onClick={() => setOpenImage2(true)}
                                            >
                                                Tambah Gambar
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${openImage2 ? '' : 'hidden'} flex xxl:flex-row xl:flex-row flex-col mt-10`}>
                                        <div className='flex xxl:flex-row  xl:flex-row flex-col' >
                                            <div className="flex flex-col gap-3 xxl:pr-[70px] xl:pr-[70px] w-[250px] ">
                                                <p>Upload Gambar</p>
                                                <label htmlFor="uploadInput3" className="cursor-pointer h-[47px] w-[211px]">
                                                    <div className="h-[47px] w-[211px] outline-none border border-[#000000] bg-[#C2C2C2] rounded-md px-2 text-[20px] flex items-center justify-center">
                                                        <p>Pilih File</p>
                                                        <input
                                                            type="file"
                                                            id="uploadInput3"
                                                            className="hidden"
                                                            name='image3'
                                                            onChange={(event) => handleFileUpload(event, 3)}
                                                        />
                                                    </div>
                                                </label>
                                                <button
                                                    type="button"
                                                    className="text-[#DD3434] text-[18px] ml-4"
                                                    onClick={() => {
                                                        handleImageRemove(3)
                                                        setOpenImage2(false)
                                                    }}                                              >
                                                    Hapus
                                                </button>
                                            </div>
                                            <div className='w-40 h-40'>
                                                {selectedImage3 && (
                                                    <img
                                                        src={URL.createObjectURL(selectedImage3)}
                                                        alt="Preview Gambar 1"
                                                        className="h-40 w-40"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className={`${openImage3 ? 'hidden' : ''} w-full flex justify-end pr-[70px] mt-20 text-[21px]`}>
                                            <button
                                                type="button"
                                                className="h-[47px] w-[211px] text-[#1D8B2F] border border-[#1D8B2F] rounded-md"
                                                onClick={() => setOpenImage3(true)}
                                            >
                                                Tambah Gambar
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${openImage3 ? '' : 'hidden'} flex xxl:flex-row xl:flex-row flex-col mt-10`}>
                                        <div className='flex xxl:flex-row  xl:flex-row flex-col' >
                                            <div className="flex flex-col gap-3 xxl:pr-[70px] xl:pr-[70px] w-[250px] ">
                                                <p>Upload Gambar</p>
                                                <label htmlFor="uploadInput4" className="cursor-pointer h-[47px] w-[211px]">
                                                    <div className="h-[47px] w-[211px] outline-none border border-[#000000] bg-[#C2C2C2] rounded-md px-2 text-[20px] flex items-center justify-center">
                                                        <p>Pilih File</p>
                                                        <input
                                                            type="file"
                                                            id="uploadInput4"
                                                            className="hidden"
                                                            name='image4'
                                                            onChange={(event) => handleFileUpload(event, 4)}
                                                        />
                                                    </div>
                                                </label>
                                                <button
                                                    type="button"
                                                    className="text-[#DD3434] text-[18px] ml-4"
                                                    onClick={() => {
                                                        handleImageRemove(4)
                                                        setOpenImage3(false)
                                                    }}
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                            <div className='w-40 h-40'>
                                                {selectedImage4 && (
                                                    <img
                                                        src={URL.createObjectURL(selectedImage4)}
                                                        alt="Preview Gambar 1"
                                                        className="h-40 w-40"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className={`w-full flex justify-end pr-[70px] mt-20 text-[21px]`}>
                                            <button
                                                type="button"
                                                className="h-[47px] w-[211px] text-[#1D8B2F] border border-[#1D8B2F] rounded-md"
                                                onClick={() => setOpenImage2(true)}
                                            >
                                                Tambah Gambar
                                            </button>
                                        </div>
                                    </div>
                                </div> : ''}
                                <div className='flex flex-row items-center gap-2'>
                                    <input
                                        type="checkbox"
                                        className="h-5 w-5"
                                        checked={isChecked}
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                    />

                                    <p>
                                        Sembunyikan Produk
                                    </p>
                                </div>
                            </div>

                            <div className='w-full flex xxl:justify-end xl:justify-end lg:justify-end md:justify-end items-center xxl:flex-row xl:flex-row lg:flex-row md:flex-col xs:flex-col s:flex-col gap-[30px] xxl:pr-[70px] xl:pr-[70px] lg:pr-[70px] md:pr-10 mt-10 text-[21px]'>
                                <Link to={'/admin/list-pengguna'}>
                                    <button type='button' className='h-[47px] w-[211px] border border-[#0089FF] rounded-md text-[#2D9CDB]'>Kembali</button>
                                </Link>
                                <button type='submit' className='h-[47px] w-[211px] border border-[#0089FF] bg-[#2D9CDB] rounded-md text-[#FFFFFF]'>Simpan</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
