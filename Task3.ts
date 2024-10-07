const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

type ReturnData = {
    id: string,
    email: string
}
const getData = async (url: string): Promise<ReturnData[]> => {
    const responce = await fetch(url);
    if(!responce.ok){
        throw new Error('Error!');
    }
    const data: ReturnData[] = await responce.json();
    return data;
}

getData(COMMENTS_URL)
  .then(data => {
    data.forEach(r => {
        console.log(`ID: ${r.id}, Email: ${r.email}`)
    });
  })
  .catch(error => console.log(error));

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */