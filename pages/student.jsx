import Feed from "../components/studentDashboard/Feed";
import Header from "../components/studentDashboard/Header";
import Sidebar from "../components/studentDashboard/Sidebar";
import Widgets from "../components/studentDashboard/Widgets";
import { useEffect, useState } from "react";
import Subjects from "../components/studentDashboard/Subjects/Subjects";
import Groups from "../components/studentDashboard/Groups/Groups";
import Chat from "../components/studentDashboard/Chat/Chat";
import { SubjectOffering } from "../utils/subjectdummydata";
import Announcement from "../components/studentDashboard/Announcement/Announcement";
import { getSession } from "next-auth/client";
import Settings from "../components/studentDashboard/settingss/Settings";
import Result from "../components/studentDashboard/Result/Result";
import Profile from "../components/studentDashboard/Profile/Profile";
import Studentlogin from "../components/loginstudents/login";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { getData } from "./api/student/[id]";

function dashboard({ session, data }) {
  const [reveal, setReveal] = useState(1);
  const [login, setLogin] = useState(session?.user);

  return (
    <div>
      {session && session.user.section === "student" ? (
        <div className="h-screen overflow-y-hidden overflow-x-hidden">
          {/* Header */}
          <Header username={login.username} />
          <main className="flex">
            {/* Sidebar for navigation */}
            <Sidebar reveal={reveal} setReveal={setReveal} />
            {/* Manual router */}
            <div className="flex w-screen justify-between">
              {reveal === 1 && <Feed data={data} section={session.user} />}

              {reveal === 2 && <Subjects data={data} section={session.user} />}

              {reveal === 3 && <Groups data={data} />}
              {reveal === 8 && <Announcement />}

              {reveal === 4 && <Chat />}

              {reveal === 5 && <Settings />}

              {reveal === 6 && <Result data={data} />}

              {reveal === 7 && <Profile data={data} />}

              <Widgets />
            </div>
          </main>
        </div>
      ) : (
        <Studentlogin />
      )}
    </div>
  );
}

export default dashboard;
// get session data
export async function getServerSideProps(ctx) {
  const sess = await getSession(ctx);

  const res = await getData(sess?.user?._id);
  const joke = await JSON.parse(JSON.stringify(res));

  return {
    props: {
      session: sess,
      data: joke,
    },
  };
}
