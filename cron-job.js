import axios from 'axios';

const hostname = 'sivasgurun.com';

const runScheduler = async () => {
  try {
    const response = await axios.get(`https://${hostname}/ApiFetchs/CronJobs`, { headers: { "Cache-Control": "no-cache" } });
    console.log('Cron job response:', response.data);
  } catch (error) {
    console.error('Cron job error:', error);
  }
};

runScheduler();
