/**
 * 类似函数重载，类也支持重载
 */

class ProductService {
  getProducts(): void;
  getProducts(id: number): void;
  getProducts(id?: number) {
    if (typeof id === 'number') {
      console.log(`获取id为 ${id} 的产品信息`);
    } else {
      console.log(`获取所有产品的信息`);
    }
  }
}

const productService = new ProductService();
productService.getProducts(6666);
productService.getProducts();