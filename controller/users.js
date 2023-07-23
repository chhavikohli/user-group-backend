const User = require('../models/user');

/**
 * get all the users list
 * @param req
 * @param res
 * @param next
 */
exports.get = function get(req, res, next) {
    User.find(function (err, user) {
        if (err) throw err;
        return res.send({ success: true, data: user });
    });
};

/**
 * create a new user
 * @param req
 * @param res
 * @param next
 */
exports.post = function (req, res, next) {
    const payload = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        street: req.body.address.street,
        suite: req.body.address.suite,
        city: req.body.address.city,
        zipcode: req.body.address.zipcode,
        lat: req.body.address.geo.lat,
        lng: req.body.address.geo.lng,
        phone: req.body.phone,
        website: req.body.website,
        company_name: req.body.company.name,
        company_catchPhrase: req.body.company.catchPhrase,
        bs: req.body.company.bs,
        status: 'active'
    };

    const user = new User(payload);
    user.save(function (err, usr) {
        if (err) {
            return res.send(
                { success: false, data: '', error:err  }
            )
        };

        return res.send({ success: true, data: usr });
    });
};

/**
 * Get user by id
 * @param req
 * @param res
 * @param next
 */
exports.getById = function get(req, res, next) {
    const payload = req.params.id;
    User.findOne({ _id: payload }, function (err, user) {
        if (user) {
            return res.send({ success: true, user });
        }
        else {
            return res.send({ success: false, error:err });
        }
    });
};

/**
 * update user by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.updateById = async function put(req, res, next) {
    const id = { _id: req.params.id };
    const payload = req.body;
    try{
        const user = await User.findOneAndUpdate(id, payload, {
            new: true
        });
        return res.send({ success: true, user });
    }catch(err){
        return res.send(
            { success: false, data: '', error:err  }
        )
    }
  
};

/**
 * Delete user by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.deleteById = async function del(req, res, next) {
    console.log('in del');
    const id = { _id: req.params.id };
    try{
        await User.deleteOne(id);
        return res.send({ success: true, message: 'User Deleted' });
    }catch(err){
        let message = err;
        return res.send(
            { success: false, data: '', error:message  }
        )
    }
};

