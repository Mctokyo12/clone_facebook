import { useState } from "react";

const [showPostPopup, setshowPostPopup] =  useState(false)
const [editPost , setEditPost] = useState(false);
const [showComment , setShowComment] = useState(false)
const [currentPost ,setcurrentPost] = useState("");
const [postDelete , setPostDelete] = useState(false);
