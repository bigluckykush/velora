"use client"
import { db } from "@/config/firebase.configs";
import { Button, CircularProgress, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useState } from "react";
import * as yup from "yup";




const schema = yup.object().shape({
    title: yup.string().required("Title is required").min(10),
    body: yup.string().required("Body is required").min(30),
});

export default function CreatePost ({userId}) {
       const {data : session} = useSession()
       console.log(session)
       const userIdentifier = userId || (session?.user?.id)
       const [opsProgress,setOpsProgress] = useState(false)
      const { handleSubmit, handleChange, touched, values, errors } =useFormik({
        initialValues:{
            title: "",
            body: ""
        },
        onSubmit: async () => {
            setOpsProgress(true)
           await addDoc(collection(db,"posts"), {
            user: userIdentifier,
            title: values.title,
            body: values.body,
            timecreated: new Date().getTime(),
           }).then(() => {
            setOpsProgress(false)
              alert("You have successfully submitted your post")
           })
           .catch(e => {
            setOpsProgress(false)
            console.error(e);
            alert("You have encountered an unknown error")
           });
        },
        validationSchema:schema,
      })

    return(
        <main className="min-h-srceen flex justify-center py-4 md:py-6 px-6 lg:py-x-16 bg-gray-50">
            <div className="w-full md:w-[380px] flex flex-col gap-4 shadow-2xl shadow-gray-300px bg-gray-50 rounded-md p-2 md:pb-6 ">
                <h1 className="text-center text-2xl text-blue-500">Create Your Post</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                     <div className="mb-2">
                        <TextField
                        id="title"
                        type="text"
                        label="Tittle"
                        placeholder="Title.."
                        variant="outlined"
                        value={values.title}
                        onChange={handleChange}
                        className="w-full"/>
                        {touched.title && errors.title ? <span className="text-red-600"> {errors.title}</span> : null }
                     </div>
                     <div className="mb-2">
                        <TextField
                        id="body"
                        type="text"
                        label="body"
                        placeholder="body..."
                        multiline
                        rows={7}
                        value={values.body}
                        onChange={handleChange}
                        className="w-full"/>
                         {touched.title && errors.body ? <span className="text-red-600"> {errors.body}</span> : null }
                     </div>
                     <div className="flex gap-3">
                    <Button type="submit" variant="contained" className="bg-blue-300">submit Post</Button>
                    <CircularProgress style={{display: !opsProgress ? "none" : "flex"}}/>
                    </div>
                </form>
            </div>
        </main>
    )
}
