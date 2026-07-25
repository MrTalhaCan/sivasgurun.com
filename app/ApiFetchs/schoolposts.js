import Slider from './schoolpostsclient';
import { Pool } from "./pool";
async function getSchlPosts() {
  const res = await fetch(`https://sivasgurun.com/ApiFetchs/schoolPosts`, {
      next: {
        revalidate: 86400,        // günde bir güncellensin
        tags: ['schoolposts']     // opsiyonel: manuel güncelleme için tag
      },
    })
  const schooldata = await res.json()
  return schooldata
}
export default async function FetchSchlPosts() {
  const data = await getSchlPosts();

  let schoolposts = [];

  if (data == undefined) {
    return (
      <h1 className='text-center dark:text-textDark text-textLight'>
        Gönderi bulunamadı
      </h1>
    );
  } else {
    schoolposts = data.result;
	console.log("schoolposts", schoolposts)
  }

  return (
    <Slider schoolposts={schoolposts} />
  );
}
export const revalidate = 86400;
