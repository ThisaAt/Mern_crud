const { Router } = require('express');
const express = require('express');
const businessRoutes = express.Router();

let Business = require('./business.model');

//store
businessRoutes.route('/add').post(function(req,res){
    console.log(req.body);
    let business = new Business(req.body);
    business.save()
        .then(business=>{
            res.status(200).json({'business':'business is added successfully'});
        })
        .catch(err=>{
            res.status(400).send('unable to save');
        });
});

//getdata
businessRoutes.route('/').get(function(req,res){
    Business.find(function (err,business){
        if(err)
            console.log(err);
        else{
            res.json(business);
        }
    });
});

businessRoutes.route('edit/:id').get(function(req,res){
    let id = req.params.id;
    Business.findById(id, function(err,business){
        res.json(business);
    });
});

businessRoutes.route('/update/:id').post (function(req,res){
    Business.findById(req.params.id, function(err,business){
        if(!business)
            res.status(404).send("data is not found");
        else{
            business.person_name = req.body.person_name;
            business.business_name = req.bosy.business_name;
            business.NIC_number = req.body.NIC_number;

            business.save().then(business => {
                res.json('update Complete');
            })
                .catch(err => {
                    res.status(400).send('unable to update the data base');
                });
        }
    });
});

businessRoutes.route('/delete/:id').get(function(req,res){
    Business.findByIdAndRemove({_id:req.params.id }, function(err,business){
        if(err)res.json(err);
        else res.json('succsessgully removed');
    });
});
module.exports = businessRoutes;

