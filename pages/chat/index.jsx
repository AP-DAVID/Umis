import Feed from "../../components/chatComponent/Feed"
import Header from "../../components/chatComponent/Header"
import Sidebar from "../../components/chatComponent/Sidebar"
import Nav from "../../components/Nav"
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react"
import { getSession } from "next-auth/client"
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { useRouter } from 'next/router';
import Loader from "../../components/Loader"
import { getData } from '../api/conversations/[id]'


function Index({session, joke}) {

    const[data, setData] = useState([]);
    const [conversations, setConversations] = useState(joke);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const socket = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const router = useRouter();
    const [picture, setPicture] = useState("");
    const [open, setOpen] = useState(false)
    const[section, setSection] = useState("");
    const[response, setResponse] = useState("");

    const [form, setForm] = useState(
      {
      senderId: "",
      receiverId : '',
    }
   )




  useEffect(() => {
    socket.current = io("https://umis-app.herokuapp.com");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
      
    });
    
  }, []);

  useEffect(() => {

    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
    console.log("hey")
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", session.user?._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
         session.user?.followings?.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [session.user]);







    


    useEffect(async() => {

        if(session){
  
          try{
  
            const response = await axios.get(`/api/${session?.user?.section}/${session?.user?._id}`);
  
            setData(response.data)
      
          }catch(error){
            console.log(error)
          }
  
        }else {
          return
        }
      }, [session])




    //enable the conversation
      const onChat = async (value) =>{

        console.log(value)

        setForm(form.senderId = session?.user?._id)
        setForm(form.receiverId = value);
    
        const config = {
          headers: {
              "Accept" : "application/json",
              'Content-type' : "application/json"
          }
        }
    
          try{
            const response = await axios.post('/api/conversations', JSON.stringify(form) , config)
            
            if(response){
              await  router.replace(router.asPath);

            }
            
            setOpen(false)
            
            
          }catch(error){
              console.log(error)
              setOpen(false)
          }
          
      }





      
      const onSearch = async(value) =>{
        // setLoad(true);
        let res = value;
        
      
        if(value != '' && res != session?.user?.email){

          setOpen(true)
          
          try{
           
            const response = await axios.get(`/api/search/${section}/${res}`)
          
            

            if(response){
               onChat(response.data._id);
            }
            else{
              console.log("unable to create Chat")
              setOpen(false)
            }
          
            
            
            
          }catch(error){
              console.log(error)
              setOpen(false)
          }
        }
        else{
          console.log("what are you even doing")
          // setLoad(false)
        }
      } 




      useEffect(() => {
        const getMessages = async () => {
          try {
            const res = await axios.get("/api/messages/" + currentChat?._id);
            setMessages(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getMessages();
      }, [currentChat]);






      const handleSubmit = async(e) =>{
        e.preventDefault();



         
      

          const message = {
            sender: session.user._id,
            picture : picture,
            text: newMessage,
            conversationId: currentChat._id,
            profile : session.user.profile,
          };
        

        const receiverId = currentChat.members.find(
          (member) => member !== session.user._id
        );

        socket.current.emit("sendMessage", {
          senderId: session.user?._id,
          receiverId,
          text: newMessage,
        });
        
        

        try {
          const res = await axios.post("/api/messages", message);
          setMessages([...messages, res.data]);
          
          refreshData();
          setNewMessage("");
          

        } catch (err) {
          console.log(err);
        }

    };

    const refreshData = () => {
      
    }








    return (

        <>

        {
            session ? (

                <div style={{height : "100vh"}} className="bg-gray-900  overflow-x-hidden overflow-y-scroll">

                    <Loader open={open} setOpen={setOpen} />

                    <div className="mb-6 mt-0"><Nav /></div>
                    <div className="relative"><Header data={data} login={session} setSection={setSection} onSearch={onSearch}/>
                    </div>
                    <main className="flex fixed h-full w-full">
                        <Sidebar setCurrentChat={setCurrentChat} conversations={conversations} logins={session.user}/>

                        <div className="flex h-full  w-full px-2 sm:px-7">
                             
                           {
                             currentChat ? (

                                <Feed setPicture = {setPicture} user = {session.user} messages={messages} handleSubmit={handleSubmit}  setNewMessage = {setNewMessage} newMessage={newMessage}/>

                             ): (
                              <span className="mt-10" style={{position : "absolute", top: "10%", fontSize : "50px", color : "rgb(224, 220, 220)", cursor : "default"}}>
                                 Open a conversation to start a chat.
                              </span>
                             )
                           }
                           

                        </div>
                    </main>

                </div>

            ):
            (
                <div>
                    <h1> No session, you cannot see it </h1>
                </div>
            )
        }


        </>
        
    )
}



export default Index;

export async function getServerSideProps(ctx){

  const sess = await getSession(ctx)
  const res = await getData(sess.user._id)
  const joke = await JSON.parse(JSON.stringify(res))
   
  return {
      props:{
        session: sess,
        joke,

      }
    }
  }
