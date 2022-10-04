export default class Product {
    constructor(title = 'New Product Course', price = 9999, description = 'A new description', categoryId = 1, images = ['https://placeimg.com/640/480/any']) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.categoryId = categoryId;
      this.images = images;
    }
    
    getProduct() {
      return {
        title: this.title,
        price: this.price,
        description: this.description,
        images: this.images,
        categoryId: this.categoryId,
      }
    }
  }