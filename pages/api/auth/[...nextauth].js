import NextAuth from "next-auth";
import Providers from "next-auth/providers";



   const providers= [
        Providers.Credentials({
            id: "admin-login", 
            name : "Credentials",
            credentials:{
                username:{label : "Username", type : "text", placeholder: "Admin"},
                password:{label : "Password", type : "Password"}
            },
            async authorize(credentials){
                try{
                    const config = {
                        method : 'POST',
                        headers: {
                            "Accept" : "application/json",
                            'Content-type' : "application/json"
                        }
                    }
                    const baseUrl = "https://umisexample.vercel.app";
                    const res = await fetch(baseUrl + '/api/login', {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: {
                          'Content-Type': 'application/json',
                        },
                    })

                    const user = await res.json();
                    
            
                    
                    if(user){
                        return user
                    }

                }catch(error){
                    console.log(error)
                }
            }

        }),

        Providers.Credentials({
          id: "student-login", 
          name : "Credentials",
          credentials:{
              username:{label : "Username", type : "text", placeholder: "Student"},
              password:{label : "Password", type : "Password"}
          },
          async authorize(credentials){
              try{
                  const config = {
                      method : 'POST',
                      headers: {
                          "Accept" : "application/json",
                          'Content-type' : "application/json"
                      }
                  }
                  const baseUrl = "https://umisexample.vercel.app";
                  const res = await fetch(baseUrl + '/api/login/student', {
                      method: 'POST',
                      body: JSON.stringify(credentials),
                      headers: {
                        'Content-Type': 'application/json',
                      },
                  })

                  const user = await res.json();
                  
          
                  
                  if(user){
                      return user
                  }

              }catch(error){
                  console.log(error)
              }
          }

      }),

          Providers.Credentials({
            id: "teacher-login", 
            name : "Credentials",
            credentials:{
                username:{label : "Username", type : "text", placeholder: "Teachers"},
                password:{label : "Password", type : "Password"}
            },
            async authorize(credentials){
                try{
                    const config = {
                        method : 'POST',
                        headers: {
                            "Accept" : "application/json",
                            'Content-type' : "application/json"
                        }
                    }
                    const baseUrl = "https://umisexample.vercel.app";
                    const res = await fetch(baseUrl + '/api/login/teacher', {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: {
                          'Content-Type': 'application/json',
                        },
                    })

                    const user = await res.json();
                    
            
                    
                    if(user){
                        return user
                    }

                }catch(error){
                    console.log(error)
                }
            }

        }),
       
       
    ]

    const callbacks =  {
        async signIn(user) {
          return user._id;
        },
        async session(session, token) {
          session.user = token.user;
          return session;
        },
        async jwt(token, user) {
          if (user) token.user = user;
          return token;
        },
    }



  const options = {
    providers,
    callbacks,
   
  }


 

export default (req, res) => NextAuth(req, res, options);