const con = require("../database/database")

exports.createDerivatives = (req, res) => {
    let data = {
        POS: req.body.POS,
        OI: req.body.OI,
        LAST: req.body.LAST,
        BID: req.body.BID,
        ASK: req.body.ASK,
        IV: req.body.IV,
        DELTA: req.body.DELTA,
    };
    let sql = "INSERT INTO users SET ?";
    con.query(sql, data, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted", data);
        res.send({ status: true, responsecode: 1, Message: "Data Inserted", Record: data });
    })
};

exports.getDerivatives = (req, res) => {
    let sql = "SELECT * FROM users ";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record get", result);
        res.send({ status: true, responsecode: 1, Message: "Data get", Record: result });
    })
}



exports.getByIdDerivatives = (req, res) => {
    let sql =  "SELECT * FROM users WHERE id ="+ req.params.id
    con.query(sql,function (err, result) {
        if (err) throw err;
        console.log("1 record get", result);
        res.send({ status: true, responsecode: 1, Message: "Data get", Record: result });
    })
}


exports.updateDerivatives = (req, res) => {
    let sql = "UPDATE users SET POS ='" + req.body.POS +
        "',OI='" + req.body.OI +
        "' ,LAST='" + req.body.LAST +
        "',BID='" + req.body.BID +
        "',ASK='" + req.body.ASK +
        "',IV='" + req.body.IV +
        "',DELTA='" + req.body.DELTA +
        "'WHERE id=" + req.body.id;

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record updated", result);
        res.send({ status: true, responsecode: 1, Message: "Data updated" });
    })
}

