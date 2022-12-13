export default (rutaNav)=>{

    if(rutaNav.length <= 3){
        return (rutaNav==="/")? rutaNav : "/:id"
    }
    return `/${rutaNav}`
}
