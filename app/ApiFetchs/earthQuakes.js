export async function getDepremler(ilce) {
  try {
    const res = await fetch(`https://sivasgurun.com/ApiFetchs/deprem?ilce=${ilce}`, {
      next: { 
		revalidate: 3600, // 1 saat
		tags: ['earthQuakes']
	  }, 
    });
    const data = await res.json();
    return data?.result || [];
  } catch (err) {
    console.error("Deprem verisi alınamadı:", err);
    return [];
  }
}
