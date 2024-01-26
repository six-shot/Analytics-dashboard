export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="bg-[#34CAA5] text-white p-2 rounded-xl">{`${label} : ${payload[0].value}`}</p>
        <div>
          {payload.map((pld) => (
            <div style={{ display: "inline-block", padding: 10 }}>
              <div style={{ color: pld.fill }}>{pld.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};