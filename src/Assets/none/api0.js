import service from '../service/request'
import userService from '../service/userRequest'
let homeList = '/B2BCategory/Get'
let searchKeyword = '/B2BKeyWords/Get'
let searchGetByCatelogID = '/B2BKeyWords/GetByCatelogID'
let postMeetSupplierUrl = '/B2BMeet'
let postMessageUrl = '/B2BMessage'
let getToMessageUrl = '/B2BMessage/GetToList'
let getFromMessageUrl = '/B2BMessage/GetFromList'
let getMessageUrl = '/B2BMessage/Get'
let getActivityUrl = '/B2BEvent/GetList'
let allProductsUrl = '/B2BProduct/GetBySupplyID'
let allOfferUrl = '/B2BOffer/GetBySupplyID'
let productsCategoriesUrl = '/B2BCategory/GetPBySupplyID'
let offerCategoriesUrl = '/B2BCategory/GetOBySupplyID'
let productB2BCategoryUrl = 'B2BCategory/GetPByUserID'
let offerB2BCategoryUrl = 'B2BCategory/GetOByUserID'
let abroadSelfUrl = '/WebProduct/GetMyList'
let copyCompanyUrl = 'B2BSupply/Copy'
let copyProductUrl = 'B2BProduct/Copy'
let copyOfferUrl = 'B2BOffer/Copy'
let userIndexTabelUrl2 = 'WebProduct/GetExhibitior'
let userIndexTabelUrl = '/WebProduct/Get'
let UploadUrl = '/Upload'
let WebUserUrl = '/WebUser/reg'
let putPassUrl = 'WebUser/put'
let loginUrl = '/WebUser/Login'
let logoutUrl = '/WebUser/Logout'
let postB2BProductUrl = '/B2BProduct'
let myListUrl = '/B2BProduct/GetMyList'
let deleteProductUrl = '/B2BProduct/Delete'
let postSupplyUrl = '/B2BSupply'
let getSupplyUrl = '/B2BSupply/GetMyList'
let DeleteSupplyUrl = '/B2BSupply/Delete'
let postOfferUrl = '/B2BOffer'
let getOfferUrl = '/B2BOffer/GetMyList'
let deleteOfferUrl = '/B2BOffer/Delete'
let B2BFromMeetUrl = '/B2BMeet/GetFromList'
let B2BToMeetUrl = '/B2BMeet/GetToList'
let B2BgetMeetUrl = '/B2BMeet/Get'
let authTokenUrl = '/WebUser/Get'
let orderExhiListUrl = 'WebOrderExhi/GetMyList'
let getSupplierUrl = 'B2BSupply/GetMyState'

let postWebOrderExhiUrl = 'WebOrderExhi'
let getWebOrderExhiUrl = 'WebOrderExhi/Get'
let reportListUrl = 'WebNews/Getlist'
let reportDetailsUrl = 'WebNews/Get'

let bannerUrl = 'b2bbanner'

let pressUrl = 'WebOrderPress/Post'


export function press(params) {
    return service({
        url: pressUrl,
        method: 'POST',
        data: params
    })
}

export function getBanner(params) {
    return service({
        url: bannerUrl,
        method: 'GET',
        params: params
    })
}

export function authToken(params) {
    return service({
        url: authTokenUrl,
        method: 'GET',
        params: params
    })
}

export function getSearchKeyword(params) {
    return service({
        url: searchKeyword,
        method: 'GET',
        params: params
    })
}
export function getsearchGetByCatelogID(params) {
    return service({
        url: searchGetByCatelogID,
        method: 'GET',
        params: params
    })
}
export function postMeetSupplier(params) {
    return service({
        url: postMeetSupplierUrl,
        method: 'POST',
        data: params
    })
}
export function putMeetSupplier(params) {
    return service({
        url: postMeetSupplierUrl,
        method: 'PUT',
        data: params
    })
}

export function postMessage(params) {
    return service({
        url: postMessageUrl,
        method: 'POST',
        data: params
    })
}
export function putMessage(params) {
    return service({
        url: postMessageUrl,
        method: 'PUT',
        data: params
    })
}
export function getToMessage(params) {
    return service({
        url: getToMessageUrl,
        method: 'GET',
        params: params
    })
}
export function getFromMessage(params) {
    return service({
        url: getFromMessageUrl,
        method: 'GET',
        params: params
    })
}
export function getMessage(params) {
    return service({
        url: getMessageUrl,
        method: 'GET',
        params: params
    })
}

export function getAllOffer(params) {
    return service({
        url: allOfferUrl,
        method: 'GET',
        params: params
    })
}
export function getAllProducts(params) {
    return service({
        url: allProductsUrl,
        method: 'GET',
        params: params
    })
}
export function getProductsCategories(params) {
    return service({
        url: productsCategoriesUrl,
        method: 'GET',
        params: params
    })
}
export function getOfferCategories(params) {
    return service({
        url: offerCategoriesUrl,
        method: 'GET',
        params: params
    })
}
export function getActivityList(params) {
    return service({
        url: getActivityUrl,
        method: 'GET',
        params: params
    })
}

