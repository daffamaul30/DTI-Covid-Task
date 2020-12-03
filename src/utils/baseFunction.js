const convertISO = (tanggal) => {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  const date = new Date(tanggal);
  let day = date.getDay() - 1;
  const year = date.getFullYear();
  let month = months[date.getMonth()];
  let dt = date.getDate();

  if (tanggal.includes('T17')) {
    dt = dt - 1;
    day = day - 1;
  }
  if (day < 0) {
    day = 6;
  }
  if (dt < 10) {
    dt = '0' + dt;
  }

  return days[day] + ', ' + dt + ' ' + month + ' ' + year;
};

export default { convertISO };
