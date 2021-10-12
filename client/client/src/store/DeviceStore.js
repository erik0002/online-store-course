import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'холодильники'},
            {id: 2, name: 'ноутбуки'},
            {id: 3, name: 'смартфоны'},
            {id: 4, name: 'мониторы'},
            {id: 5, name: 'планшеты'},
            {id: 6, name: 'пылесосы'},
            {id: 7, name: 'стиральные машины'},
            {id: 8, name: 'телевизоры'}
        ]
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Mui"},
            {id: 4, name: "Asus"},
            {id: 5, name: "Lenovo"},
            {id: 6, name: "Dell"},
            {id: 7, name: "Hewlett-packard"},
            {id: 8, name: "MSI"},
            {id: 9, name: "ACER"},
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.google.com/search?q=iphones&sxsrf=AOaemvK8MU32k16kJArAVevSJO_Q1FE3Xw:1634050610821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDms_xkMXzAhX0IMUKHUoIDuoQ_AUoAXoECAEQAw&biw=816&bih=708&dpr=1.25#imgrc=72Po9AU3NiA1gM"},
            {id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.google.com/search?q=iphones&sxsrf=AOaemvK8MU32k16kJArAVevSJO_Q1FE3Xw:1634050610821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDms_xkMXzAhX0IMUKHUoIDuoQ_AUoAXoECAEQAw&biw=816&bih=708&dpr=1.25#imgrc=72Po9AU3NiA1gM"},
            {id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.google.com/search?q=iphones&sxsrf=AOaemvK8MU32k16kJArAVevSJO_Q1FE3Xw:1634050610821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDms_xkMXzAhX0IMUKHUoIDuoQ_AUoAXoECAEQAw&biw=816&bih=708&dpr=1.25#imgrc=72Po9AU3NiA1gM"},
            {id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.google.com/search?q=iphones&sxsrf=AOaemvK8MU32k16kJArAVevSJO_Q1FE3Xw:1634050610821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDms_xkMXzAhX0IMUKHUoIDuoQ_AUoAXoECAEQAw&biw=816&bih=708&dpr=1.25#imgrc=72Po9AU3NiA1gM"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}
