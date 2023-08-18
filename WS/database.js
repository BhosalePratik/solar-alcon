const mongoose = require('mongoose');
const customerSchema = require('./public/schemas/customerSchema');
mongoose.createConnection('mongodb://localhost/greenDB', { useNewUrlParser: true, useUnifiedTopology: true });

const testModel = mongoose.model('Test', mongoose.Schema(customerSchema), 'customer');

const initialTestData = [
    {
        name: 'Jatin Pawar',
        emailId: 'jatin.pawar@alpine.com',
        password: 'jatin@10001',
        customerId: 10001,
        contactNumber: 9890632153,
        address: {
            street: '6th cross lane',
            locality: 'anand nagar',
            city: 'pune',
            state: 'MH',
            pin: 415562
        }
    },
    {
        name: 'Dhruv Rathod',
        emailId: 'dhruv.rathod@alpine.com',
        password: 'dhruv@10002',
        customerId: 10002,
        contactNumber: 9890639236,
        address: {
            street: '6th upper lane',
            locality: 'songram',
            city: 'jaipur',
            state: 'RJ',
            pin: 125862
        }
    }
];


testModel.insertMany(initialTestData).then(() => {
    console.log('insertion successful');
}).catch((err) => {
    console.error('error while inserting:', err);
});
