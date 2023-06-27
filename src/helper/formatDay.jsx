export const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Daftar nama bulan
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    const year = date.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
};

export const formatTime = (timeString) => {
    if (timeString) {
        const [hour, minute] = timeString.split(':');
        const formattedTime = `${hour}:${minute}`;

        return formattedTime;
    }

    return '';
};