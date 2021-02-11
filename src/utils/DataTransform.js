
export default class DataTransform {

    transformItem = (item) => {
        return {
            id: item.id,
            name: item.alt_description,
            author: item?.user.name,
            urls: item.urls
        }
    }
    
    transformDataArray = (dataArray) => {
        return dataArray.map(this.transformItem)
    }    

}
