import React from "react";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  const workerPaths = data.map((worker) => {
    return {
      params: { id: worker.id.toString() },
    };
  });

  return {
    paths: workerPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { worker: data },
  };
};

const WorkerDetails = ({ worker }) => {
  return (
    <div>
      <h1>{`${worker.name}'s details`}</h1>
      <p>{worker.email}</p>
      <p>{worker.website}</p>
      <p>{worker.address.city}</p>
    </div>
  );
};

export default WorkerDetails;
