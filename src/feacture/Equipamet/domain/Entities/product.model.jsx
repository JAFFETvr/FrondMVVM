export class Product {
  constructor(id = null, name = "", category = "", condition = "") {
    this.id = id;
    this.name = name;
    this.category = category;
    this.condition = condition;
  }
}