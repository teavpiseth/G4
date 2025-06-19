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
  try {
    const [data] = await db.query("SELECT * FROM products ORDER BY id DESC");
    return data;
  } catch (err) {
    logger.logError({ name: `${table}.get`, message: err });
    return err;
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

module.exports = {
  create,
  get,
  update,
  remove,
};
