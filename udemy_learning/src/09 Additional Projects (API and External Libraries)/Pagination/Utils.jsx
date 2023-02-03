const  paginate = (follower) =>{
    const itemperPage = 12;
    const pages = Math.ceil(follower.length/itemperPage);

    const newFollwers = Array.from({length:pages},(_,index)=>{
        const start = index * itemperPage;
        return follower.slice(start,start + itemperPage);
    });
    return newFollwers;
}
export default paginate