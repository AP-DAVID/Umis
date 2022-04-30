import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";

import { useState } from "react";
import { format } from "timeago.js";

import DeleteModal from "./deleteModal";
import Moment from "react-moment";
import { LightBulbIcon, UserCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

function BlogCard({
  title,
  id,
  profile,
  body,
  userId,
  date,
  text,
  position,
  username,
  lastname,
  image,
}) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const [session, loading] = useSession();

  const rand = Math.floor(Math.random() * 4);

  return (
    <div>
      <section className="py-2 cursor-pointer sm:py-2 text-black">
        <div>
          <div className=" flex justify-center">
            <div className="w-full lg:w-2/3   py-5">
              <Link href={`/announce/${id}`}>
                <div className="bg-gray-100 shadow-2xl hover:shadow-xl rounded-xl rounded-t-xl w-5/6 sm:w-full">
                  <div className="">
                    <Image
                      src={image}
                      alt=""
                      width={500}
                      height={300}
                      loading="eager"
                      className="h-36 w-full rounded-xl object-cover hover:opacity-25"
                    />
                  </div>

                  <div>
                    <div className="px-2 py-1">
                      <h1 className="font-bold font-serif break-words text-lg line-clamp-2">
                        {title}
                      </h1>

                      <p className="py-1 break-words font-serif line-clamp-3">
                        {body}
                      </p>

                      <p className="py-1 font-serif font-medium break-words">
                        {lastname} {username} <br />
                        {position}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="w-full md:w-1/3 font-medium text-sm">
                          {format(date)}
                        </div>
                        <div className="w-full">
                          <div className="text-sm flex space-x-2 justify-end align-middle font-medium">
                            {profile ? (
                              <img
                                src={profile}
                                className="h-9 w-9 object-cover rounded-full flex"
                              />
                            ) : (
                              <UserCircleIcon className="h-9 w-9 text-blue" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex justify-end ">
                      <h1
                        className={
                          (username === "Akintola"
                            ? "bg-blue-500 "
                            : "bg-green-500 ") +
                          "text-white cursor-pointer px-6 text-sm rounded-br-xl rounded-tl-2xl"
                        }
                      >
                        Read more
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              {session?.user?._id === userId && (
                <div className="">
                  <div className="flex text-sm font-medium">
                    <h2
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/announce/update/${id}`);
                      }}
                      className="text-white px-1 cursor-pointer"
                    >
                      Edit{" "}
                    </h2>
                    <h2
                      onClick={(e) => {
                        setShowModal(true);
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="text-white px-1 cursor-pointer "
                    >
                      delete
                    </h2>
                  </div>
                  {showModal && (
                    <DeleteModal id={id} setShowModal={setShowModal} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogCard;
