"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllProduct: 'SELECT * FROM Products',
  c: "INSERT INTO Products(name,description,quantity,status) VALUES(@name,@description,@quantity,@status)",
  getProductById: 'SELECT * FROM Products WHERE Id = @Id',
  deleteProduct: 'DELETE  FROM Products WHERE Id = @Id',
  getTotalProducts: 'SELECT COUNT(*) FROM Products',
  updateProductById: 'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id'
};
exports.queries = queries;