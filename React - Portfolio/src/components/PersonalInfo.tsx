interface Props{
    portfolioName: string;
    portfolioDOB: string;
    portfolioAddress: string;
    portfolioPhone: string;
    portfolioEmail: string;
}

function PersonalInfo ({portfolioName, portfolioDOB, portfolioAddress, portfolioPhone, portfolioEmail}: Props){
    return(
        <div>
            <h2>Name: {portfolioName}</h2>
            <h3>Date of Birth: {portfolioDOB}</h3>
            <p>Address: {portfolioAddress}</p>
            <p>Phone Number: {portfolioPhone}</p>
            <p>Email: {portfolioEmail}</p>
        </div>
    )
}

export default PersonalInfo;