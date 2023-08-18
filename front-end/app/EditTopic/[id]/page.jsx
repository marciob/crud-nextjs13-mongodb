"use client";

import EditTopicForm from "@/components/EditTopicForm";

const getTopicByID = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  } catch (error) {
    console.log("error getting topic by id ", error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;

  const topic = await getTopicByID(id);

  const { title, description } = topic;

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
}
