import { rest } from "msw";
//scoops and toppings
export const handlers = [
  rest.get("http://localhost:3030/:optionID", (req, res: any, ctx) => {
    const { optionID } = req.params;
    if (optionID === "scoops") {
      return res(
        ctx.json([
          { name: "Chocolate", imagePath: "/images/chocolate.png" },
          { name: "Vanilla", imagePath: "/images/vanilla.png" },
        ])
      );
    } else if (optionID === "toppings") {
      return res(
        ctx.json([
          { name: "Cherries", imagePath: "/images/cherries.png" },
          { name: "M&M's", imagePath: "/images/m-and-ms.png" },
          { name: "Hot fudge", imagePath: "/images/hot-fudge.png" },
        ])
      );
    }
  }),
];
