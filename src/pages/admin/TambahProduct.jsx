
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addProduct } from '../../services/product';
import { useDispatch } from 'react-redux';

export default function TambahProduct() {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [pelapak, setPelapak] = useState('')
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [selectedImage1, setSelectedImage1] = useState(null);
    // const [selectedImage2, setSelectedImage2] = useState(null);
    // const [selectedImage3, setSelectedImage3] = useState(null);
    // const [selectedImage4, setSelectedImage4] = useState(null);

    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileUpload = (event) => {
        const files = event.target.files;
        const updatedSelectedImages = [...selectedImages];

        // Batasi jumlah gambar maksimal menjadi 5
        const remainingSlots = 5 - selectedImages.length;
        const newImages = Array.from(files).slice(0, remainingSlots);
        updatedSelectedImages.push(...newImages);

        setSelectedImages(updatedSelectedImages);
    };
    const handleImageRemove = (index) => {
        const updatedSelectedImages = [...selectedImages];
        updatedSelectedImages.splice(index, 1);
        setSelectedImages(updatedSelectedImages);
    };
    const handleAddImage = () => {
        setSelectedImages([...selectedImages, null]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Buat objek FormData untuk mengirim data produk dan gambar
        const product = new FormData();
        product.append('name', productName);
        product.append('harga', price);
        product.append('stock', stock);
        product.append('deskripsi', description);
        product.append('pelapakId', pelapak);

        // Tambahkan semua gambar ke FormData
        selectedImages.forEach((image) => {
            product.append('image', image);
        });

        // Kirim aksi addProduct menggunakan Redux Toolkit
        dispatch(addProduct(product))
            .unwrap()
            .then(() => {
                // Reset form setelah pengiriman berhasil
                setProductName('');
                setPrice('');
                setStock('');
                setDescription('');
                setPelapak('');
                setSelectedImages([]);
            })
            .catch(() => {
                // console.log('Error:', error.message); // Tampilkan pesan error
            });
    };
    // console.log("name", productName);
    // console.log("name", selectedImage);
    return (
        <>
            <div className='px-[98px] '>
                <p className='text-[32px] font-bold mt-12'>Tambah Produk</p>
                <div className='mt-8'>
                    <form action="" onSubmit={handleSubmit} method="post">
                        <div className='h-auto w-[892px] pb-5 border border-[#E9E9E9]'>
                            <div className='h-[84.55px] w-full bg-[#E9E9E9] text-[24px] font-normal flex items-center pl-[70px] text-[#000000B2]'>
                                <p>Data Produk</p>
                            </div>
                            <div className='pl-[70px] mt-6 flex flex-col gap-9 text-[24px]'>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Nama</p>
                                    <input
                                        type="text"
                                        name="productName"
                                        id="productName"
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        value={productName}
                                        onChange={(event) => setProductName(event.target.value)}
                                        required
                                    />

                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Harga</p>
                                    <input
                                        type="number"
                                        name="harga"
                                        id="harga"
                                        value={price}
                                        onChange={(event) => setPrice(event.target.value)}
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
                                        onChange={(event) => setStock(event.target.value)}
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
                                        onChange={(event) => setDescription(event.target.value)}
                                        className='h-[127px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md p-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Pilih Pelapak</p>
                                    <input
                                        type="text"
                                        name="pelapak"
                                        id="pelapak"
                                        value={pelapak}
                                        onChange={(event) => setPelapak(event.target.value)}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />

                                </div>
                                <div>
                                    <div className='flex flex-row'>
                                        {/* Input Gambar Pertama */}
                                        <div className="flex flex-col gap-3 pr-[70px]">
                                            <p>Upload Gambar</p>
                                            <label htmlFor="uploadInput" className="cursor-pointer h-[47px] w-[211px]">
                                                <div className="h-[47px] w-[211px] outline-none border border-[#000000] bg-[#C2C2C2] rounded-md px-2 text-[20px] flex items-center justify-center">
                                                    <p>Pilih File</p>
                                                    <input
                                                        type="file"
                                                        id="uploadInput"
                                                        className="hidden"
                                                        onChange={(event) => handleFileUpload(event, 0)}
                                                    />
                                                </div>
                                            </label>
                                            {selectedImages[0] && (
                                                <button
                                                    type="button"
                                                    className="text-[#DD3434] text-[18px] ml-4"
                                                    onClick={() => handleImageRemove(0)}
                                                >
                                                    Hapus
                                                </button>
                                            )}
                                        </div>
                                        <div className="flex flex-row">
                                            {selectedImages.map((image, index) => (
                                                <div key={index}>
                                                    {image && (
                                                        <div>
                                                            <p>Preview Gambar {index + 1}:</p>
                                                            <img
                                                                src={URL.createObjectURL(image)}
                                                                alt={`Preview ${index + 1}`}
                                                                className="h-40 w-40"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Input Gambar-gambar Berikutnya */}
                                    {/* <div className="flex flex-row">
                                        {selectedImages.slice(1).map((image, index) => (
                                            <div key={index} className="flex flex-col gap-3 pr-[70px]">
                                                <p>Upload Gambar</p>
                                                <label htmlFor={`uploadInput${index + 1}`} className="cursor-pointer h-[47px] w-[211px]">
                                                    <div className="h-[47px] w-[211px] outline-none border border-[#000000] bg-[#C2C2C2] rounded-md px-2 text-[20px] flex items-center justify-center">
                                                        <p>Pilih File</p>
                                                        <input
                                                            type="file"
                                                            id={`uploadInput${index + 1}`}
                                                            className="hidden"
                                                            onChange={(event) => handleFileUpload(event, index + 1)}
                                                        />
                                                    </div>
                                                    {selectedImages[index + 1] && (
                                                        <button
                                                            type="button"
                                                            className="text-[#DD3434] text-[18px] ml-4"
                                                            onClick={() => handleImageRemove(index + 1)}
                                                        >
                                                            Hapus
                                                        </button>
                                                    )}
                                                </label>
                                            </div>
                                        ))}
                                    </div> */}

                                    {/* Tombol Tambah Gambar */}
                                    <div className="w-full flex justify-end pr-[70px] text-[21px]">
                                        <button
                                            type="button"
                                            className="h-[47px] w-[211px] text-[#1D8B2F] border border-[#1D8B2F] rounded-md"
                                            onClick={handleAddImage}
                                        >
                                            Tambah Gambar
                                        </button>
                                    </div>

                                    {/* Preview Gambar-gambar */}

                                    <div className='w-full flex justify-end gap-[30px] pr-[70px] mt-10 text-[21px]'>
                                        <Link to={'/admin/products'}>
                                            <button type='button' className='h-[47px] w-[211px] border border-[#0089FF] rounded-md text-[#2D9CDB]'>Kembali</button>
                                        </Link>
                                        <button type='submit' className='h-[47px] w-[211px] border border-[#0089FF] bg-[#2D9CDB] rounded-md text-[#FFFFFF]'>Simpan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
