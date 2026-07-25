import axios from 'axios';

const hostname = 'sivasgurun.com';

const runRevalidate = async () => {
  try {
    const response = await axios.get(`https://${hostname}/ApiFetchs/Revalidate-datas`, { headers: { "Cache-Control": "no-cache" } });
    console.log('Revalidate response:', response.data);
  } catch (error) {
    console.error('revalidate error:', error);
  }
};

runRevalidate();
