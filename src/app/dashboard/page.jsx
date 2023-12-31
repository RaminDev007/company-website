'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState('Data Fetching failed');
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  //     if (!res.ok) {
  //       throw new Error(`Error fetching Data ${res}`);
  //     }

  //     const data = await res.json();
  //     setIsLoading(false);
  //     setData(data);
  //     setErr(false);
  //   };
  //   getData();
  // }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  console.log(data);

  return (
    <div className={styles.container}>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body} </p>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
