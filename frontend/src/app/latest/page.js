"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { getTrends } from "@/util";
import Spinner from "@/components/Spinner";
import Trend from "@/components/Trend";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const trends = await getTrends();
        setTrends(trends);
      } catch (error) {
        alert("Something went wrong with loading the trends!");
        console.log(`Error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <main className={styles.container}>
      {isLoading
      && <Spinner />}
      <div className={styles.trendsGridContainer}>
        {trends.map(trend => (
          <Trend {...trend}/>
        ))}
      </div>
    </main>
  );
}
