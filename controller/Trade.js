const con = require("../database/database")

exports.createTrade = (req, res) => {
    let data = {
        TRADETIME: req.body.TRADETIME,
        CONTRACT: req.body.CONTRACT,
        QTY: req.body.QTY,
        PRICE: req.body.PRICE,
    };
    let sql = "INSERT INTO trade SET ?";
    con.query(sql, data, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted", data);
        res.send({ status: true, responsecode: 1, Message: "Data Inserted", Record: data });
    })
};

exports.GetTrade = (req, res) => {
    let sql = "SELECT * FROM trade ";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record get", result);
        res.send({ status: true, responsecode: 1, Message: "Data get", Record: result });
    })
};