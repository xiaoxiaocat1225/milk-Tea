//从localstorage中读取数据
function getData(){
    //如果本地localstorage不存在数据
    if(!localStorage.getItem('geojson')){
        localStorage.setItem('geojson','[]')
    }
    return JSON.parse(localStorage.getItem('geojson'))
}

//将数据保存到localstorage
function saveData(data){
    localStorage.setItem('geojson',JSON.stringify(data))
}

//封装这两个函数
