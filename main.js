
const getData = async (data_id) => {
    let response = await fetch(`https://api.artic.edu/api/v1/artworks/${data_id}`)
    const data= await response.json()

    console.log(data.data.title)
    title = document.getElementById('title')
    title.innerHTML=`Title: ${data.data.title}`

    console.log(data.data.artist_title)
    art_title = document.getElementById('artist_title')
    art_title.innerHTML = `Artist: ${data.data.artist_title}`

    console.log(data.data.department_title)
    dep_title = document.getElementById('department_title')
    dep_title.innerHTML = `Department: ${data.data.department_title}`
    return response.data

}
//get all the ids
