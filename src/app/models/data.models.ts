export interface BaseResponse {
    success: boolean,
    message: string,
}

export interface BaseData  {
    _id: string,
    createdAt? : string,
    updatedAt? : string,
    __v? : number
}

export interface Category extends BaseData {
    name: string,
    slug: string,
    thumbnail: string,
    status: boolean
}
export interface CategoryRes extends BaseResponse {
    data: Category[]
}

export interface SubCategory extends BaseData {
    name: string,
    slug: string,
    thumbnail: string,
    category: Category,
    categoryName: string,
    status: boolean
}

export interface SubCategoryRes extends BaseResponse {
    data: SubCategory[]
}

export interface Product extends BaseData {
    category: Category,
    color: [],
    images: [],
    metaDescription: string,
    metaKeyword: string,
    metaTitle: string,
    minQty: number,
    productDescription: string,
    productDiscount: number
    productDiscountType:  null | 'percent' | 'flat',
    productPrice: number,
    shippingCost: number,
    shippingType: 'flat' | 'percent' | 'free',
    size: string[],
    slug: string,
    status:boolean,
    subcategory: SubCategory,
    thumbnailPrimary: string,
    thumbnailSecondary: string,
    title : string,
}


export interface Color extends BaseData {
    label : string,
    value : string,
    colorHex : string,
}

export interface Size extends BaseData {
    label : string,
    value : string,
}

export interface ColorRes extends BaseResponse{
    data : Color[]
}

export interface SizeRes extends BaseResponse{
    data : Size[]
}