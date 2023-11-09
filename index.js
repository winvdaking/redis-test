const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
    auth: {
        user: 'root',
        pass: 'root'
    }
});

// couch.get("maalsi", "7f103901f2135c72dea9d3739700088f").then(({ data, headers, status }) => {
//     console.log(data);
// }, err => {
//     console.error(err);
// });

// couch.update("salles", {
//     _id: "7f103901f2135c72dea9d3739700465d",
//     _rev: "1-4a4c0bd558f9443eacb41270fc2d71de",
//     numero: 1,
//     etage: 0,
//     nbPlaces: 2
// }).then(({ data, headers, status }) => {
//     console.log(data);
// }, err => {
//     console.error(err);
// });

couch.get("salles", "7f103901f2135c72dea9d3739700465d?revs_info=true").then(({ data, headers, status }) => {
    console.log(data);
}, err => {
    console.error(err);
});
