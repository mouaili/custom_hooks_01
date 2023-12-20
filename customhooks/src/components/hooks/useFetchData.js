import { useState, useEffect } from 'react';

//Custom Hook

const useFetchData = fetchUrlData => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  //1-Fetch Data
  useEffect(() => {
    //'https://jsonplaceholder.typicode.com/users'

    fetch(fetchUrlData)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsloading(false);
      })
      .catch(error => {
        console.log(
          "Une erreur s'est produite lors du rechargement des données.."
        );
      });
  }, [fetchUrlData]);

  //2-Return
  return { data, isLoading };
};

export default useFetchData;
