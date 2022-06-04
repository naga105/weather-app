const Form=(props)=>{
    const handleSubmit=(e)=>{
    e.preventDefault();
    }
    return(
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter City Name" />
                <button type="submit">Submit</button>
                </form>
        
        </div>
    )
}
export default Form;