import { readdirSync } from "fs"
import { join } from "path"



export const discoverPages=(location:string)=>{
    const pagesPath = join(process.cwd(),`app/${location}`)
    
    try{
        const pages = readdirSync(pagesPath,{withFileTypes:true})
        .filter(Dirent => Dirent.isDirectory())
        .map(Dirent => ({
            title:Dirent.name.charAt(0).toUpperCase() + Dirent.name.slice(1),
            href:`/${location}/${Dirent.name}`,
        }))
        return pages
    } catch (error){
        console.error("Error reading pages:", error)
}}