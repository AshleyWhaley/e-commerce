// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  through: {
    model: Tag,
  },
  as: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: {
    model: ProductTag,
  },
  as: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Product, {
  through: {
    model: ProductTag,
  },
  as: 'tag_id' 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
