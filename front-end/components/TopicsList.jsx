import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    // the no-cache option is important, otherwise the browser will cache and not update with the latest data
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(res.status);
    }

    return await res.json();
  } catch (error) {
    console.log("error getting topics ", error);
  }
};

export default async function TopicsList() {
  const topics = await getTopics();

  console.log("hello");

  return (
    <div>
      {topics.map((t) => (
        <div className="border border-slate-300 my-3 flex justify-between gap-5 items-start p-4">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/EditTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
