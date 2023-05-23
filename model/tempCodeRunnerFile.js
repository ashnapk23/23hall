const YourComponent = ({ date }) => {
    // Extract the date portion using JavaScript's toLocaleDateString() method
    const dateOnly = new Date(date).toLocaleDateString();
  
    return (
      <div>
        <p>Date Only: {dateOnly}</p>
      </div>
    );
  };
  
  export default YourComponent;