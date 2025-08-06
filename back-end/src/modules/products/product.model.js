const db = require("../../database/db");
const logger = require("../../helper/writeLog");

const table = "products";

const create = async (req, res) => {
  try {
    const [result] = await db.query(
      `insert into products (name, description, qty, price, discount_amount, discount_percent, net_price, status, category_id) values (:name, :description, :qty, :price, :discount_amount, :discount_percent, :net_price, :status, :category_id)`,
      {
        ...req.body,
      }
    );
    return result;
  } catch (err) {
    logger.logError({ name: `${table}.create`, message: err });
    return err;
  }
};

const get = async (req, res) => {
  const connection = await db.getConnection();
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const category_id = req.query.category_id || "";

    const offset = (page - 1) * limit;

    // const sql = `SELECT products.* , product_image.name as imageName FROM products left join product_image on products.id = product_image.product_id where products.name like :search and ${
    //   category_id ? "products.category_id = :category_id" : "1=1"
    // } ORDER BY products.id DESC limit :limit offset :offset`;

    const sql = `SELECT * FROM products  where name like :search and ${
      category_id ? "category_id = :category_id" : "1=1"
    } ORDER BY id DESC limit :limit offset :offset`;

    let [data] = await connection.query(sql, {
      search: `%${search}%`,
      limit,
      offset,
      category_id,
    });

    const sqlTotal = `select count(*) as total from products`;
    const [total] = await connection.query(sqlTotal);

    let listProduct = data;
    for (let index = 0; index < data.length; index++) {
      const sqlImage = `select * from product_image where product_id = :product_id`;
      const [result] = await connection.query(sqlImage, {
        product_id: data[index].id,
      });
      listProduct[index].images = result;
    }

    return { status: "success", list: listProduct, total: total[0].total };
  } catch (err) {
    logger.logError({ name: `${table}.get`, message: err });
    return err;
  } finally {
    connection.release();
  }
};

const update = async (req, res) => {
  try {
    const sql = `UPDATE products SET name = :name, description = :description, qty = :qty, price = :price, discount_amount = :discount_amount, discount_percent = :discount_percent, net_price = :net_price, status = :status, category_id = :category_id WHERE id = :id`;

    const [data] = await db.query(sql, { ...req.body });
    return data;
  } catch (err) {
    logger.logError({ name: `${table}.update`, message: err });
    return err;
  }
};

const remove = async (req, res) => {
  try {
    const sql = `delete from products where id = :id`;
    const [data] = await db.query(sql, { id: req.body.id });
    return data;
  } catch (err) {
    logger.logError({ name: `${table}.remove`, message: err });
    return err;
  }
};

const saveImages = async (req, res) => {
  try {
    const images = req.body.images.map((image, index) => {
      return [image, "1", index, req.body.product_id];
    });

    const [data] = await db.query(
      "INSERT INTO product_image (name, status, sort_order, product_id) VALUES ?",
      [images]
    );
    // const [data] = await db.query(sql, { ...req.body });
    return data;
  } catch (err) {
    logger.logError({ name: `${table}.update`, message: err });
    return err;
  }
};

const getProductFromWebSite = async (req, res) => {
  const connection = await db.getConnection();
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const category_id = req.query.category_id || "";

    const sqlCategoryList = `select * from category`;

    function getAllChildIds(data, parentId) {
      const result = [];

      function recurse(currentParentId) {
        data.forEach((item) => {
          if (item.parent_id == currentParentId) {
            result.push(item.id);
            recurse(item.id); // Recursively search for this item's children
          }
        });
      }

      recurse(parentId);
      return result;
    }

    let allChildIds = [];

    if (category_id) {
      const [categoryList] = await connection.query(sqlCategoryList);
      allChildIds = getAllChildIds(categoryList, category_id);
      allChildIds.push(category_id);
    }

    const offset = (page - 1) * limit;

    const sql = `SELECT * FROM products  where name like :search and ${
      category_id ? "category_id IN (:category_id)" : "1=1"
    } ORDER BY id DESC limit :limit offset :offset`;

    let [data] = await connection.query(sql, {
      search: `%${search}%`,
      limit,
      offset,
      category_id: allChildIds.map((id) => id.toString()),
    });

    const sqlTotal = `select count(*) as total from products`;
    const [total] = await connection.query(sqlTotal);

    let listProduct = data;
    for (let index = 0; index < data.length; index++) {
      const sqlImage = `select * from product_image where product_id = :product_id`;
      const [result] = await connection.query(sqlImage, {
        product_id: data[index].id,
      });
      listProduct[index].images = result;
    }

    return { status: "success", list: listProduct, total: total[0].total };
  } catch (err) {
    logger.logError({ name: `${table}.get`, message: err });
    return err;
  } finally {
    connection.release();
  }
};

module.exports = {
  create,
  get,
  update,
  remove,
  saveImages,
  getProductFromWebSite,
};
