export  async function loginApi(loginInfo){
    try{
        const response=await fetch("http://localhost:3000/user/login",{
            method:'POST',
            body:JSON.stringify(loginInfo),
            headers:new Headers({
                'Access-Control-Allow-Origin':'*',
                'Content-Type':'application/json'
            })
        });
        
        return await response.json();
    }catch(e){
        throw e;
    }
}

export async function getProductListApi(){
    try{
        const response=await fetch("http://localhost:3000/product/getProductList");
        return await response.json();
    }catch(e){
        throw e;
    }
}