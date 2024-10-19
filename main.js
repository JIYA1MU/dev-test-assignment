const btn = document.getElementById('btn')
btn.addEventListener('click', async () => {
    try{
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json()
        const result = data.users.filter(user => user.age > 30)
        console.log(result)
    }catch(error){
        console.log("Error fetching users:",error)
    }
})