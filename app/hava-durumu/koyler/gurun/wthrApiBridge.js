async function getWthrData(wthrid) {
  try {
    const res = await fetch(`https://sivasgurun.com/ApiFetchs/currentWeather?wthrid=${Number(wthrid)}`, {
      next: {
        revalidate: 43200,         // 12 saatte bir güncellensin
        tags: ['weather']     // opsiyonel: manuel güncelleme için tag
      },
    });

    // fetch hatası değilse ama response tipi JSON değilse kontrol et
    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
	console.log("data :::::", data)
    return data;
  } catch (error) {
    console.error("getWthrData hatası:", error);
    return null;
  }
}

export async function weatherData(wthrid) {
  const data = await getWthrData(wthrid);
  return data?.result ?? []; // null veya undefined ise boş dizi döner
}
