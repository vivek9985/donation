import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const myDonations = JSON.parse(localStorage.getItem("donations"));
  let myDonation = 0;
  if (myDonations !== null) {
    myDonation = myDonations.length;
  }
  const total = 12;
  const data = [
    { name: "My Donation", value: total - myDonation },
    { name: "Total Donation", value: myDonation },
  ];

  const COLORS = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <PieChart width={400} height={400}>
          <Pie 
            width={150}
            height={150}
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center mt-5 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <p className="text-[#0b0b0b]">Your Donation</p>
            <div className="w-24 h-[9px] bg-[#00C49F] rounded-sm ml-4"></div>
          </div>
          <div className="flex items-center">
            <p className="text-[#0b0b0b]">Total Donation</p>
            <div className="w-24 h-[9px] bg-[#FF444A] rounded-sm ml-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
