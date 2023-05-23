const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    hallid: {
        type: ObjectId,
        required: true
    },
    date: {       
            type: Date,
            required:true
    },
    starttime: {
        type: Date,
        required: true
    },
    endtime: {
        type: Date,
        required: true
    }
});
// const YourComponent = ({ date }) => {
//     // Extract the date portion using JavaScript's toLocaleDateString() method
//     const dateOnly = new Date(date).toLocaleDateString();
  
//     return (
//       <div>
//         <p>Date Only: {dateOnly}</p>
//       </div>
//     );
//   };
  
//   export default YourComponent;

module.exports = mongoose.model('Booking', bookingSchema);