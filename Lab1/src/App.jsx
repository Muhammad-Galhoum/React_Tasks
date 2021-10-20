import { List } from "./components/List";

export const App = () => {
  const Plans = [
    { title: "1- Travel to Sharm", desc: "Going to beach - Going to night club - Shopping"},
    { title: "2- Travel To Aswan", desc: "Visiting Abu Simple Temple - River trip - Walking in Streats" },
    { title: "3- Eat fired Chicken", desc: "Going to KFC - Meating friends - Eating together" },
    { title: "4- Eat Ice cream", desc: "Going to Hathout - Meating My Girlfriend - Eating together" }
  ];
  return (
    <div>
      <h1>Plans for next month</h1>
      {Plans.map((plan) => (
        <List title={plan.title} body={plan.desc} />
      ))}
    </div>
  );
};
