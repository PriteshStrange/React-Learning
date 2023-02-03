const paginate = (followers) =>{
    const itemPerPage = 12;
    const pages = Math.ceil(followers.length/itemPerPage);
    const newData = Array.from({length:pages},(_,index) =>{
        const start = index * itemPerPage;
        return followers.slice(start,start + itemPerPage)
    });
    return newData
}

export default paginate