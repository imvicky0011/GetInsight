import axios from "axios"

export const getMyTodos = async () => {
    console.log("here")
    try {
        const response = await axios.get("/profile/myTodo")
        console.log("I am from the profile/myTodo route : " + response)
        return response
    }
    catch(err) {
        return err
    }
}