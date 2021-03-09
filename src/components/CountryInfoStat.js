function CountryInfoStat(props) {
    const tag = props.tag;
    let data = props.data;

    if (data) {
        if (tag === "Top Level Domain")
            data = data.join(', ');
        else if (tag === "Currencies" || tag === "Languages") {
            data = data.map((d) => d.name);
            data = data.join(', ');
        }
        return (
            <p className="CountryInfoStat">
                <b>{tag}: </b>
                <span>{data}</span>
            </p>
        );
    }
    else
        return null;
}

export default CountryInfoStat;