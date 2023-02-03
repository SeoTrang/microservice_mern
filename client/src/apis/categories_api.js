import axios from 'axios'

const categories_api = {

    //get all categories
    get_all_categories:async()=>{
        let data;
        await axios.get('http://localhost:7000/admin/get-categories')
        .then(function(response){
    
            data = response.data
        })
        .catch(function(error){
            console.log(error);
        })

        if(data){
            return data;
        }
        return 0;

    }
}

export default categories_api;