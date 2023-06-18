export default function formatRupiah(number) {
    return `Rp. ${Math.floor(number).toLocaleString('id-ID')}`;
}