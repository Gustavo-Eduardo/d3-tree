import { v4 } from "uuid"

const root = {
    name: "Root",
    attributes:{
        link: false,
        id: v4()
    },
    children: [],
}


export default root