export function postLogin(params) {
    return service({
        url: loginUrl,
        method: 'POST',
        data: params
    })
}

export function postLogout(params) {
    return service({
        url: logoutUrl,
        method: 'GET',
        data: params
    })
}

export function postReg(params) {
    return service({
        url: WebUserUrl,
        method: 'POST',
        data: params
    })
}
export function putReg(params) {
    return service({
        url: putPassUrl,
        method: 'PUT',
        data: params
    })
}

export function addImage(params) {
    return service({
        url: UploadUrl,
        method: 'POST',
        data: params
    })
}


export function getmyList(params) {
    return service({
        url: myListUrl,
        method: 'GET',
        params: params
    })
}

export function deleteProduct(params) {
    return service({
        url: deleteProductUrl,
        method: 'DELETE',
        params: params
    })
}
export function deleteCompany(params) {
    return service({
        url: DeleteSupplyUrl,
        method: 'DELETE',
        params: params
    })
}
export function deleteOffer(params) {
    return service({
        url: deleteOfferUrl,
        method: 'DELETE',
        params: params
    })
}


export function getSupplyList(params) {
    return service({
        url: getSupplyUrl,
        method: 'GET',
        params: params
    })
}


export function getOfferList(params) {
    return service({
        url: getOfferUrl,
        method: 'GET',
        params: params
    })
}
export function B2BFromMeet(params) {
    return service({
        url: B2BFromMeetUrl,
        method: 'GET',
        params: params
    })
}
export function B2BToMeet(params) {
    return service({
        url: B2BToMeetUrl,
        method: 'GET',
        params: params
    })
}

export function B2BgetMeet(params) {
    return service({
        url: B2BgetMeetUrl,
        method: 'GET',
        params: params
    })
}

export function getWebOrderExhi(params) {
    return service({
        url: getWebOrderExhiUrl,
        method: 'GET',
        params: params
    })
}

export function orderExhiList(params) {
    return service({
        url: orderExhiListUrl,
        method: 'GET',
        params: params
    })
}

export function getSupplier(params) {
    return service({
        url: getSupplierUrl,
        method: 'GET',
        params: params
    })
}

export function reportList(params) {
    return service({
        url: reportListUrl,
        method: 'GET',
        params: params
    })
}
export function reportDetails(params) {
    return service({
        url: reportDetailsUrl,
        method: 'GET',
        params: params
    })
}
// user



export function postWebOrderExhi(params) {
    return userService({
        url: postWebOrderExhiUrl,
        method: 'POST',
        data: params
    })
}
export function putWebOrderExhi(params) {
    return userService({
        url: postWebOrderExhiUrl,
        method: 'PUT',
        data: params
    })
}

export function getUserIndexTabel(params) {
    return userService({
        url: userIndexTabelUrl,
        method: 'GET',
        params: params
    })
}

export function getUserIndexTabel2(params) {
    return userService({
        url: userIndexTabelUrl2,
        method: 'GET',
        params: params
    })
}

export function abroadSelf(params) {
    return userService({
        url: abroadSelfUrl,
        method: 'GET',
        params: params
    })
}

export function getCategories(params) {
    return userService({
        url: homeList,
        method: 'GET',
        params: params
    })
}

export function productB2BCategory(params) {
    return userService({
        url: productB2BCategoryUrl,
        method: 'GET',
        params: params
    })
}
export function offerB2BCategory(params) {
    return userService({
        url: offerB2BCategoryUrl,
        method: 'GET',
        params: params
    })
}

export function postOffer(params) {
    return userService({
        url: postOfferUrl,
        method: 'POST',
        data: params
    })
}
export function putOffer(params) {
    return userService({
        url: postOfferUrl,
        method: 'PUT',
        data: params
    })
}

// export function postB2BProduct(params)
// {
//     return userService(
//     {
//         url: postB2BProductUrl,
//         method: 'POST',
//         data: params
//     })
// }
// export function putB2BProduct(params)
// {
//     return userService(
//     {
//         url: postB2BProductUrl,
//         method: 'PUT',
//         data: params
//     })
// }
export function postCompany(params) {
    return userService({
        url: postSupplyUrl,
        method: 'POST',
        data: params
    })
}
export function putCompany(params) {
    return userService({
        url: postSupplyUrl,
        method: 'PUT',
        data: params
    })
}

export function getcompany(params) {
    return userService({
        url: params.url,
        method: 'GET',
        params: params
    })
}
export function copyCompany(params) {
    return userService({
        url: copyCompanyUrl,
        method: 'GET',
        params: params
    })
}
export function copyProduct(params) {
    return userService({
        url: copyProductUrl,
        method: 'GET',
        params: params
    })
}
export function copyOffer(params) {
    return userService({
        url: copyOfferUrl,
        method: 'GET',
        params: params
    })
}