import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'холодильники'},
            {id: 2, name: 'ноутбуки'},
            {id: 3, name: 'смартфоны'}
        ]
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Mui"}
        ]
        this.devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.google.com/search?q=iphones&sxsrf=AOaemvK8MU32k16kJArAVevSJO_Q1FE3Xw:1634050610821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDms_xkMXzAhX0IMUKHUoIDuoQ_AUoAXoECAEQAw&biw=816&bih=708&dpr=1.25#imgrc=72Po9AU3NiA1gM"},
            {id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.google.com/search?q=iphones&sxsrf=AOaemvK8MU32k16kJArAVevSJO_Q1FE3Xw:1634050610821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDms_xkMXzAhX0IMUKHUoIDuoQ_AUoAXoECAEQAw&biw=816&bih=708&dpr=1.25#imgrc=72Po9AU3NiA1gM"},
            {id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.google.com/search?q=iphones&sxsrf=AOaemvK8MU32k16kJArAVevSJO_Q1FE3Xw:1634050610821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDms_xkMXzAhX0IMUKHUoIDuoQ_AUoAXoECAEQAw&biw=816&bih=708&dpr=1.25#imgrc=72Po9AU3NiA1gM"},
            {id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.google.com/search?q=iphones&sxsrf=AOaemvK8MU32k16kJArAVevSJO_Q1FE3Xw:1634050610821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDms_xkMXzAhX0IMUKHUoIDuoQ_AUoAXoECAEQAw&biw=816&bih=708&dpr=1.25#imgrc=72Po9AU3NiA1gM"},
        ]
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

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
