const db = require("../../database/db");
const logger = require("../../helper/writeLog");

const table = "category";

const create = async (req, res) => {
  try {
    const sql = `insert into ${table} (name, description, slug, status,  parent_id) values (:name, :description, :slug, :status, :parent_id)`;
    console.log(sql, req.body);
    const [result] = await db.query(sql, {
      ...req.body,
    });
    return result;
  } catch (err) {
    logger.logError({ name: `${table}.create`, message: err });
    return err;
  }
};

const getAll = async (req, res) => {
  try {
    const [data] = await db.query(`select * from ${table}`);
    return { list: data };
  } catch (err) {
    logger.logError({ name: `${table}.getAll`, message: err });
    return err;
  }
};

const get = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    const offset = (page - 1) * limit;

    const [data] = await db.query(
      "SELECT * FROM category where name like :search ORDER BY id DESC limit :limit offset :offset",
      {
        search: `%${search}%`,
        limit,
        offset,
      }
    );

    const sqlTotal = `select count(*) as total from category`;
    const [total] = await db.query(sqlTotal);

    return { status: "success", list: data, total: total[0].total };
  } catch (err) {
    logger.logError({ name: `${table}.get`, message: err });
    return err;
  }
};

const update = async (req, res) => {
  try {
    const sql = `UPDATE ${table} SET name = :name, description = :description, slug = :slug, status = :status, parent_id = :parent_id WHERE id = :id`;
    const [data] = await db.query(sql, { ...req.body });
    return data;
  } catch (err) {
    logger.logError({ name: `${table}.update`, message: err });
    return err;
  }
};

const remove = async (req, res) => {
  try {
    const sql = `delete from ${table} where id = :id`;
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
  getAll,
};
