export const queries = {
    getAllProduct: 'SELECT * FROM Products',
    addNewProduct:"INSERT INTO Products(name,description,quantity) VALUES(@name,@description,@quantity)",
    getProductById: 'SELECT * FROM Products WHERE Id = @Id',
    deleteProduct: 'DELETE  FROM Products WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) FROM Products',
    updateProductById: 'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id'
}