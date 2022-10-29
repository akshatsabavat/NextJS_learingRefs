import Link from "next/link";
import styles from "../../styles/Workers.module.css";

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  return {
    props: { workers: data },
  };
};

const Workers = ({ workers }) => {
  console.log(workers);
  return (
    <div>
      <h1>All workers listed below</h1>
      <div className="Workers-container">
        {workers.map((worker) => {
          return (
            <Link href={`/Workers/${worker.id}`} key={worker.id}>
              <div className={styles.single}>
                <h3>{worker.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Workers;
