//ctrl+c
//json2ts extention ctrl+ alt + v
export interface Product {
	id: number;
	supplierId: number;
	categoryId: number;
	quantityPerUnit: string;
	unitPrice: number;
	unitsInStock: number;
	unitsOnOrder: number;
	reorderLevel: number;
	discontinued: boolean;
	name: string;
}

// class ProductClass implements Product{
//     id: number;
// 	supplierId: number;
// 	categoryId: number;
// 	quantityPerUnit: string;
// 	unitPrice: number;
// 	unitsInStock: number;
// 	unitsOnOrder: number;
// 	reorderLevel: number;
// 	discontinued: boolean;
// 	name: string;
// }

// var olan objeleri anlamlandırmak
// const response:Product={
//     "id": 1,
//     "supplierId": 1,
//     "categoryId": 1,
//     "quantityPerUnit": "10 boxes x 20 bags",
//     "unitPrice": 18,
//     "unitsInStock": 39,
//     "unitsOnOrder": 0,
//     "reorderLevel": 10,
//     "discontinued": false,
//     "name": "Chai"
// }