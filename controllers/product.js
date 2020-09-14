const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

const Product = require("../models/product");

const { errorHandler } = require("../helpers/dbErrorHandler");
const { parse } = require("path");
const category = require("../models/category");

exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((error, product) => {
    if (error || !product) {
      return res.status(400).json({
        error: "Product not found",
      });
    }
    req.product = product;
    next();
  });
};

exports.read = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (error, fields, files) => {
    if (error) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    // Checking Product fields
    const { name, description, price, category, quantity, shipping } = fields;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !quantity ||
      !shipping
    ) {
      return res.status(400).json({
        error:
          "All fields  are required: name, description, price, category, quantity, shipping",
      });
    }

    let product = new Product(fields);

    if (files.photo) {
      console.log("Added Files Photo", files.photo);
      if (files.photo.size > 100000) {
        return res.status(400).json({
          error: "Image size is over 1mb",
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((error, result) => {
      if (error) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }

      res.json(result);
    });
  });
};

exports.remove = (req, res) => {
  let product = req.product;
  product.remove((error, deletedProduct) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    res.json({
      deletedProduct,
      message: "Product deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (error, fields, files) => {
    if (error) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    // Checking Product fields
    const { name, description, price, category, quantity, shipping } = fields;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !quantity ||
      !shipping
    ) {
      return res.status(400).json({
        error:
          "All fields  are required: name, description, price, category, quantity, shipping",
      });
    }

    let product = req.product;
    product = _.extend(product, fields);

    if (files.photo) {
      console.log("Added Files Photo", files.photo);
      if (files.photo.size > 100000) {
        return res.status(400).json({
          error: "Image size is over 1mb",
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((error, result) => {
      if (error) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }

      res.json(result);
    });
  });
};

// Sell / arrival

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 7;

  Product.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((error, products) => {
      if (error) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json(products);
    });
};

exports.listReleated = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 7;

  Product.find({ _id: { $ne: req.product }, category: req.product.category })
    .limit(limit)
    .populate("category", "_id name")
    .exec((error, products) => {
      if (error) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json(products);
    });
};

exports.listCategories = (req, res) => {
  Product.distinct("category", {}, (error, categories) => {
    if (error) {
      return res.status(400).json({
        error: "Category not found",
      });
    }
    res.json(categories);
  });
};

// Controllers
exports.listBySearch = (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  // Order, SortBy, limit, skip, req.body.filters

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  Product.find(findArgs)
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((error, data) => {
      if (error) {
        return res.status(400).send(error);
      }

      res.json({
        size: data.length,
        data,
      });
    });
};

exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};
