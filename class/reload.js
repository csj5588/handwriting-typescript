/**
 * 类似函数重载，类也支持重载
 */
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function (id) {
        if (typeof id === 'number') {
            console.log("\u83B7\u53D6id\u4E3A " + id + " \u7684\u4EA7\u54C1\u4FE1\u606F");
        }
        else {
            console.log("\u83B7\u53D6\u6240\u6709\u4EA7\u54C1\u7684\u4FE1\u606F");
        }
    };
    return ProductService;
}());
var productService = new ProductService();
productService.getProducts(6666);
productService.getProducts();
