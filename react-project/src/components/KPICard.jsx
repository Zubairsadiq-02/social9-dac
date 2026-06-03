function KPICard({ title, value, growth }) {
    return (
        <div className="card">

            <h4>{title}</h4>

            <h2>{value}</h2>

            <p className="green">{growth}</p>

        </div>
    );
}

export default KPICard;